import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NzDemoPaginationBasicComponent } from './nz-demo-pagination-basic.component';

describe('NzDemoPaginationBasicComponent', () => {
  let component: NzDemoPaginationBasicComponent;
  let fixture: ComponentFixture<NzDemoPaginationBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NzDemoPaginationBasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NzDemoPaginationBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
