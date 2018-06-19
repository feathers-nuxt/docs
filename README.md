---
home: true
heroImage: //avatars0.githubusercontent.com/u/38314364?s=400&u=8633016f343ee358eff026bdd842fc1071f9bbe2&v=4.png
actionText: Get Started →
actionLink: /guide/
features:
- title: CLI
  details: Project initialization, live-reload, build, database migration and seeding, app deployment command line scripts included.
- title: UI
  details: Render Sigle Page App uniformly on Node or Browser using nuxt. Includes feathers client behind vuex store modules.
- title: API 
  details: Access database file-system resources uniformly from either Node or Browser using feathers with nuxt middleware to serve UI SPA.
footer: MIT Licensed | Copyright © 2018-present kelvin kharhys
---


## Quick start
Ensure you have installed `f3` cli globally. At the moment the package isn't published to `npm` so you'd install from [github](https://github.com/feathers-nuxt/cli). Just run: 
> `npm i -g github:feathers-nuxt/cli`

To start a new `feathers-nuxt` project using `f3` cli, just invoke the following on your terminal
> `f3 init awesome-project` 

This will clone the template in this repository using [saojs](https://github.com/saojs/sao) and create a boilerplate, inside `awesome-project` directory, customized as per your answers to the prompted questions.

### Directory structure
An application initialized using `f3` will have the following directory stucture


```text
├── f3.config.js                              # nuxt & backpack configuration
├── .babelrc                                  # babel configuration to use with backpack
├── .podhook                                  # shell scripts to run on remote server during deploy
├── .gitignore                                # list of file to ignore while deploying to remote server
└── src
    ├── client                                # transpiled using nuxt
        ├── assets                            # files to transpile with webpack: less, stylus 
        ├── static                            # files to serve as static resources 
        ├── pages                             # Vue SFC accessible via a URL    
        ├── components                        # Vue SFC to use within other SFC
        ├── layouts                           # Vue SFC to use for page layout        
        ├── middleware                        # nuxt renderer middleware
        ├── plugins                           # Vue.js plugins
        ├── store                             # Vuex store modules
        └── utils                             
            ├── initClient.js                     # creates feathers client for server and client bundle
            ├── initAuth.js                       # autheticate and populate store with user object 
            └── store              
                ├── modules                         # modules for vuex
                └── plugins                         # plugins for vuex
    └── server                                # transpiled using backpack
        ├── config                            
            ├── default.yml                        # settings for development env
            ├── production.yml                     # settings for production env
            └── production-0.yml                   # settings for PM2 app instance 0
        ├── index.ls                           # entry to initialize both app and api servers   
        ├── app.ls                             # express server with nuxt middleware and feathers as sub app     
        ├── api.ls                             # feathers server with socket.io and rest transports
        ├── auth.ls                            # configures feathers for authentication
        ├── api.hooks.ls                       # configures global api hooks
        ├── hooks                              # triggers run during resource access
        ├── services                           # service, schema, model and hooks for resources in db, fs,
        ├── notifications                      # templates and dispatcher for email, sms, webpush notifications
        └── db                                 
            ├── orm.ls                             # configures feathers to use mongoose or sequelize ORM
            ├── seed.ls                            # populates database with dummy data
            └── migrations                         # procedures to creates and drop tables
        └── middleware                         
	        └── nuxt.ls                            # nuxt middleware for SSR
```