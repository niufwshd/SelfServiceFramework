import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nz-demo-steps-simple',
  template:`
  <nz-steps>
    <nz-step nzTitle="Finished" nzDescription="This is a description."></nz-step>
    <nz-step nzTitle="In Progress" nzDescription="This is a description."></nz-step>
    <nz-step nzTitle="Waiting" nzDescription="This is a description."></nz-step>
  </nz-steps>
`,
  styleUrls: ['./nz-demo-steps-simple.component.scss']
})
export class NzDemoStepsSimpleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
