import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-monthly-exam',
  templateUrl: './monthly-exam.page.html',
  styleUrls: ['./monthly-exam.page.scss'],
})
export class MonthlyExamPage implements OnInit {

  details: any;
  loaded = false;
  constructor(private _api: ApiService) { }

  ngOnInit() { }
  ionViewDidEnter() {
    this.loaded = true;

    this._api.monthMarkDetails({}).subscribe(v=>{
      this.details = v.payload;
      this.loaded = false;

    },er=>{
      this.loaded = false;
    })
  }

}
