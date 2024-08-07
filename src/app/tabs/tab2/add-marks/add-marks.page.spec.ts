import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddMarksPage } from './add-marks.page';

describe('AddMarksPage', () => {
  let component: AddMarksPage;
  let fixture: ComponentFixture<AddMarksPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMarksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
