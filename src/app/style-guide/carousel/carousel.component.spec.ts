/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpModule } from '@angular/http';

import { StyleGuideCarouselComponent } from './carousel.component';
import { StyleGuideCodeComponent } from '../code/code.component';
import { SanitizeHtmlPipe } from '../../core/pipes/sanitize-html.pipe';

describe('StyleGuideCarouselComponent', () => {
  let component: StyleGuideCarouselComponent;
  let fixture: ComponentFixture<StyleGuideCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      declarations: [ StyleGuideCarouselComponent, StyleGuideCodeComponent, SanitizeHtmlPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleGuideCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // TODO: (jlivingston@seamgen.com) - Fix unit tests
  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
