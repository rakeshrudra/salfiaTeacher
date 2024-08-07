import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeeklyplanPage } from './weeklyplan.page';

describe('WeeklyplanPage', () => {
  let component: WeeklyplanPage;
  let fixture: ComponentFixture<WeeklyplanPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklyplanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
