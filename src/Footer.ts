import { createDiv } from "./functions";

export class Footer {
  protected container: HTMLDivElement;
  protected template: string;

  constructor(template: string) {
    this.container = createDiv("ip-footer", "100%");
    this.container.style.marginTop = '8px';
    this.container.style.marginBottom = '8px';
    this.container.style.textAlign = 'center';
    this.template = template;
  }

  public update(index: number, sizeGroup: number, sizeResult: number, total: number): void {
    let start = index * sizeGroup + 1;
    let end = start - 1 + sizeResult;
    this.container.innerHTML = this.interpolate(this.template, start, end, total);
  }

  private interpolate(str: string, start: number, end: number, total: number): string {
    var mapObj: Record<string, number> = { "{start}": start, "{end}": end, "{total}": total };
    var re = new RegExp(Object.keys(mapObj).join("|"), "gi");
    return str.replace(re, (matched: string) => {
      return mapObj[matched].toString();
    });
  }

  public getElement() :HTMLDivElement {
    return this.container;
  }
}
