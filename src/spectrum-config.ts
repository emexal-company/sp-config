/**
    @license
    Copyright 2020 EMEXAL All Rights Reserved.
    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at
        http://www.apache.org/licenses/LICENSE-2.0
    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
*/

import { CSSResult } from 'lit-element';

import globalStyles from './spectrum-globals.styles';

import largeStyles from './spectrum-large.styles';
import mediumStyles from './spectrum-medium.styles';

import darkStyles from './spectrum-dark.styles';
import darkestStyles from './spectrum-darkest.styles';
import lightStyles from './spectrum-light.styles';
import lightestStyles from './spectrum-lightest.styles';

export class Spectrum {

    private static _size: string = 'medium';
    private static _theme: string = 'light';

    static get themeStyles(): CSSResult[] {

        const sizeStyles = (Spectrum.size === 'large') ? largeStyles : mediumStyles;

        switch (Spectrum.theme) {
            case 'dark':
                return [globalStyles, sizeStyles, darkStyles];
            case 'darkest':
                return [globalStyles, sizeStyles, darkestStyles];
            case 'lightest':
                return [globalStyles, sizeStyles, lightestStyles];
            default:
                return [globalStyles, sizeStyles, lightStyles];
        }
        return [globalStyles, sizeStyles, lightStyles];
    }

    static get theme(): string {
        return Spectrum._theme;
    }

    static set theme(newTheme: string) {
        Spectrum._theme = newTheme;

        const event = new CustomEvent('spectrum-theme-changed', {
            cancelable: false,
        });
        document.dispatchEvent(event);
    }

    static get size(): string {
        return Spectrum._size;
    }

    static set size(newSize: string) {
        Spectrum._size = newSize;

        const event = new CustomEvent('spectrum-theme-changed', {
            cancelable: false,
        });
        document.dispatchEvent(event);
    }
}
