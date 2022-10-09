import { Injectable } from '@angular/core';
import {LocationBatchBaseStrategy} from "./locationBatch.base.strategy";
import {Location} from "../../location.type";
import {LocalStorageService} from "../../../core/local-storage.service";


@Injectable()
export class LocationBatchUpdateStrategyService implements LocationBatchBaseStrategy {

  constructor(private readonly localStorageService: LocalStorageService) { }

  submit(newLocation: Location): void {
    const locations: Location[] = this.localStorageService.getItem<Location[]>("locations") || [];

    let targetLocationIndex = locations.findIndex((location) => location.id === newLocation.id);
    if(targetLocationIndex === -1) return;

    locations[targetLocationIndex] = newLocation;

    this.localStorageService.setItem("locations", locations);
  }
}
