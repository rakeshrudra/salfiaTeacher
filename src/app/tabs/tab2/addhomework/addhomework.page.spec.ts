import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddhomeworkPage } from './addhomework.page';

describe('AddhomeworkPage', () => {
  let component: AddhomeworkPage;
  let fixture: ComponentFixture<AddhomeworkPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddhomeworkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
