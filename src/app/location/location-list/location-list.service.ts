import {Injectable} from '@angular/core';
import {map, Observable, ReplaySubject, Subject, switchMap} from "rxjs";
import {Location} from "../location.type";
import {LocalStorageService} from "../../core/local-storage.service";
import {marker} from "leaflet";

@Injectable()
export class LocationListService {
  public locations$ = new ReplaySubject<Location[]>();

  constructor(
    private readonly localStorageService: LocalStorageService
  ) {
    this.setLocationsFromStorage();
  }

  public setLocationsFromStorage(): void {
    const storedLocations = this.localStorageService.getItem<Location[]>("locations");
    this.locations$.next(storedLocations || []);
  }

  public get locationMarkers$(): Observable<any> {
    return this.locations$
      .pipe(
        switchMap((locations: Location[]) => {
          return locations.map(location => marker([location.coordinates.lat, location.coordinates.lng]));
        })
      )
  }
}
