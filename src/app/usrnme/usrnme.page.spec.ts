import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrnmePage } from './usrnme.page';

describe('UsrnmePage', () => {
  let component: UsrnmePage;
  let fixture: ComponentFixture<UsrnmePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsrnmePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsrnmePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
