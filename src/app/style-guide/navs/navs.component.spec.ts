/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpModule } from '@angular/http';

import { StyleGuideNavsComponent } from './navs.component';
import { StyleGuideCodeComponent } from '../code/code.component';
import { SanitizeHtmlPipe } from '../../core/pipes/sanitize-html.pipe';

describe('StyleGuideNavsComponent', () => {
  let component: StyleGuideNavsComponent;
  let fixture: ComponentFixture<StyleGuideNavsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      declarations: [ StyleGuideNavsComponent, StyleGuideCodeComponent, SanitizeHtmlPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleGuideNavsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // TODO: (jlivingston@seamgen.com) - Fix unit tests
  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
