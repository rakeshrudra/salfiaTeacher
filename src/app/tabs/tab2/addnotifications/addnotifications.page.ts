import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { StudentlistComponent } from 'src/app/shared/component/studentlist/studentlist.component';

@Component({
  selector: 'app-addnotifications',
  templateUrl: './addnotifications.page.html',
  styleUrls: ['./addnotifications.page.scss'],
})
export class AddnotificationsPage implements OnInit {


  selectedStudentList:Array<any>=[];
  addHomeWork: FormGroup;
  classList:Array<any>=[];
  sectionList:Array<any>=[];
  submited = false;

  constructor(private _api: ApiService, private _fb: FormBuilder, private modalController: ModalController, private _router: Router) { 
    this.addHomeWork = _fb.group({
      class:[null, Validators.required],
      section:[null,Validators.required],
      type:[null,Validators.required],
      title:[null,Validators.required],
      notification_type:[null,Validators.required],
      studentlist:[[]],
      details:[null, Validators.required]
    })
  }
  
  ngOnInit() {
    this.addHomeWork.value.studentList = [];

    this._api.classList({}).subscribe(v=>{
      this.classList = v.payload;
    })
  }
  triggerEvent(e:any){
    let v = this.classList.find(v=>v.class_name == e.detail.value);
    this.sectionList = v.section;
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
     this.addHomeWork.value.studentList = this.selectedStudentList;
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
      this._api.addNotification(this.addHomeWork.value).subscribe(v=>{
        this.addHomeWork.reset();
        alert(v.message);
        this.submited = false;

        this._router.navigate(['/tabs/tab2/homework'])
      },er=>{
        this.submited = false;
      });
    }
  }
}