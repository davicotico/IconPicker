import { IconPicker } from "./IconPicker";
import { FA_6 } from "./iconsets/fontawesome6";
import { Options } from "./types";
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
  inputClass: 'form-control',
  inputPlaceholder: 'Search...',
  navButtonClass: 'btn btn-primary',
}

const ip = new IconPicker('icons', FA_6, 4, 4, options);
var output = document.getElementById('output') as HTMLElement;
ip.onSelect((icono) => {
  output.innerText = icono;
});
ip.mount();
