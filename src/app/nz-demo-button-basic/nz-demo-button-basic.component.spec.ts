import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NzDemoButtonBasicComponent } from './nz-demo-button-basic.component';

describe('NzDemoButtonBasicComponent', () => {
  let component: NzDemoButtonBasicComponent;
  let fixture: ComponentFixture<NzDemoButtonBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NzDemoButtonBasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NzDemoButtonBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
