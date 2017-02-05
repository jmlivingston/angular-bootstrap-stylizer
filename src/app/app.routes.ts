import { Routes } from '@angular/router';

import { CoreRoutes } from './core/core.routes';
import { HomeRoutes } from './home/home.routes';
import { StyleGuideRoutes } from './style-guide/style-guide.routes';

export const AppRoutes: Routes = [
  ...CoreRoutes,
  ...HomeRoutes,
  ...StyleGuideRoutes
];
