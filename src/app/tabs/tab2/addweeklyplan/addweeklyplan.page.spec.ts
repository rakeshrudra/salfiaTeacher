import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddweeklyplanPage } from './addweeklyplan.page';

describe('AddweeklyplanPage', () => {
  let component: AddweeklyplanPage;
  let fixture: ComponentFixture<AddweeklyplanPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddweeklyplanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
