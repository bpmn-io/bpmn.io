---

title: Label editing and Bower packaging
layout: blogpost.hbs

slug: 2014-label-editing-and-bower-packaging
author: Nico Rehwaldt<https://github.com/Nikku>

published: 2014-06-20 16:00

releases:
  - 'bpmn-js'

---

<p class="introduction">
  Today we release a new version of [our BPMN toolkit](https://github.com/bpmn-io/bpmn-js).
  It adds the ability to edit labels in BPMN 2.0 diagrams and received an overhauled look and feel for flows and events.
  We also ship a [pre-packaged version](https://github.com/bpmn-io/bower-bpmn-js) that allows you to easily integrate BPMN diagrams into your web applications.
</p>

<!-- continue -->

The new version of [bpmn-js](https://github.com/bpmn-io/bpmn-js) allows you to edit the labels of elements within BPMN 2.0 diagrams.
All changes to labels can be undone and are persisted in the underlying BPMN 2.0 XML file.
Check out the direct editing screencast below or try out the feature yourself on [demo.bpmn.io](http://demo.bpmn.io).


<div class="figure">

  <object WIDTH="800" HEIGHT="473" style="box-shadow: 0px 2px 6px 2px #C2C2C2;">
    <param name="movie" value="{{ assets }}/attachments/blog/2014/004-label-editing.swf">
    <param name="play" value="true">
    <param name="loop" value="false">
    <param name="wmode" value="transparent">
    <param name="quality" value="low">
    <embed src="{{ assets }}/attachments/blog/2014/004-label-editing.swf"
           WIDTH="800" HEIGHT="473" quality="low" loop="false" wmode="transparent">
    </embed>
  </object>

</div>


## Pre-packaged Bower distribution

We released a pre-packaged, single file distribution of bpmn-js that allows you to quick and easy integrate it as a BPMN 2.0 renderer into your applications.
The pre-packaged version is available via [Bower](http://bower.io) or as a [direct download](https://github.com/bpmn-io/bower-bpmn-js).

Get it via [Bower](http://bower.io):

```bash
bower install --save bpmn-js
```

Embed it and its dependencies into a web page:

```html
<!-- viewer dependencies -->
<script src="bower_components/jquery/dist/jquery.js"></script>
<script src="bower_components/jquery-mousewheel/jquery.mousewheel.js"></script>
<script src="bower_components/lodash/dist/lodash.js"></script>
<script src="bower_components/sax/lib/sax.js"></script>
<script src="bower_components/Snap.svg/dist/snap.svg.js"></script>

<!-- viewer -->
<script src="bower_components/bpmn-js/bpmn-viewer.js"></script>
```

Use the library (available via `window.BpmnJS`):

```javascript
var BpmnViewer = window.BpmnJS;

var viewer = new BpmnViewer({ container: '#canvas' });
viewer.importXML(...);
```

Make sure to check out the [documentation](https://github.com/bpmn-io/bower-bpmn-js) as well as the [example project](https://github.com/bpmn-io/bpmn-js-examples/tree/main/simple-bower) we have put up for you.


## Learn bpmn-js by example

We worked on a number of examples that showcase bpmn-js in different usage/integration scenarios.
To begin with we created two integration quick starts and two example applications.
All examples live in their very own [bpmn-js-examples](https://github.com/bpmn-io/bpmn-js-examples) and will be actively maintained.

The [Bower](https://github.com/bpmn-io/bpmn-js-examples/tree/main/simple-bower) and [npm/browserify](https://github.com/bpmn-io/bpmn-js-examples/tree/main/simple-commonjs) quickstart show how to integrate the library into a web application.
They may help you integrating bpmn-js into your web application.
If you are not sure what to choose or if you are interested in quick results, the [Bower quickstart](https://github.com/bpmn-io/bpmn-js-examples/tree/main/simple-bower) is probably exactly right for you.

The [modeler example](https://github.com/bpmn-io/bpmn-js-examples/tree/main/modeler) shows how to use our toolkit to build a [demo.bpmn.io](http://demo.bpmn.io)-like web modeler.
It gets accompained by a [simple BPMN 2.0 viewer](https://github.com/bpmn-io/bpmn-js-examples/tree/main/url-viewer) that can open BPMN 2.0 files from URLs.


Try out the examples and make sure to report issues in the [bpmn-js-examples issue tracker](https://github.com/bpmn-io/bpmn-js-examples/issues).


## Under the hood

We reasoned about our current (run-time) module system a lot because we felt it did not offer us the best way to structure features.
In the end, we decided to [change it](https://github.com/bpmn-io/diagram-js/issues/38) to aid future extensibility of bpmn-js and its underlying [diagram core](https://github.com/bpmn-io/diagram-js).
As a result we ended up [rewriting](https://github.com/bpmn-io/diagram-js/commit/72a2d45a166ac33efa7f3064266856a72e4f9bb2) and [cleaning up](https://github.com/bpmn-io/bpmn-js/commit/4e0011440992a239e5489307ebca20d322de01b4) most of the code.

With the new infrastructure in place we are now able to build features as clearly separated modules.
The general label editing capability for instance is such an [encapsulated feature](https://github.com/bpmn-io/diagram-js-direct-editing), its [implementation for BPMN 2.0](https://github.com/bpmn-io/bpmn-js/tree/main/lib/features/label-editing), too.


## Wrap up

Thanks to a number of bug reports from the community a some crucial fixes made it in to the [current release](https://github.com/bpmn-io/bpmn-js/issues?milestone=2&page=1&state=closed), too.
We will continue to maintain the current feature set while working on [simple process creation](https://github.com/bpmn-io/bpmn-js/issues?milestone=6&state=open) during our next milestone.

Your feedback is important!
Try out our toolkit at [demo.bpmn.io](http://demo.bpmn.io) and tell us about it [via Mastodon](https://fosstodon.org/@bpmn_io) or directly from inside the app.

If you would like to dive deeper into the project, check out its [repository on GitHub](https://github.com/bpmn-io/bpmn-js) and start to reporting issues or [fixing bugs](https://github.com/bpmn-io/bpmn-js/issues?labels=easy-pick&state=open) right away.

