import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nz-demo-card-meta',
  template: `
  <nz-card [nzHoverable]="true" [nzCover]="coverTemplate">
      <nz-card-meta nzTitle="华夏盛世聚焦打造世界级大健康产业高地" nzDescription="2017年11月25日，由中国医药工业信息中心主办的“2017年中国医药健康产业发展峰会”暨“药分享”三周年大会在秦皇岛市北戴河新区召开。"></nz-card-meta>
    </nz-card>
    <ng-template #coverTemplate>
      <img style=":hover {}" alt="example" src="assets/img/u51.jpg"/>
    </ng-template>
`,
styles:[`
     :host ::ng-deep [ng-card] div img:hover
     {
      width:100%;
      height:100%;
      position:absolute;
      left:0;
      top:0;
      background:rgba(255,255,255,.4);
      z-index: 9;
     }
`]


})
export class NzDemoCardMetaComponent implements OnInit {

  index1 = 0;
  index2 = 0;
  constructor() { }

  ngOnInit() {
  }

}
