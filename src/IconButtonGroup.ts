import { IconButtonEvent } from "./IconButtonEvent";
import { createButton, createDiv, createIcon } from "./functions";

export class IconButtonGroup {
  protected container: HTMLDivElement;
  protected iconButtonClass: string = "";
  protected iconButtonEvent: IconButtonEvent;

  constructor(
    rows: number,
    cols: number,
    eventManager: IconButtonEvent,
    iconButtonClass: string
  ) {
    this.container = createDiv("icon-button-group", "100%");
    this.container.style.display = "grid";
    this.container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    this.container.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
    this.container.style.gap = "8px";
    this.iconButtonClass = iconButtonClass;
    this.iconButtonEvent = eventManager;
  }

  public updateIconButtons(icons: string[]): void {
    icons.forEach((item) => {
      let button = createButton(createIcon(item), this.iconButtonClass);
      button.addEventListener("click", () => {
        this.iconButtonEvent.emit("select", item);
      });
      this.container.append(button);
    });
  }

  public getElement(): HTMLDivElement {
    return this.container;
  }
}
