import { createDiv } from "./functions";

export class InputSearch {
  protected container: HTMLDivElement;
  protected input: HTMLInputElement;
  constructor(inputClass: string, placeholder: string) {
    this.container = createDiv("ip-search", "100%");
    this.container.style.marginBottom = "8px";
    this.input = document.createElement("input");
    this.input.type = 'text';
    this.input.style.boxSizing = 'border-box';
    this.input.style.width = '100%';
    this.input.className = inputClass;
    this.input.placeholder = placeholder;
  }

  public getInput(): HTMLInputElement {
    return this.input;
  }

  public mount(): void {
    this.container.append(this.input);
  }

  public getElement(): HTMLDivElement {
    return this.container;
  }
}
