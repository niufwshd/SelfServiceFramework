import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NzDemoTableBasicComponent } from './nz-demo-table-basic.component';

describe('NzDemoTableBasicComponent', () => {
  let component: NzDemoTableBasicComponent;
  let fixture: ComponentFixture<NzDemoTableBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NzDemoTableBasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NzDemoTableBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
