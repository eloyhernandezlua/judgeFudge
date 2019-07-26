import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddComidaPage } from './add-comida.page';

describe('AddComidaPage', () => {
  let component: AddComidaPage;
  let fixture: ComponentFixture<AddComidaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddComidaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddComidaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
