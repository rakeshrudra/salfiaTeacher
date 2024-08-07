import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddnotificationsPageRoutingModule } from './addnotifications-routing.module';

import { AddnotificationsPage } from './addnotifications.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddnotificationsPageRoutingModule,
    SharedModule
  ],
  declarations: [AddnotificationsPage]
})
export class AddnotificationsPageModule {}
