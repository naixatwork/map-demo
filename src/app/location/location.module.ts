import {NgModule} from '@angular/core';

import {LocationRoutingModule} from './location-routing.module';
import {LocationListComponent} from './location-list/location-list.component';
import {SharedModule} from "../shared/shared.module";
import { LocationBatchComponent } from './location-batch/location-batch.component';
import {MatDialogModule} from "@angular/material/dialog";
import {LocationBatchDialogService} from "./location-batch-dialog.service";
import { LocationTypeControllerComponent } from './form/location-type-controller/location-type-controller.component';
import { LocationMapControllerComponent } from './form/location-map-controller/location-map-controller.component';


@NgModule({
  declarations: [
    LocationListComponent,
    LocationBatchComponent,
    LocationTypeControllerComponent,
    LocationMapControllerComponent
  ],
  imports: [
    SharedModule,
    LocationRoutingModule,
    MatDialogModule
  ],
  providers: [
    LocationBatchDialogService
  ]
})
export class LocationModule { }
