import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ThemeService {
    themes = [];
    currentTheme: Observable<string>;
    private currentThemeSubject: Subject<string>;
    constructor() {
        this.currentThemeSubject = new Subject<string>();
        this.currentTheme = this.currentThemeSubject.asObservable();
        this.setThemes();
    }

    getTheme(): any {
        const filteredThemes = this.themes.filter((theme) => { return theme.name.toString() === localStorage['theme'].toString(); });
        if (filteredThemes.length > 0) {
            return filteredThemes[0];
        } else {
            return this.themes[0];
        }
    }

    getThemes() {
        return this.themes;
    }

    setTheme(newValue) {
        localStorage['theme'] = newValue;
        const filteredTheme = this.themes.filter((theme) => { return theme.name.toString() === newValue; })[0];
        console.log(filteredTheme.name);
        this.currentThemeSubject.next(filteredTheme);
    }

    setThemes() {
        const bootswatchNames = ['cerulean', 'cosmo', 'cyborg', 'darkly', 'flatly', 'journal', 'litera', 'lumen', 'lux', 'materia',
            'minty', 'pulse', 'sandstone', 'simplex', 'slate', 'solar', 'spacelab', 'superhero', 'united', 'yeti'];
        this.themes = [{
            name: 'Original',
            path: '../../../assets/style/themes/original/core.scss'
        }, {
            name: 'Custom - Dark',
            path: '../../../assets/style/themes/custom/dark/core.scss'
        }, {
            name: 'Custom - Material',
            path: '../../../assets/style/themes/custom/material/core.scss'
        }];
        for (let i = 0; i < bootswatchNames.length; i++) {
            const name = bootswatchNames[i];
            this.themes.push({
                name: 'Bootswatch - ' + name[0].toUpperCase() + name.slice(1),
                path: '../../assets/style/themes/bootswatch/' + name + '/core.scss'
            });
        }
    }
}
