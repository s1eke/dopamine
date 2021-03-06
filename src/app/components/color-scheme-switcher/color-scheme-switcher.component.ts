import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BaseAppearanceService } from '../../services/appearance/base-appearance.service';
import { ColorScheme } from '../../services/appearance/color-scheme';

@Component({
    selector: 'app-color-scheme-switcher',
    host: { style: 'display: block' },
    templateUrl: './color-scheme-switcher.component.html',
    styleUrls: ['./color-scheme-switcher.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class ColorSchemeSwitcherComponent implements OnInit {
    constructor(public appearanceService: BaseAppearanceService) {}

    public ngOnInit(): void {}

    public setColorScheme(colorScheme: ColorScheme): void {
        this.appearanceService.selectedColorScheme = colorScheme;
    }
}
