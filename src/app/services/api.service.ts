import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  login(data:any): Observable<any> {
    return this.http.post<any>('api/teacher/login', data);
  }

  todayActivity(data:any): Observable<{homewWork:Array<any>,weeklyPlan:Array<any>}> {
    return this.http.get<{homewWork:Array<any>,weeklyPlan:Array<any>}>('api/teacher/todayActivity');
  }
  details(data:any): Observable<{payload:Array<any>,message:string}> {
    return this.http.get<{payload:Array<any>,message:string}>('api/teacher/userDetails');
  }


  classList(data:any): Observable<{payload:Array<any>}> {
    return this.http.get<{payload:Array<any>}>('api/admin/class/list');
  }
  subjectList(data:any): Observable<{payload:Array<any>}> {
    return this.http.get<{payload:Array<any>}>('api/admin/subject/list');
  }
  addNotification(data:any): Observable<{payload:Array<any>,message:string}> {
    return this.http.post<{payload:Array<any>,message:string}>('api/teacher/addNotification',data);
  }
  notificationList(data:any): Observable<{payload:Array<any>}> {
    return this.http.get<{payload:Array<any>}>('api/teacher/notification/list');
  }
  addHomework(data:any): Observable<{payload:Array<any>,message:string}> {
    return this.http.post<{payload:Array<any>,message:string}>('api/teacher/addhomework',data);
  }
  addWeeklyPlan(data:any): Observable<{payload:Array<any>,message:string}> {
    return this.http.post<{payload:Array<any>,message:string}>('api/teacher/addWeeklyPlan',data);
  }
  
  weeklyPlanList(data:any): Observable<{payload:Array<any>}> {
    return this.http.get<{payload:Array<any>}>('api/teacher/addWeeklyPlan/list');
  }

  homeworkList(data:any): Observable<{payload:Array<any>}> {
    return this.http.get<{payload:Array<any>}>('api/teacher/homework/list');
  }

  studentList(data:any): Observable<{payload:Array<any>}> {
    return this.http.get<{payload:Array<any>}>('api/admin/student/list',{params:data});
  }
  weekList(data:any): Observable<{payload:Array<any>}> {
    return this.http.get<{payload:Array<any>}>('api/admin/week/list',{params:data});
  }
  // 
  addattendance(data:any): Observable<{payload:Array<any>,message:string}> {
    return this.http.post<{payload:Array<any>,message:string}>('api/teacher/student/addattendance',data);
  }
  
  // 
  addMarks(data:any): Observable<{payload:Array<any>,message:string}> {
    return this.http.post<{payload:Array<any>,message:string}>('api/teacher/student/addMark',data);
  }

  monthAddMark(data:any): Observable<{payload:Array<any>,message:string}> {
    return this.http.post<{payload:Array<any>,message:string}>('api/teacher/student/monthAddMark',data);
  }

  

  markDetails(data:any): Observable<{payload:Array<any>,message:string}> {
    return this.http.get<{payload:Array<any>,message:string}>('api/teacher/student/mark/details');
  }

  monthMarkDetails(data:any): Observable<{payload:Array<any>,message:string}> {
    return this.http.get<{payload:Array<any>,message:string}>('api/teacher/student/monthMark/details');
    
  }
  
  attendanceDetails(data={}): Observable<{payload:Array<any>,message:string}> {
    return this.http.get<{payload:Array<any>,message:string}>('api/teacher/attendance/details');
  }

  
  attendanceList(data:any): Observable<{payload:Array<any>,message:string}> {
    return this.http.get<{payload:Array<any>,message:string}>('api/teacher/attendance/list',{params:data});
  }

  
  marklist(data:any): Observable<{payload:Array<any>,message:string}> {
    return this.http.get<{payload:Array<any>,message:string}>('api/teacher/mark/list',{params:data});
  }

  
  monthMarklist(data:any): Observable<{payload:Array<any>,message:string}> {
    return this.http.get<{payload:Array<any>,message:string}>('api/teacher/student/monthMark/list',{params:data});
  }

  addDsr(data:any): Observable<{payload:Array<any>,message:string}> {
    return this.http.post<{payload:Array<any>,message:string}>('api/teacher/dsr/add',data);
  }

  dsrList(data:any): Observable<{payload:Array<any>,message:string}> {
    return this.http.get<{payload:Array<any>,message:string}>('api/teacher/drsList',{params:data});
  }

  
  
}
