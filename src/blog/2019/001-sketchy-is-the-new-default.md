---

title: Sketchy is the new Default
layout: blogpost.hbs

slug: 2019-sketchy-is-the-new-default
author: Nico Rehwaldt <https://github.com/nikku>

published: 2019-04-01 9:00

releases:
  - bpmn-js@3.3.0

---


<p class="introduction">
  We're proud to announce the latest release of our [BPMN modeler and rendering toolkit](https://github.com/bpmn-io/bpmn-js). The release ships with a new, [sketchy](https://github.com/bpmn-io/bpmn-js-sketchy) default renderer, acknowledging the fact that every great process starts with a hand-drawn sketch. On top of that, it ships with better handling of data input and output elements.
</p>

<!-- continue -->

Most great ideas start with a hand-drawn sketch, and so do most great processes. Why is that? Because low-fidelity, hand-drawn prototypes [encourage us to give valuable feedback](https://theblog.adobe.com/prototyping-difference-low-fidelity-high-fidelity-prototypes-use/). Good feedback, in turn, is what helps us to build the fantastic things our stakeholders genuinely need.

Nearly a year ago we published [bpmn-js-sketchy](https://github.com/bpmn-io/bpmn-js-sketchy), an extension for [bpmn-js](https://github.com/bpmn-io/bpmn-js) that turns your BPMN 2.0 diagrams into delightful, hand-drawn sketches. Fully recognizing the benefits of hand-drawn, we go one step further today and make the sketchy render the default renderer for BPMN 2.0 diagrams.

<div class="figure">

  <a href="https://demo.bpmn.io/s/start">
    <img src="{{ assets }}/attachments/blog/2019/001-screenshot.png">
  </a>

  <p class="caption">
    Sketch your processes like 1-2-3.
  </p>
</div>

Try out the all-new sketchy modeling [on demo.bpmn.io](https://demo.bpmn.io/s/start).


## From Prototype to Maturity in a Week

Off course, prototypes mature with time and feedback. That is why the new version of our toolkit automatically brings back the established, tidy form of diagram elements as time passes by.

<div class="figure">

  <a href="https://demo.bpmn.io/s/start">
    <img src="{{ assets }}/attachments/blog/2019/001-screencast.gif">
  </a>

  <p class="caption">
    See your diagrams mature in real time.
  </p>
</div>


The BPMN editor stores the created time via an `bio:created` element within the exported BPMN 2.0 XML. By inspecting that field on a later re-open, it can persist the sketchy behavior across diagram re-imports.

If you think your diagrams are production quality from the start, we got you covered, too. Opt-out of the new behavior by passing `noSketch=true` upon bpmn-js instantiation:

```javascript
import BpmnViewer from 'bpmn-js';

// create the viewer
const bpmnViewer = new BpmnViewer({
  noSketch: true
});

// import your production-ready-from-the-start diagram
bpmnViewer.importXML(...);
```


## Other Improvements

This release ships with a small number of improvements that improve our compatibility with `bpmn:DataInput` and `bpmn:DataOutput` elements:

* `FEAT`: allow movement of `DataInput` and `DataOutput` within their original containers
* `FIX`: don't crash when moving `DataInput` and `DataOutput`

Check out the [changelog](https://github.com/bpmn-io/bpmn-js/blob/master/CHANGELOG.md#330) for all details on the current release.


## Wrapping Up

This release makes [sketchy](https://github.com/bpmn-io/bpmn-js-sketchy) the default renderer for your BPMN 2.0 diagrams. Got you own opinion on that substantial improvement? Share your feedback [in our forum](https://forum.bpmn.io/) or tweet to us [@bpmn_io](https://twitter.com/bpmn_io).

Next up, we focus on many small usability improvements to make it even more intuitive to build process prototypes. [Supporting groups](https://github.com/bpmn-io/bpmn-js/issues/343) and [more intuitive](https://github.com/bpmn-io/bpmn-js/issues/478) modeling of intermediate/boundary events are two topics that remain on our short-term roadmap, too.

As always, get the latest version of bpmn-js via [npm](https://www.npmjs.com/package/bpmn-js) or [prepackaged via unpkg](http://unpkg.com/bpmn-js/dist/).