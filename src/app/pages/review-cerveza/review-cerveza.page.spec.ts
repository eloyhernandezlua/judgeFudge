import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewCervezaPage } from './review-cerveza.page';

describe('ReviewCervezaPage', () => {
  let component: ReviewCervezaPage;
  let fixture: ComponentFixture<ReviewCervezaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewCervezaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewCervezaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
