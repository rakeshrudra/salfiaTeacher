import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-dsr-list',
  templateUrl: './dsr-list.page.html',
  styleUrls: ['./dsr-list.page.scss'],
})
export class DsrListPage implements OnInit {

  drsList:Array<any>=[];
  constructor(private _api: ApiService) { }

  ngOnInit() {}
  ionViewWillEnter(){
        this._api.dsrList({}).subscribe(v=>{
      this.drsList = v.payload;
    })
  }

}
