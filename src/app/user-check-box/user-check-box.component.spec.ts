import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCheckBoxComponent } from './user-check-box.component';

describe('UserCheckBoxComponent', () => {
  let component: UserCheckBoxComponent;
  let fixture: ComponentFixture<UserCheckBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCheckBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCheckBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
