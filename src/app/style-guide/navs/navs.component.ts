import { Component } from '@angular/core';

@Component({
  selector: 'app-style-guide-navs',
  template: '<app-style-guide-code [id]="\'navs\'" [title]="\'Navs\'" [bootstrapUrlSuffix]="\'/components/navs\'"></app-style-guide-code>',
  styleUrls: ['../style-guide.component.scss']
})

export class StyleGuideNavsComponent { }
