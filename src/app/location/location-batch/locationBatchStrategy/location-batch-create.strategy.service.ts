import {Injectable} from '@angular/core';
import {LocationBatchBaseStrategy} from "./locationBatch.base.strategy";
import {Location} from "../../location.type";
import {LocalStorageService} from "../../../core/local-storage.service";

@Injectable()
export class LocationBatchCreateStrategyService implements LocationBatchBaseStrategy {
  constructor(private readonly localStorageService: LocalStorageService) {
  }

  submit(newLocation: Location): void {
    newLocation.id = Math.random(); // for simplicity check.

    const locations: Location[] = this.localStorageService.getItem<Location[]>("locations") || [];
    locations.push(newLocation);

    this.localStorageService.setItem("locations", locations);
  }
}
