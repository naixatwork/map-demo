import { Injectable } from '@angular/core';
import {LocationBatchBaseStrategy} from "./locationBatch.base.strategy";
import {Location} from "../../location.type";
import {LocalStorageService} from "../../../core/local-storage.service";


@Injectable()
export class LocationBatchUpdateStrategyService implements LocationBatchBaseStrategy {

  constructor(private readonly localStorageService: LocalStorageService) { }

  submit(newLocation: Location): void {
    const locations: Location[] = this.localStorageService.getItem<Location[]>("locations") || [];

    const targetLocation = locations.find((location) => location.id === newLocation.id);

    console.log(targetLocation);
  }
}
