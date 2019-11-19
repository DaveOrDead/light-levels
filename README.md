# Light Levels

[![Travis][build-badge]][build] [![npm package][npm-badge]][npm] [![Coveralls][coveralls-badge]][coveralls]

A vanilla javascript plugin for polyfilling the [light-level CSS @media feature].

This media feature can be used to adjust styles based on the ambient light level - however since it's from a relatively recent Working Draft, it currently has zero browser support.

This polyfill detects ambient light levels and applies a corresponding class name to the `<html>` element in order to emulate the same behaviour today.

It is recommended to combine this plugin with the PostCSS plugin [postcss-light-levels] which allows you to write the upcoming syntax but uses it to generate class names which correlate to the ones generated by this library..

It is worth nothing that both this JS library and PostCSS plugin can be used independently if you wish.

[light-level css @media feature]: https://developer.mozilla.org/en-US/docs/Web/CSS/@media/light-level
[postcss-light-levels]: https://github.com/daveordead/postcss-light-levels
[build-badge]: https://travis-ci.com/DaveOrDead/light-levels.svg?branch=master
[build]: https://travis-ci.com/DaveOrDead/light-levels
[npm-badge]: https://raster.shields.io/npm/v/light-levels.png
[npm]: https://www.npmjs.com/package/light-levels
[coveralls-badge]: https://coveralls.io/repos/github/DaveOrDead/light-levels/badge.svg?branch=master
[coveralls]: https://coveralls.io/github/DaveOrDead/light-levels?branch=master



## Table of Contents

- [Installation](#installation)
  - [npm](#npm)
  - [CDN](#CDN)
- [Usage](#usage)
  - [ES Module](#ES-Module)
  - [CommonJS](#CommonJS)
  - [UMD](#UMD)
  - [CSS](#CSS)
- [Options](#options)
- [License](#license)


## Installation

### npm

```sh
npm install light-levels --save
```

### CDN

```html
<script src="https://unpkg.com/light-levels/umd/light-levels.min.js"></script>
```
A vanilla javascript plugin for polyfilling the light-level CSS @media feature.

## Usage

### ES module

```js
import lightLevels from "light-levels";

lightLevels();
```

### CommonJS

```js
const lightLevels =  require("light-levels");

lightLevels();
```

### UMD

If you use the direct `<script>` approach you can instantiate `lightLevels as a browser global.

```html
<script>
    lightLevel();
</script>
```

### CSS

By default this plugin applies classes of `.light-level-dim`, `.light-level-normal` or `.light-level-washed` to match the values of the [light-level media query](https://drafts.csswg.org/mediaqueries-5/#light-level).

```css
/* Styles to apply in low light  environments */
.light-level-dim p {
  background-color: black;
  color: white;
}

/* Styles to apply in normal light environments */
.light-level-normal p {
  background-color: white;
  color: black;
}

/* Styles to apply in bright light environments */
.light-level-washed {
  background-color: pink;
  color: orange;
}
```

## Options

```js
lightLevels({
    prefix: "light-level-",
    frequency: 60
});
```

| Option name | Usage | Default |
| ----------- | ----- | ------- |
| prefix | if `light-level-` doesn't work for you, change the prefix that comes before ['dim' | 'normal' | 'washed'] with this option | 'light-level-' |
| frequency | Request the underlying platform to deliver readings at a certain rate which is called [requested sampling frequency](https://www.w3.org/TR/generic-sensor/#sampling-frequency). | 60 |

## License

Copyright (c) 2019 [David Berner](http://davidberner.co.uk)

Licensed under the MIT license _(see [LICENSE.md](https://github.com/daveordead/light-levels/blob/master/LICENSE) for more details)_
