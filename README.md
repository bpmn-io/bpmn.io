# bpmn.io

> See [bpmn-io/bpmn-js](https://github.com/bpmn-io/bpmn-js) for our BPMN 2.0 rendering + modeling toolkit.

These are the sources our [project website](http://bpmn.io).


## Building the Website

The site is built via [Grunt](http://gruntjs.com/) and requires a setup [Node.js](nodejs.org) environment.


### Setup Environment

To get started

*   Download and install [Node.js](nodejs.org)

*   Get [Grunt](http://gruntjs.com/) and [Bower](http://bower.io/)

    ```
    npm install -g grunt-cli
    ```

*   Install project dependencies

    ```
    npm install
    ```


### Generating the Site

Make sure you have the environment properly set up.


#### Develop

Build and serve the site on [localhost:9000](http://localhost:9000) via

```
grunt serve
```


#### Publish

Create a distribution ready version of the site via

```
grunt build
```

Fetch the results from the `dist` folder.
