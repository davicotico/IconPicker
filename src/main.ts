import { IconPicker } from "./IconPicker";
//import { FA_6 } from "./iconsets/fontawesome6";
import { Options } from "./types";
// @ts-ignore
import { bi } from '../public/iconsets/bi.js';
/*
// primer
const options: Options = {
  iconButtonClass: 'btn',
  inputClass: 'form-control',
  inputPlaceholder: 'Search...',
  navButtonClass: 'btn btn-primary',
}
*/
/*
// bulma
  const options: Options = {
  iconButtonClass: 'button',
  inputClass: 'input is-primary',
  inputPlaceholder: 'Search...',
  navButtonClass: 'button is-primary',
}
*/

// bootstrap
const options: Options = {
  iconButtonClass: 'btn btn-outline-secondary',
  selectedIconButtonClass: 'btn btn-success',
  inputClass: 'form-control',
  inputPlaceholder: 'Search...',
  navButtonClass: 'btn btn-primary',
  arrowPrevIconClass: 'bi bi-chevron-left',
  arrowNextIconClass: 'bi bi-chevron-right',
}

const ip = new IconPicker('icons', bi, 4, 4, options);
var output = document.getElementById('output') as HTMLElement;
ip.onSelect((parameters) => {
  output.innerText = parameters.icon;
});
ip.mount();

ip.setSelected('bi bi-android');
