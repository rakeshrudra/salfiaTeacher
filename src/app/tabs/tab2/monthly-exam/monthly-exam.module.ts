import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MonthlyExamPageRoutingModule } from './monthly-exam-routing.module';

import { MonthlyExamPage } from './monthly-exam.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    MonthlyExamPageRoutingModule
  ],
  declarations: [MonthlyExamPage]
})
export class MonthlyExamPageModule {}
