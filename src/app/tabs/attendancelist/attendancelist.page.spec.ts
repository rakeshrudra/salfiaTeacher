import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AttendancelistPage } from './attendancelist.page';

describe('AttendancelistPage', () => {
  let component: AttendancelistPage;
  let fixture: ComponentFixture<AttendancelistPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendancelistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
