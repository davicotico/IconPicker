interface ClickButtonParameter {
  icon: string;
  button: HTMLButtonElement;
};

type IconButtonlistener = (param: ClickButtonParameter) => void;

interface NavButtons {
  previous: HTMLButtonElement;
  next: HTMLButtonElement;
}

interface IconPickerOptions {
  iconButtonClass?: string;
  selectedIconButtonClass?: string;
  navButtonClass?: string;
  inputPlaceholder?: string;
  inputClass?: string;
  arrowPrevIconClass?: string;
  arrowNextIconClass?: string;
  templateFooter?: string;
  placement?: string; // popover placement
}

export type { IconButtonlistener, NavButtons, IconPickerOptions, ClickButtonParameter };
