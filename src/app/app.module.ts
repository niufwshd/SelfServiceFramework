import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms'; // <-- here
//import { RoundProgressModule } from 'angular-svg-round-progressbar';
//import {TranslateModule, TranslateLoader, TranslateStaticLoader, TranslateService} from 'ng2-translate';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { NzDemoButtonBasicComponent } from './nz-demo-button-basic/nz-demo-button-basic.component'; // <-- here
import { Routes, RouterModule } from '@angular/router';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { NzDemoCarouselBasicComponent } from './nz-demo-carousel-basic/nz-demo-carousel-basic.component';
import { NzDemoMenuHorizontalComponent } from './nz-demo-menu-horizontal/nz-demo-menu-horizontal.component';
import { NzDemoDrawerFromDrawerComponent } from './nz-demo-drawer-from-drawer/nz-demo-drawer-from-drawer.component';
import { NzDemoStepsSimpleComponent } from './nz-demo-steps-simple/nz-demo-steps-simple.component';
import { NzDemoListLoadmoreComponent } from './nz-demo-list-loadmore/nz-demo-list-loadmore.component';
import { HttpClientModule } from '@angular/common/http';
import { NzDemoLayoutBasicComponent } from './nz-demo-layout-basic/nz-demo-layout-basic.component';
import { NzDemoLayoutTopSideComponent } from './nz-demo-layout-top-side/nz-demo-layout-top-side.component';
import { NzDemoLayoutSideComponent } from './nz-demo-layout-side/nz-demo-layout-side.component';
import { NzDemoPaginationBasicComponent } from './nz-demo-pagination-basic/nz-demo-pagination-basic.component';
import { NzDemoCardMetaComponent } from './nz-demo-card-meta/nz-demo-card-meta.component';
import { NzDemoCardAnothorComponent } from './nz-demo-card-anothor/nz-demo-card-anothor.component';
import { NzDemoUploadComponent } from './nz-demo-upload/nz-demo-upload.component';
import { NzDemoDividerComponent } from './nz-demo-divider/nz-demo-divider.component';
registerLocaleData(zh);
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CarouselBasicComponent } from './carousel-basic/carousel-basic.component';
import { MyCarouselModule } from './my-carousel/my-carousel.module';
import { NzDemoTableBasicComponent } from './nz-demo-table-basic/nz-demo-table-basic.component';
import { GalleryModule } from  '@ngx-gallery/core';


@NgModule({
  declarations: [
    AppComponent,
    NzDemoButtonBasicComponent,
    NzDemoCarouselBasicComponent,
    NzDemoMenuHorizontalComponent,
    NzDemoDrawerFromDrawerComponent,
    NzDemoStepsSimpleComponent,
    NzDemoListLoadmoreComponent,
    NzDemoLayoutBasicComponent,
    NzDemoLayoutTopSideComponent,
    NzDemoLayoutSideComponent,
    NzDemoPaginationBasicComponent,
    NzDemoCardMetaComponent,
    NzDemoCardAnothorComponent,
    NzDemoUploadComponent,
    NzDemoDividerComponent,
    CarouselBasicComponent,
    NzDemoTableBasicComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule, // <-- here
    RouterModule,
    //RoundProgressModule, // <-- and here
    NgZorroAntdModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    MyCarouselModule.forRoot(),
    GalleryModule.forRoot()
    
  ],
  bootstrap: [AppComponent],
   /** 配置 ng-zorro-antd 国际化 **/
   providers   : [ { provide: NZ_I18N, useValue: zh_CN } ]
})
export class AppModule { }
