import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormEPage } from './form-e.page';

describe('FormEPage', () => {
  let component: FormEPage;
  let fixture: ComponentFixture<FormEPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
