# bpmn.io

These are the sources of [bpmn.io](http://bpmn.io). Powered by [Assemble](http://assemble.io/).


## Setup Environment

The site is built via [Grunt](http://gruntjs.com/) and requires a setup [Node.js](nodejs.org) environment.

To get started

*   Download and install [Node.js](nodejs.org)

*   Get [Grunt](http://gruntjs.com/) and [Bower](http://bower.io/)

    ```
    npm install -g grunt-cli bower
    ```

*   Install project dependencies
    
    ```
    npm install
    bower install
    ```


## Build the site

Make sure you have the environment properly set up.


### Develop

Build and serve the site on [localhost:9000](http://localhost:9000) via

```
grunt serve
```


### Publish

Create a distribution ready version of the site via

```
grunt build
```

Fetch the results from the `dist` folder.