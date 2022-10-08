import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MapService} from "./map.service";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  providers: [MapService]
})
export class MapComponent implements AfterViewInit, OnDestroy {
  @ViewChild('map') mapElement!: ElementRef;

  constructor(
    private readonly mapService: MapService
  ) {
  }

  ngAfterViewInit() {
    this.mapService.initializeMap(this.mapElement.nativeElement);
  }

  ngOnDestroy() {
    this.mapService.completeSubscriptions();
  }
}
