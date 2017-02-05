import { Component } from '@angular/core';

@Component({
  selector: 'app-style-guide-forms',
  template: '<app-style-guide-code [id]="\'forms\'" [title]="\'Forms\'" [bootstrapUrlSuffix]="\'/components/forms\'"></app-style-guide-code>',
  styleUrls: ['../style-guide.component.scss']
})

export class StyleGuideFormsComponent { }
