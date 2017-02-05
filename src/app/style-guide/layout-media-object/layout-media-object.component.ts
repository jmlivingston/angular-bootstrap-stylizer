import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
@Component({
  selector: 'app-style-guide-layout-media-object',
  templateUrl: './layout-media-object-markup.html',
  styleUrls: ['../style-guide.component.scss']
})
export class StyleGuideLayoutMediaObjectComponent implements OnInit {
  @ViewChild('markup') markup: ElementRef;
  html: string;
  ngOnInit() {
    this.html = this.markup.nativeElement.innerHTML;
  }
}
