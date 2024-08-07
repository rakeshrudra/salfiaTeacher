import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MonthlyExamMarkPage } from './monthly-exam-mark.page';

describe('MonthlyExamMarkPage', () => {
  let component: MonthlyExamMarkPage;
  let fixture: ComponentFixture<MonthlyExamMarkPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyExamMarkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
