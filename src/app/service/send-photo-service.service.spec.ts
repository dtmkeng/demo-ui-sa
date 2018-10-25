import { TestBed, inject } from '@angular/core/testing';

import { SendPhotoServiceService } from './send-photo-service.service';

describe('SendPhotoServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SendPhotoServiceService]
    });
  });

  it('should be created', inject([SendPhotoServiceService], (service: SendPhotoServiceService) => {
    expect(service).toBeTruthy();
  }));
});
