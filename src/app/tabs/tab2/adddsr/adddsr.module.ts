import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdddsrPageRoutingModule } from './adddsr-routing.module';

import { AdddsrPage } from './adddsr.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    AdddsrPageRoutingModule
  ],
  declarations: [AdddsrPage]
})
export class AdddsrPageModule {}
