import { TestBed } from '@angular/core/testing';

import { LocationBatchCreateStrategyService } from './location-batch-create.strategy.service';

describe('LocationBatchCreateStrategyService', () => {
  let service: LocationBatchCreateStrategyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocationBatchCreateStrategyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
