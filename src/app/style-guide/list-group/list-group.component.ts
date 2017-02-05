import { Component } from '@angular/core';

@Component({
  selector: 'app-style-guide-list-group',
  template: '<app-style-guide-code [id]="\'list-group\'" [title]="\'List Group\'" [bootstrapUrlSuffix]="\'/components/list-group\'"></app-style-guide-code>',
  styleUrls: ['../style-guide.component.scss']
})

export class StyleGuideListGroupComponent { }
