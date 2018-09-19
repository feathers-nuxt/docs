---
title: Routing
---

# Namespaced Directory based routing
A UI route is one you can type in the browser address bar and get a HTML page back. An API route, on the other hand, returns a JSON response and can be invoked with any http client such as a browser, postman, feathers, etc. 
:::tip
In `dev` mode, you may invoke `app.api.services` on the browser console or navigate to `api/docs` on the address bar to see available API routes.
:::

To avoid conflict between UI and API routes, namespacing is necessary. Any route path starting with `/api/` is considered an API route and is served by feathers. Any other route will be regarded as a UI route and will be served using nuxt. URLs for static resources are also considered as UI routes and will be served by nuxt if placed under `src/client/static`.
> Avoid having a directory named `api` under `src/client/pages` directory as it may break the namespacing strategy.

To add a route to your app, simply create a file in the relevant directory. For a UI route create the file under `src/client/pages`. For an API route create a file (or a directory) under `src/server/services`. The name of the file or directory will be the path to the route you created. Of course, the path must be prefixed with `/api/` for an API route.
> You will likely create a directory not a file for an API route so as to separate model, schema, service, hooks definitions into separate files.

### Included routes
- `api/docs` - autogenerated [swagger](/guide/routing) documentation of all defined API routes. 
- `api/users` - users management service
- `api/authentication` - user [authentication](guide/authentication) service.
- `api/authenticationManagement` - [authenticationManagement](guide/authentication) service.
- `api/notifications` - service to create [notifications](guide/notifications)
- `api/uploads` - service to handle [file uploads](guide/tasks)
- `api/jobs` - service to manage [background tasks](guide/tasks)

:::tip
Except the first, you can interact with the rest of these endpoints using Postman
:::