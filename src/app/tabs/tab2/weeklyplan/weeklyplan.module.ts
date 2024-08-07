import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WeeklyplanPageRoutingModule } from './weeklyplan-routing.module';

import { WeeklyplanPage } from './weeklyplan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WeeklyplanPageRoutingModule
  ],
  declarations: [WeeklyplanPage]
})
export class WeeklyplanPageModule {}
