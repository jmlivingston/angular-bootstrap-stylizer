import { Component } from '@angular/core';

@Component({
  selector: 'app-style-guide-tag',
  template: '<app-style-guide-code [id]="\'tag\'" [title]="\'Tag\'" [bootstrapUrlSuffix]="\'/components/tag\'"></app-style-guide-code>',
  styleUrls: ['../style-guide.component.scss']
})
export class StyleGuideTagComponent { }
