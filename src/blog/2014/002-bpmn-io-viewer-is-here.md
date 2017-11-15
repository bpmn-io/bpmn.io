---

title: The bpmn-js viewer is here
layout: blogpost.hbs

slug: 2014-bpmn-js-viewer-is-here
author: Nico Rehwaldt<https://github.com/Nikku>

published: 2014-05-07 14:00

releases:
  - 'bpmn-js'

---


<p class="introduction">
  Today we are publishing the <a href="https://github.com/bpmn-io/bpmn-js">bpmn-js</a> viewer, a first version of our BPMN 2.0 toolkit that can display BPMN 2.0 diagrams embedded into web applications.

  We open sourced the library and all required components on <a href="https://github.com/bpmn-io">GitHub</a>.
  Open and view BPMN 2.0 diagrams on the web using our <a href="http://demo.bpmn.io">demo application</a>.
</p>

<!-- continue -->

Today is a good day for BPMN. After more than two month of hard work we release the first version of our <a href="https://github.com/bpmn-io/bpmn-js">BPMN toolkit</a> to the public.
It is an JavaScript library that allows you to embed BPMN 2.0 diagrams into your web applications.
You can check it out in a demo application that we have put together at <a href="http://demo.bpmn.io">demo.bpmn.io</a>.

<div style="margin: 30px 0; border-bottom: solid 1px #CCC; text-align: center">
  <a href="http://demo.bpmn.io">
    <img src="{{ assets }}/attachments/blog/2014/002-demo.png" style="max-width: 700px; width: 100%; margin: auto" />
  </a>
</div>

The application allows you to open and inspect BPMN 2.0 diagrams, In addition you may use it to export a displayed diagram as a SVG image.
Try it out and give us feedback if you like it or things are not working as expected.


## Under the Hood

The demo application uses <a href="https://github.com/bpmn-io/bpmn-js">bpmn-js</a>, our BPMN 2.0 JavaScript toolkit under the hood.
By using bpmn-js, viewing a BPMN 2.0 diagram is as simple as

```javascript
var BpmnViewer = require('bpmn-js').Viewer;

var xml; // my BPMN 2.0 xml
var viewer = new BpmnViewer({ container: 'body' });

viewer.importXML(xml, function(err) {

  if (err) {
    console.log('error rendering', err);
  } else {
    console.log('rendered');
  }
});
```

Checkout some [usage examples](https://github.com/bpmn-io/bpmn-js/tree/master/example) we have put together.
We plan to provide a downloadable distribution of the library soon.


## It is Open-Source

<a href="https://github.com/bpmn-io/bpmn-js">bpmn-js</a> and a number of projects it is built with are published on <a href="https://github.com/bpmn-io">GitHub</a>.
We have licensed bpmn-js as <a href="{{ relative page.dest "dist/license" }}">do whatever you want but keep the project logo in the viewer</a> and released all other projects under the MIT license.

Feel free to look inside the projects. It is never to early to contribute bug reports and feature requests! Note however that we are still in alpha stage. Because of that documentation may be lacking and APIs might break with future releases.


## Next Steps

From now on we will gradually extend the features of bpmn-js into a full fledged modeler.
On that road, we will pass by a number of important landmarks such as the context pad, direct editing, drag and drop as well as improved embeddability and diagram overlays.
To learn more, check out our <a href="https://github.com/bpmn-io/bpmn-js/issues/milestones">preliminary schedule</a>, that may, of course, change any time.