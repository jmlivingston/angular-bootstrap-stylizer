/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpModule } from '@angular/http';

import { StyleGuideNavBarComponent } from './nav-bar.component';
import { StyleGuideCodeComponent } from '../code/code.component';
import { SanitizeHtmlPipe } from '../../core/pipes/sanitize-html.pipe';

describe('StyleGuideNavBarComponent', () => {
  let component: StyleGuideNavBarComponent;
  let fixture: ComponentFixture<StyleGuideNavBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      declarations: [StyleGuideNavBarComponent, StyleGuideCodeComponent, SanitizeHtmlPipe]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleGuideNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // TODO: (jlivingston@seamgen.com) - Fix unit tests
  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
