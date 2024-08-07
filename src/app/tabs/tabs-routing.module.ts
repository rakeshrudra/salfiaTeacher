import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('./tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('./tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('./tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: 'attendance',
        loadChildren: () => import('./attendance/attendance.module').then(m => m.AttendancePageModule)
      },
      {
        path: 'attendancelist',
        loadChildren: () => import('./attendancelist/attendancelist.module').then(m => m.AttendancelistPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  },
  {
    path: 'attendance-details',
    loadChildren: () => import('./attendance-details/attendance-details.module').then( m => m.AttendanceDetailsPageModule)
  },
  {
    path: 'mark-details',
    loadChildren: () => import('./mark-details/mark-details.module').then( m => m.MarkDetailsPageModule)
  },
  {
    path: 'month-mark-details',
    loadChildren: () => import('./month-mark-details/month-mark-details.module').then( m => m.MonthMarkDetailsPageModule)
  },
  {
    path: 'month-exam-details',
    loadChildren: () => import('./month-exam-details/month-exam-details.module').then( m => m.MonthExamDetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule { }
