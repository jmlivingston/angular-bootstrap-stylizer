import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ThemeService } from '../../theme/shared/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  themes = [];
  currentTheme: any;
  constructor(private themeService: ThemeService) {
    this.themes = this.themeService.getThemes();
    this.currentTheme = this.themeService.getTheme();
  }

  public updateTheme(item) {
    this.themeService.setTheme(item.name);
  }
}
