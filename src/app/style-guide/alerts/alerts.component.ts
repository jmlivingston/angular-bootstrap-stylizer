import { Component } from '@angular/core';
@Component({
  selector: 'app-style-guide-alerts',
  template: '<app-style-guide-code [id]="\'alerts\'" [title]="\'Alerts\'" [bootstrapUrlSuffix]="\'/components/alerts\'"></app-style-guide-code>',
  styleUrls: ['../style-guide.component.scss']
})
export class StyleGuideAlertsComponent { }
