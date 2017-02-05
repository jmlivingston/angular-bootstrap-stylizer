import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
@Component({
  selector: 'app-style-guide-forms',
  templateUrl: './forms-markup.html',
  styleUrls: ['../style-guide.component.scss']
})
export class StyleGuideFormsComponent implements OnInit {
  @ViewChild('markup') markup: ElementRef;
  html: string;
  ngOnInit() {
    this.html = this.markup.nativeElement.innerHTML;
  }
}