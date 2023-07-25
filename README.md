# IconPicker
Vanilla Javascript Icon Picker (made with Typescript)

## How to use

```html
<div style="250px" id="element-id"></div>
```

```javascript
const iconPicker = new IconPicker('element-id', iconset, 20, { iconButtonClass: 'btn btn-secondary' });
iconPicker.onSelect((icono) => {
  console.log(icono);
});
iconPicker.mount();
```
## Options

```
{
  iconButtonClass: string;
  selectedIconButtonClass: string;
  navButtonClass: string;
  inputPlaceholder: string;
  inputClass: string;
  arrowPrevIconClass: string;
  arrowNextIconClass: string;
  templateFooter: string;
  placement: PopOverPlacement; // 'bottom' | 'top' | 'left' | 'right'
  popoverTheme: string;
}
```

## Methods

### constructor(id: string, iconset: string[], pageSize: number, options: Options)

```javascript
//const iconset = ['fa-solid fa-home', 'fa-solid fa-star',...];
var iconPicker = new IconPicker('element-id', iconset, 30, {});
```

### setSelected(icon: string): void

```javascript
iconPicker.setSelected('fa-solid fa-home');
```

### setPopoverTheme(theme: string): void

Only when the icon picker is a button

```javascript
iconPicker.setPopoverTheme('dark'); // 'dark' | 'light'
```

### mount(): void
Build and renderize the icon picker

```javascript
iconPicker.mount();
```

## Events

### onChange(listener: (param: { icon: string, button: HTMLButtonElement} => void): void

```javascript
iconPicker.onChange((params) => {
  console.log('Icon: ' + params.icon);
});
```