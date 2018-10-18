import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NzDemoStepsSimpleComponent } from './nz-demo-steps-simple.component';

describe('NzDemoStepsSimpleComponent', () => {
  let component: NzDemoStepsSimpleComponent;
  let fixture: ComponentFixture<NzDemoStepsSimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NzDemoStepsSimpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NzDemoStepsSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
