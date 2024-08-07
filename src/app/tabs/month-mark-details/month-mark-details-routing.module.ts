import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MonthMarkDetailsPage } from './month-mark-details.page';

const routes: Routes = [
  {
    path: '',
    component: MonthMarkDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MonthMarkDetailsPageRoutingModule {}
