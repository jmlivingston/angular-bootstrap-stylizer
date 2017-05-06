import { ApplicationRef, ChangeDetectorRef, Component } from '@angular/core';
import { ThemeService } from './shared/theme.service';
import { AppModule } from '../app.module';

@Component({
    selector: 'app-theme',
    templateUrl: './theme.component.html'
})
export class ThemeComponent {
    theme: string;
    constructor(themeService: ThemeService, private applicationRef: ApplicationRef, private changeDetector: ChangeDetectorRef) {
        this.theme = themeService.getTheme();
        themeService.currentTheme.subscribe((theme) => {

            const styles = document.querySelectorAll('style');
            Array.prototype.forEach.call(styles, function (style) {
                if (style.innerText.indexOf('Bootstrap') !== -1) {
                    // style.parentNode.removeChild(style);
                }
            });

            this.theme = theme;



            // setTimeout(() => {
            //     // applicationRef.tick();
            //     changeDetector.detectChanges();
            //     console.log('test');
            // }, 2000);
        });
    }
}
