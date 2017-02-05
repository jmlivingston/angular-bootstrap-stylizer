import { Route } from '@angular/router';

import { StyleGuideAlertsComponent } from './alerts/alerts.component';
import { StyleGuideBreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { StyleGuideButtonGroupComponent } from './button-group/button-group.component';
import { StyleGuideButtonsComponent } from './buttons/buttons.component';
import { StyleGuideCardComponent } from './card/card.component';
import { StyleGuideCarouselComponent } from './carousel/carousel.component';
import { StyleGuideCollapseComponent } from './collapse/collapse.component';
import { StyleGuideComponent } from './style-guide.component';
import { StyleGuideContentFiguresComponent } from './content-figures/content-figures.component';
import { StyleGuideContentImagesComponent } from './content-images/content-images.component';
import { StyleGuideContentTablesComponent } from './content-tables/content-tables.component';
import { StyleGuideContentTypographyComponent } from './content-typography/content-typography.component';
import { StyleGuideDropdownsComponent } from './dropdowns/dropdowns.component';
import { StyleGuideFormsComponent } from './forms/forms.component';
import { StyleGuideInputGroupComponent } from './input-group/input-group.component';
import { StyleGuideJumbotronComponent } from './jumbotron/jumbotron.component';
import { StyleGuideLayoutGridComponent } from './layout-grid/layout-grid.component';
import { StyleGuideLayoutMediaObjectComponent } from './layout-media-object/layout-media-object.component';
import { StyleGuideListGroupComponent } from './list-group/list-group.component';
import { StyleGuideModalComponent } from './modal/modal.component';
import { StyleGuideNavBarComponent } from './nav-bar/nav-bar.component';
import { StyleGuideNavsComponent } from './navs/navs.component';
import { StyleGuidePaginationComponent } from './pagination/pagination.component';
import { StyleGuidePopoversComponent } from './popovers/popovers.component';
import { StyleGuideProgressComponent } from './progress/progress.component';
import { StyleGuideTagComponent } from './tag/tag.component';
import { StyleGuideTooltipsComponent } from './tooltips/tooltips.component';

export const StyleGuideRoutes: Route[] = [
  {
    path: '',
    redirectTo: '/style-guide',
    pathMatch: 'full'
  },
  {
    path: 'style-guide',
    component: StyleGuideComponent
  },
  { path: 'style-guide/alerts', component: StyleGuideAlertsComponent },
  { path: 'style-guide/breadcrumb', component: StyleGuideBreadcrumbComponent },
  { path: 'style-guide/button-group', component: StyleGuideButtonGroupComponent },
  { path: 'style-guide/buttons', component: StyleGuideButtonsComponent },
  { path: 'style-guide/card', component: StyleGuideCardComponent },
  { path: 'style-guide/carousel', component: StyleGuideCarouselComponent },
  { path: 'style-guide/collapse', component: StyleGuideCollapseComponent },
  { path: 'style-guide/content-figures', component: StyleGuideContentFiguresComponent },
  { path: 'style-guide/content-images', component: StyleGuideContentImagesComponent },
  { path: 'style-guide/content-tables', component: StyleGuideContentTablesComponent },
  { path: 'style-guide/content-typography', component: StyleGuideContentTypographyComponent },
  { path: 'style-guide/dropdowns', component: StyleGuideDropdownsComponent },
  { path: 'style-guide/forms', component: StyleGuideFormsComponent },
  { path: 'style-guide/input-group', component: StyleGuideInputGroupComponent },
  { path: 'style-guide/jumbotron', component: StyleGuideJumbotronComponent },
  { path: 'style-guide/layout-grid', component: StyleGuideLayoutGridComponent },
  { path: 'style-guide/layout-media-object', component: StyleGuideLayoutMediaObjectComponent },
  { path: 'style-guide/list-group', component: StyleGuideListGroupComponent },
  { path: 'style-guide/modal', component: StyleGuideModalComponent },
  { path: 'style-guide/navbar', component: StyleGuideNavBarComponent },
  { path: 'style-guide/navs', component: StyleGuideNavsComponent },
  { path: 'style-guide/pagination', component: StyleGuidePaginationComponent },
  { path: 'style-guide/popovers', component: StyleGuidePopoversComponent },
  { path: 'style-guide/progress', component: StyleGuideProgressComponent },
  { path: 'style-guide/tag', component: StyleGuideTagComponent },
  { path: 'style-guide/tooltips', component: StyleGuideTooltipsComponent, }
];
