import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormPPage } from './form-p.page';

describe('FormPPage', () => {
  let component: FormPPage;
  let fixture: ComponentFixture<FormPPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
