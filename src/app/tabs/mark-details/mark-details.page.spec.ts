import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MarkDetailsPage } from './mark-details.page';

describe('MarkDetailsPage', () => {
  let component: MarkDetailsPage;
  let fixture: ComponentFixture<MarkDetailsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
