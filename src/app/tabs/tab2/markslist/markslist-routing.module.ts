import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MarkslistPage } from './markslist.page';

const routes: Routes = [
  {
    path: '',
    component: MarkslistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarkslistPageRoutingModule {}
