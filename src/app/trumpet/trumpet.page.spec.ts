import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrumpetPage } from './trumpet.page';

describe('TrumpetPage', () => {
  let component: TrumpetPage;
  let fixture: ComponentFixture<TrumpetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrumpetPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrumpetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
