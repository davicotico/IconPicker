import { IconPickerOptions } from "./types";

const KEYS = {
    ENTER: 'Enter',
    ESCAPE: 'Escape'
}
const CARET = `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 21" style="width: 16px; height: 21.6px; vertical-align: middle;"><path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/></svg>`;

const DEFAULT_OPTIONS: IconPickerOptions = {
    inputPlaceholder: 'Search...',
    iconButtonClass: 'ip-icon-button',
    selectedIconButtonClass: 'ip-selected-icon-button',
    navButtonClass: 'ip-nav-button',
    inputClass: 'ip-input-search',
    arrowPrevIconClass: '',
    arrowNextIconClass: '',
    templateFooter: '[{start} - {end}] of {total}',
    placement: 'right',
    popoverTheme: 'dark'
}

export {
    KEYS,
    CARET,
    DEFAULT_OPTIONS
}