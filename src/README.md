---
home: true
heroImage: ./logo.png
actionText: Get Started →
actionLink: /guide/
features:
- title: feathers 
  details: Access database file-system resources uniformly from either Node or Browser. Includes nuxt middleware for Server Side Rendering the UI app.
- title: f3
  details: Utilities for integrating feathers with nuxt inluding a starter template with npm scripts to live-reload, build and deploy app, migrate and seed database.
- title: nuxt
  details: Render Vue uniformly on Node or Browser. Setup with feathers-client and feathers-vuex for availing feathers services as vuex store modules.
footer: MIT Licensed | Copyright © 2018-present kelvin kharhys

---


## Quick Start
Ensure you have [sao](https://sao.js.org/) installed globally. `yarn` is preferred to `npm`, although you may use the later if you so wish.
```bash
sao feathers-nuxt/template-app awesome-app --update
```
You will be prompted to answer a couple of questions to determine how the template should be customized to your needs. Sao will then clone the template in this repository and put the customized template inside `awesome-app` directory.

Once your app is initialized do `cd awesome-app` to access your new project. To start the application in development mode run
```bash
yarn dev
```
This will run your application using `nodemon` to watch for file changes and reload the app automatically.


There are several other `npm scripts` defined in `package.json`. To list them all, invoke `yarn run` Alternatively, see the comprehensive list of available commands here.