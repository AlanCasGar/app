import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormAPage } from './form-a.page';

describe('FormAPage', () => {
  let component: FormAPage;
  let fixture: ComponentFixture<FormAPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
