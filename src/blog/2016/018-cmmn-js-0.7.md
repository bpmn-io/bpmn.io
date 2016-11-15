---

title: Performance Improvements Shipped with cmmn-js v0.7.2
layout: blogpost.hbs

slug: 2016-performance-improvements-cmmn-js
author: Philipp Fromme<https://github.com/philippfromme>

published: 2016-11-15 15:00

---


<p class="introduction">
  Todays release of the latest version of cmmn-js introduces a new rendering layer that brings significant performance improvements to [cmmn-js](https://github.com/bpmn-io/cmmn-js).
  The old layer based on [Snap.svg](http://snapsvg.io/) is now gone from cmmn-js as well as [diagram-js](https://github.com/bpmn-io/diagram-js), the underlying diagram toolkit.
  With that sorted out, cmmn-js now imports diagrams twice as fast, is smaller in bundle size and feels more responsive.
  In addition to these changes, the release ships with improved direct editing for text annotations and fixes several bugs, too.
</p>

<!-- continue -->

## Performance Improvements

Snap.svg has been an integral part of both diagram-js and cmmn-js for a long time. It abstracts away a lot of the complexity of handling SVG elements in the DOM and provides great features like path intersectionss. Unfortunately it comes with a huge performance impact as well. Since our tools only use a fraction of the features provided by the library we wanted to remove it from our toolbelt for a long time. With the new rendering layer cmmn-js is significantly faster and feels more responsive. For more details on performance head over to the [bpmn-js release blog post](https://bpmn.io/blog/posts/2016-bpmn-js-0-18.html).

## What's next?

We are looking for your feedback regarding the performance and the API changes.

Make sure to [follow us on Twitter](https://twitter.com/bpmn_io) if you would like to keep track on what is happening in the bpmn-io sphere and tell us what you think about this release [on our forums](https://forum.bpmn.io).

Get the latest cmmn-js release via [npm](https://www.npmjs.com/package/cmmn-js) or [bower](https://github.com/bpmn-io/bower-cmmn-js).
