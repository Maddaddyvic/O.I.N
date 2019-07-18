import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaxaphonePage } from './saxaphone.page';

describe('SaxaphonePage', () => {
  let component: SaxaphonePage;
  let fixture: ComponentFixture<SaxaphonePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaxaphonePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaxaphonePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
