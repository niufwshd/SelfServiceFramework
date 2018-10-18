import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nz-demo-card-anothor',
  template: `
  <nz-card [nzHoverable]="true" [nzCover]="coverTemplate">
      <nz-card-meta nzTitle="" nzDescription=""></nz-card-meta>
    </nz-card>
    <ng-template #coverTemplate>
      <img alt="example" src="assets/img/u14.JPEG"/>
    </ng-template>
`
})
export class NzDemoCardAnothorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
