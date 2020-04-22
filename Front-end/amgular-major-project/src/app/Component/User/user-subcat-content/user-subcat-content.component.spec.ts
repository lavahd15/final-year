import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSubcatContentComponent } from './user-subcat-content.component';

describe('UserSubcatContentComponent', () => {
  let component: UserSubcatContentComponent;
  let fixture: ComponentFixture<UserSubcatContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSubcatContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSubcatContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
