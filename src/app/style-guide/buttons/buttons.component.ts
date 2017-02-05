import { Component } from '@angular/core';

@Component({
  selector: 'app-style-guide-buttons',
  template: '<app-style-guide-code [id]="\'buttons\'" [title]="\'Buttons\'" [bootstrapUrlSuffix]="\'/components/buttons\'"></app-style-guide-code>',
  styleUrls: ['../style-guide.component.scss']
})

export class StyleGuideButtonsComponent { }
