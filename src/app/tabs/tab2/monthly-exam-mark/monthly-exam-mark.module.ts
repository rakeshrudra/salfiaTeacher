import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MonthlyExamMarkPageRoutingModule } from './monthly-exam-mark-routing.module';

import { MonthlyExamMarkPage } from './monthly-exam-mark.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    MonthlyExamMarkPageRoutingModule
  ],
  declarations: [MonthlyExamMarkPage]
})
export class MonthlyExamMarkPageModule {}
