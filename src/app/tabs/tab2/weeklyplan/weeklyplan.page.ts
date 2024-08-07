import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { ViewDetailsComponent } from 'src/app/shared/component/view-details/view-details.component';

@Component({
  selector: 'app-weeklyplan',
  templateUrl: './weeklyplan.page.html',
  styleUrls: ['./weeklyplan.page.scss'],
})
export class WeeklyplanPage implements OnInit {

  notifications: Array<any> = [];
  sectionList: Array<any> = [];
  loaded = false;

  constructor(private _api: ApiService, private modalController: ModalController) { }

  ngOnInit() { }
  ionViewDidEnter() {
    this.loaded = false;

    this._api.weeklyPlanList({}).subscribe(v => {
      this.loaded = true;

      this.notifications = v.payload;
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