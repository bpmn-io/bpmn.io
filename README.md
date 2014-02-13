# bpmn.io

These are the sources of [bpmn.io](http://bpmn.io). Powered by [Assemble](http://assemble.io/).


## Setup Environment

The site is built via [Grunt](http://gruntjs.com/) and requires a setup [Node.js](nodejs.org) environment.

To get started

*    Download and install [Node.js](nodejs.org)
*    Install `grunt-cli` via `npm install -g grunt-cli`
*    Install build dependencies by executing `npm install` in the project directory


## Build the site

Make sure you have [Grunt](http://gruntjs.com/getting-started) ready.


### Develop

To build and serve the site on [localhost:9000](http://localhost:9000) execute

```
grunt serve
```

on the command line.


### Publish

To create a distribution of the site (for publishing purposes) execute

```
grunt build
```

This creates the site in the `dist` folder.