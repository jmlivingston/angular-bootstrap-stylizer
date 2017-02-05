import { Component } from '@angular/core';

@Component({
  selector: 'app-style-guide-nav-bar',
  template: '<app-style-guide-code [id]="\'nav-bar\'" [title]="\'Nav Bar\'" [bootstrapUrlSuffix]="\'/components/navbar\'"></app-style-guide-code>',
  styleUrls: ['../style-guide.component.scss']
})

export class StyleGuideNavBarComponent { }
