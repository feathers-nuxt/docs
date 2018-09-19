---
title: Configuration
---

# Transpilation with Webpack
nuxt provides webpack configuration to traspile and bundle file under `src/client` directory. backpack provides webpack configuration to transpile and bundle files under `src/server`. Both configurations may be extended as per repective documentation. backpack expects its configuration in `backpack.config.js` while nuxt expects its configuration unde `nuxt.config.js`. Instead of having two separate configuration files, for different instances of webpack, a single file is prefered. `f3.config.js` exports two objects with keys `nuxt` and `backpack`, which resemble exports of respective configuration files. It comes with a few extras on top of standard nuxt configuration including a number of plugins, setup for iview-loader and a few modules. It also includes a bit of configuration to extend backpack. Add your webpack configuration for whichever instance to this file under the relevant key.
The default configuration provides for the following:
- transpiling ecmascript with babel. use `.babelrc` file to configure babel instance that transpiles server code targetting current node version.
- transpiling livescript with livescript-loader - using this fork that supports async functions -
- Using css preprocessors including `stylus`, `postcss`, `sass` and `less`.
- Using html preprocessors including `pug`.

### Syntax Noise
One the most rewarding benefits of transpilation is that it allow to get rid of `"syntax noise"` if you wish. Semicolon at the end of every line in you stylesheets could be optional if you really wanted to [write less](http://jquery). Its one of the reason why, in this template ,` stylus` is preferred to `css`. You get to leave out the braces and the collon as well if you wish. Saves you a few key strokes but you can use plain old css or any other preprocessor you prefer including `postcss`, `sass` and `less`. You could even use multiple preprocessors together in a `.vue` file with multiple `style` tags.
If you want more than the semicollons to be optional in your scripts as well, livescript is for you. It allows you to leave out braces, parenthesis, and commas. `return` keyword is optional, but a few others must be dropped - including `let`, `const`, `var`, `async`, `function` etc. In general livescript code is more decernable a glance. But you can you ecmascript as well if you prefer. Backpack takes care of transpiling both.
The same philosophy is also applicable in your template if you use `pug` instead of html. You get to write a single tag instead of two as required by xml. Also you never have to type brackets again.

<!-- 
```javascript
var ready = api.chain(express(feathers()));
module.exports = new Proxy(api, {
  get(target, name) {
    return (name == 'ready') ? ready : target[name];
  }
});
```

```livescript
ready = api.chain express feathers!
module.exports = new Proxy api, get: (target, name) -> if name is 'ready' then ready else target[name] 
``` -->
