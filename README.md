# postcss-prefix-classless
A [PostCSS](https://github.com/postcss/postcss) plugin to prefix/namespace selectors without classes. The whole reason this was created was to solve an issue where we wanted to import [normalize.css](https://github.com/necolas/normalize.css/) but wanted it to only be relevant to a specific container.

__Example input__

```css
button { /* ... */ }
a { /* ... */ }
```

__Example output__
```css
.fancy-pancy-class button { /* ... */ }
.fancy-pancy-class a { /* ... */ }
```


## Installation

```
npm install postcss-prefix-classless --save-dev
```

## Usage

```javascript
require('postcss-prefix-classless')('.fancy-pancy-class')
```

## License

MIT
