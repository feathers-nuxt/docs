`feathers-nuxt` relies on [casl](https://github.com/stalniy/casl) to restrict which resources a given user is allowed to access. 
All permissions are defined in a single location (the `Ability class`) and not duplicated across UI components, API services, and database queries.

CASL concentrates all attention at what a user can actually do and allows to create abilities in `DSL` style. It provides utilities for defining and checking abilities as well as integrating with `database` or `view` layer.

`feathers-nuxt` already integrates `CASL` with both `mongoose` at the database layer and `vue` at the `view` layer - using [casl-vue](https://github.com/stalniy/casl/tree/master/packages/casl-vue). It avails `$ability` and `$can` methods to every `SFC` for authorization in the `UI`. On the server `authorize` hook is provided for use with feathers services. (More on that [here](https://github.com/feathers-nuxt/template-app/wiki)