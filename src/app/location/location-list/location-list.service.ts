import {ComponentFactoryResolver, Injectable, Injector, ViewContainerRef} from '@angular/core';
import {map, Observable, ReplaySubject, Subject, switchMap} from "rxjs";
import {Location} from "../location.type";
import {LocalStorageService} from "../../core/local-storage.service";
import {marker} from "leaflet";
import {LocationPopupComponent} from "./location-popup/location-popup.component";
import {LocationBatchDialogService} from "../location-batch/location-batch-dialog.service";
import {Response} from "../../shared/models/response.model";

@Injectable()
export class LocationListService {
  public locations$ = new ReplaySubject<Location[]>();
  public clearAllMarks$ = new Subject<void>();

  constructor(
    private readonly localStorageService: LocalStorageService,
    private readonly locationBatchDialogService: LocationBatchDialogService,
    private readonly resolver: ComponentFactoryResolver,
    private readonly injector: Injector
  ) {
    this.setLocationsFromStorage();
    this.updateMarksOnDialogClosed();
  }

  public setLocationsFromStorage(): void {
    const storedLocations = this.localStorageService.getItem<Location[]>("locations");
    this.locations$.next(storedLocations || []);
  }

  public get locationsResponse(): Observable<Response<Location>> {
    return this.locations$
      .pipe(
        map((locations) => {
          return {
            data: locations,
            count: locations.length
          }
        })
      )
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

  private updateMarksOnDialogClosed(): void {
    this.locationBatchDialogService.dialogClosed$.subscribe(() => {
      this.clearAllMarks$.next();
      this.setLocationsFromStorage();
    })
  }
}
