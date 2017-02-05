import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
@Component({
  selector: 'app-style-guide-carousel',
  templateUrl: './carousel-markup.html',
  styleUrls: ['../style-guide.component.scss']
})
export class StyleGuideCarouselComponent implements OnInit {
  @ViewChild('markup') markup: ElementRef;
  html: string;
  ngOnInit() {
    this.html = this.markup.nativeElement.innerHTML;
  }
}
