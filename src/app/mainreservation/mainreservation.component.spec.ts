import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainreservationComponent } from './mainreservation.component';

describe('MainreservationComponent', () => {
  let component: MainreservationComponent;
  let fixture: ComponentFixture<MainreservationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainreservationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainreservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
