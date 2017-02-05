import { Component } from '@angular/core';
@Component({
  selector: 'app-style-guide-tooltips',
  template: '<app-style-guide-code [id]="\'tooltips\'" [title]="\'Tooltips\'" [bootstrapUrlSuffix]="\'/components/tooltips\'"></app-style-guide-code>',
  styleUrls: ['../style-guide.component.scss']
})
export class StyleGuideTooltipsComponent { }
