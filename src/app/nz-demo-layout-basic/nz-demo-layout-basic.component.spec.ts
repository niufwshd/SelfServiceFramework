import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NzDemoLayoutBasicComponent } from './nz-demo-layout-basic.component';

describe('NzDemoLayoutBasicComponent', () => {
  let component: NzDemoLayoutBasicComponent;
  let fixture: ComponentFixture<NzDemoLayoutBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NzDemoLayoutBasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NzDemoLayoutBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
