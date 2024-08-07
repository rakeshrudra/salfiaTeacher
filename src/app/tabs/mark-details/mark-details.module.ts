import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MarkDetailsPageRoutingModule } from './mark-details-routing.module';

import { MarkDetailsPage } from './mark-details.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    MarkDetailsPageRoutingModule
  ],
  declarations: [MarkDetailsPage]
})
export class MarkDetailsPageModule {}
