import { createButton, createIcon } from "./functions";
import { NavButtons } from "./types";

export class NavBar {
  private label: HTMLDivElement;
  protected navButtons: NavButtons;

  constructor(
    navButtonClass: string,
    arrowPrevIconClass: string,
    arrowNextIconClass: string
  ) {
    this.label = document.createElement("div");
    this.label.style.flexGrow = '1';
    this.label.style.display = 'flex';
    this.label.style.justifyContent = 'center';
    this.label.style.alignItems = 'center';

    this.navButtons = {
      previous: createButton(createIcon(arrowPrevIconClass), navButtonClass),
      next: createButton(createIcon(arrowNextIconClass), navButtonClass),
    };
  }

  public setupNavLabel(currentIndex: number, total: number): void {
    this.updateNavLabel(currentIndex, total);
  }

  public updateNavButtons(isFirst: boolean, isLast: boolean, buttonPrevious: HTMLButtonElement, buttonNext: HTMLButtonElement): void {
    buttonPrevious.disabled = isFirst;
    buttonNext.disabled = isLast;
  }

  public updateNavLabel(currentIndex: number, total: number) {
    this.label.innerHTML = `${currentIndex + 1} / ${total}`;
  }

  public getButtons(): NavButtons {
    return this.navButtons;
  }

  public getLabel(): HTMLDivElement {
    return this.label;
  }
}
