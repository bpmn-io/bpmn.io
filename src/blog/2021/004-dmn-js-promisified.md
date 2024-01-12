---

title: Awaitable Import and Export APIs in dmn-js
layout: blogpost.hbs

slug: 2021-dmn-js-11-0-awaitable-import-export-apis
author: Max Trumpf<https://github.com/maxtru>

published: 2021-06-29 12:00

releases:
  - 'dmn-js@11.0.1'

---


<p class="introduction">
One of our top priorities is to ensure the best possible developer experience consistently across our libraries. Following this priority, we are happy to announce the latest release of our [DMN modeling toolkit](https://github.com/bpmn-io/dmn-js). This release ships with `Promise` support for our async import and export APIs. Using this release, users can `await` API results and therefore benefit from async features available in modern, ES6-style JavaScript codebases.

<!-- continue -->

This release brings `Promise` support to our async toolkit APIs, allowing you to `await` the import or export results in a state-of-the-art manner:

```javascript
const modeler = new DmnJS();

try {
  await modeler.importXML(dmnDiagramXML);
} catch (err) {
  // handle import error
}
```

Callbacks style invocations are still supported but will be dropped in a future major release. We advise you to migrate to `Promise`-based API usage. Refer to [the moving to Promises documentation](http://bpmn.io/l/moving-to-promises) to learn about how to migrate using detailed examples. If you are still targeting [Internet Explorer or Opera Mini](https://caniuse.com/#feat=promises), ensure you polyfill the global `Promise` object.


## Promisified Import and Export APIs

You can now `await` these `dmn-js` APIs:

* [DmnJS#importXML](https://github.com/bpmn-io/bpmn-io-callbacks-to-promises#importXML-dmn-js)
* [DmnJS#open](https://github.com/bpmn-io/bpmn-io-callbacks-to-promises#open-dmn-js)
* [DmnJS#saveXML](https://github.com/bpmn-io/bpmn-io-callbacks-to-promises#saveXML-dmn-js)
* [DmnJS#saveSVG](https://github.com/bpmn-io/bpmn-io-callbacks-to-promises#saveSVG-dmn-js)


Here's a small example of how to open a DMN diagram in the _new way_.

```javascript
const modeler = new DmnJS();

try {
  const {
    warnings
  } = await modeler.importXML(dmnDiagramXML);

  console.log('Imported DMN 1.3 diagram', warnings);
} catch (err) {

  const {
    warnings
  } = err;

  console.log('Failed to import DMN 1.3 diagram', err, warnings);
}
```

Here is a small example of how to export a diagrams SVG in the _new way_.

```javascript
try {
  const {
    svg
  } = await modeler.saveSVG();

  console.log('Exported DMN 1.3 diagram in SVG format', svg);
} catch (err) {

  console.error(err);
}
```

For more examples, check by our [our example repository for dmn-js](https://github.com/bpmn-io/dmn-js-examples). It is already updated to feature the promisified APIs in action!

Please approach us [via our forums](https://forum.bpmn.io) to share your feedback regarding these changes.


## Wrapping Up

Read through the [full changelog](https://github.com/bpmn-io/dmn-js/blob/develop/packages/dmn-js/CHANGELOG.md#1101) to learn about all issues that we addressed with `dmn-js@11.0`.

Did we miss anything? Did you spot a bug, or would you like to suggest an improvement? Reach out to us via [our forums](https://forum.bpmn.io/), toot us on [Mastodon](https://fosstodon.org/@bpmn_io) or file an issue you found in [the dmn-js issue tracker](https://github.com/bpmn-io/dmn-js/issues).

Get the latest DMN modeling toolkit pre-packaged or as source code via [npm](https://www.npmjs.com/package/dmn-js) or [unpkg](https://unpkg.com/dmn-js/).
