import {TestBed} from '@angular/core/testing';

import {MapService} from './map.service';
import {SharedModule} from "../shared.module";

describe('MapService', () => {
  let service: MapService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MapService]
    });
    service = TestBed.inject(MapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call #initializeMapStrategy\'s initialize function on #initializeMap()', () => {
    pending("it's importance is doubtful")
  });

  it('should call #tileLayerStrategy\'s load function on #initializeMap()', () => {
    pending("it's importance is doubtful")
  });
});
