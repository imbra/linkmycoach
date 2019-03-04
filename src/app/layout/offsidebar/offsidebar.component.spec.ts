/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { OffsidebarComponent } from './offsidebar.component';
import { TranslateService, TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { SettingsService } from '../../core/settings/settings.service';
import { ThemesService } from '../../core/themes/themes.service';
import { TranslatorService } from '../../core/translator/translator.service';
import { SharedModule } from '../../shared/shared.module';
import { createTranslateLoader } from '../../app.module';
import { element } from '@angular/core/src/render3';

describe('Component: Offsidebar', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                TranslateModule.forRoot({
                    loader: {
                        provide: TranslateLoader,
                        useFactory: (createTranslateLoader),
                        deps: [HttpClient]
                    }
                }),
                HttpClientModule,
                SharedModule
            ],
            providers: [SettingsService, ThemesService, TranslatorService]
        }).compileComponents();
    });

    // TODO: fix the OffsidebarComponent test
    /*
    it('should create an instance', async(inject([SettingsService, ThemesService, TranslatorService],
        (settingsService, themesService, translatorService) => {
            const component = new OffsidebarComponent(settingsService, themesService, translatorService);
            expect(component).toBeTruthy();
        })));
    */
});
