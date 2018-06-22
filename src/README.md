---
home: true
heroImage: ./logo.png
actionText: Get Started →
actionLink: /guide/
features:
- title: CLI
  details: Project initialization, live-reload, build, database migration and seeding, app deployment command line scripts included.
- title: UI
  details: Render Sigle Page App uniformly on Node or Browser using nuxt. Includes feathers client behind vuex store modules.
- title: API 
  details: Access database file-system resources uniformly from either Node or Browser using feathers with nuxt middleware to serve UI SPA.
footer: MIT Licensed | Copyright © 2018-present kelvin kharhys

---


## Quick Start
Ensure you have [sao](https://sao.js.org/) installed globally. `yarn` is preferred to `npm`, although you may use the later if you so wish.
```bash
sao feathers-nuxt/template-app awesome-app --update
```
You will be prompted to answer a couple of questions to determine how the template should be customized to your needs. Sao will then clone the template in this repository and put the customized template inside `awesome-app` directory.

### Installation
You may also use `f3` cli instead of `sao` if you install it globally. At the moment the `f3` isn't published to `npm` so you'd install from [github](https://github.com/feathers-nuxt/cli)
```bash
yarn global add github:feathers-nuxt/cli
# npm i -g github:feathers-nuxt/cli
f3 init awesome-app
```

### Usage
Once your app is initialized do `cd awesome-app` to access your new project. To start the application in development mode run
```bash
yarn dev
```
This will run your application using `nodemon` to watch for file changes and reload the app automatically.


There are several other `npm scripts` defined in `package.json`. To list them all, invoke `yarn run` Alternatively, see the comprehensive list of available commands here.