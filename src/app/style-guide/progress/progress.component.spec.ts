/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpModule } from '@angular/http';

import { StyleGuideProgressComponent } from './progress.component';
import { StyleGuideCodeComponent } from '../code/code.component';
import { SanitizeHtmlPipe } from '../../core/pipes/sanitize-html.pipe';

describe('StyleGuideProgressComponent', () => {
  let component: StyleGuideProgressComponent;
  let fixture: ComponentFixture<StyleGuideProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StyleGuideProgressComponent, StyleGuideCodeComponent, SanitizeHtmlPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleGuideProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // TODO: (jlivingston@seamgen.com) - Fix unit tests
  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});

