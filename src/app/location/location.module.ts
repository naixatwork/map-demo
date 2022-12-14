import {NgModule} from '@angular/core';

import {LocationRoutingModule} from './location-routing.module';
import {LocationListComponent} from './location-list/location-list.component';
import {SharedModule} from "../shared/shared.module";
import {LocationBatchComponent} from './location-batch/location-batch.component';
import {MatDialogModule} from "@angular/material/dialog";
import {LocationBatchDialogService} from "./location-batch/location-batch-dialog.service";
import {LocationTypeControllerComponent} from './form/location-type-controller/location-type-controller.component';
import {LocationMapControllerComponent} from './form/location-map-controller/location-map-controller.component';
import {
  LocationBatchCreateStrategyService
} from "./location-batch/locationBatchStrategy/location-batch-create.strategy.service";
import {
  LocationBatchUpdateStrategyService
} from "./location-batch/locationBatchStrategy/location-batch-update.strategy.service";
import {LocationListService} from "./location-list/location-list.service";
import { LocationPopupComponent } from './location-list/location-popup/location-popup.component';
import {CommonModule} from "@angular/common";
import {TableModule} from "../shared/table/table.module";


@NgModule({
  declarations: [
    LocationListComponent,
    LocationBatchComponent,
    LocationTypeControllerComponent,
    LocationMapControllerComponent,
    LocationPopupComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    LocationRoutingModule,
    MatDialogModule,
    TableModule,

  ],
  providers: [
    LocationBatchDialogService,
    LocationBatchCreateStrategyService,
    LocationBatchUpdateStrategyService,
    LocationListService
  ]
})
export class LocationModule { }
