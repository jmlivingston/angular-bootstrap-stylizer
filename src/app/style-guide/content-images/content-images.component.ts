import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
@Component({
  selector: 'app-style-guide-content-images',
  templateUrl: './content-images-markup.html',
  styleUrls: ['../style-guide.component.scss']
})
export class StyleGuideContentImagesComponent implements OnInit {
  @ViewChild('markup') markup: ElementRef;
  html: string;
  ngOnInit() {
    this.html = this.markup.nativeElement.innerHTML;
  }
}

