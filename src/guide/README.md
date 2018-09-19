---
title: Scope
---

# UI and API Servers aand respective clients
When creating enterprise grade web applications, there are a number of absolutely necessary functionalities. Some of these are included with f3 template by default so that you do not have to recreate them. 
If you have used `feathers` or `nuxt` - or both - before, then `f3` should seem familiar. The following features are included in the template by default for seamless integration of feathers with nuxt as well as providing bare necessities for scalable, progressive web apps:
- [npm Tasks Scripts](/guide/scripts.md) for various tasks including development, build, database migrations and seeding, deployment and scaffolding.
- [Webpack Configuration](/guide/configuration.md) to transpile and bundle scripts so that you can use latest EcmaScript features or any compile-to-javascript language for server and client side code.
- [Routing](/guide/routing.md) using directories. Add a single file component in pages directory to create `UI route`. Add service declaration file or directory in `services` directory to create `API route`. 
- [Logging](/guide/logging.md) using [storyboard](https://github.com/guigrpa/storyboard) for end to end logs and [feathers-logger](https://github.com/feathersjs-ecosystem/feathers-logger) backed by [winston](https://github.com/winstonjs/winston) for server-only logs.
- [Caching](/guide/caching.md) of API requests with [feathers-hooks-rediscache](https://www.npmjs.com/package/feathers-hooks-rediscache) and [feathers-vuex](https://github.com/feathers-plus/feathers-vuex) on the client. Offline support using [Workbox](https://pwa.nuxtjs.org/modules/workbox.html) ensure caching for static resources on the browser.
- [Authentication](/guide/authentication.md), authenticationManagement and notifications services to complement included users service.
- Authorization with [casl](https://stalniy.github.io/casl/) on the server and [casl/vue](https://github.com/stalniy/casl/tree/master/packages/casl-vue) on the client.
- Uploading files to file system or any other [abstract-blob-store](https://github.com/maxogden/abstract-blob-store) compatible storage like S3, Azure, Google Drive, MongoDB,
- Background jobs using [node-resque](https://github.com/taskrabbit/node-resque) to isolate slow operations - like sending emails- so as not to block the main thread.
- Database Object Mapper included depending on type of database chosen during initialization. For SQL databases, Sequelize ORM is included. For Mongo NoSQL database, Mongoose ORM is included.
