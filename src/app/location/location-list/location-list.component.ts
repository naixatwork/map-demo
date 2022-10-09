import {AfterViewInit, Component} from '@angular/core';
import {LocationBatchDialogService} from "../location-batch/location-batch-dialog.service";
import {LocationListService} from "./location-list.service";
import {Column, IndexColumn, OperationColumn, paginationMode, TableConfig} from "../../shared/table/table.model";
import {Location} from "../location.type";
import {Subject} from "rxjs";
import {tableStateManager} from "../../shared/table/tableStateManager.operator";

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.scss']
})
export class LocationListComponent implements AfterViewInit {
  public tableConfig: TableConfig<Location> = new TableConfig<Location>([], [], {
    mode: null,
    length: null
  });

  private unsubscribeAll = new Subject<void>();

  constructor(
    private readonly locationBatchDialogService: LocationBatchDialogService,
    public readonly locationListService: LocationListService,
  ) {
  }

  ngAfterViewInit() {
    this.initializeTable();

  }

  private setLocationTableConfig(locations: Location[], length: number): void {
    this.tableConfig = new TableConfig<Location>(
      locations,
      [
        new IndexColumn(),
        new Column("name", "name", "1000"),
        new OperationColumn(
          [
            {
              color: 'primary',
              icon: 'edit',
              tooltip: 'edit location',
              operation: (location: Location) => {
                this.locationBatchDialogService.openLocationBatchDialog(location);
              }
            }
          ]
        )
      ],
      {
        mode: paginationMode.LOCAL,
        length
      }
    )
  }

  private initializeTable(): void {
    tableStateManager<Location>(
      this.locationListService.locationsResponse,
      this.tableConfig
    ).subscribe({
        next: (locationResponse) => {
          this.setLocationTableConfig(locationResponse.data, locationResponse.count)
        }
      }
    );
  }

  public addLocation(): void {
    this.locationBatchDialogService.openLocationBatchDialog();
  }
}
