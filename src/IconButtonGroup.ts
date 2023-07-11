import { EventManager } from "./EventManager";
import { createButton, createDiv, createIcon, emptyElement } from "./functions";

export class IconButtonGroup {
  protected container: HTMLDivElement;
  protected buttonClass: string = "";
  protected selectedButtonClass: string = '';
  protected selected: string = '';
  protected iconButtonEvent: EventManager;
  protected currentGroup: string[] = [];

  constructor(
    rows: number,
    cols: number,
    eventManager: EventManager,
    iconButtonClass: string,
    selectedButtonClass: string,
  ) {
    this.container = createDiv("icon-button-group", "100%");
    this.container.style.display = "grid";
    this.container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    this.container.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
    this.container.style.gap = "8px";
    this.buttonClass = iconButtonClass;
    this.selectedButtonClass = selectedButtonClass;
    this.iconButtonEvent = eventManager;
  }

  public setSelected(selected: string): void {
    this.selected = selected;
  }

  public updateIconButtons(icons: string[]): void {
    this.currentGroup = icons;
    icons.forEach((item) => {
      let btnClass = (item == this.selected) ? this.selectedButtonClass : this.buttonClass;
      let button = createButton(createIcon(item), btnClass);
      button.addEventListener("click", () => {
        this.iconButtonEvent.emit("select", { icon: item, button });
      });
      this.container.append(button);
    });
  }

  public refresh() {
    emptyElement(this.container);
    this.updateIconButtons(this.currentGroup);
  }

  public getElement(): HTMLDivElement {
    return this.container;
  }
}
