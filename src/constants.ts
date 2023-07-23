import { IconPickerOptions } from "./types";

const KEYS = {
    ENTER: 'Enter',
    ESCAPE: 'Escape'
}

const ARROW_LEFT = `<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>`;
const ARROW_RIGHT = `<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>`;
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
    placement: 'right'
}

export {
    KEYS,
    ARROW_LEFT,
    ARROW_RIGHT,
    CARET,
    DEFAULT_OPTIONS
}