import {Injectable} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {LocationBatchComponent} from "./location-batch.component";
import {Location} from "../location.type";

@Injectable()
export class LocationBatchDialogService {
  public dialogClosed$ = this.matDialog.afterAllClosed;

  constructor(
    private readonly matDialog: MatDialog
  ) {
  }

  public openLocationBatchDialog(data?: Location): void {
    this.matDialog.open(LocationBatchComponent, {
      data: data || null
    })
  }
}
