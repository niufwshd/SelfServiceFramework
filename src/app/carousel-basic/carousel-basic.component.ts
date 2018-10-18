import { Component, OnInit,ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { MyCarouselConfig } from '../my-carousel/my-carousel-config';
import { MyCarousel } from '../my-carousel/my-carousel.module';

@Component({
  selector: 'app-carousel-basic',
  templateUrl: './carousel-basic.component.html',
  styleUrls: ['./carousel-basic.component.scss']
})
export class CarouselBasicComponent implements OnInit,AfterViewInit {
   @ViewChild("carousel") mycarousel : MyCarousel;
  images = [ 'http://www.shyhotels.com/UploadImage/Advertising/20180404161428414.jpg', 'http://www.shyhotels.com/UploadImage/Advertising/20180404154558987.png','http://www.shyhotels.com/UploadImage/Advertising/20180125132714573.jpg'];

  //images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
  constructor(config: MyCarouselConfig,private element:ElementRef) { 
    config.showNavigationArrows = false;
    config.pauseOnHover = false;
    config.keyboard = false;
  }

  ngOnInit() {
       
  }

  ngAfterViewInit()
  { 
      //
   
  }
  public onSlide(slideData) {
    var elem = this.element.nativeElement.querySelector(".carousel-item.active");
    if(elem.firstChild.nextSibling.tagName == "VIDEO")
    {
        //console.log(this.mycarousel);
        //this.mycarousel.cycle();
        //this.mycarousel.select(this.mycarousel.activeId);
        //this.mycarousel.pause();
    }
    else
    {
      //this.mycarousel.cycle();
    }
    
    }
}
