import { TestBed } from '@angular/core/testing';

import { LocationBatchUpdateStrategyService } from './location-batch-update.strategy.service';

describe('LocationBatchUpdateStrategyService', () => {
  let service: LocationBatchUpdateStrategyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocationBatchUpdateStrategyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
