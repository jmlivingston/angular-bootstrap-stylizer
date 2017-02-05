import { Component } from '@angular/core';

@Component({
  selector: 'app-style-guide-content-images',
  template: '<app-style-guide-code [id]="\'content-images\'" [title]="\'Content - Images\'" [bootstrapUrlSuffix]="\'/content/images\'"></app-style-guide-code>',
  styleUrls: ['../style-guide.component.scss']
})

export class StyleGuideContentImagesComponent { }
