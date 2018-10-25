import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationhistoryComponent } from './reservationhistory.component';

describe('ReservationhistoryComponent', () => {
  let component: ReservationhistoryComponent;
  let fixture: ComponentFixture<ReservationhistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservationhistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationhistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
