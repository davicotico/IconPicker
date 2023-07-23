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
}
```

## Methods

* constructor(id: string, iconsets: string[], pageSize: number, options: Options)
* onChange(listener: (param: { icon: string, button: HTMLButtonElement} => void): void
* setSelected(icon: string): void
* setPopoverTheme(theme: string): void
* mount(): void
