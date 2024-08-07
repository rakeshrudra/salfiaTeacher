import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MonthMarkDetailsPage } from './month-mark-details.page';

describe('MonthMarkDetailsPage', () => {
  let component: MonthMarkDetailsPage;
  let fixture: ComponentFixture<MonthMarkDetailsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthMarkDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
