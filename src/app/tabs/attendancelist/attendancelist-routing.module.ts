import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AttendancelistPage } from './attendancelist.page';

const routes: Routes = [
  {
    path: '',
    component: AttendancelistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AttendancelistPageRoutingModule {}
