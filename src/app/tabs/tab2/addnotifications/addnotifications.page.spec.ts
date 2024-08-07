import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddnotificationsPage } from './addnotifications.page';

describe('AddnotificationsPage', () => {
  let component: AddnotificationsPage;
  let fixture: ComponentFixture<AddnotificationsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnotificationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
