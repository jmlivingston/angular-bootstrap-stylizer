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
    @Input() bootstrapUrlSuffix = '';
    bootstrapUrlPrefix = 'http://v4-alpha.getbootstrap.com';
    html: string;
    showStyleGuideLink = false;
    constructor(private http: Http, domSanitizer: DomSanitizer) { }

    ngOnInit() {
        this.showStyleGuideLink = !location.href.endsWith('style-guide');
        if (this.id !== '') {
            this.getCode().subscribe(html => {
                this.html = html;
            });
        }
        setTimeout(function () {
            Prism.highlightAll();
        }, 1000);
    }

    getCode(): Observable<any> {
        return this.http
            .get('/app/style-guide/' + this.id + '/' + this.id + '-markup.html')
            .map(response => response.text() as string)
            .catch((error: any) => Observable.throw(error));
    }
}
