import { Component, Input, OnInit,  } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.scss'],
})
export class ViewDetailsComponent  implements OnInit {

  @Input('data') data:any;
  constructor(public _modalCtrl: ModalController) { }

  ngOnInit() {}

}
