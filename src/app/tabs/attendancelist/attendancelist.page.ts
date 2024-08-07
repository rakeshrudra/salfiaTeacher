import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-attendancelist',
  templateUrl: './attendancelist.page.html',
  styleUrls: ['./attendancelist.page.scss'],
})
export class AttendancelistPage implements OnInit {

  details: any;
  loaded = false;
  constructor(private _api: ApiService, private _router: Router) { }

  ngOnInit() { }
  ionViewDidEnter() {
    this.loaded = true;

    this._api.attendanceDetails().subscribe(v=>{
      this.details = v.payload;
      this.loaded = false;
    },er=>{
      this.loaded = false;
    })
  }  

}
