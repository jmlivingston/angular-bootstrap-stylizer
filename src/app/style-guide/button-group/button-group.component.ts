import { Component } from '@angular/core';

@Component({
  selector: 'app-style-guide-button-group',
  template: '<app-style-guide-code [id]="\'button-group\'" [title]="\'Button Group\'" [bootstrapUrlSuffix]="\'/components/button-group\'"></app-style-guide-code>',
  styleUrls: ['../style-guide.component.scss']
})

export class StyleGuideButtonGroupComponent { }
