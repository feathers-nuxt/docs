---
title: Integrated
---

# Integrated Features

When creating enterprise grade web applications, there are a number of absolutely necessary functionalities. Some of these are included with the template by default so that you do not have to recreate them. The following features are integrated into the template by default and work seamlessly with SSR.
- Authentication using feathers [server](https://github.com/feathersjs/authentication) and feathers [client](https://github.com/feathersjs/authentication-client)
- Authorization using [casl](https://stalniy.github.io/casl/) on the server and [casl/vue](https://github.com/stalniy/casl/tree/master/packages/casl-vue) on the client.
- Caching API requests using [feathers-hooks-rediscache](https://www.npmjs.com/package/feathers-hooks-rediscache) and [feathers-vuex](https://github.com/feathers-plus/feathers-vuex) on the client. 
- Offline support using [Workbox](https://pwa.nuxtjs.org/modules/workbox.html) to register a service worker for caching non-API requests on the client.
- Logging using [storyboard](https://github.com/guigrpa/storyboard) for end to end logs and [feathers-logger](https://github.com/feathersjs-ecosystem/feathers-logger) backed by [winston](https://github.com/winstonjs/winston) for server-only logs
- Uploading files to file system or any other [abstract-blob-store](https://github.com/maxogden/abstract-blob-store) compatible storage like S3, Azure, Google Drive, MongoDB,
- Background jobs using [node-resque](https://github.com/taskrabbit/node-resque) to isolate slow operations - like sending emails- so as not to block the main thread.
- Notifications service for sending all kinds of transactional notifications including emails, SMS, pushes, webpushes, slack using [feathers-notifme](https://github.com/feathers-nuxt/feathers-notifme).
- Database Object Mapper included depending on type of database chosen during initialization. For SQL databases, Sequelize ORM is included. For Mongo NoSQL database, Mongoose ORM is included.
- Database migrations and seeding to facilitate creating and altering tables - when using SQL databases - as well as adding initial data into the tables - regardless of the database type.
- Transpiler and bundler so that you can use latest EcmaScript features or any compile-to-javascript language for server as well as client side code.