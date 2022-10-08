import {Injectable} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {LocationBatchComponent} from "./location-batch/location-batch.component";

@Injectable()
export class LocationBatchDialogService {
  public dialogClosed$ = this.matDialog.afterAllClosed;

  constructor(
    private readonly matDialog: MatDialog
  ) {
  }

  public openLocationBatchDialog(): void {
    this.matDialog.open(LocationBatchComponent, {
      data: {
        dastan: "dastan"
      }
    })
  }
}
