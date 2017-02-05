import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
@Component({
  selector: 'app-style-guide-content-figures',
  templateUrl: './content-figures-markup.html',
  styleUrls: ['../style-guide.component.scss']
})
export class StyleGuideContentFiguresComponent implements OnInit {
  @ViewChild('markup') markup: ElementRef;
  html: string;
  ngOnInit() {
    this.html = this.markup.nativeElement.innerHTML;
  }
}
