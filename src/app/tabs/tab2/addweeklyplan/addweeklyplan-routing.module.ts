import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddweeklyplanPage } from './addweeklyplan.page';

const routes: Routes = [
  {
    path: '',
    component: AddweeklyplanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddweeklyplanPageRoutingModule {}
