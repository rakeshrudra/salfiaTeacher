import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DsrListPageRoutingModule } from './dsr-list-routing.module';

import { DsrListPage } from './dsr-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DsrListPageRoutingModule
  ],
  declarations: [DsrListPage]
})
export class DsrListPageModule {}
