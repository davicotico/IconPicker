interface ClickButtonParameter {
  icon: string;
  button: HTMLButtonElement;
};

type IconButtonlistener = (param: ClickButtonParameter) => void;

interface NavButtons {
  previous: HTMLButtonElement;
  next: HTMLButtonElement;
}

type PopOverPlacement = 'bottom' | 'top' | 'left' | 'right';

interface IconPickerOptions {
  iconButtonClass?: string;
  selectedIconButtonClass?: string;
  navButtonClass?: string;
  inputPlaceholder?: string;
  inputClass?: string;
  arrowPrevIconClass?: string;
  arrowNextIconClass?: string;
  templateFooter?: string;
  placement?: PopOverPlacement;
  popoverTheme?: string;
}

export type { IconButtonlistener, NavButtons, IconPickerOptions, ClickButtonParameter, PopOverPlacement };
