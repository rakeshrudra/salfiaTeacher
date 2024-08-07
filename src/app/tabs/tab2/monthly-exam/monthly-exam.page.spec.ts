import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MonthlyExamPage } from './monthly-exam.page';

describe('MonthlyExamPage', () => {
  let component: MonthlyExamPage;
  let fixture: ComponentFixture<MonthlyExamPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyExamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
