---
home: true
heroImage: ./logo.png
actionText: Get Started →
actionLink: /guide/
features:
- title: feathers 
  details: Access database, file-system, network resources uniformly from either Node or Browser. Includes nuxt middleware for Server Side Rendering the UI app.
- title: feathers-nuxt
  details: Utilities for integrating feathers with nuxt inluding a starter template with npm scripts to live-reload, build and deploy app, migrate and seed database.
- title: nuxt
  details: Render Vue uniformly on Node or Browser. Setup with feathers-client and feathers-vuex for availing feathers services as vuex store modules.
footer: MIT Licensed | Copyright © 2018 [kharhys](https://github.com/kharhys)

---


## Quick Start
```bash
npx sao @feathers-nuxt/template-app awesome-app --update
```
You will be prompted to answer a couple of questions to determine how the template should be customized to your needs. Sao will then clone the template in this repository and put the customized template inside `awesome-app` directory.


## Installation
If you have [sao](https://sao.js.org/) installed globally, invoke bellow command.
```bash
sao feathers-nuxt/template-app awesome-app --update
```

## Usage
Once your app is initialized do `cd awesome-app` to access your new project. 
> `yarn` is preferred to `npm`, although you may use the later if you so wish.
Invoke below command to list `npm tasks` defined in `package.json`
```bash
yarn run
```
A guide for included tasks is available [here](/scripts)