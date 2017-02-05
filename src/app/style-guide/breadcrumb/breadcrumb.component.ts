import { Component } from '@angular/core';

@Component({
  selector: 'app-style-guide-breadcrumb',
  template: '<app-style-guide-code [id]="\'breadcrumb\'" [title]="\'Breadcrumb\'" [bootstrapUrlSuffix]="\'/components/breadcrumb\'"></app-style-guide-code>',
  styleUrls: ['../style-guide.component.scss']
})

export class StyleGuideBreadcrumbComponent { }
