import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nz-demo-menu-horizontal',
  template:`
  <ul nz-menu [nzMode]="'horizontal'">
    <li nz-menu-item><i class="anticon anticon-mail"></i> Navigation One</li>
    <li nz-menu-item nzDisabled><i class="anticon anticon-appstore"></i> Navigation Two</li>
    <li nz-submenu>
      <span title><i class="anticon anticon-setting"></i> Navigation Three - Submenu</span>
      <ul>
        <li nz-menu-group>
          <span title>Item 1</span>
          <ul>
            <li nz-menu-item>Option 1</li>
            <li nz-menu-item>Option 2</li>
          </ul>
        </li>
        <li nz-menu-group>
          <span title>Item 2</span>
          <ul>
            <li nz-menu-item>Option 3</li>
            <li nz-menu-item>Option 4</li>
            <li nz-submenu>
              <span title>Sub Menu</span>
              <ul>
                <li nz-menu-item nzDisabled>Option 5</li>
                <li nz-menu-item>Option 6</li>
              </ul>
            </li>
            <li nz-submenu nzDisabled>
              <span title>Disabled Sub Menu</span>
              <ul>
                <li nz-menu-item>Option 5</li>
                <li nz-menu-item>Option 6</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </li>
    <li nz-menu-item>
      <a href="https://ng.ant.design" target="_blank" rel="noopener noreferrer">Navigation Four - Link</a>
    </li>
  </ul>`
  
})
export class NzDemoMenuHorizontalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
