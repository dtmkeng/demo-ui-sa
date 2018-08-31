import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordValidComponent } from './password-valid.component';

describe('PasswordValidComponent', () => {
  let component: PasswordValidComponent;
  let fixture: ComponentFixture<PasswordValidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswordValidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordValidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
