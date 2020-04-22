import { TestBed } from '@angular/core/testing';

import { MytestService } from './mytest.service';

describe('MytestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MytestService = TestBed.get(MytestService);
    expect(service).toBeTruthy();
  });
});
