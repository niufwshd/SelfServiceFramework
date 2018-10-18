import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NzDemoListLoadmoreComponent } from './nz-demo-list-loadmore.component';

describe('NzDemoListLoadmoreComponent', () => {
  let component: NzDemoListLoadmoreComponent;
  let fixture: ComponentFixture<NzDemoListLoadmoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NzDemoListLoadmoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NzDemoListLoadmoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
