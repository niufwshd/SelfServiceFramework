import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NzDemoDrawerFromDrawerComponent } from './nz-demo-drawer-from-drawer.component';

describe('NzDemoDrawerFromDrawerComponent', () => {
  let component: NzDemoDrawerFromDrawerComponent;
  let fixture: ComponentFixture<NzDemoDrawerFromDrawerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NzDemoDrawerFromDrawerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NzDemoDrawerFromDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
