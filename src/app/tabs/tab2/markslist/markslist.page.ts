import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-markslist',
  templateUrl: './markslist.page.html',
  styleUrls: ['./markslist.page.scss'],
})
export class MarkslistPage implements OnInit {

  details: any;
  loaded = false;
  constructor(private _api: ApiService) { }

  ngOnInit() { }
  ionViewDidEnter() {
    this.loaded = true;

    this._api.markDetails({}).subscribe(v=>{
      this.details = v.payload;
      this.loaded = false;

    },er=>{
      this.loaded = false;
    })
  }

}
