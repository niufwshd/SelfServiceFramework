import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MY_CAROUSEL_DIRECTIVES} from './my-carousel';

export {MyCarousel, MySlide, MySlideEvent} from './my-carousel';
export {MyCarouselConfig} from './my-carousel-config';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})

@NgModule({declarations: MY_CAROUSEL_DIRECTIVES, exports: MY_CAROUSEL_DIRECTIVES, imports: [CommonModule]})
export class MyCarouselModule {
  static forRoot(): ModuleWithProviders { return {ngModule: MyCarouselModule}; }
 }
