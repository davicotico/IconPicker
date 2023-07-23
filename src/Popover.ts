import tippy, { Instance } from "tippy.js";
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light-border.css';
import 'tippy.js/themes/material.css';
import 'tippy.js/themes/translucent.css';
import { PopOverPlacement } from "./types";

export class Popover {
  protected instance: Instance;

  constructor(container: HTMLDivElement, button: Element, placement: PopOverPlacement = 'bottom') {
    this.instance = tippy(button as Element, {
      content: container,
      appendTo: document.body,
      interactive: true,
      trigger: "click",
      placement: placement,
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
