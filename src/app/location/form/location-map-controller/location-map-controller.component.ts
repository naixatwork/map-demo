import {AfterViewInit, Component, Injector, OnInit} from '@angular/core';
import {MatFormFieldControl} from "@angular/material/form-field";
import {MatFormFieldAdapter} from "../../../shared/MatFormFieldAdapter/MatFormFieldAdapter";
import {FormBuilder, Validators} from "@angular/forms";
import {FormControlAdapter} from "../../../shared/FormControlAdapater/FormControlAdapter";
import {coordinates} from "../../../shared/map/map.type";
import {map, Observable, ReplaySubject, Subject, tap} from "rxjs";
import {marker, Marker} from "leaflet";

@Component({
  selector: 'app-location-map-controller',
  templateUrl: './location-map-controller.component.html',
  styleUrls: ['./location-map-controller.component.scss'],
  providers: [
    {
      provide: MatFormFieldControl,
      useExisting: LocationMapControllerComponent,
      multi: true
    }
  ]
})
export class LocationMapControllerComponent extends MatFormFieldAdapter<{ lat: number, lng: number }> implements OnInit, AfterViewInit {
  public readonly clearAllMarkers$ = new Subject<void>();
  public readonly marker$ = new ReplaySubject<Marker>();

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly injector: Injector
  ) {
    super(
      LocationMapControllerComponent.name,
      new FormControlAdapter(formBuilder.group({
        lat: [null, [Validators.required]],
        lng: [null, [Validators.required]]
      })),
      injector
    )
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    const setMarkerIfFormHasDefaultValue = () => {
      if (this.form.value.lat && this.form.value.lng) {
        this.addMarker(marker([this.form.value.lat, this.form.value.lng]));
      }
    }

    this.setMarkerOnFormChange();
    setMarkerIfFormHasDefaultValue();
  }

  public onMapClicked(coordinates: coordinates): void {
    this.form.setValue({
      lat: coordinates.latlng.lat,
      lng: coordinates.latlng.lng,
    })
  }

  public setMarkerOnFormChange(): void {
    this.form.valueChanges
      .pipe(
        tap(() => {
          this.clearAllMarkers$.next();
        }),
        tap((coordinates) => {
          this.addMarker(marker([coordinates.lat, coordinates.lng]))
        }))
      .subscribe();
  }

  private addMarker(newMarker: Marker): void {
    this.marker$.next(newMarker);
  }
}
