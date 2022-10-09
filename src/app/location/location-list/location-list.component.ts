import {AfterViewInit, Component, OnInit, ViewContainerRef} from '@angular/core';
import {LocationBatchDialogService} from "../location-batch/location-batch-dialog.service";
import {LocationListService} from "./location-list.service";

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.scss']
})
export class LocationListComponent implements OnInit, AfterViewInit {

  constructor(
    private readonly locationBatchDialogService: LocationBatchDialogService,
    public readonly locationListService: LocationListService,
  ) {
  }

  ngOnInit(): void {
  }

  public addLocation(): void {
    this.locationBatchDialogService.openLocationBatchDialog();
  }

  ngAfterViewInit() {
    // this.locationListService.setLocationsFromStorage();
  }
}
