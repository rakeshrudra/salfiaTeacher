import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(private alertController: AlertController, private _router: Router, private _api: ApiService) { }
  ionViewDidEnter() {
    this._api.details({}).subscribe(v => {

    }, er => {
        localStorage.clear();
        this._router.navigate(['/'])
    })

  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Are you sure logout?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            // console.log('Alert canceled');
          },
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            localStorage.clear();
            this._router.navigate(['/'])
          },
        },

      ],
    });

    await alert.present();
  }
}