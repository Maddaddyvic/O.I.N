import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrombonePage } from './trombone.page';

describe('TrombonePage', () => {
  let component: TrombonePage;
  let fixture: ComponentFixture<TrombonePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrombonePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrombonePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
