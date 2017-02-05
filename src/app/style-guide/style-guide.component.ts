import { Component } from '@angular/core';

@Component({
  selector: 'app-style-guide',
  templateUrl: './style-guide.component.html',
  styleUrls: ['./style-guide.component.scss']
})
export class StyleGuideComponent {
  search = '';
  appTitle: string;
  constructor() { }

  expandCollapse() {
    const collapseItems = document.querySelectorAll('.panel-heading > .collapse-link');
    for (let i = 0; i < collapseItems.length; i++) {
      const collapseItem = collapseItems[i] as any;
      (collapseItem as any).click();
    }
  }
}
