import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CargoFormPage } from './cargo-form.page';

describe('CargoFormPage', () => {
  let component: CargoFormPage;
  let fixture: ComponentFixture<CargoFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargoFormPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CargoFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
