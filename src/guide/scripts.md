---
title: Tasks
---

# Task Runners

To remain minimalistic, `f3` does not include a standalone task runner like `gulp` or `grunt` but instead relies on `npm scripts` which are equally powerful yet easier to maintain. Your project will include a number of `npm` scripts for tasks in your development and deployment workflow. To run a `task` just invoke `npm run task` or `yarn task` where `task` is one of listed below.

### npm scripts
The following tasks are available on the `scripts` section of your project's `package.json` manifest. You can invoke `npm run` or `yarn run` on your project root directory to get this list of available tasks.
- `dev`: serve while watching for changes. HMR for client code and auto-reload for server code.
- `start`: run pre-compiled application in production mode.
- `migrate`: create database tables based on defined migrations.
- `seed`: insert data into freshly created tables.
- `build`: compile code with webpack. Triggers both the following:
	- `build:server` targets node only using `backpack`.
	- `build:client` targets both node and browsers using `nuxt`.
- `deploy`: prepare a remote server with utilities for emulating Heroku build and runtime process.

You trigger `deploy` task only once for each remote server hosting your app to setup it up as a herokuish host. 
To redeploy ,simply, do a `git push`.