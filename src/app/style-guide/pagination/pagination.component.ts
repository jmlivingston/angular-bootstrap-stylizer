import { Component } from '@angular/core';

@Component({
  selector: 'app-style-guide-pagination',
  template: '<app-style-guide-code [id]="\'pagination\'" [title]="\'Pagination\'" [bootstrapUrlSuffix]="\'/components/pagination\'"></app-style-guide-code>',
  styleUrls: ['../style-guide.component.scss']
})

export class StyleGuidePaginationComponent { }
