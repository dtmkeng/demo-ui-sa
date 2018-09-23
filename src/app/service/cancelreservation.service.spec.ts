import { TestBed, inject } from '@angular/core/testing';

import { CancelreservationService } from './cancelreservation.service';

describe('CancelreservationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CancelreservationService]
    });
  });

  it('should be created', inject([CancelreservationService], (service: CancelreservationService) => {
    expect(service).toBeTruthy();
  }));
});
