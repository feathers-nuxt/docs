---
title: Services
---

# Included Services
Below are the default feathers services as accessible within nuxt through feathersClient. Note that you should subtitute `store` below with `window` if invoking on browser console or with `this` if invoking within store module or `@$store` if invoking from component script - *lang='livescript'*.
:::tip
See swagger documentation of below services at `/api/docs` for allowed methods and payload schema.
:::

### `store.app.api.users` 
users management service
:::tip
Ensure you run `yarn migrate` when using an SQL database to create the required table to store user records. Also invoke `yarn seed` to create some fake user entries in the database.
:::


### `store.app.api.authentication` 
user [authentication](guide/authentication) service builds on the users service to provide [authentication](/guide/authentication) endpoints including 
- To sign in use `app.api.authenticate`
- To sign out use `app.api.logout`

### `store.app.api.authenticationManagement` 
[authenticationManagement](guide/authentication) service complements authentication service by adding and endpoint for extra funtionalities such as
- Check props are unique in the users items 

  `app.api.authManagement.checkUnique(identifyUser, ownId, ifErrMsg)`

- Resend sign up verification notification 

  `app.api.authManagement.resndVerifySignup(identifyUser, notifierOptions)`

- Sign up or identityChange verification with long token 

  `app.api.authManagement.verifySignupLong(verifyToken)`

- Sign up or identityChange verification with short token 

  `app.api.authManagement.verifySignupShort(verifyShortToken, identifyUser)`

- Send forgotten password notification 
  `app.api.authManagement.sendResetPwd(identifyUser, notifierOptions)`

- Forgotten password verification with long token 
  `app.api.authManagement.resetPwdLong(resetToken, password)`

- Forgotten password verification with short token 
  `app.api.authManagement.resetPwdShort(resetShortToken, identifyUser, password)`

- Change password 
  `app.api.authManagement.passwordChange(oldPassword, password, identifyUser)`

- Change identity 
  `app.api.authManagement.identityChange(password, changesIdentifyUser, identifyUser)`

### `store.app.api.notifications` 
[notifications](guide/notifications) service to dispatch notifications for authenticationManagement service above. It may be invoked directly as well. It is an instance of [feathers-notifme](https://github.com/feathers-nuxt/feathers-notifme) a service using [notifme-sdk](http://notifme-sdk)  under the hood to dispatch all kinds of transactional notifications including emails, SMS, pushes, webpushes, slack.

### `store.app.api.jobs` 
 [background tasks](guide/tasks) service complements notifications service above by externerlize tasks such as sending notifications to the background. This way, the request completes without waiting for the background task to end. Creating a job will start a defined task with node-resque.

### `store.app.api.uploads` 
service to handle [file uploads](guide/tasks)

