import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MonthExamDetailsPage } from './month-exam-details.page';

const routes: Routes = [
  {
    path: '',
    component: MonthExamDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MonthExamDetailsPageRoutingModule {}
