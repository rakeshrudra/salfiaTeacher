import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { StudentlistComponent } from 'src/app/shared/component/studentlist/studentlist.component';

@Component({
  selector: 'app-adddsr',
  templateUrl: './adddsr.page.html',
  styleUrls: ['./adddsr.page.scss'],
})
export class AdddsrPage implements OnInit {

  selectedStudentList: Array<any> = [];
  addHomeWork: FormGroup;
  classList: Array<any> = [];
  sectionList: Array<any> = [];
  subjectList: Array<any> = [];
  chapterList: Array<any> = [];
  submited = false;
  periodList = ['1st','2nd','3rd','4th','5th','6th','7th','8th']

  constructor(private _api: ApiService, private _router: Router, private _fb: FormBuilder, private modalController: ModalController) {
    this.addHomeWork = _fb.group({
      class: [null, Validators.required],
      section: [null, Validators.required],
      subject: [null, Validators.required],
      chapter: [null, Validators.required],
      period: [null, Validators.required],
      date: [null, Validators.required],
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

  }
  triggerEvent(e: any) {
    let v = this.classList.find(v => v.class_name == e.detail.value);
    this.sectionList = v.section;
  }
  triggerSubjectEvent(e: any) {
    let v = this.subjectList.find(v => v.subject_name == e.detail.value);
    this.chapterList = v.chapters;
  }
  async presentModal() {
    let formdata = this.addHomeWork.value;
    const modal = await this.modalController.create({
      component: StudentlistComponent,
      cssClass: 'my-custom-class',
      componentProps:{
        data: formdata
      }
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
        this.finalSubmit(this.addHomeWork.value)
    }else{
      this.submited = false;
    }
  }
  selectStudent(any:any){
    if (this.addHomeWork.value.type == 'selected') {
      this.presentModal();
    } 
  }
  finalSubmit(value: any) {
    if (this.addHomeWork.valid) {
      this._api.addDsr(this.addHomeWork.value).subscribe(v=>{
        this.addHomeWork.reset();
        this.submited = false;
        alert(v.message);
        this._router.navigate(['/tabs/tab2/dsr-list'])
      },er=>{
        this.submited = false;

      });
    }
  }
}
