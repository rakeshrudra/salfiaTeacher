import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MonthExamDetailsPageRoutingModule } from './month-exam-details-routing.module';

import { MonthExamDetailsPage } from './month-exam-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MonthExamDetailsPageRoutingModule
  ],
  declarations: [MonthExamDetailsPage]
})
export class MonthExamDetailsPageModule {}
