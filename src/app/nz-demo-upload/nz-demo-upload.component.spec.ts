import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NzDemoUploadComponent } from './nz-demo-upload.component';

describe('NzDemoUploadComponent', () => {
  let component: NzDemoUploadComponent;
  let fixture: ComponentFixture<NzDemoUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NzDemoUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NzDemoUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
