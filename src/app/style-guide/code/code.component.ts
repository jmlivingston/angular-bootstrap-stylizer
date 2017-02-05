import { Component, Input, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { DomSanitizer } from '@angular/platform-browser';

const Prism = require('../../../../node_modules/prismjs/prism');
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'app-style-guide-code',
    templateUrl: './code.component.html',
    styleUrls: ['../style-guide.component.scss']
})
export class StyleGuideCodeComponent implements OnInit {
    @Input() id = '';
    @Input() title = '';
    @Input() html = '';
    @Input() bootstrapUrlSuffix = '';
    bootstrapUrlPrefix = '//v4-alpha.getbootstrap.com';
    showStyleGuideLink = false;
    constructor(private http: Http, domSanitizer: DomSanitizer) { }

    ngOnInit() {
        this.showStyleGuideLink = !location.href.endsWith('style-guide');
        setTimeout(function () {
            Prism.highlightAll();
        }, 1000);
    }
}
