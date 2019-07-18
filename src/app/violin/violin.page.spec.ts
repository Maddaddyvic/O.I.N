import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViolinPage } from './violin.page';

describe('ViolinPage', () => {
  let component: ViolinPage;
  let fixture: ComponentFixture<ViolinPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViolinPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViolinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
