
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

function emptyElement(element: HTMLElement): void {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

export {
  createButton,
  createIcon,
  createDiv,
  emptyElement
}