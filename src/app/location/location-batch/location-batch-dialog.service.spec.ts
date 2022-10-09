import { TestBed } from '@angular/core/testing';

import { LocationBatchDialogService } from './location-batch-dialog.service';

describe('LocationBatchDialogService', () => {
  let service: LocationBatchDialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocationBatchDialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
