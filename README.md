# Light Levels

[![Travis][build-badge]][build] [![npm package][npm-badge]][npm] [![Coveralls][coveralls-badge]][coveralls]

A vanilla JavaScript plugin for polyfilling the [light-level CSS @media feature].

This media feature can be used to adjust styles based on the ambient light level - however since it's from a relatively recent Working Draft, it currently has zero browser support.

This polyfill detects ambient light levels and applies a corresponding class name to the `<html>` element in order to emulate the same behaviour today.

It is recommended to combine this plugin with the PostCSS plugin [postcss-light-levels] which allows you to write the upcoming syntax but uses it to generate class names which correlate to the ones generated by this library.

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

- [Demo](#Demo)
- [Browser Support](#BrowserSupport)
- [Installation](#installation)
  - [npm](#npm)
  - [CDN](#CDN)
- [Usage](#usage)
  - [ES Module](#ESModule)
  - [CommonJS](#CommonJS)
  - [UMD](#UMD)
  - [CSS](#CSS)
  - [Options](#options)
- [License](#license)

## Demo

A working demo can be found here: [https://daveordead.github.io/light-levels-demo/](https://daveordead.github.io/light-levels-demo/)


## Browser Support

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br> Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Android Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Android Chrome |
| --------- | --------- | --------- | --------- | --------- |
| 16 | 62 :triangular_flag_on_post: | 62 :triangular_flag_on_post: | 54 :checkered_flag: | 54 :checkered_flag: |

:triangular_flag_on_post: uses deprecated `ondevicelight` behind the [device.sensors.ambientLight.enabled](about:config) feature flag

:checkered_flag: Uses `AmbientLightSensor` behind the [#enable-generic-sensor-extra-classes](chrome://flags/#enable-generic-sensor-extra-classes) feature flag

## Installation

### npm

```sh
npm install light-levels --save
```

### CDN

```html
<script src="https://unpkg.com/light-levels/umd/light-levels.min.js"></script>
```
A vanilla JavaScript plugin for polyfilling the light-level CSS @media feature.

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

If you use the direct `<script>` approach you can instantiate `lightLevels` as a browser global.

```html
<script>
    lightLevel();
</script>
```

### CSS

By default this plugin applies classes of `.light-level-dim`, `.light-level-normal` or `.light-level-washed` to match the values of the [light-level media query](https://drafts.csswg.org/mediaqueries-5/#light-level).

```css
/* Styles to apply in low light environments */
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
.light-level-washed p {
  background-color: pink;
  color: orange;
}
```

### Options

```js
lightLevels({
    prefix: "light-level-"
});
```

| Name | Usage | Default |
| ----------- | ----- | ------- |
| prefix | if the prefix `light-level-` doesn't suit your code base, you can change it to something more appropriate with this option. Note: The postfix names of ['dim' \ 'normal' \ 'washed'] can not be modified. If you are using this in combination with the PostCSS plugin you should also update the prefix option there. | 'light-level-' |

## License

Copyright (c) 2019 [David Berner](http://davidberner.co.uk)

Licensed under the MIT license _(see [LICENSE.md](https://github.com/daveordead/light-levels/blob/master/LICENSE) for more details)_
