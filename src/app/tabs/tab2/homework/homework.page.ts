import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { ViewDetailsComponent } from 'src/app/shared/component/view-details/view-details.component';

@Component({
  selector: 'app-homework',
  templateUrl: './homework.page.html',
  styleUrls: ['./homework.page.scss'],
})
export class HomeworkPage implements OnInit {

  homeWorkList: Array<any> = [];
  subjectList: Array<any> = [];
  loaded = false;

  constructor(private _api: ApiService, private modalController: ModalController) { }

  ngOnInit() { }
  ionViewDidEnter() {
    this.loaded = false;

    this._api.homeworkList({}).subscribe(v => {
      this.loaded = true;

      this.homeWorkList = v.payload;
    }, er => {
      this.loaded = true;

    })
    this._api.subjectList({}).subscribe(v => {
      this.subjectList = v.payload;
      this.loaded = true;

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
