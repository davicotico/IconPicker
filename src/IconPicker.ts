import { EventManager } from "./EventManager";
import { Footer } from "./Footer";
import { IconButtonGroup } from "./IconButtonGroup";
import { GroupList } from "./IconList";
import { InputSearch } from "./InputSearch";
import { NavBar } from "./NavBar";
import { Popover } from "./Popover";
import { KEYS, defaultOptions } from "./constants";
import { createDiv, createIcon, emptyElement } from "./functions";
import { IconButtonlistener, NavButtons, Options } from "./types";

export class IconPicker {
  protected iconset: string[];
  protected container: HTMLDivElement;
  protected inputSearch: InputSearch;
  protected iconButtonGroup: IconButtonGroup;
  protected footer: Footer;
  protected navBar: NavBar;
  protected groupList: GroupList;
  protected iconButtonEvent = new EventManager();
  protected options: Options;
  protected totalResult: number = 0;
  protected groupSize: number;
  protected isButton: boolean = false;
  protected button: HTMLButtonElement | null = null;
  protected popover: Popover | null = null;
  protected selected: string = '';

  constructor(id: string, iconset: string[], rows: number = 4, cols: number = 5, options: Options = defaultOptions) {
    let element = document.getElementById(id);
    if (element == null) {
      throw Error('Element does not exists');
    }
    switch (element.tagName) {
      case 'DIV':
        this.container = element as HTMLDivElement;
      break;
      case 'BUTTON':
        this.container = createDiv(id  + '-ip-container', '250px')
        this.isButton = true;
        this.button = this.buildButton(element as HTMLButtonElement);
      break;
      default: 
        throw Error('Element it is not a div or button');
    }
    this.iconset = iconset;
    this.options = options;
    this.groupSize = rows * cols;
    this.groupList = new GroupList(this.iconset, this.groupSize);
    this.totalResult = this.groupList.getTotalItems();
    this.inputSearch = new InputSearch(this.options.inputClass, this.options.inputPlaceholder);
    this.navBar = new NavBar(this.options.navButtonClass, this.options.arrowPrevIconClass, this.options.arrowNextIconClass);
    this.iconButtonGroup = new IconButtonGroup(rows, cols, this.iconButtonEvent, this.options.iconButtonClass, this.options.selectedIconButtonClass);
    this.footer = new Footer();
    this.onSelect((params) => {
      this.iconButtonGroup.setSelected(params.icon);
      this.iconButtonGroup.refresh();
      if (this.isButton) {
        let i = this.button?.getElementsByTagName('i').item(0) as HTMLLIElement;
        i.className = params.icon;
      }
    })
  }

  private buildButton(button: HTMLButtonElement): HTMLButtonElement {
    let icon = createIcon('');
    icon.style.marginLeft = '4px';
    icon.style.marginRight = '4px';
    button.append(icon);
    // <path fill="currentColor"
    let caret = `<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path fill="currentColor" d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg>`;
    let i = document.createElement('i');
    i.innerHTML = caret;
    i.style.marginLeft = '10px';
    button.append(i);
    return button;
  }

  public onSelect(listener: IconButtonlistener): void {
    this.iconButtonEvent.on('select', listener);
  }

  public setSelected(icon: string) {
    let index = this.groupList.getGroupIndex(icon);
    if (index >= 0) {
      this.iconButtonGroup.setSelected(icon);
      let group = this.groupList.goTo(index);
      emptyElement(this.iconButtonGroup.getElement());
      this.updateElements(this.groupList, group, this.totalResult, this.navBar.getButtons());
    }
  }

  public setupInputSearch(): void {
    this.inputSearch.getInput().addEventListener('keyup', (evt) => {
      if (evt.key == KEYS.ESCAPE && this.isButton) {
        this.popover?.hide();
        return;
      }
      this.totalResult = this.groupList.search(this.inputSearch.getInput().value);
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
        this.footer.getElement().innerHTML = `'${this.inputSearch.getInput().value}' is not found`;
      }
    });
    this.inputSearch.mount();
    this.container?.append(this.inputSearch.getElement());
  }

  public setupNavButtons() {
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
    this.navBar.mount();
    this.container.append(this.navBar.getElement());
  }

  protected updateElements(groupList: GroupList, arrGroup: string[], totalResult: number, navButtons: NavButtons) {
    this.navBar.updateNavLabel(groupList.getIndex(), groupList.getTotalGroups());
    this.iconButtonGroup.updateIconButtons(arrGroup);
    this.navBar.updateNavButtons(groupList.isFirst(), groupList.isLast(), navButtons.previous, navButtons.next);
    this.footer.update(this.groupList.getIndex(), this.groupSize, arrGroup.length, totalResult);
  }

  public mount(): void {
    let firstGroup = this.groupList.first();
    this.iconButtonGroup.updateIconButtons(firstGroup);
    this.setupInputSearch();
    this.setupNavButtons();
    this.container.append(this.iconButtonGroup.getElement());
    this.footer.update(this.groupList.getIndex(), this.groupSize, firstGroup.length, this.groupList.getTotalItems());
    this.container.append(this.footer.getElement());
    if (this.isButton) {
      this.popover = new Popover(this.container, this.button as Element);
      this.iconButtonEvent.on('select', () => {
        this.popover?.hide();
      });
    }
  }
}
