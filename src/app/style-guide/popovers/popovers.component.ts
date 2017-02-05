import { Component } from '@angular/core';

@Component({
  selector: 'app-style-guide-popovers',
  template: '<app-style-guide-code [id]="\'popovers\'" [title]="\'Popovers\'" [bootstrapUrlSuffix]="\'/components/popovers\'"></app-style-guide-code>',
  styleUrls: ['../style-guide.component.scss']
})

export class StyleGuidePopoversComponent { }
