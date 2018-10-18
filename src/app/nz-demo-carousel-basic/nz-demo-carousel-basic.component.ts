import { Component, ElementRef, ViewChild,ViewChildren,
  Renderer2, OnInit, QueryList, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-nz-demo-carousel-basic',
  template: `
    <nz-carousel [nzAutoPlay]="true" style="height:500px" (nzBeforeChange)="beforechange">
      <div nz-carousel-content *ngFor="let index of array">
      <img src= "{{index}}" />
      </div>
      <div nz-carousel-content> <video  width="1200" height="500" src="http://www.shyhotels.com/1.mp4" controls="controls"></video></div>
    </nz-carousel>`
})
export class NzDemoCarouselBasicComponent implements AfterViewInit{
  array = [ 'http://www.shyhotels.com/UploadImage/Advertising/20180404161428414.jpg', 'http://www.shyhotels.com/UploadImage/Advertising/20180404154558987.png','http://www.shyhotels.com/UploadImage/Advertising/20180125132714573.jpg'];

   
   constructor(private render:Renderer2,private element:ElementRef){}
   ngAfterViewInit()
   {
      //  let num:number = 0;
      //  var activeElm = this.element.nativeElement.querySelector(".slick-slide.slick-active");
      //  var firstChild = activeElm.firstChild;
      //  console.log(firstChild.tagName);
      //  if(<string>(firstChild.tagName) == "IMG")
      //  {
      //     console.log("img");
      //  }
      //  else {
      //      if(firstChild.paused)
      //      {
      //        console.log("paused");
      //      }
      //      else
      //      {
      //        console.log("playing");
      //      }
      //  }

       
           
   }


  beforechange(from:number,to:number)
  {
    // var activeElm = this.element.nativeElement.querySelector(".slick-slide.slick-active");
    // var firstChild = activeElm.firstChild;
    // console.log(firstChild.tagName);
    // if(<string>(firstChild.tagName) == "IMG")
    // {
        console.log("img");
    // }
    // else {
    //     if(firstChild.paused)
    //     {
    //       console.log("paused");
    //     }
    //     else
    //     {
    //       console.log("playing");
    //     }
    // }
  }

}