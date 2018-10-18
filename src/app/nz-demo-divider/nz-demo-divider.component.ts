import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nz-demo-divider',
  template: `
  <div>Text
    <nz-divider nzType="vertical"></nz-divider>
    <a href="#">Link</a>
    <nz-divider nzType="vertical"></nz-divider>
    <a href="#">Link</a>
  </div>
`
})
export class NzDemoDividerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
