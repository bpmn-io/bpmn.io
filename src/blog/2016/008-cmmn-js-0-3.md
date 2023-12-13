---

title: Model CMMN with cmmn-js
layout: blogpost.hbs

slug: 2016-model-cmmn-with-cmmn-js
author: Patrick Dehn<https://github.com/pedesen>

published: 2016-05-20 18:00

releases:
  - 'cmmn-js@0.3.0'

---


<p class="introduction">
  We are proud to announce the latest version of [cmmn-js](https://github.com/bpmn-io/cmmn-js). This is the first release with support for basic CMMN modeling. This means you can not only view but create, move, edit, replace and delete CMMN elements on the diagram canvas. [Try it out](http://demo.bpmn.io/cmmn) and give us feedback!
</p>

<!-- continue -->

<div class="figure">
  <img src="{{ assets }}/attachments/blog/2016/008-cmmn-modeling-example.gif">
</div>


## Features

* Create tasks, stages, milestones, event listeners, criterions and case plan models from the palette
* Move and delete elements on the canvas with ensured consistency
* Add and edit labels of elements
* Morph between plain, human, decision, process and case tasks
* Model discretionary tasks and planning tables
* Morph between entry and exit criterions
* Toggle all the markers: auto complete, manual activation, repetition and required rule
* Use the hand, lasso and space tools known from [bpmn-js](https://github.com/bpmn-io/bpmn-js)


## What's next

All features from this cmmn-js release are also part of the brand new major version of the [Camunda Modeler](https://camunda.org/bpmn/tool/). If you have feedback or questions regarding cmmn-js let us know! Get in touch with us via our [forums](https://forum.bpmn.io) and tell us what you think.

Make sure to [follow us on Mastodon](https://fosstodon.org/@bpmn_io) if you would like to keep track on what is happening in the bpmn-io sphere.

Get the latest cmmn-js release via [npm](https://www.npmjs.com/package/cmmn-js) or [bower](https://github.com/bpmn-io/bower-cmmn-js).
