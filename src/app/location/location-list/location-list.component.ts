import {Component, OnInit} from '@angular/core';
import {LocationBatchDialogService} from "../location-batch-dialog.service";

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.scss']
})
export class LocationListComponent implements OnInit {

  constructor(private readonly locationBatchDialogService: LocationBatchDialogService) {
  }

  ngOnInit(): void {
    this.locationBatchDialogService.openLocationBatchDialog();
  }

  public onAddLocationEvent(): void {
    this.locationBatchDialogService.openLocationBatchDialog();
  }
}
