import { TestBed } from '@angular/core/testing';

import { UploadedtestService } from './uploadedtest.service';

describe('UploadedtestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UploadedtestService = TestBed.get(UploadedtestService);
    expect(service).toBeTruthy();
  });
});
