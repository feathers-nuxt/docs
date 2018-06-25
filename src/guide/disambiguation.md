---
title: Disambiguation
---

## Glossary
There are several concepts that cut accross both **feathers** and **nuxt** frameworks such that their use in the context of **f3** may be ambigous. A `middleware` for instance may refer to feathers, express, connect or nuxt middleware all of which are used within `f3`. See below for clarification. This section attempts to disambiguate common terms used with both **nuxt** and **feathers**.
The term `Presentation` is prefered instead of frontend since nuxt runs on the backend as well. Similarly, the term `Persistence` is prefered to backend since feathers runs on the frontend as well.

## Presentation Resources
All the resources available at the frontend including static files such as images, videos, css, e.t.c, pipeline files such as stylus, less, sass, e.t.c and markup files such as components, layouts, pages, e.t.c. The directories mentioned in this sub-section are inside `$PROJECT_ROOT/src/client`.

### Static Assets
Static assets are served to the client as is, i.e no preprocessing. Any resource placed inside **static** will be availed to the client by `express.static` [built-in middleware](https://expressjs.com/en/starter/static-files.html)

### Pipeline Assets
Resources inside **assets** directory are processed and bundled using webpack with the rest of the app. The downside to inlined assets is that the bundle file may grow too large and the assets can not be *cached* for offline use. Global **styles** should be in the **assets** directory so that they be inlined in the bundle.

### Markup
The term *Markup* will be used to refer to HTML or Vue code for rendering user interface - what is generally referred to as **HTML component** in front-end frameworks circles. The term **component** in the context of **f3** is reserved for Vue's Single File Components in in a particular directry. See below.

### Single File Component
A file with **.vue** extension containing mark up structured in 3 section: **template**, **script** and/or **style**. Templates can be written in **HTML** or any language that compiles to **HTML**. **feathers-nuxt** prefers **pug** to ensure you write less code. **script** can be written in **javascript** or any language that compiles to **javascript**. **feathers-nuxt** prefers **livescript** so you may type less braces and semicolons. Similarly, **style** can be written in **CSS** or any language that compiles to **CSS**. **feathers-nuxt** prefers stylus so you write less braces.

### Component
A component is, simply, a **SFC** under **client/components** directory containing a custom HTML element to be used **within** **Page SFC**s and **Layout SFC**s. Unlike a **Layout SFC**s which are parents for **Page SFC**s, a **Component** is a child to either **Page SFC**s and **Layout SFC**s.

### Layout
A layout is, simply, a **SFC** under **client/layouts** directory. **nuxt** inserts each page into a **Layout SFC** during rendering by passing the relevant **Page SFC** as a child component to the **Layout SFC**. If a **Page SFC** does not declare a **layout**, the default layout is used.

### Page
A page is, simply, a **SFC** under **client/pages** directory. **nuxt** ensures that the page can be accessed using a **relative url** matching the file's name. E.g **about.vue** is made accessible using **/about** at the URL bar. A sub-directory inside **client/pages** will result to nested routes. If the name of the **.vue** file or sub-directory starts with an underscore, the routing path will be dynamic. See [nuxt routing guide](https://nuxtjs.org/guide/routing) for more information.


## Presentation Logic
**feathers-nuxt** distinguishes logic for the front-end into several concepts: middleware, plugins and modules. Logic for accessing server from the frontend is in the **api** directory containing a single file **feathers.js** to be used by the default **vuex** store module. _See bellow_

### Vue Plugins
The **plugins** directory contains Logic for extending **vue** with **vue-*** plugins such as **vue-scrollto** or **vuex-router-sync**. To include a **plugin** in the build ensure you add it to **plugins** declaration on **nuxt** section of **f3.config.js**. 

By default, plugins are available on **both** the server and client instance of **vue** unless you include **ssr: false** in the plugin declaration object to ensure that a plugin is available on the client only. Front-end only plugins are often wrapped in a **window.onNuxtReady** event listener to ensure Vue is ready before plugin initialization.

### Page Middleware
A middleware is, simply, a function that runs before rendering a page on **either** server or client depending on where rendering happens. A **Page SFC** may declare **middleware** functions for that specific page. Alternatively, to run a set of **middleware** for each and every **Page SFC**, put the declaration in **nuxt** section of **f3.config.js**.

### Nuxt Module
A module contains logic for configuring or extending **nuxt** server side renderer such as setting up custom **webpack** loaders, SSR hooks, or Vue Plugins [among others](https://nuxtjs.org/guide/modules#common-snippets)

## Presentation State
Although setting up **vuex** is optional in standard **nuxt** application, it is setup by default in **feathers-nuxt** to abstract server side data in the client.

### Vuex Store
**feathers-nuxt** sets up [vuex store in modules mode](https://nuxtjs.org/guide/vuex-store#modules-mode) such that every file inside **store** directory is a **vuex** store module.

### Vuex Plugins
To include a **vuex** plugin, add the declaration in **plugins** export of **store/index.js**. See [vuex guide](https://vuex.vuejs.org/en/plugins.html) for more information.



