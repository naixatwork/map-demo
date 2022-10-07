import {NgModule} from '@angular/core';

import {LocationRoutingModule} from './location-routing.module';
import {LocationListComponent} from './location-list/location-list.component';
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    LocationListComponent
  ],
  imports: [
    LocationRoutingModule,
    SharedModule
  ]
})
export class LocationModule { }
