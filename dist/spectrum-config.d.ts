import { CSSResult } from 'lit-element';
export declare class Spectrum {
    private static _size;
    private static _theme;
    static get themeStyles(): CSSResult[];
    static get theme(): string;
    static set theme(newTheme: string);
    static get size(): string;
    static set size(newSize: string);
}
