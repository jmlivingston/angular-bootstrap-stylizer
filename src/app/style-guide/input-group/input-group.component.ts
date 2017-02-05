import { Component } from '@angular/core';

@Component({
  selector: 'app-style-guide-input-group',
  template: '<app-style-guide-code [id]="\'input-group\'" [title]="\'Input Group\'" [bootstrapUrlSuffix]="\'/components/input-group\'"></app-style-guide-code>',
  styleUrls: ['../style-guide.component.scss']
})

export class StyleGuideInputGroupComponent { }
