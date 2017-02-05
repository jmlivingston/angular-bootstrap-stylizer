import { Component } from '@angular/core';

@Component({
  selector: 'app-style-guide-modal',
  template: '<app-style-guide-code [id]="\'modal\'" [title]="\'Modal\'" [bootstrapUrlSuffix]="\'/components/modal\'"></app-style-guide-code>',
  styleUrls: ['../style-guide.component.scss']
})

export class StyleGuideModalComponent { }
