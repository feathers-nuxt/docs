---
title: Architecture
---

## Architecture

Can be considered data driven in architecture. There are, conceptually, two layers  
Relies on the capabilities of both `nuxt` and `feathers` to run on both the `browser` and `node`.

This is a `feathers` server using embeded `nuxt` middleware for building and rendering `UI` defined as `Vue` `SFC`s.

:::tip
Building only happens when app runs in `development` mode. Ensure you build the client before starting server in `production` mode.
:::

By default, `nuxt` is set to build in **universal** mode so that the resulting build is an **isomorphic**; it can be used by the embedded middleware to render a ***route*** as a **pwa** that supports client-side navigation. `feathers` being isomorphic as well provides access to backend service to the universal build during rendering on the server and to the rendered ***route*** during interactions on the browser. 

:::tip
When deploying client build using `f3` to a static content server - such as **now.sh**, **surge.sh**, **ghpages** - 
`nuxt build` will be invoked with the **mode** option set to ***spa***. The resulting build does not require and will not work with the embedded middleware but it supports client-side navigation.
:::

When a ***route*** in the **universal build** is rendered server side, the the server instance availed to ***nuxt resources*** is the actual Node.JS server. During client-side navigation, however, the available server instance is a proxy to the actual server over **webssocket** connection. The two instances have the same `API`.

Within ***nuxt resources*** the server instance can be accessed from `Vue` `SFC` script as `this.$store.app.api` or as `this.app.api` from `Vuex` store modules. It can also be accessed in your page middleware as well.

:::tip
It is recommended to externalize back-end services access logic outside components into store actions where you can access the server as `this.app.api`. However, there are other features of the back-end `api` that you may want to use in your components. For instance, `storyboard` logging (More on that below).
:::

## nuxt within feathers

The content of `src/server` are processed by backpack are processed through `backpack` following configurations in declared under the key `backpack` in the file `f3.config`.  

**Backpack** handles file-watching, live-reloading, transpiling, and bundling targeting server so we can use awesome tools like [livescript](http://livescript.net/) or latest`EcmaScript` features. See [configuration options](https://github.com/jaredpalmer/backpack). 

In addition to standard `feathers` **server** resources, a middleware is included for leveraging `nuxt` on the server. It sets up `nuxt` for **server side rendering** and stashes the app instance in the context of every `request` so that it is accessible within `nuxtServerInit`.

:::tip
Ensure that nuxt middleware is declared last and that middleware configuration is last to set up.
:::


## feathers within nuxt

The contents of `src/client` are processed through `nuxt` following configurations in declared under the key `nuxt` in the file `f3.config` See [nuxt documentation](https://nuxtjs.org/).

In addition to the resources in a standard `nuxt` project,   `src/client` includes an extra folder called `api` containing a single file named `feathers.js` for initializing `feathers` on the frontend. 

The instance is available within `Vue` components as `this.$store.app.api` and within `Vuex` store modules as `this.app.api` to provide access to backend `services`.

:::tip
Ensure that you first declare every service you intend to use in `api/feathers.js` 
:::

When rendering is done server-side, `feathers-client`is never initialized. Instead, `feathers` server instance will be availed as stated above. 

:::tip
When rendering on the server, the instance of `feathers-client` passed to `nuxt` is setup to use `HTTP` transport while the instance used with the browser renderer is setup to use `WebSocket` transport. The two versions are, however, functionally equivalent.
:::
