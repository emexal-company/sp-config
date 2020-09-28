import globalStyles from './spectrum-globals.styles';
import largeStyles from './spectrum-large.styles';
import mediumStyles from './spectrum-medium.styles';
import darkStyles from './spectrum-dark.styles';
import darkestStyles from './spectrum-darkest.styles';
import lightStyles from './spectrum-light.styles';
import lightestStyles from './spectrum-lightest.styles';
export class Spectrum {
    static get themeStyles() {
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
    static get theme() {
        return Spectrum._theme;
    }
    static set theme(newTheme) {
        Spectrum._theme = newTheme;
        const event = new CustomEvent('spectrum-theme-changed', {
            cancelable: false,
        });
        document.dispatchEvent(event);
    }
    static get size() {
        return Spectrum._size;
    }
    static set size(newSize) {
        Spectrum._size = newSize;
        const event = new CustomEvent('spectrum-theme-changed', {
            cancelable: false,
        });
        document.dispatchEvent(event);
    }
}
Spectrum._size = 'medium';
Spectrum._theme = 'light';
//# sourceMappingURL=spectrum-config.js.map