import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NzDemoLayoutSideComponent } from './nz-demo-layout-side.component';

describe('NzDemoLayoutSideComponent', () => {
  let component: NzDemoLayoutSideComponent;
  let fixture: ComponentFixture<NzDemoLayoutSideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NzDemoLayoutSideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NzDemoLayoutSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
