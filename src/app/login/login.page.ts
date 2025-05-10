import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;
  submited = false;

  constructor(private _fb: FormBuilder, private toastController: ToastController, private _api: ApiService, private _router: Router) {
    this.loginForm = _fb.group({
      contact:[null,Validators.required],
      password:[null,Validators.required]
    })
   }

  ngOnInit() {}
  ionViewDidEnter() {
    this._api.details({}).subscribe(v => {
      this._router.navigate(['/tabs'])

    }, er => {
        localStorage.clear();
    })

  }

  submit(){
    if(this.loginForm.valid){
      this.submited = true;

      this._api.login(this.loginForm.value).subscribe(v=>{
          localStorage.setItem("token",v.token);
          this._router.navigate(['/tabs'])
          this.submited = false;

      },er=>{
        this.submited = false;
        this.presentToast(er.error.message,'bottom')
      })
    }else{
      this.submited = false;
      this.loginForm.markAllAsTouched()
    }
  }
  async presentToast(msg='',position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: msg,
      duration: 1500,
      position: position,
      color:'danger'
    });

    await toast.present();
  }
}
