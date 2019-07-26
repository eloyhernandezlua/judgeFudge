import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewComidaPage } from './review-comida.page';

describe('ReviewComidaPage', () => {
  let component: ReviewComidaPage;
  let fixture: ComponentFixture<ReviewComidaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewComidaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewComidaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
