import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Constants } from '../../common/application/constants';
import { Language } from '../../common/application/language';
import { BaseSettings } from '../../common/settings/base-settings';
import { BaseTranslatorService } from './base-translator.service';

@Injectable()
export class TranslatorService implements BaseTranslatorService {
    constructor(private translate: TranslateService, private settings: BaseSettings) {
        this.translate.setDefaultLang(this.settings.defaultLanguage);
    }

    public languages: Language[] = Constants.languages;

    public get selectedLanguage(): Language {
        return this.languages.find((x) => x.code === this.settings.language);
    }

    public set selectedLanguage(v: Language) {
        this.settings.language = v.code;
        this.translate.use(v.code);
    }

    public async applyLanguageAsync(): Promise<void> {
        await this.translate.use(this.settings.language).toPromise();
    }

    public getAsync(key: string | Array<string>, interpolateParams?: Object): Promise<string> {
        return this.translate.get(key, interpolateParams).toPromise();
    }

    public get(key: string | Array<string>, interpolateParams?: Object): string {
        return this.translate.instant(key, interpolateParams);
    }
}
