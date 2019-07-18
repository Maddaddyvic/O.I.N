import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuitarPage } from './guitar.page';

describe('GuitarPage', () => {
  let component: GuitarPage;
  let fixture: ComponentFixture<GuitarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuitarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuitarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
