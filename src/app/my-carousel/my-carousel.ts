import {
    AfterContentChecked,
    AfterContentInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ContentChildren,
    Directive,
    EventEmitter,
    Inject,
    Input,
    NgZone,
    OnChanges,
    OnDestroy,
    Output,
    PLATFORM_ID,
    QueryList,
    TemplateRef,
    ElementRef,
    ViewChild,
    Host
  } from '@angular/core';
  import {isPlatformBrowser} from '@angular/common';
  
  import {MyCarouselConfig} from './my-carousel-config';
  
  import {Subject, timer} from 'rxjs';
  import {filter, map, switchMap, takeUntil, skipWhile} from 'rxjs/operators';
  import {async} from 'async';
  import { hostElement } from '@angular/core/src/render3/instructions';
  import { _sanitizeHtml } from '@angular/core/src/sanitization/html_sanitizer';
  
  let nextId = 0;
  
  /**
   * Represents an individual slide to be used within a carousel.
   */
  @Directive({selector: 'ng-template[MySlide]'})
  export class MySlide {
    /**
     * Unique slide identifier. Must be unique for the entire document for proper accessibility support.
     * Will be auto-generated if not provided.
     */
    @Input() id = `ngb-slide-${nextId++}`;
    constructor(public tplRef: TemplateRef<any>) {}
  }
  
  /**
   * Directive to easily create carousels based on Bootstrap's markup.
   */
  @Component({
    selector: 'my-carousel',
    exportAs: 'myCarousel',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
      'class': 'carousel slide',
      '[style.display]': '"block"',
      'tabIndex': '0',
      '(mouseenter)': 'pauseOnHover && pause()',
      '(mouseleave)': 'pauseOnHover && cycle()',
      '(keydown.arrowLeft)': 'keyboard && prev()',
      '(keydown.arrowRight)': 'keyboard && next()'
    },
    template: `
      <ol class="carousel-indicators" *ngIf="showNavigationIndicators">
        <li *ngFor="let slide of slides" [id]="slide.id" [class.active]="slide.id === activeId"
            (click)="select(slide.id); pauseOnHover && pause()"></li>
      </ol>
      <div class="carousel-inner">
        <div *ngFor="let slide of slides" class="carousel-item" [class.active]="slide.id === activeId">
          <ng-template [ngTemplateOutlet]="slide.tplRef"></ng-template>
        </div>
      </div>
      <a class="carousel-control-prev" role="button" (click)="prev()" *ngIf="showNavigationArrows">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only" i18n="@@ngb.carousel.previous">Previous</span>
      </a>
      <a class="carousel-control-next" role="button" (click)="next()" *ngIf="showNavigationArrows">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only" i18n="@@ngb.carousel.next">Next</span>
      </a>
    `
  })
  export class MyCarousel implements AfterContentChecked,
      AfterContentInit, OnChanges, OnDestroy {
    @ContentChildren(MySlide) slides: QueryList<MySlide>;
    private _start$ = new Subject<void>();
    private _stop$ = new Subject<void>();
    private isPlaying = false;
  
    /**
     * The active slide id.
     */
    @Input() activeId: string;
  
  
    /**
     * Amount of time in milliseconds before next slide is shown.
     */
    @Input() interval: number;
  
    /**
     * Whether can wrap from the last to the first slide.
     */
    @Input() wrap: boolean;
  
    /**
     * A flag for allowing navigation via keyboard
     */
    @Input() keyboard: boolean;
  
    /**
     * A flag to enable slide cycling pause/resume on mouseover.
     * @since 2.2.0
     */
    @Input() pauseOnHover: boolean;
  
    /**
     * A flag to show / hide navigation arrows.
     * @since 2.2.0
     */
    @Input() showNavigationArrows: boolean;
  
    /**
     * A flag to show / hide navigation indicators.
     * @since 2.2.0
     */
    @Input() showNavigationIndicators: boolean;
  
    /**
     * A carousel slide event fired when the slide transition is completed.
     * See MySlideEvent for payload details
     */
    @Output() slide = new EventEmitter<MySlideEvent>();
  
    constructor(
        config: MyCarouselConfig, @Inject(PLATFORM_ID) private _platformId, private _ngZone: NgZone,
        private _cd: ChangeDetectorRef, private element: ElementRef) {
      this.interval = config.interval;
      this.wrap = config.wrap;
      this.keyboard = config.keyboard;
      this.pauseOnHover = config.pauseOnHover;
      this.showNavigationArrows = config.showNavigationArrows;
      this.showNavigationIndicators = config.showNavigationIndicators;
    }
  
    ngAfterContentInit() {
      // setInterval() doesn't play well with SSR and protractor,
      // so we should run it in the browser and outside Angular
      if (isPlatformBrowser(this._platformId)) {
        this._ngZone.runOutsideAngular(() => {
          this._start$
              .pipe(
                  map(()=>this.refreshInterval()), filter(interval => interval >= 0 && this.slides.length > 0),
                  switchMap(interval => timer(interval).pipe(takeUntil(this._stop$))))
              .subscribe(() => this._ngZone.run(() => {
                this.next();
                this._cd.detectChanges();
              }));
  
          this._start$.next();
        });
      }
    }
  
    ngAfterContentChecked() {
      let activeSlide = this._getSlideById(this.activeId);
      this.activeId = activeSlide ? activeSlide.id : (this.slides.length ? this.slides.first.id : null);
    }
  
    ngOnDestroy() { this._stop$.next(); }
  
    ngOnChanges(changes) {
      if ('interval' in changes && !changes['interval'].isFirstChange()) {
        this._start$.next();
      }
    }
  
    /**
     * Navigate to a slide with the specified identifier.
     */
    select(slideId: string) { this._cycleToSelected(slideId, this._getSlideEventDirection(this.activeId, slideId)); }
  
    /**
     * Navigate to the next slide.
     */
    prev() { this._cycleToSelected(this._getPrevSlide(this.activeId), MySlideEventDirection.RIGHT); }
  
    /**
     * Navigate to the next slide.
     */
    next() { this._cycleToSelected(this._getNextSlide(this.activeId), MySlideEventDirection.LEFT); }
  
    /**
     * Stops the carousel from cycling through items.
     */
    pause() { this._stop$.next(); }
  
    /**
     * Restarts cycling through the carousel slides from left to right.
     */
    cycle() { this._start$.next(); }

    /**
     * change interval
    */
    refreshInterval():number
    {
        if( this.isPlaying ){
          this.isPlaying = false;
          return 0;
        } else {
          
            return this.interval;
        } 
    }
  
    private _cycleToSelected(slideIdx: string, direction: MySlideEventDirection) {
      let selectedSlide = this._getSlideById(slideIdx);
      // 判断是否是video
      let end = false;
      let activeItem = this.element.nativeElement.querySelectorAll('.carousel-item').item(Number(slideIdx.substr(10)));
      console.log(slideIdx.substr(10));
      if (activeItem != null && activeItem.childNodes.length > 1) {
         let  child = activeItem.childNodes[1];
         if (child.tagName === 'VIDEO') {
           if (selectedSlide && selectedSlide.id !== this.activeId) {
            this.slide.emit({prev: this.activeId, current: selectedSlide.id, direction: direction});
            this._start$.next();
            this.activeId = selectedSlide.id;
           }
           this.pause();
          child.addEventListener('ended', function() {
               end = true;
          });
          child.play();
          this.isPlaying = true;
  
         let t = setInterval(() => {
             if (end) {
                this.cycle();
                clearInterval(t);
              }
          }, 100);
        } else {
            if (selectedSlide && selectedSlide.id !== this.activeId) {
              this.slide.emit({prev: this.activeId, current: selectedSlide.id, direction: direction});
              this._start$.next();
              this.activeId = selectedSlide.id;
            }
        }
       }
    }
  
    private _getSlideEventDirection(currentActiveSlideId: string, nextActiveSlideId: string): MySlideEventDirection {
      const currentActiveSlideIdx = this._getSlideIdxById(currentActiveSlideId);
      const nextActiveSlideIdx = this._getSlideIdxById(nextActiveSlideId);
  
      return currentActiveSlideIdx > nextActiveSlideIdx ? MySlideEventDirection.RIGHT : MySlideEventDirection.LEFT;
    }
  
    private _getSlideById(slideId: string): MySlide { return this.slides.find(slide => slide.id === slideId); }
  
    private _getSlideIdxById(slideId: string): number {
      return this.slides.toArray().indexOf(this._getSlideById(slideId));
    }
  
    private _getNextSlide(currentSlideId: string): string {
      const slideArr = this.slides.toArray();
      const currentSlideIdx = this._getSlideIdxById(currentSlideId);
      const isLastSlide = currentSlideIdx === slideArr.length - 1;
  
      return isLastSlide ? (this.wrap ? slideArr[0].id : slideArr[slideArr.length - 1].id) :
                           slideArr[currentSlideIdx + 1].id;
    }
  
    private _getPrevSlide(currentSlideId: string): string {
      const slideArr = this.slides.toArray();
      const currentSlideIdx = this._getSlideIdxById(currentSlideId);
      const isFirstSlide = currentSlideIdx === 0;
  
      return isFirstSlide ? (this.wrap ? slideArr[slideArr.length - 1].id : slideArr[0].id) :
                            slideArr[currentSlideIdx - 1].id;
    }
  }
  
  /**
   * The payload of the slide event fired when the slide transition is completed
   */
  export interface MySlideEvent {
    /**
     * Previous slide id
     */
    prev: string;
  
    /**
     * New slide ids
     */
    current: string;
  
    /**
     * Slide event direction
     */
    direction: MySlideEventDirection;
  }
  
  /**
   * Enum to define the carousel slide event direction
   */
  export enum MySlideEventDirection {
    LEFT = <any>'left',
    RIGHT = <any>'right'
  }
  
  export const MY_CAROUSEL_DIRECTIVES = [MyCarousel, MySlide];
  