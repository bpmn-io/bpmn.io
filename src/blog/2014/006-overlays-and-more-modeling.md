---

title: Overlays and more Modeling
layout: blogpost.hbs

slug: 2014-overlays-and-more-modeling
author: Nico Rehwaldt<https://github.com/Nikku>

published: 2014-08-06 17:00

releases:
  - 'bpmn-js'

---

<p class="introduction">
  The new version of [bpmn-js](https://github.com/bpmn-io/bpmn-js) released today adds an overlay API and many enhancements to process modeling.
  The overlay API allows you to decorate BPMN 2.0 diagrams with additional data (think of comments or process state).
  The modeler can now create more BPMN 2.0 elements, moves them and performs automatic connection cropping.
</p>

<!-- continue -->


Todays release of [bpmn-js](https://github.com/bpmn-io/bpmn-js) marks another big step towards a bpmn.io process modeler.
We can now model intermediate events, text annotations and gateways. See yourself:

<div class="figure">
  <img src="{{ assets }}/attachments/blog/2014/006-bpmn-elements.gif">
</div>

Create your own process on [demo.bpmn.io](http://demo.bpmn.io/new) and try out the new modeling features yourself.


## Drag elements

On top of an extended modeling palette we added the ability to move elements.
This comes with some handy gimmics such as relayouting incoming and outgoing connections as well as automatic connection cropping.

<div class="figure">
  <img src="{{ assets }}/attachments/blog/2014/006-move.gif">
</div>

All changes can be undone and exports to valid BPMN 2.0 XML.


## Overlays

Overlays are pieces of HTML that you can attach to BPMN elements.
They can be used to implement a wide range of features such as visual process statistics, comments or even <a href="https://twitter.com/nrehwaldt/status/484353237932584961">process debug controls</a>.

Starting from this version you will be able to decorate your BPMN 2.0 diagrams with overlays using bpmn-js.
The library will take care of all the positioning and scaling of overlays for you, so you can focus on what you want to put on top of your process diagrams.

The following screencast shows overlays that display each elements id in action during modeling and process navigation:

<div class="figure">
  <img src="{{ assets }}/attachments/blog/2014/006-overlays.gif">
</div>


A process element overlay is plain html and can be attached to a process element using only a few lines of code:

```javascript
// get overlays service
var overlays = bpmnViewer.get('overlays');

// add overlay to StartEvent_1
overlays.add('StartEvent_1', {
  html: '<div>ID: StartEvent_1</div>',
  position: {
    right: 0,
    bottom: 0
  }
});
```

Check out the [overlays example project](https://github.com/bpmn-io/bpmn-js-examples) to get started with overlays on the bpmn-js viewer.


## New quick start project

We have created a quick start áka [seed project](https://github.com/bpmn-io/bpmn-js-seed) that should make it a lot easier for you to try out our BPMN 2.0 viewer. Simply [download it](https://github.com/bpmn-io/bpmn-js-seed/archive/master.zip), open the contained `index.html` and you are up and running with [bpmn-js](https://github.com/bpmn-io/bpmn-js).

Did we tell you, we got a new [getting started section](http://bpmn.io/getting-started) on our site, too?


## Wrap up

We are curious to learn about different use cases for our new overlay API. If you created something, tell us about it on [twitter](https://twitter.com/bpmn_io). Make sure to report bugs and other issues in our [bug tracker](https://github.com/bpmn-io/bpmn-js/issues), too.

For now, happy modeling on [demo.bpmn.io](http://demo.bpmn.io/new).


PS: The new version of bpmn-js is available via [npm](http://npmjs.org/bpmn-js) and [bower](https://github.com/bpmn-io/bower-bpmn-js).
