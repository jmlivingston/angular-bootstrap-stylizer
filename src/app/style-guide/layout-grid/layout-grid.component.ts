import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
@Component({
  selector: 'app-style-guide-layout-grid',
  templateUrl: './layout-grid-markup.html',
  styleUrls: ['../style-guide.component.scss']
})
export class StyleGuideLayoutGridComponent implements OnInit {
  @ViewChild('markup') markup: ElementRef;
  html: string;
  ngOnInit() {
    this.html = this.markup.nativeElement.innerHTML;
  }
}
