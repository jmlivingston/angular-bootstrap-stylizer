import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CoreModule } from '../core/core.module';

import { HomeComponent } from './home.component';
import { HomeRoutes } from './home.routes';

@NgModule({
    imports: [
        CommonModule,
        CoreModule,
        RouterModule.forRoot(HomeRoutes, { useHash: true })
    ],
    declarations: [HomeComponent],
    exports: [HomeComponent]
})

export class HomeModule { }
