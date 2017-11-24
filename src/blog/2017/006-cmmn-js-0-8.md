---

title: cmmn-js Quality Rollup
layout: blogpost.hbs

slug: 2017-cmmn-js-0-8
author: Nico Rehwaldt<https://github.com/nikku>

published: 2017-11-24 12:00

releases:
  - 'cmmn-js@0.8.0'

---


<p class="introduction">
  Today we release an overhauled version of [cmmn-js](https://github.com/bpmn-io/cmmn-js), including many improvements in our underlying toolkits, direct editing and XML handling.
</p>

<!-- continue -->


The following list highlights the most relevant changes incorporated into this release:

* `FEAT`: Improved diagram overlays (cf. [bpmn-js blog post](./2017-bpmn-js-0-23.html))
* `FEAT`: Faster import due to improved document parsing (cf. [bpmn-js blog post](./2017-bpmn-js-0-24.html))
* `FEAT`: Add snapping for connection bendpoints
* `FEAT`: Render labels, even if detached or hidden
* `FEAT`: Better direct editing experience on labels and text annotations
* `FEAT`: Always expose parse warnings on import error, too
* `CHORE`: Internalize Viewer/Modeler fields and expose loaded definitions via `#getDefinitions()`
* `CHORE`: Don't attach Viewer/Modeler per default
* `FIX`: Modeling improvements on MS IE and Edge browsers
* `FIX`: Address various import and export bugs

Get the release via [npm](https://www.npmjs.com/package/cmmn-js).