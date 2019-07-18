import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TacosPage } from './tacos.page';

describe('TacosPage', () => {
  let component: TacosPage;
  let fixture: ComponentFixture<TacosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TacosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TacosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
