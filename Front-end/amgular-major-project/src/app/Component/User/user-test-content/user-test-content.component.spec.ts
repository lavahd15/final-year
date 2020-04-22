import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTestContentComponent } from './user-test-content.component';

describe('UserTestContentComponent', () => {
  let component: UserTestContentComponent;
  let fixture: ComponentFixture<UserTestContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserTestContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTestContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
