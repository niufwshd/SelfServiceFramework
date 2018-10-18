import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/takeWhile';
import 'rxjs/add/operator/do';
import { NzBackTopComponent } from 'ng-zorro-antd';
import { GalleryItem, ImageItem } from '@ngx-gallery/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  // max     = 1;
  // current = 0;

  // start() {
  //   const interval = Observable.interval(100);
    
  //   interval
  //     .takeWhile(_ => !this.isFinished )
  //     .do(i => this.current += 0.1)
  //     .subscribe();
  // }

  //  /// finish timer
  // finish() {
  //   this.current = this.max;
  // }

  // /// reset timer
  // reset() {
  //   this.current = 0;
  // }


  /// Getters to prevent NaN errors

  // get maxVal() {
  //   return isNaN(this.max) || this.max < 0.1 ? 0.1 : this.max;
  // }

  // get currentVal() {
  //   return isNaN(this.current) || this.current < 0 ? 0 : this.current;
  // }

  // get isFinished() {
  //   return this.currentVal >= this.maxVal;
  // }

  images: GalleryItem[];
  ngOnInit() {
  this.images = [
    new ImageItem({ src: 'https://pixabay.com/get/ef36b50a2ff61c3e815f4305e74a448be272e1dc1bb5164591f0_960.jpg', thumb: 'https://cdn.pixabay.com/photo/2015/02/13/00/43/apples-634572_150.jpg' }),
    new ImageItem({ src: 'https://pixabay.com/get/ef36b50a2ff61c3e815f4305e74a448be272e1dc1bb5164591f0_960.jpg', thumb: 'https://cdn.pixabay.com/photo/2015/02/13/00/43/apples-634572_150.jpg' }),
    new ImageItem({ src: 'https://pixabay.com/get/ef36b50a2ff61c3e815f4305e74a448be272e1dc1bb5164591f0_960.jpg', thumb: 'https://cdn.pixabay.com/photo/2015/02/13/00/43/apples-634572_150.jpg' }),
    
    // ... more items
  ];
}
   
}
