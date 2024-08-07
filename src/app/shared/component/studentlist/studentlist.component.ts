import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.scss'],
})
export class StudentlistComponent  implements OnInit {

  @Input('data') data:any;

  classList:Array<any>=[];
  selectedStudentList:Array<any>=[];
  sectionList:Array<any>=[];
  studentList:Array<any>=[];
  filterForm: FormGroup;
  constructor(private _api: ApiService, private _fb: FormBuilder, private modalCtrl: ModalController) {
    this.filterForm = _fb.group({
      class:[null],
      section:[null]
    })
   /* */
   }
  
  ngOnInit() {
    this.filterForm.patchValue({
      class:this.data.class?this.data.class:null,
      section:this.data.Section?this.data.Section:null
    })
    this._api.classList({}).subscribe(v=>{
      this.classList = v.payload;
    }).add(()=>{
      this.search();
    })
  }
  triggerEvent(e:any){
    let v = this.classList.find(v=>v.class_name == e.detail.value);
    this.sectionList = v.section;
  }
  search(){
    this._api.studentList(this.filterForm.value).subscribe(v=>{
      this.studentList = v.payload;
    })
  }
  selected(data:any){
    this.studentList.map((v,index)=>{
      if(v.id == data.id){
        v.selected = !v.selected?true:false;
      }
    })
    this.selectedStudentList = this.studentList.filter(v=>v.selected)
    console.log(this.selectedStudentList,"this.selectedStudentList")
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      studentList: this.selectedStudentList
    });
  }

}