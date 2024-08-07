import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab2Page } from './tab2.page';

const routes: Routes = [
  {
    path: '',
    component: Tab2Page,
  },
  {
    path: 'notifications',
    loadChildren: () => import('./notifications/notifications.module').then( m => m.NotificationsPageModule)
  },
  {
    path: 'addnotifications',
    loadChildren: () => import('./addnotifications/addnotifications.module').then( m => m.AddnotificationsPageModule)
  },
  {
    path: 'homework',
    loadChildren: () => import('./homework/homework.module').then( m => m.HomeworkPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./addhomework/addhomework.module').then( m => m.AddhomeworkPageModule)
  },
  {
    path: 'weeklyplan',
    loadChildren: () => import('./weeklyplan/weeklyplan.module').then( m => m.WeeklyplanPageModule)
  },
  {
    path: 'addweeklyplan',
    loadChildren: () => import('./addweeklyplan/addweeklyplan.module').then( m => m.AddweeklyplanPageModule)
  },
  {
    path: 'addhomework',
    loadChildren: () => import('./addhomework/addhomework.module').then( m => m.AddhomeworkPageModule)
  },
  {
    path: 'add-marks',
    loadChildren: () => import('./add-marks/add-marks.module').then( m => m.AddMarksPageModule)
  },
  {
    path: 'markslist',
    loadChildren: () => import('./markslist/markslist.module').then( m => m.MarkslistPageModule)
  },
  {
    path: 'monthly-exam',
    loadChildren: () => import('./monthly-exam/monthly-exam.module').then( m => m.MonthlyExamPageModule)
  },
  {
    path: 'monthly-exam-mark',
    loadChildren: () => import('./monthly-exam-mark/monthly-exam-mark.module').then( m => m.MonthlyExamMarkPageModule)
  },
  {
    path: 'dsr-list',
    loadChildren: () => import('./dsr-list/dsr-list.module').then( m => m.DsrListPageModule)
  },
  {
    path: 'adddsr',
    loadChildren: () => import('./adddsr/adddsr.module').then( m => m.AdddsrPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab2PageRoutingModule {}
