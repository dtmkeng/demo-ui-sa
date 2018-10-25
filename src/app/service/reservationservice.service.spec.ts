import { TestBed, inject } from '@angular/core/testing';

import { ReservationserviceService } from './reservationservice.service';

describe('ReservationserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReservationserviceService]
    });
  });

  it('should be created', inject([ReservationserviceService], (service: ReservationserviceService) => {
    expect(service).toBeTruthy();
  }));
});
