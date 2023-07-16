import tippy, { Instance, Placement } from "tippy.js";
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light-border.css';
import 'tippy.js/themes/material.css';

export class Popover {
  protected instance: Instance;

  constructor(container: HTMLDivElement, button: Element, placement: string = 'bottom') {
    this.instance = tippy(button as Element, {
      content: container,
      appendTo: document.body,
      interactive: true,
      trigger: "click",
      placement: placement as Placement,
      theme: "material",
    });
  }

  public hide(): void {
    this.instance.hide();
  }

  public setTheme(theme: string): void {
    this.instance.setProps({
      theme: theme
    });
  }
}
