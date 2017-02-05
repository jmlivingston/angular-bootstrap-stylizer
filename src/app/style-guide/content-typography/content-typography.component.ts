import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
@Component({
  selector: 'app-style-guide-content-typography',
  templateUrl: './content-typography-markup.html',
  styleUrls: ['../style-guide.component.scss']
})
export class StyleGuideContentTypographyComponent implements OnInit {
  @ViewChild('markup') markup: ElementRef;
  html: string;
  ngOnInit() {
    this.html = this.markup.nativeElement.innerHTML;
  }
}

