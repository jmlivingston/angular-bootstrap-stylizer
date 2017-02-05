import { Component } from '@angular/core';

@Component({
  selector: 'app-style-guide-progress',
  template: '<app-style-guide-code [id]="\'progress\'" [title]="\'Progress\'" [bootstrapUrlSuffix]="\'/components/progress\'"></app-style-guide-code>',
  styleUrls: ['../style-guide.component.scss']
})

export class StyleGuideProgressComponent { }
