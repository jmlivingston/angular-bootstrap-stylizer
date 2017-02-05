import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
@Component({
  selector: 'app-style-guide-content-tables',
  templateUrl: './content-tables-markup.html',
  styleUrls: ['../style-guide.component.scss']
})
export class StyleGuideContentTablesComponent implements OnInit {
  @ViewChild('markup') markup: ElementRef;
  html: string;
  ngOnInit() {
    this.html = this.markup.nativeElement.innerHTML;
  }
}