import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
@Component({
  selector: 'app-style-guide-list-group',
  templateUrl: './list-group-markup.html',
  styleUrls: ['../style-guide.component.scss']
})
export class StyleGuideListGroupComponent implements OnInit {
  @ViewChild('markup') markup: ElementRef;
  html: string;
  ngOnInit() {
    this.html = this.markup.nativeElement.innerHTML;
  }
}
