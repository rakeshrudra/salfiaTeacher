import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddnotificationsPage } from './addnotifications.page';

const routes: Routes = [
  {
    path: '',
    component: AddnotificationsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddnotificationsPageRoutingModule {}
