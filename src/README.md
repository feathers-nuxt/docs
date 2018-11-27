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
Use npx, if you do not have sao installed. npx comes bundled with npm version 5.2+.

```bash
npx sao npm:@feathers-nuxt/template-app --update awesome-app
```

You will be prompted to answer a couple of questions to determine how the template should be customized to your needs. 
Sao will then clone the template in this repository and put the customized template inside `awesome-app` directory.

If you already have sao installed globally, just invoke it with this template. 

```bash
sao npm:@feathers-nuxt/template-app --update awesome-app # downloads template from npm
# sao feathers-nuxt/template-app --update awesome-app # downloads template from github
```

## Installation
You may also use `f3` cli instead of `sao` if you install it globally. 
```bash
yarn global add @feathers-nuxt/cli
# npm i -g @feathers-nuxt/cli
f3 init awesome-app
```
> `yarn` is preferred to `npm`, although you may use the later if you so wish.

## Usage
Once your app is initialized, `cd awesome-app` to access your new project.

To start the application in development mode - watch files for changes and reload - run
```bash
yarn dev
```
If you are using an sql database ensure you run `yarn migrate up` to create necessary tables, then `yarn seed` to add test data to the database.
> There are several other **npm scripts** defined in **package.json**. To list them all, invoke `yarn run`


A guide for included tasks is available [here](/scripts)