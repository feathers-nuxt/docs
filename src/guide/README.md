---
title: Quick Start
---

## Introdution

**f3** is a set of utilities for integrating feathers and nuxt. It aims to enable fast prototyping of production ready full stack applications without foregoing developer happiness.

It avails the tools required for all tasks involved in the lifecycle of the applications including project initialization, development, deployment and scaling of enterprise grade applications. 

The template used for project initialization provides the necessary boilerplate code required for integrating [feathers](https://feathersjs.com/) with [nuxt](https://nuxtjs.org/). 
It also provides a few other utilities that make developing fullstack applications easier; including [universal authentication](https://github.com/feathersjs/authentication), [universal authorization](https://github.com/stalniy/casl), [end-to-end logging](https://github.com/guigrpa/storyboard). The template defines npm script for invoking tasks

> When using an SQL database, f3 will include npm scripts for running migrations and seeding database.

## Installation

Ensure you have [sao](https://sao.js.org/) installed globally. yarn is preferred to npm, although you may use the later if you so wish.
```bash
sao feathers-nuxt/template-app awesome-app --update
```
You will be prompted to answer a couple of questions to determine how the template should be customized to your needs. Sao will then clone the template in this repository and put the customized template inside awesome-app directory.
 
You may also use f3 cli instead of sao if you install it globally. At the moment the f3 isn't published to npm so you'd install from [github](https://github.com/feathers-nuxt/cli)
```bash
yarn global add github:feathers-nuxt/cli
# npm i -g github:feathers-nuxt/cli
f3 init awesome-app
```

## Usage
There are several other npm scripts defined in package.json. To list them all, invoke
```bash
yarn run
```
> Tip: To start the application in development mode invoke yarn run dev

## Configuration
See f3.config.js
    - nuxt: anything you'd put into nuxt.config.js
    - backpack: anything you'd put into backpack.config.js
