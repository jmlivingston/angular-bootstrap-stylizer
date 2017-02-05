import { Component } from '@angular/core';

@Component({
  selector: 'app-style-guide-jumbotron',
  template: '<app-style-guide-code [id]="\'jumbotron\'" [title]="\'Jumbotron\'" [bootstrapUrlSuffix]="\'/components/jumbotron\'"></app-style-guide-code>',
  styleUrls: ['../style-guide.component.scss']
})

export class StyleGuideJumbotronComponent { }
