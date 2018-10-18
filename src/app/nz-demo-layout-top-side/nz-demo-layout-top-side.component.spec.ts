import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NzDemoLayoutTopSideComponent } from './nz-demo-layout-top-side.component';

describe('NzDemoLayoutTopSideComponent', () => {
  let component: NzDemoLayoutTopSideComponent;
  let fixture: ComponentFixture<NzDemoLayoutTopSideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NzDemoLayoutTopSideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NzDemoLayoutTopSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
