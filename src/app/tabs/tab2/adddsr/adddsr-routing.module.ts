import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdddsrPage } from './adddsr.page';

const routes: Routes = [
  {
    path: '',
    component: AdddsrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdddsrPageRoutingModule {}
