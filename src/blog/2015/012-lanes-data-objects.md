---

title: Lanes, Event Sub-Processes, Data Objects and more BPMN
layout: blogpost.hbs

slug: 2015-lanes-data-objects-more-bpmn
author: Nico Rehwaldt<https://github.com/nikku>

published: 2015-10-23 15:10

releases:
  - 'bpmn-js'

---


<p class="introduction">
  Today we released the best [bpmn-js](https://github.com/bpmn-io/bpmn-js) version as of yet. We added tons of new changes such as modeling lanes, event sub-processes, data objects and default flows. On top of that you can now move connection segments in parallel. Under the hood some significant improvements make the BPMN toolkit feel noticeably faster and allow users to totally customize element rendering.
</p>

<!-- continue -->

The new version of [bpmn-js](https://github.com/bpmn-io/bpmn-js) ships with tons of updates, including support for modeling a large amount of new BPMN elements and vast modeling usability improvements. Most importantly though we added support for modeling lanes.

<div class="figure">
  <a href="http://demo.bpmn.io/new">
    <img src="{{ assets }}/attachments/blog/2015/012-lane-add.gif">
  </a>
</div>

Lanes are implemented via edit controls on the parent. They can be added, removed and freely resized.

Try out modeling lanes [in our online demo](http://demo.bpmn.io) and tell us what you think.


## Connection Segment Move

A long asked for feature is the ability to move vertical and horizontal segments of flows in parallel. Connection move is now available in the modeler and makes sequence and message flow relayouting a breeze.

<div class="figure">
  <img src="{{ assets }}/attachments/blog/2015/
012-segment-move.gif">
</div>


## Auto Expand

We added auto expand for elements, allowing you to model more quickly inside sub-processes and participants.

<div class="figure">
  <img src="{{ assets }}/attachments/blog/2015/012-auto-expand.gif">
</div>

Keep in mind you can undo whatever change you did at any time. Just in case the behavior surprises you, once in a while ;-).


## A better Multi-Selection Move

A new multi selection move allows you to move elements that do not share the same parent.

<div class="figure">
  <img src="{{ assets }}/attachments/blog/2015/012-multi-selection-move-2.gif">
</div>

Together with auto expand, this feature makes it much easier to restructure process flows in bigger diagrams.


## Conditional and Default Flows

Conditional and default flows can now be modeled via a sequence flow's context pad.

<div class="figure">
  <img src="{{ assets }}/attachments/blog/2015/012-conditional-flow.gif">
</div>

And [default flows]({{ assets }}/attachments/blog/2015/012-default-flow.gif) work, too.


## Event more BPMN Elements

We added support for modeling event sub-processes, cancel boundary events and data objects.

<div class="figure">
  <img src="{{ assets }}/attachments/blog/2015/012-more-bpmn-elements.png">
</div>


Some details on the elements:

* Create [event sub-processes]({{ assets }}/attachments/blog/2015/012-event-sub-process.gif) by transforming a sub-process or transaction.
* Create [cancel boundary events]({{ assets }}/attachments/blog/2015/012-cancel-boundary.gif) from empty boundary events via context pad.
* Create [data objects]({{ assets }}/attachments/blog/2015/012-data-object.gif) from the palette and connect them to activities or events via the context pad.


## Replace Preview

[bpmn-js](https://github.com/bpmn-io/bpmn-js) does it's best in giving valuable feedback to the user. With the latest release the modeler indicates possible element changes that can occur when moving an element.

<div class="figure">
  <img src="{{ assets }}/attachments/blog/2015/012-non-interrupting-replace-preview.gif">
</div>

Try it out and learn about all the little gems hidden in the [BPMN 2.0 specification](www.omg.org/spec/BPMN/20100601/10-06-02.pdf).


## Custom Elements

As part of a bigger internal refactoring we added the ability to plug into the diagram renderering. This allows you to display [nyan cats instead of service tasks](https://github.com/nikku/bpmn-js-nyan) or perform more useful things.

This opens areas for a lot of advanced use-cases such as displaying and editing entirely custom (i.e. non BPMN elements) along with BPMN elements.

<div class="figure">
  <img src="{{ assets }}/attachments/blog/2015/012-custom-elements.png">
</div>

We created an [example for this](https://github.com/bpmn-io/bpmn-js-examples/tree/master/custom-elements). Check it out if you also love custom elements.


## Breaking Changes

This release introduced a few breaking changes related to the introduction of custom elements. If you implemented your own renderers, make sure to update to the [new rendering infrastructure](https://github.com/bpmn-io/bpmn-js/blob/master/lib/draw/BpmnRenderer.js#L32).



## Other Things going on

A few other notable things that happened around our project:

* We attended the [Camunda community day](http://blog.camunda.org/2015/09/impressions-from-camunda-community-day.html) and the [BPMCon](http://bpmcon.de) in September with talks about extensibility, roadmap and [nyan cats](https://github.com/nikku/bpmn-js-nyan).
* [Phillip](https://github.com/PHILIPPFROMME) joined our project to work on a [bpmn.io powered bpmn questionaire toolkit](http://bpmn.io/blog/posts/2015-bpmn-questionnaire.html) as part of his thesis.

Make sure to [follow us on twitter](https://twitter.com/bpmn_io) to stay up to date with what happens in the bpmn.io sphere.


## Looking Forward

We started working on a desktop modeler based on [bpmn-js](https://github.com/bpmn-io/bpmn-js). Look forward for a great offline ready BPMN editor with native operating system integration in the next month(s).

Do you like our latest modeling changes? Don't hesitate sure to reach out to us via [Mastodon](https://fosstodon.org/@bpmn_io) or [our forums](https://forum.bpmn.io) and tell us what you think.


As always: Get the latest release of our BPMN toolkit via [npm](https://www.npmjs.com/package/bpmn-js) and [bower](https://github.com/bpmn-io/bower-bpmn-js).
