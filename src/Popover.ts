import tippy, { Instance } from "tippy.js";
import { PopOverPlacement } from "./types";
import 'tippy.js/dist/tippy.css';

export class Popover {
  protected instance: Instance;

  constructor(container: HTMLDivElement, button: Element, placement: PopOverPlacement = 'bottom') {
    this.instance = tippy(button as Element, {
      content: container,
      appendTo: document.body,
      interactive: true,
      trigger: "click",
      placement: placement,
      theme: "dark",
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
