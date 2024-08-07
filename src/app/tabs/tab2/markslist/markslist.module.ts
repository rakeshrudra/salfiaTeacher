import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MarkslistPageRoutingModule } from './markslist-routing.module';

import { MarkslistPage } from './markslist.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    MarkslistPageRoutingModule
  ],
  declarations: [MarkslistPage]
})
export class MarkslistPageModule {}
