import { IconPicker } from "./IconPicker";
import { FA_6 } from "./iconsets/fontawesome6";

const ip = new IconPicker('icons', FA_6, 6, 5);
var output = document.getElementById('output') as HTMLElement;
ip.onSelect((icono) => {
  output.innerText = icono;
});
ip.mount();
