import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddhomeworkPageRoutingModule } from './addhomework-routing.module';

import { AddhomeworkPage } from './addhomework.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddhomeworkPageRoutingModule,
    SharedModule
  ],
  declarations: [AddhomeworkPage]
})
export class AddhomeworkPageModule {}
