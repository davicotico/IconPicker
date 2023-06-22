# IconPicker
Vanilla Javascript Icon Picker (made with Typescript)

## How to use

```html
<div style="250px" id="element-id"></div>
```

```javascript
const iconPicker = new IconPicker('element-id', iconset, 4, 5);
iconPicker.onSelect((icono) => {
  console.log(icono);
});
iconPicker.mount();
```

## Methods

* constructor(id: string, iconsets: string[], rows: number, cols: number, options: Options)
* onSelect(listener: (param: string) => void): void
* mount(): void
