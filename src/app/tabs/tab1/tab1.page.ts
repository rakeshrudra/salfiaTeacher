import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { ViewDetailsComponent } from 'src/app/shared/component/view-details/view-details.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  homeworkList: Array<any> = [];
  weekPlanList: Array<any> = [];
  loaded = false;

  constructor(private _api: ApiService, private modalController: ModalController) { }
  ionViewDidEnter() {
    this.loaded = false;

    this._api.todayActivity({}).subscribe(v => {
      this.loaded = true;

      this.homeworkList = v.homewWork;
      this.weekPlanList = v.weeklyPlan;

    }, er => {
      this.loaded = true;

    })
  }
  async presentModal(data:any) {
    const modal = await this.modalController.create({
      component: ViewDetailsComponent,
      cssClass: 'my-custom-class',
      componentProps: {data:data}
    });
    return await modal.present();
  }
}
