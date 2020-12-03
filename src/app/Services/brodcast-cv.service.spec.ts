import { TestBed } from '@angular/core/testing';

import { BrodcastCVService } from './brodcast-cv.service';

describe('BrodcastCVService', () => {
  let service: BrodcastCVService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrodcastCVService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
