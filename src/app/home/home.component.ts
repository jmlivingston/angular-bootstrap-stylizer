import { Component, ViewEncapsulation } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

import { ThemeService } from '../theme/shared/theme.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  theme: any;
  themes = [];
  currentTheme: any;
  originalThemes = [];
  customThemes = [];
  bootswatchThemes = [];
  constructor(private themeService: ThemeService) {
    const themes = this.themeService.getThemes();
    this.originalThemes = themes.filter(t => {
      return t.path.toLowerCase().indexOf('original') !== -1;
    });
    this.customThemes = themes.filter(t => {
      return t.path.toLowerCase().indexOf('bootswatch') === -1 && t.path.toLowerCase().indexOf('original') === -1;
    });
    this.bootswatchThemes = themes.filter(t => {
      return t.path.toLowerCase().indexOf('bootswatch') !== -1 && t.path.toLowerCase().indexOf('original') === -1;
    });
    this.currentTheme = this.themeService.getTheme();
  }

  public updateTheme(item) {
    this.themeService.setTheme(item.name);
  }
}
