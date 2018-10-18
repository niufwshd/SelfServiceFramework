import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NzDemoCarouselBasicComponent } from './nz-demo-carousel-basic.component';

describe('NzDemoCarouselBasicComponent', () => {
  let component: NzDemoCarouselBasicComponent;
  let fixture: ComponentFixture<NzDemoCarouselBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NzDemoCarouselBasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NzDemoCarouselBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
