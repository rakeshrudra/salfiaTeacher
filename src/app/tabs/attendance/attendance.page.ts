import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.page.html',
  styleUrls: ['./attendance.page.scss'],
})
export class AttendancePage implements OnInit {


  classList: Array<any> = [];
  selectedStudentList: Array<any> = [];
  sectionList: Array<any> = [];
  studentList: Array<any> = [];
  filterForm: FormGroup;
  loader = false;
  attendencelist: Array<any>=[];
  constructor(private _api: ApiService, private _router: Router, private _fb: FormBuilder, private modalCtrl: ModalController) {
    this.filterForm = _fb.group({
      date: [null, Validators.required],
      class: [null, Validators.required],
      section: [null, Validators.required]
    })
    /* */
  }

  ngOnInit() { }
  ionViewDidEnter() {
   this.studentList=[];
   this.selectedStudentList=[];
    this._api.classList({}).subscribe(v => {
      this.classList = v.payload;
    }).add(() => {
      //this.search();
    })
  }
  triggerEvent(e: any) {
    let v = this.classList.find(v => v.class_name == e.detail.value);
    this.sectionList = v.section;
  }
  search() {
    this.filterForm.markAllAsTouched();
    if (this.filterForm.valid) {
      this.loader = true;
      this._api.studentList(this.filterForm.value).subscribe(v => {
        this.loader = false;
        this.studentList = v.payload;
        this.studentList.map((e)=>e.date = this.filterForm.value.date)
      }, er => {
        this.loader = false;
      }).add(()=>{
        this._api.attendanceList(this.filterForm.value).subscribe(v=>{
          this.attendencelist = v.payload
        })
      })
    }
  }
  selected(data: any) {
    this.studentList.map((v, index) => {
      if (v.id == data.id) {
        v.selected = !v.selected ? true : false;
      }
    })
    this.selectedStudentList = this.studentList.filter(v => v.selected)
    console.log(this.selectedStudentList, "this.selectedStudentList")
  }

  submit() {
    this.loader = true;

    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    console.log(this.studentList, "studentList")
    this._api.addattendance({ date: this.filterForm.value.data, studentlist: this.studentList }).subscribe(v => {
      alert(v.message)
      this.loader = false;
      this._router.navigate(['/tabs/attendancelist'])

    }, er => {
      this.loader = false;
    })
  }
  

}