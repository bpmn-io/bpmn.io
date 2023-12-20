---

title: Migrating our Libraries to ES Modules
layout: blogpost.hbs

slug: 2018-migrating-to-es-modules
author: Nico Rehwaldt<https://github.com/nikku>

published: 2018-04-17 12:00

releases:
  - 'bpmn-js@1.2.0'
  - 'cmmn-js@0.14.0'
  - 'diagram-js@1.3.0'

---


<p class="introduction">
  We are proud to announce the latest release of our [BPMN rendering toolkit](https://github.com/bpmn-io/bpmn-js) as well as its underlying foundations. Ported to [ES modules](http://exploringjs.com/es6/ch_modules.html#sec_overview-modules), this release represents a major effort in modernizing our code base.
</p>

<!-- continue -->

[Modularity](https://en.wikipedia.org/wiki/Modular_programming) is an important aspect of our toolkit landscape and the enabler for extensibility. [ES modules](http://exploringjs.com/es6/ch_modules.html#sec_overview-modules), standardized via ES2015, is the first module system baked directly into JavaScript as a language feature. ES modules improve code readability and the fact that they are statically analyzable allows module bundlers to apply advanced minification strategies such as [tree shaking](https://en.wikipedia.org/wiki/Tree_shaking).

In the last weeks we've cut several releases that migrate our libraries to ES modules:

* [`diagram-js@1.0.0`](https://github.com/bpmn-io/diagram-js)
* [`bpmn-js@1.0.0`](https://github.com/bpmn-io/bpmn-js)
* [`bpmn-moddle@5.0.0`](https://github.com/bpmn-io/bpmn-moddle)
* [`dmn-js@4.0.0`](https://github.com/bpmn-io/dmn-js)
* [`dmn-moddle@5.0.0`](https://github.com/bpmn-io/dmn-moddle)
* [`moddle-xml@7.0.0`](https://github.com/bpmn-io/moddle-xml)
* [`moddle@4.0.0`](https://github.com/bpmn-io/moddle)
* [`cmmn-moddle@5.0.0`](https://github.com/bpmn-io/cmmn-moddle)

We shipped a full rewrite of our [DMN toolkit](https://github.com/bpmn-io/dmn-js) with ES modules inside [two weeks ago](https://bpmn.io/blog/posts/2018-dmn-js-4-0-0.html).
In addition, we have ported our [CMMN toolkit](https://github.com/bpmn-io/cmmn-js) to use ES module dependencies under the hood.


## Consuming ES Modules

If you use our [pre-packaged distributions](https://github.com/bpmn-io/bpmn-js-examples/tree/main/pre-packaged), nothing changes for you. Otherwise, consider migrating to our latest toolkit versions a breaking change that requires a number of adjustments to your code base.

### Usage from ES6

If you are already using ES `import` / `export` as part of your application, make sure to use individual parts of utilities via destructuring:

```javascript
import BpmnModeler from 'bpmn-js/lib/Modeler';

import {
  is
} from 'bpmn-js/lib/util/ModelUtil';
```

The reason for that change is that utilities do not publish `default` exports.


### Usage from CommonJS

When consuming our libraries from CommonJS, access default module exports via the `default` property:

```javascript
var BpmnModeler = require('bpmn-js/lib/Modeler').default;

var is = require('bpmn-js/lib/util/ModelUtil').is;
```

Checkout [this commit](https://github.com/bpmn-io/cmmn-js/commit/f1cf3c4a60df59efbd15817f04f8ebe7897c0700) to our CMMN toolkit for a good example how to migrate your CommonJS codebase to build on top of a ES module dependency.



## Bundling ES Modules

Since most browsers do not support ES modules yet you must bundle your application and our libraries with an ES module aware bundler such as Rollup, Webpack or Browserify + babelify. Learn more about it in our reworked [bundling example](https://github.com/bpmn-io/bpmn-js-examples/tree/main/bundling).

If you are using Browserify as your build tool, take a look at [how we integrated babelify](https://github.com/bpmn-io/cmmn-js/commit/dadb110bc80ebfffedb5b7be55a31a875fc2480d) into the cmmn-js build pipeline in order to migrate the library to `diagram-js@1`.


## Changelogs Everywhere

We celebrate the ES module transition with a number of major releases. Along with these releases we introduced changelogs to all of our projects. Read through the individual toolkit changelogs to understand the important changes that landed into certain library versions. As we use [semantic versioning](https://semver.org/) you'll be able to learn about potential breaking changes, too.

As an example, read about all changes since `bpmn-js@0.31`, the last ES5 version of bpmn-js in the [libraries' changelog](https://github.com/bpmn-io/bpmn-js/blob/main/CHANGELOG.md).
