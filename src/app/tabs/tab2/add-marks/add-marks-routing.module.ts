import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddMarksPage } from './add-marks.page';

const routes: Routes = [
  {
    path: '',
    component: AddMarksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddMarksPageRoutingModule {}
