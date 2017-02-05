/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpModule } from '@angular/http';

import { StyleGuideDropdownsComponent } from './dropdowns.component';
import { StyleGuideCodeComponent } from '../code/code.component';
import { SanitizeHtmlPipe } from '../../core/pipes/sanitize-html.pipe';

describe('StyleGuideDropdownsComponent', () => {
  let component: StyleGuideDropdownsComponent;
  let fixture: ComponentFixture<StyleGuideDropdownsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule],
      declarations: [ StyleGuideDropdownsComponent, StyleGuideCodeComponent, SanitizeHtmlPipe]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleGuideDropdownsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // TODO: (jlivingston@seamgen.com) - Fix unit tests
  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
