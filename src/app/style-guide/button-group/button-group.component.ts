import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
@Component({
  selector: 'app-style-guide-button-group',
  templateUrl: './button-group-markup.html',
  styleUrls: ['../style-guide.component.scss']
})
export class StyleGuideButtonGroupComponent implements OnInit {
  @ViewChild('markup') markup: ElementRef;
  html: string;
  ngOnInit() {
    this.html = this.markup.nativeElement.innerHTML;
  }
}
