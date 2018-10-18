import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NzDemoCardMetaComponent } from './nz-demo-card-meta.component';

describe('NzDemoCardMetaComponent', () => {
  let component: NzDemoCardMetaComponent;
  let fixture: ComponentFixture<NzDemoCardMetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NzDemoCardMetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NzDemoCardMetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
