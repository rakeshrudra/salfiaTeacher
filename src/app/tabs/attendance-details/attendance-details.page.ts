import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-attendance-details',
  templateUrl: './attendance-details.page.html',
  styleUrls: ['./attendance-details.page.scss'],
})
export class AttendanceDetailsPage implements OnInit {

  class: any;
  section: any;
  date: any;
  details: any;
  constructor(private _api: ApiService, private route: ActivatedRoute) { }

  ngOnInit() { }
  ionViewDidEnter() {
    this.class = this.route.snapshot.queryParamMap.get('class');
    this.section = this.route.snapshot.queryParamMap.get('section');
    this.date = this.route.snapshot.queryParamMap.get('date');

    let filter = {
      class: this.route.snapshot.queryParamMap.get('class'),
      section: this.route.snapshot.queryParamMap.get('section'),
      createdBy: this.route.snapshot.queryParamMap.get('createdBy')
    }
    this._api.attendanceList(filter).subscribe(v=>{
      this.details = v.payload;

    })
  }

}
