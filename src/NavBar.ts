import { createButton, createDiv, createIcon } from "./functions";
import { NavButtons } from "./types";

export class NavBar {
  protected container: HTMLDivElement;
  private label: HTMLDivElement;
  protected navButtons: NavButtons;

  constructor(
    navButtonClass: string,
    arrowPrevIconClass: string,
    arrowNextIconClass: string
  ) {
    this.container = createDiv("action-buttons", "100%");
    this.container.style.display = "flex";
    this.container.style.marginBottom = "8px";
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

  public updateNavLabel(currentIndex: number, total: number): void {
    this.label.innerHTML = `${currentIndex + 1} / ${total}`;
  }

  public getButtons(): NavButtons {
    return this.navButtons;
  }

  public getLabel(): HTMLDivElement {
    return this.label;
  }

  public mount(): void {
    this.container.append(this.getButtons().previous);
    this.container.append(this.getLabel());
    this.container.append(this.getButtons().next);
  }

  public getElement(): HTMLDivElement {
    return this.container;
  }
}
