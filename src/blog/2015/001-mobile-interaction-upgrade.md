---

title: The (Mobile) Interaction Upgrade
layout: blogpost.hbs

slug: 2015-mobile-interaction-upgrade
author: Nico Rehwaldt<https://github.com/Nikku>

published: 2015-01-02 12:00

releases:
  - 'bpmn-js'

---

<p class="introduction">
  Today we release important interaction improvements for the [bpmn-js](https://github.com/bpmn-io/bpmn-js) modeler. The updated modeling workflow helps you get stuff done faster by minimizing interruptions and focusing the right elements at the right time.

  Furthermore we ship touch support with the library. You can now build BPMN 2.0 diagrams using your tablet or mobile device.
</p>

<!-- continue -->


Todays release of [bpmn-js](https://github.com/bpmn-io/bpmn-js) stream-lines the creation of BPMN 2.0 processes.

<div class="figure">
  <a href="http://demo.bpmn.io/new">
    <img          src="{{ assets }}/attachments/blog/2015/001-interaction.gif">
  </a>
</div>

We have added a number of features that help you to focus exactly the parts of a process model you are working on.

Try out our improved BPMN 2.0 process modeling workflow on [demo.bpmn.io](http://demo.bpmn.io/new).


## A better modeling interaction

Modeling should feel more natural with our rework of the modeling interaction. It is realized by applying two simple interaction principles. Firstly, try to focus the element a user is presumably going to work with next. That allows you to continue modeling directly where you left of. Secondly, do not interrupt the modeling workflow. This helps you get stuff done quickly.

We made sure you can quickly get started with the bpmn-js modeler independent from which tool or platform you come from, too. You are used to _clicking_ modeling elements in order to pick them up? Simply click on any palette or context pad icon to grab a new element, ready to be placed on the canvas. You enjoy tablet like _drag and drop gestures_? We support these, too.

Give us feedback on how you feel about the [new modeling interaction](http://demo.bpmn.io/new).


## Touch device support

With this release we add modeling support for touch devices, including tablets and smart phones.

<div class="figure">
  <iframe           src="//player.vimeo.com/video/115333037" width="700" height="401" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
</div>

The [fat-finger](http://dictionary.reference.com/browse/fat-finger) problem applies and can be mitigated by zooming in or switching to a larger screen device.


## Wrapping up

Please give us feedback on the interaction improvements shipped with this release. Make sure to follow us [@bpmn_io](https://twitter.com/bpmn_io) to stay up-to-date, too.

Fetch the latest version of bpmn-js via [npm](http://npmjs.org/bpmn-js) or [bower](https://github.com/bpmn-io/bower-bpmn-js) and embed it into your applications.