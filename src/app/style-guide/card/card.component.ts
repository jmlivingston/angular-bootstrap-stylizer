import { Component } from '@angular/core';

@Component({
  selector: 'app-style-guide-card',
  template: '<app-style-guide-code [id]="\'card\'" [title]="\'Card\'" [bootstrapUrlSuffix]="\'/components/card\'"></app-style-guide-code>',
  styleUrls: ['../style-guide.component.scss']
})

export class StyleGuideCardComponent { }
