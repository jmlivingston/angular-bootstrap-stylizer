import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
@Component({
  selector: 'app-style-guide-nav-bar',
  templateUrl: './nav-bar-markup.html',
  styleUrls: ['../style-guide.component.scss']
})
export class StyleGuideNavBarComponent implements OnInit {
  @ViewChild('markup') markup: ElementRef;
  html: string;
  ngOnInit() {
    this.html = this.markup.nativeElement.innerHTML;
  }
}

