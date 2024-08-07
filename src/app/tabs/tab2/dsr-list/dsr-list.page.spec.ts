import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DsrListPage } from './dsr-list.page';

describe('DsrListPage', () => {
  let component: DsrListPage;
  let fixture: ComponentFixture<DsrListPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DsrListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
