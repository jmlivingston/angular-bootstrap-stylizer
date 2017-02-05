import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';

import { ThemeService } from './shared/theme.service';
import { ThemeComponent } from './theme.component';
import { ThemeOriginalComponent } from './themes/original.component';
import { ThemeCustomDarkComponent } from './themes/custom-dark.component';
import { ThemeCustomMaterialComponent } from './themes/custom-material.component';
import { ThemeBootswatchCeruleanComponent } from './themes/bootswatch-cerulean.component';
import { ThemeBootswatchCosmoComponent } from './themes/bootswatch-cosmo.component';
import { ThemeBootswatchCyborgComponent } from './themes/bootswatch-cyborg.component';
import { ThemeBootswatchDarklyComponent } from './themes/bootswatch-darkly.component';
import { ThemeBootswatchFlatlyComponent } from './themes/bootswatch-flatly.component';
import { ThemeBootswatchJournalComponent } from './themes/bootswatch-journal.component';
import { ThemeBootswatchLiteraComponent } from './themes/bootswatch-litera.component';
import { ThemeBootswatchLumenComponent } from './themes/bootswatch-lumen.component';
import { ThemeBootswatchLuxComponent } from './themes/bootswatch-lux.component';
import { ThemeBootswatchMateriaComponent } from './themes/bootswatch-materia.component';
import { ThemeBootswatchMintyComponent } from './themes/bootswatch-minty.component';
import { ThemeBootswatchPulseComponent } from './themes/bootswatch-pulse.component';
import { ThemeBootswatchSandstoneComponent } from './themes/bootswatch-sandstone.component';
import { ThemeBootswatchSimplexComponent } from './themes/bootswatch-simplex.component';
import { ThemeBootswatchSlateComponent } from './themes/bootswatch-slate.component';
import { ThemeBootswatchSolarComponent } from './themes/bootswatch-solar.component';
import { ThemeBootswatchSpacelabComponent } from './themes/bootswatch-spacelab.component';
import { ThemeBootswatchSuperheroComponent } from './themes/bootswatch-superhero.component';
import { ThemeBootswatchUnitedComponent } from './themes/bootswatch-united.component';
import { ThemeBootswatchYetiComponent } from './themes/bootswatch-yeti.component';

@NgModule({
    imports: [
        CommonModule,
        CoreModule
    ],
    declarations: [
        ThemeComponent,
        ThemeOriginalComponent,
        ThemeCustomDarkComponent,
        ThemeCustomMaterialComponent,
        ThemeBootswatchCeruleanComponent,
        ThemeBootswatchCosmoComponent,
        ThemeBootswatchCyborgComponent,
        ThemeBootswatchDarklyComponent,
        ThemeBootswatchFlatlyComponent,
        ThemeBootswatchJournalComponent,
        ThemeBootswatchLiteraComponent,
        ThemeBootswatchLumenComponent,
        ThemeBootswatchLuxComponent,
        ThemeBootswatchMateriaComponent,
        ThemeBootswatchMintyComponent,
        ThemeBootswatchPulseComponent,
        ThemeBootswatchSandstoneComponent,
        ThemeBootswatchSimplexComponent,
        ThemeBootswatchSlateComponent,
        ThemeBootswatchSolarComponent,
        ThemeBootswatchSpacelabComponent,
        ThemeBootswatchSuperheroComponent,
        ThemeBootswatchUnitedComponent,
        ThemeBootswatchYetiComponent
    ],
    exports: [
        ThemeComponent,
        ThemeOriginalComponent,
        ThemeCustomDarkComponent,
        ThemeCustomMaterialComponent,
        ThemeBootswatchCeruleanComponent,
        ThemeBootswatchCosmoComponent,
        ThemeBootswatchCyborgComponent,
        ThemeBootswatchDarklyComponent,
        ThemeBootswatchFlatlyComponent,
        ThemeBootswatchJournalComponent,
        ThemeBootswatchLiteraComponent,
        ThemeBootswatchLumenComponent,
        ThemeBootswatchLuxComponent,
        ThemeBootswatchMateriaComponent,
        ThemeBootswatchMintyComponent,
        ThemeBootswatchPulseComponent,
        ThemeBootswatchSandstoneComponent,
        ThemeBootswatchSimplexComponent,
        ThemeBootswatchSlateComponent,
        ThemeBootswatchSolarComponent,
        ThemeBootswatchSpacelabComponent,
        ThemeBootswatchSuperheroComponent,
        ThemeBootswatchUnitedComponent,
        ThemeBootswatchYetiComponent
    ],
    providers: [ThemeService]
})

export class ThemeModule { }
