import { Component } from '@angular/core';

@Component({
  selector: 'app-style-guide-collapse',
  template: '<app-style-guide-code [id]="\'collapse\'" [title]="\'Collapse\'" [bootstrapUrlSuffix]="\'/components/collapse\'"></app-style-guide-code>',
  styleUrls: ['../style-guide.component.scss']
})

export class StyleGuideCollapseComponent { }
