import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentlistComponent } from './component/studentlist/studentlist.component';
import { IonicModule } from '@ionic/angular';
import { ViewDetailsComponent } from './component/view-details/view-details.component';



@NgModule({
  declarations: [
    StudentlistComponent,
    ViewDetailsComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    StudentlistComponent,
    ViewDetailsComponent
  ]
})
export class SharedModule { }
