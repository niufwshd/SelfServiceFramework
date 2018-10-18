import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NzDemoDividerComponent } from './nz-demo-divider.component';

describe('NzDemoDividerComponent', () => {
  let component: NzDemoDividerComponent;
  let fixture: ComponentFixture<NzDemoDividerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NzDemoDividerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NzDemoDividerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
