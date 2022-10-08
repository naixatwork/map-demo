import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import {MapService} from "./map.service";
import {marker, Marker} from "leaflet";
import {coordinates} from "./map.type";
import {Observable, Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  providers: [MapService]
})
export class MapComponent implements AfterViewInit, OnDestroy {
  @ViewChild('map') mapElement!: ElementRef;

  @Input() newMarkerCoordinates$?: Observable<Marker>;
  @Input() clearAllMarks$?: Subject<void>;
  @Output() onMapClicked = new EventEmitter<coordinates>();

  private readonly unsubscribeAll = new Subject<void>();

  constructor(
    private readonly mapService: MapService
  ) {
  }

  ngAfterViewInit() {
    this.mapService.initializeMap(this.mapElement.nativeElement);
    this.fireOnMapClicked();
    this.onMarkerAdded();
    this.clearAllMarks();
  }

  private fireOnMapClicked(): void {
    const onMapClicked = (coordinates: coordinates) => {
      this.onMapClicked.next(coordinates);
    }

    this.mapService.onMapClicked$.subscribe({
      next: onMapClicked
    })
  }

  private onMarkerAdded(): void {
    if (!this.newMarkerCoordinates$) return;

    const onNewCoordinates = (newMarker: Marker) => {
      this.mapService.addMarker(newMarker);
    }

    this.newMarkerCoordinates$
      .pipe(takeUntil(this.unsubscribeAll))
      .subscribe({next: onNewCoordinates})
  }

  private clearAllMarks(): void {
    if (!this.clearAllMarks$) return;

    this.clearAllMarks$
      .pipe(takeUntil(this.unsubscribeAll))
      .subscribe({
      next: () => {
        this.mapService.clearMarkers();
      }
    })
  }

  ngOnDestroy() {
    this.unsubscribeAll.next();
    this.unsubscribeAll.complete();
    this.mapService.completeSubscriptions();
  }
}
