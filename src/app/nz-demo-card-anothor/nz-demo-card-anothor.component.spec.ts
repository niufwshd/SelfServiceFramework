import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NzDemoCardAnothorComponent } from './nz-demo-card-anothor.component';

describe('NzDemoCardAnothorComponent', () => {
  let component: NzDemoCardAnothorComponent;
  let fixture: ComponentFixture<NzDemoCardAnothorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NzDemoCardAnothorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NzDemoCardAnothorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
