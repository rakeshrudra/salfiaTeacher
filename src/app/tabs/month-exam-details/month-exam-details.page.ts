import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-month-exam-details',
  templateUrl: './month-exam-details.page.html',
  styleUrls: ['./month-exam-details.page.scss'],
})
export class MonthExamDetailsPage implements OnInit {

  details: any;
  section: any;
  class: any;
  subject: any;
  date: any;
  constructor(private _api: ApiService, private route: ActivatedRoute) { }

  ngOnInit() { }
  ionViewDidEnter() {
    this.class= this.route.snapshot.queryParamMap.get('class');
    this.section= this.route.snapshot.queryParamMap.get('section');
    this.subject= this.route.snapshot.queryParamMap.get('subject');
    this.date= this.route.snapshot.queryParamMap.get('date');
    let filter = {
      class: this.route.snapshot.queryParamMap.get('class'),
      section: this.route.snapshot.queryParamMap.get('section'),
      subject: this.route.snapshot.queryParamMap.get('subject'),
      date: this.route.snapshot.queryParamMap.get('date'),
      createdBy: this.route.snapshot.queryParamMap.get('createdBy')
    }
    this._api.monthMarklist(filter).subscribe(v=>{
      this.details = v.payload;

    })
  }

}
