import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MonthExamDetailsPage } from './month-exam-details.page';

describe('MonthExamDetailsPage', () => {
  let component: MonthExamDetailsPage;
  let fixture: ComponentFixture<MonthExamDetailsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthExamDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
