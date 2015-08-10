---

title: Boundary Events, Activity Markers and more BPMN
layout: blogpost.hbs

slug: 2015-boundary-events-multi-instance-markers-more-bpmn
author: Nico Rehwaldt<https://github.com/nikku>

published: 2015-08-10 13:10

---


<p class="introduction">
  The new version of [our BPMN modeler](https://github.com/bpmn-io/bpmn-js) released today adds support for modeling boundary events, multi-instance markers, transactions, call activities and ad-hoc sub-processes. The release adds the ability to insert elements on existing flows and enhances sequence flow layouting around gateways and boundary events.
</p>

<!-- continue -->

With support to model boundary events, transactions, call activities and multi-instance markers this release marks another big step towards a more complete BPMN 2.0 modeling support.

<div class="figure">
  <a href="http://demo.bpmn.io/new">
    <img src="{{ assets }}/attachments/blog/2015/010-boundary-events.gif">
  </a>
</div>

Using the modeler you may now create boundary events by dragging the intermediate / boundary event element from the palette onto an activities border. The boundary events type can then be changed via the events edit menu. Open it via the wrench symbol accessible from the context pad. Boundary events can be reattached and snap to their hosts and other elements in the diagram.

This feature came along with a number of minor improvements such as more advanced connection layouting around boundary events _and_ gateways.

Try out modeling boundary events [in our online demo](http://demo.bpmn.io) and give us feedback.


## Add Activity Markers

Another notable modeler addition is the ability to change activity markers via the elements edit menu. Activity markers allow you to specify whether a particular activity is being executed multiple times and how (_multi-instance markers_). For sub-processes the _ad-hoc marker_ may be toggled, too.

<div class="figure">
  <img src="{{ assets }}/attachments/blog/2015/010-activity-markers.gif">
</div>


## Model Call Activities and Transactions

You can now model call activities and collapsed sub-processes by changing a tasks type into the respective element via the edit menu. To keep it consistent and simple we removed the collapsed sub-process from the palette.

<div class="figure">
  <img src="{{ assets }}/attachments/blog/2015/010-morph-call-activity.gif">
</div>

Transactions may be created from expanded sub-processes.

<div class="figure">
  <img src="{{ assets }}/attachments/blog/2015/010-morph-transaction.gif">
</div>


## Insert Elements on Flows

Using our BPMN modeler you can now insert elements onto existing flows. This is one of the more often asked for convenience features and especially useful in conjunction with the space tool.

<div class="figure">
  <img src="{{ assets }}/attachments/blog/2015/010-create-on-flow.gif">
</div>


## Other Things going on

There are a few other things going on in the bpmn.io sphere which are worth noting:

* We added a new example, [how to implement custom modeling rules](https://github.com/bpmn-io/bpmn-js-examples/tree/master/custom-modeling-rules).
* Tim from Sparta Systems did an impressive job [customizing bpmn-js to his needs](http://localhost:9012/blog/posts/2015-locking-down-bpmn-js.html).
* Sebastian from the [CamundaBPM team](http://camunda.org/) published a first version of our [web-based table editor for DMN](http://blog.camunda.org/2015/08/first-version-of-dmnio-released.html).

Make sure to [follow us on twitter](https://twitter.com/bpmn_io) if you would like to keep track on what is happening around our project.


## Looking Forward

In the next milestone we will focus on modeling lanes. Event-based sub-processes are right around the block, too and a number of modeling convenience features wait to be implemented.

We are interested in feedback on our latest modeling improvements! Make sure to reach out to us via [twitter](https://twitter.com/bpmn_io) or [our forums](https://forum.bpmn.io) and tell us what you think.


As always: Get the latest release of our BPMN toolkit via [npm](https://www.npmjs.com/package/bpmn-js) and [bower](https://github.com/bpmn-io/bower-bpmn-js).