import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
@Component({
  selector: 'app-style-guide-input-group',
  templateUrl: './input-group-markup.html',
  styleUrls: ['../style-guide.component.scss']
})
export class StyleGuideInputGroupComponent implements OnInit {
  @ViewChild('markup') markup: ElementRef;
  html: string;
  ngOnInit() {
    this.html = this.markup.nativeElement.innerHTML;
  }
}
