import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCervezaPage } from './add-cerveza.page';

describe('AddCervezaPage', () => {
  let component: AddCervezaPage;
  let fixture: ComponentFixture<AddCervezaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCervezaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCervezaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
