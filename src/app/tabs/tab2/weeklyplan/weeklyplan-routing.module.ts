import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WeeklyplanPage } from './weeklyplan.page';

const routes: Routes = [
  {
    path: '',
    component: WeeklyplanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeeklyplanPageRoutingModule {}
