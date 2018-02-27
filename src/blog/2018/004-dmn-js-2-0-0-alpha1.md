---

title: On the Road to dmn-js 2.0
layout: blogpost.hbs

slug: 2018-dmn-js-2-0-0-alpha1
author: Nico Rehwaldt<https://github.com/nikku>

published: 2018-02-28 11:00

releases:
  - 'dmn-js@2.0.0-alpha1'

---


<p class="introduction">
  Today we release the first alpha version of our rewritten [DMN viewer and editor](https://github.com/bpmn-io/dmn-js). It features a brand new decision table editor that got reworked for performance and better editing experience. Being multi-view capable at its core, the toolkit gives you better abilities to inspect and switch between the different elements inside a DMN file.
</p>

<!-- continue -->

A few month ago we set out started to rebuild our DMN toolkit from the core with focus on both usability and performance. Today we've reached an important milestone towards stability and feature parity with the old [`0.x` version](https://github.com/bpmn-io/dmn-js/releases/tag/v0.11.0) of the toolkit.


## Introducing Views

Essentially, a DMN file contains many different parts that make up a decision. Each of these parts has its own representation: Decision requirement diagram, decision table and literal expression are some representations of parts that can potentially be viewed and edited.
One of the improvements we wanted to tackle is to allow inspection into and navigation between these contents.

The new version of our toolkit exposes the viewable contents and allows you to build rich navigation interactions around these views:

<div class="figure full-size">
  <a href="https://rawgit.com/bpmn-io/dmn-js-examples/master/modeler/modeler.html">
    <img src="{{ assets }}/attachments/blog/2018/004-cast.gif">
  </a>
  <p class="caption">
    Display DMN file contents and navigate between editors.
  </p>
</div>

Refer to the updated [modeler example](https://rawgit.com/bpmn-io/dmn-js-examples/master/modeler/modeler.html) for details on how to build tabbing on top of [dmn-js](https://github.com/bpmn-io/dmn-js).


## Bye Bye Simple Mode

The simple mode for decision tables was born to hide technical complexity and provide editing assistance to certain, often non-technical, user groups.

However, the presence of two editing modes caused frequent confusion about where to find and edit certain pieces of information. At the same time there is no clear separation between different personas using our DMN editor as we thought there would be. Technical adapt users, for instance, would sometimes use the simple mode for convenience. On the other hand, modeling beginners or none technical users would some times like to _just type_ once they've found their way around creating simple expressions.

This release drops the simple mode in favor of a _Simple Edit menu_, accessible via a tiny handle next to the currently focussed cell:

<div class="figure full-size">
  <img src="{{ assets }}/attachments/blog/2018/004-table-cast.gif">
  <p class="caption">
    The simple mode got replaced by the _Simple Edit menu_.
  </p>
</div>


With the new modeless approach follows four general guidelines:

* Always allow direct editing.
* Offer help in an unobtrusive manner.
* Encourage learning `FEEL`.
* Don't oversimplify and hide necessary meta-data.


## New Pre-Packaged Distribution

The new version of dmn-js discontinues our [Bower bundle](https://github.com/bpmn-io/bower-dmn-js). Pre-built versions of the DMN modeler and viewer are now distributed directly with the
[dmn-js npm package](https://www.npmjs.com/package/dmn-js) and available for download via [unpkg](https://unpkg.com/).

You may reference individual assets [directly from unpkg](https://unpkg.com/dmn-js/dist/), as it is a full-fledged [CDN](https://en.wikipedia.org/wiki/Content_delivery_network):

```html
<!-- required viewer styles -->
<link rel="stylesheet" href="https://unpkg.com/dmn-js@2.0.0-alpha1/dist/assets/dmn-js-drd.css">
<link rel="stylesheet" href="https://unpkg.com/dmn-js@2.0.0-alpha1/dist/assets/dmn-js-decision-table.css">
<link rel="stylesheet" href="https://unpkg.com/dmn-js@2.0.0-alpha1/dist/assets/dmn-js-literal-expression.css">
<link rel="stylesheet" href="https://unpkg.com/dmn-js@2.0.0-alpha1/dist/assets/dmn-font/css/dmn.css">

<!-- viewer distro -->
<script src="https://unpkg.com/dmn-js@2.0.0-alpha1/dist/dmn-viewer.development.js"></script>
```

Checkout the new [pre-packaged example](https://github.com/bpmn-io/dmn-js-examples/tree/master/pre-packaged) to learn how to embed the toolkit without prior setup or download.


## Road Ahead

We encourage you to try out the latest toolkit version via [demo.bpmn.io](https://demo.bpmn.io/dmn) or our brand new [starter example](https://github.com/bpmn-io/dmn-js-examples/tree/master/starter). You got feedback regarding our recent DMN toolkit changes? Tell us about it in [our forums](https://forum.bpmn.io/).

On the road to `dmn-js@2.0.0` we still got a number of things to look into, including but not limited to:

* restoring keyboard navigation
* handling of multiline scripts in cells
* adding input labels
* adding cell annotations

Please consult our [next milestone](https://github.com/bpmn-io/dmn-js/milestone/11) for a more comprehensive list of items we still need to work on.

This release is an alpha release. Expect changes and handle it with care!
