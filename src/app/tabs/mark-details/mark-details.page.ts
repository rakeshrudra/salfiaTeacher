import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-mark-details',
  templateUrl: './mark-details.page.html',
  styleUrls: ['./mark-details.page.scss'],
})
export class MarkDetailsPage implements OnInit {


  details: any;
  section: any;
  class: any;
  subject: any;
  terms: any;
  constructor(private _api: ApiService, private route: ActivatedRoute) { }

  ngOnInit() { }
  ionViewDidEnter() {
    this.class= this.route.snapshot.queryParamMap.get('class');
    this.section= this.route.snapshot.queryParamMap.get('section');
    this.subject= this.route.snapshot.queryParamMap.get('subject');
    this.terms= this.route.snapshot.queryParamMap.get('terms');

    let filter = {
      class: this.route.snapshot.queryParamMap.get('class'),
      section: this.route.snapshot.queryParamMap.get('section'),
      subject: this.route.snapshot.queryParamMap.get('subject'),
      terms: this.route.snapshot.queryParamMap.get('terms'),
      createdBy: this.route.snapshot.queryParamMap.get('createdBy')
    }
    this._api.marklist(filter).subscribe(v=>{
      this.details = v.payload;

    })
  }

}
