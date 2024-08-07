import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdddsrPage } from './adddsr.page';

describe('AdddsrPage', () => {
  let component: AdddsrPage;
  let fixture: ComponentFixture<AdddsrPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AdddsrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
