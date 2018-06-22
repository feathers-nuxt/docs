---
title: Architecture
---

## Directory Structure
An application initialized using f3 will have the following directory stucture


text
├── f3.config.js                   # nuxt & backpack configuration
├── .babelrc                       # babel configuration to use with backpack
├── .podhook                       # shell commands to run on remote server during deploy
├── .gitignore                     # list of file to ignore while deploying to remote server
└── src
    ├── client                     # transpiled using nuxt
        ├── assets                 # files to transpile with webpack: less, stylus 
        ├── static                 # files to serve as static resources 
        ├── pages                  # Vue SFC accessible via a URL    
        ├── components             # Vue SFC to use within other SFC
        ├── layouts                # Vue SFC to use for page layout        
        ├── middleware             # nuxt renderer middleware
        ├── plugins                # Vue.js plugins
        ├── store                  # Vuex store modules
        └── utils                 
            ├── initClient.js      # creates feathers client for server and client bundle
            ├── initAuth.js        # autheticate and populate store with user object 
            └── store  
                ├── modules        # modules for vuex
                └── plugins        # plugins for vuex
    └── server                     # transpiled using backpack
        ├── config                            
            ├── default.yml        # settings for development env
            ├── production.yml     # settings for production env
            └── production-0.yml   # settings for PM2 app instance 0
        ├── index.ls               # entry to initialize both app and api servers   
        ├── app.ls                 # express server with nuxt middleware and feathers as sub app     
        ├── api.ls                 # feathers server with socket.io and rest transports
        ├── api.hooks.ls           # configures global api hooks
        ├── hooks                  # triggers run during resource access
            └──global.ls           # configures global api hooks
        ├── notifications          # templates and dispatcher for email, sms, webpush,
        ├── services               # service, schema, model and hooks for resources in db, fs,
            └── auth.ls            # configures feathers for authentication
        └── db                     
            ├── orm.ls             # configures feathers to use mongoose or sequelize ORM
            ├── seed.ls            # populates database with dummy data
            └── migrations         # procedures to creates and drop tables
        └── middleware             
            └── nuxt.ls            # nuxt middleware for SSR

## Logical Structure
The application is is an express instance containg nuxt SSR middleware for serving ui routes and a feathers sub app for serving api routes.

### express app
Leveraging Feathers Express framework bindings to create and Express server that we attach nuxt and feathers as middleware.
```livescript
express = require '@feathersjs/express'
app = express! # simple express app to serve both ui and api routes
```

### feathers as express sub app
Because an Express app is valid middleware and a Feathers app is also an Express app - when used serverside -, we attach the api (feathers) server to the express app as a middleware under the namespace `api`. This ensures that only routes starting with /api/ will be processed by feathers and the rest are handled by nuxt.
```livescript
# app as declared above

api = require './api' # import feathers application
app.use '/api', api # include feathers as a namespaced sub app 
```

### nuxt as express middleware
Nuxt is set up as a simple express middleware to process routes which do NOT start with `/api/` in order to avoid conflict with api server routing.
```livescript
# app and api as declared above

nuxt = require './middleware' # nuxt SSR middleware
app.use nuxt api # include middleware for rendering nuxt routes
```
> Ensure that nuxt middleware is declared last

<!-- 

Can be considered data driven in architecture. There are, conceptually, two layers  
Relies on the capabilities of both **nuxt** and **feathers** to run on both the **browser** and **node**.

This is a **feathers** server using embeded **nuxt** middleware for building and rendering **UI** defined as **Vue** **SFC**s.

> Building only happens when app runs in **development** mode. Ensure you build the client before starting server in **production** mode.

By default, **nuxt** is set to build in **universal** mode so that the resulting build is an **isomorphic**; it can be used by the embedded middleware to render a ***route*** as a **pwa** that supports client-side navigation. **feathers** being isomorphic as well provides access to backend service to the universal build during rendering on the server and to the rendered ***route*** during interactions on the browser. 

:::tip
When deploying client build using **f3** to a static content server - such as **now.sh**, **surge.sh**, **ghpages** - 
**nuxt build** will be invoked with the **mode** option set to ***spa***. The resulting build does not require and will not work with the embedded middleware but it supports client-side navigation.
:::

Within ***nuxt resources*** the server instance can be accessed from **Vue** **SFC** script as **this.$store.app.api** or as **this.app.api** from **Vuex** store modules. It can also be accessed in your page middleware as well.
 -->

### feathers client within nuxt

Feathers client instance is accessible as `store.app.api` from nuxt context object or within **Vue** components as `this.$store.app.api` or within **Vuex** store modules as `this.app.api` to provide access to backend services within nuxt.

> Ensure that you first declare every service you intend to use in **utils/initClient.js** 

:::tip
When rendering on the server, the instance of **feathers-client** passed to **nuxt** is setup to use **HTTP** transport while the instance used with the browser renderer is setup to use **WebSocket** transport. The two versions are, however, functionally equivalent.
:::

### feathers services as vuex modules
Use [feathers-vuex Service Module](https://feathers-plus.github.io/v1/feathers-vuex/service-module.html) to sets up feathers services as Vuex store modules. 