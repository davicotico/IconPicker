interface ClickButtonParameter {
  icon: string;
  button: HTMLButtonElement;
};

type IconButtonlistener = (param: ClickButtonParameter) => void;

interface NavButtons {
  previous: HTMLButtonElement;
  next: HTMLButtonElement;
}

interface Options {
  iconButtonClass: string;
  selectedIconButtonClass: string;
  navButtonClass: string;
  inputPlaceholder: string;
  inputClass: string;
  arrowPrevIconClass: string;
  arrowNextIconClass: string;
  templateFooter: string;
}

export type { IconButtonlistener, NavButtons, Options, ClickButtonParameter };
