import {Component, Input, OnInit} from '@angular/core';
import {LocationListService} from "../location-list.service";
import {Location} from "../../location.type";
import {LocationBatchDialogService} from "../../location-batch/location-batch-dialog.service";

@Component({
  selector: 'app-location-popup',
  templateUrl: './location-popup.component.html',
  styleUrls: ['./location-popup.component.scss']
})
export class LocationPopupComponent implements OnInit {
  @Input() location!: Location;

  constructor(
    private readonly locationBatchDialogService: LocationBatchDialogService
  ) { }

  ngOnInit(): void {
  }

  public editLocation() {
    this.locationBatchDialogService.openLocationBatchDialog(this.location)
  }
}
