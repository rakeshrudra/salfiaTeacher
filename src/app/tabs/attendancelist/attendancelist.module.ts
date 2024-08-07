import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AttendancelistPageRoutingModule } from './attendancelist-routing.module';

import { AttendancelistPage } from './attendancelist.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    AttendancelistPageRoutingModule
  ],
  declarations: [AttendancelistPage]
})
export class AttendancelistPageModule {}
