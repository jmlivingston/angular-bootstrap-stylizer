import { Component } from '@angular/core';

@Component({
  selector: 'app-style-guide-carousel',
  template: '<app-style-guide-code [id]="\'carousel\'" [title]="\'Carousel\'" [bootstrapUrlSuffix]="\'/components/carousel\'"></app-style-guide-code>',
  styleUrls: ['../style-guide.component.scss']
})

export class StyleGuideCarouselComponent { }
