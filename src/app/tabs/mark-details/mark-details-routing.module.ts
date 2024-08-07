import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MarkDetailsPage } from './mark-details.page';

const routes: Routes = [
  {
    path: '',
    component: MarkDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarkDetailsPageRoutingModule {}
