import { Route } from '@angular/router';

import { NotFoundComponent } from './not-found/not-found.component';

export const CoreRoutes: Route[] = [
    {
        path: '**',
        component: NotFoundComponent
    }
];
