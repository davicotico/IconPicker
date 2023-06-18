import { IconButtonEvent } from "./IconButtonEvent";
import { GroupList } from "./IconList";
import { ARROW_LEFT, ARROW_RIGHT, KEYS } from "./constants";
import { createButton, createDiv, createIcon, emptyElement } from "./functions";
import { IconButtonlistener } from "./types";

export class IconPicker {
  protected iconset: string[];
  protected container: HTMLDivElement | null;
  protected iconButtons: HTMLDivElement;
  protected navLabel: HTMLDivElement;
  protected footer: HTMLDivElement;
  protected groupList: GroupList;
  protected groupSize: number;
  protected totalResult: number = 0;

  protected iconButtonEvent = new IconButtonEvent();

  constructor(id: string, iconset: string[], groupSize: number = 20) {
    this.iconset = iconset;
    this.groupList = new GroupList(this.iconset, groupSize);
    this.totalResult = this.groupList.getTotalItems();
    this.groupSize = groupSize;
    this.container = document.getElementById(id) as HTMLDivElement; //createDiv('', '400px');
    this.navLabel = document.createElement('div');
    this.iconButtons = createDiv("icon-button-group", "100%");
    this.footer = createDiv('ip-footer', '100%');
  }

  onSelect(listener: IconButtonlistener): void {
    this.iconButtonEvent.on('select', listener);
  }

  public setupInputSearch(): void {
    let div = createDiv('ip-search', '100%');
    div.style.marginBottom = '5px';
    let input = document.createElement('input');
    input.addEventListener('keyup', (evt) => {
      if (evt.key == KEYS.ENTER) { }
      this.totalResult = this.groupList.search(input.value);
      emptyElement(this.iconButtons);
      this.setupIconButtons(this.groupList.first());
      this.updateNavLabel(this.groupList.getIndex(), this.groupList.getTotalGroups());
    });
    input.style.boxSizing = 'border-box';
    input.style.width = '100%';
    div.append(input);
    this.container?.append(div);
  }

  protected setupNavLabel(currentIndex: number, total: number): void {
    this.navLabel.style.textAlign = 'center';
    this.navLabel.style.flexGrow = '1';
    this.updateNavLabel(currentIndex, total);
  }

  public setupNavButtons() {
    let div = createDiv("action-buttons", "100%");
    div.style.display = "flex";
    div.style.marginBottom = "5px";
    let total = this.groupList.getTotalGroups();
    this.setupNavLabel(this.groupList.getIndex(), total);
    let btnNext = createButton(ARROW_RIGHT);
    let btnPrev = createButton(ARROW_LEFT);

    btnNext.addEventListener("click", () => {
      emptyElement(this.iconButtons);
      let group = this.groupList.next();
      this.updateElements(this.groupList, group, this.totalResult, btnPrev, btnNext)
    });

    btnPrev.addEventListener("click", () => {
      emptyElement(this.iconButtons);
      let group = this.groupList.previous();
      this.updateElements(this.groupList, group, this.totalResult, btnPrev, btnNext)
    });

    div.append(btnPrev);
    div.append(this.navLabel)
    div.append(btnNext);
    this.container?.append(div);
  }

  protected updateElements(groupList: GroupList, arrGroup: string[], totalResult: number, btnPrev: HTMLButtonElement, btnNext: HTMLButtonElement) {
    this.updateNavLabel(groupList.getIndex(), groupList.getTotalGroups());
    this.setupIconButtons(arrGroup);
    this.updateNavButtons(groupList.isFirst(), groupList.isLast(), btnPrev, btnNext);
    this.updateFooter(this.groupList.getIndex(), this.groupSize, arrGroup.length, totalResult);
  }

  public setupFooter(firstGroupSize: number) {
    this.footer.style.marginTop = '10px';
    this.footer.style.textAlign = 'center';
    this.updateFooter(this.groupList.getIndex(), this.groupSize, firstGroupSize, this.groupList.getTotalItems());
    this.container?.append(this.footer);
  }

  public setupIconButtons(icons: string[]): void {
    icons.forEach((item) => {
      let button = createButton(createIcon(item));
      button.addEventListener("click", () => {
        this.iconButtonEvent.emit('select', item);
      });
      this.iconButtons.append(button);
    });
  }

  protected updateNavButtons(isFirst: boolean, isLast: boolean, buttonPrevious: HTMLButtonElement, buttonNext: HTMLButtonElement): void {
    buttonPrevious.disabled = isFirst;
    buttonNext.disabled = isLast;
  }

  protected updateNavLabel(currentIndex: number, total: number) {
    this.navLabel.innerHTML = `${currentIndex + 1} / ${total}`;
  }

  protected updateFooter(index: number, sizeGroup: number, sizeResult: number, total: number): void {
    let start = (index * sizeGroup) + 1;
    let end = (start - 1) + sizeResult;
    this.footer.innerHTML = `[${start} - ${end}] of ${total}`;
  }

  public mount() {
    let group = this.groupList.first();
    this.setupIconButtons(group);
    this.setupInputSearch();
    this.setupNavButtons();
    this.container?.append(this.iconButtons);
    this.setupFooter(group.length);
  }
}
