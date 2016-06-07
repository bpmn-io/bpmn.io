---

title: Connections Arrive in cmmn-js 0.4.0
layout: blogpost.hbs

slug: 2016-connections-cmmn-js
author: Nico Rehwaldt<https://github.com/nikku>

published: 2016-06-06 17:00

---


<p class="introduction">
  We are proud to announce the latest version of [cmmn-js](https://github.com/bpmn-io/cmmn-js).
  The release adds the ability to model on-part as well as discretionary connections.
  Furthermore it allows you to document important parts of your diagrams with text annotations, adds the ability to search your CMMN diagram and fixes tons of bugs.
</p>

<!-- continue -->

With discretionary as well as on-part connections you can now model relationships between tasks, stages and milestones. Different in semantics, both connection types play important roles in creating meaningful CMMN diagrams.

[Try out the added connection features](http://demo.bpmn.io/cmmn/s/claims-file) and [give us feedback](https://forum.bpmn.io/c/users)!

<div class="figure">
  <a href="http://demo.bpmn.io/cmmn/s/claims-file">
    <img src="{{ assets }}/attachments/blog/2016/009-cmmn-connections.png">
  </a>
</div>

We tried to make the modeling experience as painless as possible, meaning you can freely connect elements as long as it makes _CMMN sense_. Under the hood cmmn-js does the heavy lifting for you and ensures the diagram is semantically correct CMMN 1.1.


## Other Features

On top of connections we added a number of other features:

* Create text annotations
* Model discretionary tasks from the context pad
* Search CMMN diagram elements
* Model plan fragments
* Model case file items
* [more...](https://github.com/bpmn-io/cmmn-js/issues?q=milestone%3A%22C02+-+Full+CMMN+Modeling+Support%22)


## Next Steps

With the next release we are going to look into modeling convenience such as snapping and auto-expand.

If you have feedback or questions regarding cmmn-js let us know! Get in touch with us via our [forums](https://forum.bpmn.io) and tell us what you think. Make sure to follow us on [Twitter](https://twitter.com/bpmn_io) if you would like to keep track on what is happening in the bpmn-io sphere.

Get the latest cmmn-js release via [npm](https://www.npmjs.com/package/cmmn-js) or [bower](https://github.com/bpmn-io/bower-cmmn-js).
