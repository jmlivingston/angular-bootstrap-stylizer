import { Component } from '@angular/core';

@Component({
  selector: 'app-style-guide-content-tables',
  template: '<app-style-guide-code [id]="\'content-tables\'" [title]="\'Content - Tables\'" [bootstrapUrlSuffix]="\'/content/tables\'"></app-style-guide-code>',
  styleUrls: ['../style-guide.component.scss']
})

export class StyleGuideContentTablesComponent { }