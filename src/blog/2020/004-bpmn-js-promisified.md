---

title: bpmn-js Promisified
layout: blogpost.hbs

slug: 2020-bpmn-js-promisified
author: Oguz Eroglu<https://github.com/oguzeroglu>

published: 2020-05-12 12:00

releases:
  - 'bpmn-js@7.0.0'

---


<p class="introduction">
We are happy to announce that the latest release of our [BPMN modeling toolkit](https://github.com/bpmn-io/bpmn-js) ships with Promise support. Starting from this version, the users can now `await` bpmn-js APIs. This means easier consumption for the users and better interaction with ES6 style codebases.
</p>

<!-- continue -->

Note that callbacks are still supported but will be dropped in a future release. We advise you to migrate to Promises. Refer to [this documentation](http://bpmn.io/l/moving-to-promises) to see with detailed examples how to achieve that quickly. Also, after switching to the latest release of bpmn-js, make sure that the Promise class is polyfilled if you're targeting [Internet Explorer and Opera Mini](https://caniuse.com/#feat=promises).


## Promisified APIs

You can now `await` these bpmn-js APIs:

 1. [importXML](https://github.com/bpmn-io/bpmn-js-callbacks-to-promises#importXML)
 2. [importDefinitions](https://github.com/bpmn-io/bpmn-js-callbacks-to-promises#importDefinitions)
 3. [open](https://github.com/bpmn-io/bpmn-js-callbacks-to-promises#open)
 4. [saveXML](https://github.com/bpmn-io/bpmn-js-callbacks-to-promises#saveXML)
 5. [saveSVG](https://github.com/bpmn-io/bpmn-js-callbacks-to-promises#saveSVG)
 6. [createDiagram](https://github.com/bpmn-io/bpmn-js-callbacks-to-promises#createDiagram)


 Here's a small example of what it means for the users:

```javascript
const modeler = new BpmnJS();
try {

  // You can now await importXML API
  const { warnings } = await modeler.importXML(myAwesomeXML);
  console.log('Imported XML with warnings: ', warnings);
} catch (err){

  const { message, warnings } = err;
  console.log('En error happened: ', err, message, warnings);
}

try {

  // saveSVG can be awaited as well
  const { svg } = await modeler.saveSVG();
  console.log('Here is my diagram in SVG format: ', svg);
} catch (err) {

  console.error(err);
}
```


## Examples

Feel free to check [our example repository for bpmn-js](https://github.com/bpmn-io/bpmn-js-examples) out to see Promisified APIs in action!


## Changes in `import.parse.complete` Event

With the latest release of bpmn-js, `import.parse.complete` event is invoked with:

```javascript
// the new payload
{
	error,
	definitions,
	elementsById,
	references,
	warnings
}
```

**instead of**:
```javascript
// the old payload
{
  error,
  definitions,
  context: { elementsById, references, warnings }
}
```

Even though the old payload is still supported, we plan to get rid of it in a future release. So we advise you to adjust your codebase accordingly.


## Feedback Welcome

As this release introduces significant changes in bpmn-js APIs, we encourage you to give it a try and [let us know how it feels for you](https://forum.bpmn.io/).


## Wrapping Up

Read through the [full changelog](https://github.com/bpmn-io/bpmn-js/blob/master/CHANGELOG.md) to learn about all issues that we addressed with `bpmn-js@7.0`.

Did we miss anything? Did you spot a bug, or would you like to suggest an improvement? Reach out to us via [our forums](https://forum.bpmn.io/), tweet us [@bpmn_io](https://twitter.com/bpmn_io) or file an issue you found in [the bpmn-js issue tracker](https://github.com/bpmn-io/bpmn-js/issues).

Get the latest BPMN modeling toolkit pre-packaged or as source code via [npm](https://www.npmjs.com/package/bpmn-js) or [unpkg](https://unpkg.com/bpmn-js/).
