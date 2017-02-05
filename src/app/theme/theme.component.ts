import { Component } from '@angular/core';
import { ThemeService } from './shared/theme.service';

@Component({
    selector: 'app-theme',
    templateUrl: './theme.component.html'
})
export class ThemeComponent {
    theme: string;
    constructor(themeService: ThemeService) {
        this.theme = themeService.getTheme()['name'];
        themeService.currentTheme.subscribe((theme) => {
            this.theme = theme;
        });
    }
}
