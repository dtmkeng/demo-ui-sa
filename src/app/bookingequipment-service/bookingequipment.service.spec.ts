import { TestBed, inject } from '@angular/core/testing';

import { BookingequipmentService } from './bookingequipment.service';

describe('BookingequipmentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookingequipmentService]
    });
  });

  it('should be created', inject([BookingequipmentService], (service: BookingequipmentService) => {
    expect(service).toBeTruthy();
  }));
});
