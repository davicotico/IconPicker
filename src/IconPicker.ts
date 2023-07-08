import { Footer } from "./Footer";
import { IconButtonEvent } from "./IconButtonEvent";
import { IconButtonGroup } from "./IconButtonGroup";
import { GroupList } from "./IconList";
import { NavBar } from "./NavBar";
import { KEYS, defaultOptions } from "./constants";
import { createDiv, emptyElement } from "./functions";
import { IconButtonlistener, NavButtons, Options } from "./types";

export class IconPicker {
  protected iconset: string[];
  protected container: HTMLDivElement | null;
  protected iconButtonGroup: IconButtonGroup;
  protected footer: Footer;
  protected navBar: NavBar;
  protected groupList: GroupList;
  protected groupSize: number;
  protected totalResult: number = 0;
  protected iconButtonEvent = new IconButtonEvent();
  protected options: Options;

  constructor(id: string, iconset: string[], rows: number = 4, cols: number = 5, options: Options = defaultOptions) {
    this.iconset = iconset;
    this.groupSize = rows * cols;
    this.groupList = new GroupList(this.iconset, this.groupSize);
    this.totalResult = this.groupList.getTotalItems();
    this.options = options;
    this.container = document.getElementById(id) as HTMLDivElement; //createDiv('', '400px');
    this.navBar = new NavBar(this.options.navButtonClass, this.options.arrowPrevIconClass, this.options.arrowNextIconClass);
    this.iconButtonGroup = new IconButtonGroup(rows, cols, this.iconButtonEvent, this.options.iconButtonClass);
    this.footer = new Footer();
  }

  onSelect(listener: IconButtonlistener): void {
    this.iconButtonEvent.on('select', listener);
  }

  public setupInputSearch(): void {
    let div = createDiv('ip-search', '100%');
    div.style.marginBottom = '8px';
    let input = document.createElement('input');
    input.type = 'text';
    input.className = this.options.inputClass;
    input.placeholder = this.options.inputPlaceholder;
    input.addEventListener('keyup', (evt) => {
      if (evt.key == KEYS.ENTER) { }
      this.totalResult = this.groupList.search(input.value);
      emptyElement(this.iconButtonGroup.getElement());
      if (this.totalResult > 0) {
        let group = this.groupList.first();
        this.iconButtonGroup.updateIconButtons(group);
        this.navBar.updateNavLabel(this.groupList.getIndex(), this.groupList.getTotalGroups());
        this.navBar.updateNavButtons(this.groupList.isFirst(), this.groupList.isLast(), this.navBar.getButtons().previous, this.navBar.getButtons().next);
        this.footer.update(this.groupList.getIndex(), this.groupSize, group.length, this.totalResult);
      } else {
        this.navBar.updateNavLabel(-1, 0);
        this.navBar.updateNavButtons(true, true, this.navBar.getButtons().previous, this.navBar.getButtons().next);
        this.footer.getElement().innerHTML = `'${input.value}' is not found`;
      }
    });
    input.style.boxSizing = 'border-box';
    input.style.width = '100%';
    div.append(input);
    this.container?.append(div);
  }

  public setupNavButtons() {
    let div = createDiv("action-buttons", "100%");
    div.style.display = "flex";
    div.style.marginBottom = "8px";
    let total = this.groupList.getTotalGroups();
    this.navBar.setupNavLabel(this.groupList.getIndex(), total);
    this.navBar.updateNavButtons(this.groupList.isFirst(), this.groupList.isLast(), this.navBar.getButtons().previous, this.navBar.getButtons().next);
    this.navBar.getButtons().next.addEventListener("click", () => {
      emptyElement(this.iconButtonGroup.getElement());
      let group = this.groupList.next();
      this.updateElements(this.groupList, group, this.totalResult, this.navBar.getButtons());
    });

    this.navBar.getButtons().previous.addEventListener("click", () => {
      emptyElement(this.iconButtonGroup.getElement());
      let group = this.groupList.previous();
      this.updateElements(this.groupList, group, this.totalResult, this.navBar.getButtons());
    });
    div.append(this.navBar.getButtons().previous);
    div.append(this.navBar.getLabel());
    div.append(this.navBar.getButtons().next);
    this.container?.append(div);
  }

  protected updateElements(groupList: GroupList, arrGroup: string[], totalResult: number, navButtons: NavButtons) {
    this.navBar.updateNavLabel(groupList.getIndex(), groupList.getTotalGroups());
    this.iconButtonGroup.updateIconButtons(arrGroup);
    this.navBar.updateNavButtons(groupList.isFirst(), groupList.isLast(), navButtons.previous, navButtons.next);
    this.footer.update(this.groupList.getIndex(), this.groupSize, arrGroup.length, totalResult);
  }

  public mount() {
    let group = this.groupList.first();
    this.iconButtonGroup.updateIconButtons(group);
    this.setupInputSearch();
    this.setupNavButtons();
    this.container?.append(this.iconButtonGroup.getElement());
    this.footer.update(this.groupList.getIndex(), this.groupSize, group.length, this.groupList.getTotalItems());
    this.container?.append(this.footer.getElement());
  }
}
