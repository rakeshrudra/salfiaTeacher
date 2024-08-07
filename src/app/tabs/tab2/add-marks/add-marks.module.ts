import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddMarksPageRoutingModule } from './add-marks-routing.module';

import { AddMarksPage } from './add-marks.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    AddMarksPageRoutingModule
  ],
  declarations: [AddMarksPage]
})
export class AddMarksPageModule {}
