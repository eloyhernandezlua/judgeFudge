import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReseniasComidaPage } from './resenias-comida.page';

describe('ReseniasComidaPage', () => {
  let component: ReseniasComidaPage;
  let fixture: ComponentFixture<ReseniasComidaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReseniasComidaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReseniasComidaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
