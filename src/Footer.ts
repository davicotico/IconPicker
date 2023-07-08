import { createDiv } from "./functions";

export class Footer {
  protected container: HTMLDivElement;

  constructor() {
    this.container = createDiv("ip-footer", "100%");
    this.container.style.marginTop = '10px';
    this.container.style.textAlign = 'center';
  }

  public update(
    index: number,
    sizeGroup: number,
    sizeResult: number,
    total: number
  ): void {
    let start = index * sizeGroup + 1;
    let end = start - 1 + sizeResult;
    this.container.innerHTML = `[${start} - ${end}] of ${total}`;
  }

  public getElement() :HTMLDivElement {
    return this.container;
  }
}
