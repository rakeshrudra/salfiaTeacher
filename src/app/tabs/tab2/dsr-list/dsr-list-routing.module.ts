import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DsrListPage } from './dsr-list.page';

const routes: Routes = [
  {
    path: '',
    component: DsrListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DsrListPageRoutingModule {}
