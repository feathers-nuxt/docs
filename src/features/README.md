---
title: Integrated
---

# Integrated Features
When creating enterprise grade web applications, there are a number of absolutely necessary functionalities. Some of these are included with the template by default so that you do not have to recreate them. 
If you have used `feathers` or `nuxt` - or both - before, then `f3` should seem familiar. The following features are included in the template by default for seamless integration of feathers with nuxt as well as providing bare necessities for scalable, progressive web apps:

- Routing using directories. Add a single file component in pages directory to create `UI route`. Add service declaration file or directory in `services` directory to create `API route`. 
- Namespacing route paths to avoid conflict between `UI` and `API` routes. `API routes` are automatially namespaced behind `/api/` but `UI routes` are not.
- Authentication using feathers [server](https://github.com/feathersjs/authentication) and feathers [client](https://github.com/feathersjs/authentication-client)
- Authorization using [casl](https://stalniy.github.io/casl/) on the server and [casl/vue](https://github.com/stalniy/casl/tree/master/packages/casl-vue) on the client.
- Caching API requests using [feathers-hooks-rediscache](https://www.npmjs.com/package/feathers-hooks-rediscache) and [feathers-vuex](https://github.com/feathers-plus/feathers-vuex) on the client. 
- Offline support using [Workbox](https://pwa.nuxtjs.org/modules/workbox.html) to register a service worker for caching requests for UI resources on the client.
- Logging using [storyboard](https://github.com/guigrpa/storyboard) for end to end logs and [feathers-logger](https://github.com/feathersjs-ecosystem/feathers-logger) backed by [winston](https://github.com/winstonjs/winston) for server-only logs
- Uploading files to file system or any other [abstract-blob-store](https://github.com/maxogden/abstract-blob-store) compatible storage like S3, Azure, Google Drive, MongoDB,
- Background jobs using [node-resque](https://github.com/taskrabbit/node-resque) to isolate slow operations - like sending emails- so as not to block the main thread.
- Notifications service for sending all kinds of transactional notifications including emails, SMS, pushes, webpushes, slack using [feathers-notifme](https://github.com/feathers-nuxt/feathers-notifme).
- Database Object Mapper included depending on type of database chosen during initialization. For SQL databases, Sequelize ORM is included. For Mongo NoSQL database, Mongoose ORM is included.
- Database migrations and seeding to facilitate creating and altering tables - when using SQL databases - as well as adding initial data into the tables - regardless of the database type.
- Transpiler and bundler so that you can use latest EcmaScript features or any compile-to-javascript language for server as well as client side code.