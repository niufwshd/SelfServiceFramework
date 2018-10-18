import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NzDemoMenuHorizontalComponent } from './nz-demo-menu-horizontal.component';

describe('NzDemoMenuHorizontalComponent', () => {
  let component: NzDemoMenuHorizontalComponent;
  let fixture: ComponentFixture<NzDemoMenuHorizontalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NzDemoMenuHorizontalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NzDemoMenuHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
