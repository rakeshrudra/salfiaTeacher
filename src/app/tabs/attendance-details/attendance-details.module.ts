import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AttendanceDetailsPageRoutingModule } from './attendance-details-routing.module';

import { AttendanceDetailsPage } from './attendance-details.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    AttendanceDetailsPageRoutingModule
  ],
  declarations: [AttendanceDetailsPage]
})
export class AttendanceDetailsPageModule {}
