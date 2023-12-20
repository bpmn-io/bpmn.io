---

title: Awaitable Import and Export APIs Land in bpmn-js
layout: blogpost.hbs

slug: 2020-bpmn-js-7-0-awaitable-import-export-apis
author: Oguz Eroglu<https://github.com/oguzeroglu>

published: 2020-05-28 12:00

releases:
  - 'bpmn-js@7.0.0'

---


<p class="introduction">
We are happy to announce that the latest release of our [BPMN modeling toolkit](https://github.com/bpmn-io/bpmn-js) ships with Promise support for our async import and export APIs. Starting with this release users can benefit from async features available in modern, ES6-style JavaScript codebases as they await the API results.

To align with our ongoing bpmn.io re-branding we ship an updated toolkit watermark, too.
</p>

<!-- continue -->

This release brings promise support to our async toolkit APIs, allowing you to await the import or export results in a state-of-the-art manner:

```javascript
const modeler = new BpmnModeler();

try {
  await modeler.importXML(bpmnDiagramXML);
} catch (err) {
  // handle import error
}
```

Callbacks style invocations are still supported but will be dropped in a future major release. We advise you to migrate to Promise-based API usage. Refer to [this documentation](http://bpmn.io/l/moving-to-promises) to see with detailed examples what needs migration and what not. If you are still targeting [Internet Explorer or Opera Mini](https://caniuse.com/#feat=promises), ensure you polyfill the global `Promise` object.


## Promisified Import and Export APIs

You can now `await` these bpmn-js APIs:

* [BpmnJS#importXML](https://github.com/bpmn-io/bpmn-js-callbacks-to-promises#importXML-bpmn-js)
* [BpmnJS#importDefinitions](https://github.com/bpmn-io/bpmn-js-callbacks-to-promises#importDefinitions-bpmn-js)
* [BpmnJS#open](https://github.com/bpmn-io/bpmn-js-callbacks-to-promises#open-bpmn-js)
* [BpmnJS#saveXML](https://github.com/bpmn-io/bpmn-js-callbacks-to-promises#saveXML-bpmn-js)
* [BpmnJS#saveSVG](https://github.com/bpmn-io/bpmn-js-callbacks-to-promises#saveSVG-bpmn-js)
* [BpmnJS#createDiagram](https://github.com/bpmn-io/bpmn-js-callbacks-to-promises#createDiagram-bpmn-js)


Here's a small example of how to open a BPMN diagram in the _new way_.

```javascript
const modeler = new BpmnModeler();

try {
  const {
    warnings
  } = await modeler.importXML(bpmnDiagramXML);

  console.log('Imported BPMN 2.0 diagram', warnings);
} catch (err) {

  const {
    warnings
  } = err;

  console.log('Failed to import BPMN 2.0 diagram', err, warnings);
}
```

Here is a small example of how to export a diagrams SVG in the _new way_.

```javascript
try {
  const {
    svg
  } = await modeler.saveSVG();

  console.log('Exported BPMN 2.0 diagram in SVG format', svg);
} catch (err) {

  console.error(err);
}
```

For more examples, check by our [our example repository for bpmn-js](https://github.com/bpmn-io/bpmn-js-examples). It is already updated to feature the promisified APIs in action!

Please approach us [via our forums](https://forum.bpmn.io) to share your feedback regarding these changes.


## New Project Logo / Toolkit Watermark

Following our [project rebranding](https://bpmn.io/) this library release ships with a new project logo. Goodby old bpmn.io logo!

<div class="figure no-border">
  <img src="{{ assets }}/attachments/blog/2020/004-logo.png" alt="A BPMN diagram and shown with bpmn-js and our updated project watermark">
  <p class="caption">
    Hello new bpmn.io word mark!
  </p>
</div>


## Wrapping Up

Read through the [full changelog](https://github.com/bpmn-io/bpmn-js/blob/main/CHANGELOG.md) to learn about all issues that we addressed with `bpmn-js@7.0`.

Did we miss anything? Did you spot a bug, or would you like to suggest an improvement? Reach out to us via [our forums](https://forum.bpmn.io/), tweet us [@bpmn_io](https://twitter.com/bpmn_io) or file an issue you found in [the bpmn-js issue tracker](https://github.com/bpmn-io/bpmn-js/issues).

Get the latest BPMN modeling toolkit pre-packaged or as source code via [npm](https://www.npmjs.com/package/bpmn-js) or [unpkg](https://unpkg.com/bpmn-js/).
