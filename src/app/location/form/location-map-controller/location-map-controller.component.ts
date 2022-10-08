import {Component, Injector, OnInit} from '@angular/core';
import {MatFormFieldControl} from "@angular/material/form-field";
import {MatFormFieldAdapter} from "../../../shared/MatFormFieldAdapter/MatFormFieldAdapter";
import {FormBuilder, Validators} from "@angular/forms";
import {FormControlAdapter} from "../../../shared/FormControlAdapater/FormControlAdapter";
import {coordinates} from "../../../shared/map/map.type";
import {map, Observable, Subject} from "rxjs";
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
export class LocationMapControllerComponent extends MatFormFieldAdapter<{lat: number, lng: number}> implements OnInit {
  public readonly clearAllMarkers$ = new Subject<void>();

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

  public onMapClicked(coordinates: coordinates): void {
    this.form.setValue({
      lat: coordinates.latlng.lat,
      lng: coordinates.latlng.lng,
    })
  }

  public get newMarker$(): Observable<Marker> {
    return this.form.valueChanges
      .pipe(map((coordinates) => {
        this.clearAllMarkers$.next();
        return marker([coordinates.lat, coordinates.lng])
      }));
  }
}
