---
title: Logging
---

### Feathers Logger
Feathers server instance is configured with [feathers-logger](https://github.com/feathersjs-ecosystem/feathers-logger) backed by [winston](https://github.com/winstonjs/winston) for server-only logs. You can configure winston as you wish by editing `src/server/utils/winston.ls`. By default two intances of `transports.File` and an instance of `transports.Console` are included to write to file and console respectively. 

### Storyboard Client
While the Server Logger writes to File and Console - and any other transport you add - the Client Logger writes back to server
Logging wouldn't be as straightfoward as it is when using [storyboard](https://github.com/guigrpa/storyboard) because of how it handles end to end logging. transmittion of client originated logs to the server and reception of server originated logs at the client is handled with `storyboard-listener-ws-client` over websockets. Also included is `storyboard-listener-browser-extension` to allow using [Storyboard Chrome Devtools](http:/storyboarddevtools) to view hierachical end-to-end logs on the browser. 
A vue plugin is included to ensure you can access the logger within vue components as `this.$storyboard`. Alternatively, use `store.app.api.storyboard` to access the logger anywhere within nuxt outside of components. 
:::tip
Of course, you could subtitute `store` above with `window` if invoking on browser console or with `this` if invoking within store module or `@$store` if invoking from component script - *lang='livescript'*.
:::

For hierachical Logging, feathers **client** is configured with a **global global** hook for creating a child off storyboard's mainStory and passing the child's storyId alongside `params.query` on every request. 

### Storyboard Server
Feathers server instance is configured with [storyboard](https://github.com/guigrpa/storyboard) backed by [storyboard-listener-ws-server](http://storyboard-listener-ws-server) for receiving logs from nuxt logger and transmitting server originated logs to nuxt-logger by [storyboard-listener-console](http://storyboard-listener-console) and 
On the server, you may use either  `feathers-logger` or `storyboard-logger`. The difference is that with `storyboard-logger` your server logs will be visible by the client. You should set up authentication for `storyboard-listener-ws-server` to restrict access of server originated logs.
:::tip
`storyboard-listener-console` opens port `8090` dedicated for accessing end to end logs from the browser.
:::
For hierachical Logging, feathers **server** includes a **global hook** to extract storyId from  `params.query` if set and create a child off storyboard's mainStory whose extraParents include the received storyId.