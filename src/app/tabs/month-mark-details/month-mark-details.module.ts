import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MonthMarkDetailsPageRoutingModule } from './month-mark-details-routing.module';

import { MonthMarkDetailsPage } from './month-mark-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MonthMarkDetailsPageRoutingModule
  ],
  declarations: [MonthMarkDetailsPage]
})
export class MonthMarkDetailsPageModule {}
