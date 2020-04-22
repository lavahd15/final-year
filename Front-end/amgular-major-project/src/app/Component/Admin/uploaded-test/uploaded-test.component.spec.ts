import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadedTestComponent } from './uploaded-test.component';

describe('UploadedTestComponent', () => {
  let component: UploadedTestComponent;
  let fixture: ComponentFixture<UploadedTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadedTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadedTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
