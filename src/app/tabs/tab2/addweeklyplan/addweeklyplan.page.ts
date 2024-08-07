import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { StudentlistComponent } from 'src/app/shared/component/studentlist/studentlist.component';

@Component({
  selector: 'app-addweeklyplan',
  templateUrl: './addweeklyplan.page.html',
  styleUrls: ['./addweeklyplan.page.scss'],
})
export class AddweeklyplanPage implements OnInit {


  selectedStudentList: Array<any> = [];
  addHomeWork: FormGroup;
  classList: Array<any> = [];
  sectionList: Array<any> = [];
  subjectList: Array<any> = [];
  weekList: Array<any> = [];
  submited = false;

  constructor(private _api: ApiService, private _router: Router, private _fb: FormBuilder, private modalController: ModalController) {
    this.addHomeWork = _fb.group({
      class: [null, Validators.required],
      section: [null, Validators.required],
      subject: [null, Validators.required],
      type: ['ALL', Validators.required],
      week_no: [null, Validators.required],
      details: [null, Validators.required]
    })
  }

  ngOnInit() {
    this.addHomeWork.value.studentList = [];

    this._api.classList({}).subscribe(v => {
      this.classList = v.payload;
    })
    this._api.subjectList({}).subscribe(v=>{
      this.subjectList = v.payload;
    })
    this._api.weekList({}).subscribe(v=>{
      this.weekList = v.payload;
    })

  }
  triggerEvent(e: any) {
    let v = this.classList.find(v => v.class_name == e.detail.value);
    this.sectionList = v.section;
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: StudentlistComponent,
      cssClass: 'my-custom-class',
      
    });

    await modal.present();
    const { data, role } = await modal.onWillDismiss();
    this.selectedStudentList = data.studentList;
    this.addHomeWork.value.studentlist = this.selectedStudentList;
    this.finalSubmit(this.addHomeWork.value)

  }

  submit() {
    this.addHomeWork.markAllAsTouched();
    if (this.addHomeWork.valid) {
      this.submited = true;
      if (this.addHomeWork.value.type == 'selected') {
        this.presentModal();
      } else {
        this.finalSubmit(this.addHomeWork.value)
      }
    }else{

    }
  }
  finalSubmit(value: any) {
    if (this.addHomeWork.valid) {
      this._api.addWeeklyPlan(this.addHomeWork.value).subscribe(v=>{
        this.addHomeWork.reset();
        alert(v.message);
        this._router.navigate(['/tabs/tab2/weeklyplan']);
        this.submited = false;

      },rr=>{
        this.submited = false;

      });
    }
  }
}
