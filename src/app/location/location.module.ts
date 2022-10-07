import {NgModule} from '@angular/core';

import {LocationRoutingModule} from './location-routing.module';
import {LocationListComponent} from './location-list/location-list.component';
import {SharedModule} from "../shared/shared.module";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [
    LocationListComponent
  ],
  imports: [
    SharedModule,
    LocationRoutingModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class LocationModule { }
