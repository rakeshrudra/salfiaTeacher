import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AttendanceDetailsPage } from './attendance-details.page';

describe('AttendanceDetailsPage', () => {
  let component: AttendanceDetailsPage;
  let fixture: ComponentFixture<AttendanceDetailsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendanceDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
