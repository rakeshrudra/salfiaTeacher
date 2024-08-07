import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MonthlyExamMarkPage } from './monthly-exam-mark.page';

const routes: Routes = [
  {
    path: '',
    component: MonthlyExamMarkPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MonthlyExamMarkPageRoutingModule {}
