import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'location',
    loadChildren: () => import("./location/location.module").then(m => m.LocationModule)
  },
  {
    path: '**',
    redirectTo: 'location'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
