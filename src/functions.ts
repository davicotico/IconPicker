import { CARET } from "./constants";

function createButton(content: string | HTMLElement, className: string = '') {
  const b = document.createElement('button');
  b.className = className;
  if (typeof content == 'string') {
    b.innerHTML = content;
    return b;
  }
  b.append(content);
  return b;
}

function createIcon(icon: string) {
  const i = document.createElement('i');
  i.className = icon;
  return i;
}

function createDiv(className: string, width: string) {
  let d = document.createElement('div');
  d.style.width = width;
  d.className = className;
  return d;
}

function makeIconPickerButton(button: HTMLButtonElement): HTMLButtonElement {
  let icon = createIcon('');
    icon.style.display = 'inline-block';
    button.append(icon);
    let i = document.createElement('span');
    i.innerHTML = CARET;
    i.style.marginLeft = '10px';
    button.append(i);
    return button;
}

function emptyElement(element: HTMLElement): void {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

export {
  createButton,
  createIcon,
  createDiv,
  makeIconPickerButton,
  emptyElement
}