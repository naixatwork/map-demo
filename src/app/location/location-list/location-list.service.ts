import {ComponentFactoryResolver, Injectable, Injector, ViewContainerRef} from '@angular/core';
import {Observable, ReplaySubject, switchMap} from "rxjs";
import {Location} from "../location.type";
import {LocalStorageService} from "../../core/local-storage.service";
import {marker} from "leaflet";
import {LocationPopupComponent} from "./location-popup/location-popup.component";

@Injectable()
export class LocationListService {
  public locations$ = new ReplaySubject<Location[]>();

  constructor(
    private readonly localStorageService: LocalStorageService,
    private readonly resolver: ComponentFactoryResolver,
    private readonly injector: Injector
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
          return locations.map((location) => {
              const createPopupComponent = () => {
                const popupComponent = this.resolver.resolveComponentFactory(LocationPopupComponent)
                  .create(this.injector);
                popupComponent.setInput("location", location);
                popupComponent.changeDetectorRef.detectChanges();
                return popupComponent;
              }

              return marker(
                [location.coordinates.lat, location.coordinates.lng],
                {title: location.name}
              )
                .bindPopup(createPopupComponent().location.nativeElement)
            }
          );
        })
      )
  }
}
