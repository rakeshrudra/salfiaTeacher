import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddweeklyplanPageRoutingModule } from './addweeklyplan-routing.module';

import { AddweeklyplanPage } from './addweeklyplan.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    AddweeklyplanPageRoutingModule
  ],
  declarations: [AddweeklyplanPage]
})
export class AddweeklyplanPageModule {}
