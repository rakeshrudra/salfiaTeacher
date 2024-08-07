import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MarkslistPage } from './markslist.page';

describe('MarkslistPage', () => {
  let component: MarkslistPage;
  let fixture: ComponentFixture<MarkslistPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkslistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
