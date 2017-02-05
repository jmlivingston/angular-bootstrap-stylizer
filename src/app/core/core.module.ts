import { APP_BASE_HREF } from '@angular/common';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Http, HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SanitizeHtmlPipe } from '../core/pipes/sanitize-html.pipe';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        RouterModule
    ],
    declarations: [
        FooterComponent,
        HeaderComponent,
        NotFoundComponent,
        SanitizeHtmlPipe
    ],
    exports: [
        FooterComponent,
        HeaderComponent,
        NotFoundComponent,
        SanitizeHtmlPipe
    ],
    providers: [
        { provide: APP_BASE_HREF, useValue: '/' }
    ]
})

export class CoreModule { }
