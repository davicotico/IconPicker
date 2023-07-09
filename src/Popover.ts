import tippy, { Instance } from "tippy.js";
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light-border.css';

export class Popover {
  protected instance: Instance;

  constructor(container: HTMLDivElement, button: Element) {
    this.instance = tippy(button as Element, {
      content: container,
      appendTo: document.body,
      interactive: true,
      trigger: "click",
      theme: "light-border",
    });
  }

  public hide(): void {
    this.instance.hide();
  }
}
