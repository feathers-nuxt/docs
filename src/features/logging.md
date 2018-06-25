`feathers-nuxt` depends on [storyboard](https://github.com/guigrpa/storyboard) for logging both on the server and on the client. Storyboard is great because it aggregates logs generated on the client and on the server after a user action (such as click on the Login button) in a single place.

The logger is available anywhere in client side code by invoking `app.api.mainStory` or in serverside code by invoking `app.mainStory`. Logs from the client will be shown on the server terminal. Logs from the server will be shown on browser console.

You may need to set up authentication to see server logs , particularly when deploying to production. ( Guide comming soon )