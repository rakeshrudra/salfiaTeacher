import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-add-marks',
  templateUrl: './add-marks.page.html',
  styleUrls: ['./add-marks.page.scss'],
})
export class AddMarksPage implements OnInit {



  subjectList: Array<any> = [];
  classList: Array<any> = [];
  sectionList: Array<any> = [];
  studentList: Array<any> = [];
  selectedStudentList: Array<any> = [];
  markList: Array<any> = [];

  filterForm: FormGroup;
  marksForm: FormGroup;
  loader = false;
  constructor(private _api: ApiService, private _router: Router, private _fb: FormBuilder, private modalCtrl: ModalController) {
    this.filterForm = _fb.group({
      class: [null, Validators.required],
      subject: [null, Validators.required],
      terms: [null, Validators.required],
      outof: [null, Validators.required],
      section: [null, Validators.required]
    })
    /* */
    this.marksForm = _fb.group({
      students: _fb.array([])
    })
  }

  ngOnInit() {
    this._api.classList({}).subscribe(v => {
      this.classList = v.payload;
    }).add(() => {
      //this.search();
      this._api.subjectList({}).subscribe(v => {
        this.subjectList = v.payload
      })
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
        this.studentList.map((data, index) => {
          this.addStudent(data)
        })
      }, er => {
        this.loader = false;
      }).add(()=>{
        this._api.marklist(this.filterForm.value).subscribe(v=>{
          this.markList = v.payload
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
     this.marksForm.markAllAsTouched();
if(this.marksForm.valid){
  this.loader = true;

     this._api.addMarks(this.marksForm.value).subscribe(v=>{
       alert(v.message)
       this.loader = false;
       this._router.navigate(['/tabs/tab2/markslist'])
     },er=>{
       this.loader = false;
     })
  }
}
  get days(): FormArray {
    return this.marksForm.get('students') as FormArray;
  }

  addStudent(data: any): void {
    this.days.push(this.studentDetails(data));
  }

  studentDetails(data: any): FormGroup {
    return this._fb.group({
      student_id: [data.student_id], // Default can also be ''
      class: [data.class], // Default can also be ''
      section: [data.section], // Default can also be ''
      outof: [this.filterForm.value.outof], // Default can also be ''
      subject: [this.filterForm.value.subject], // Default can also be ''
      terms: [this.filterForm.value.terms], // Default can also be ''
      mark: [null,Validators.required], // Default can also be ''
    });
  }

}