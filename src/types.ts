type IconButtonlistener = (param: string) => void;

interface NavButtons {
  previous: HTMLButtonElement;
  next: HTMLButtonElement;
}

interface Options {
  iconButtonClass: string;
  navButtonClass: string;
  inputPlaceholder: string;
  inputClass: string;
}

export type { IconButtonlistener, NavButtons, Options };
