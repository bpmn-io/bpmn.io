---

title: Simple Process Modeling is here
layout: blogpost.hbs

slug: 2014-simple-process-modeling
author: Nico Rehwaldt<https://github.com/Nikku>

published: 2014-07-21 12:00

---

<p class="introduction">
  We are happy to announce a new version of [our BPMN toolkit](https://github.com/bpmn-io/bpmn-js).
  It allows you to create simple processes and export them as BPMN 2.0 XML.
  Furthermore it adds a context pad, improves the support for mobile devices through touch gesture support and has better rendering performance.
</p>

<!-- continue -->


Todays release of [bpmn-js](https://github.com/bpmn-io/bpmn-js) brings us a big step closer to a bpmn.io process modeler.
Using the library it is now possible to model simple processes, undo/redo the changes and export the resulting diagram as BPMN 2.0 XML.
Modeling can be done by appending new process elements to existing ones via a simple context pad.

Checkout the modeling workflow below:

<div style="margin: 30px 0; text-align: center">
  <img style="box-shadow: 0px 2px 6px 2px #C2C2C2; max-width: 100%"
       src="{{ assets }}/attachments/blog/2014/005-simple-process-modeling.gif">
</div>

You may try out the feature by creating your own process on [demo.bpmn.io](http://demo.bpmn.io/new).

The new version of bpmn-js is available via [npm](http://npmjs.org/bpmn-js) and [bower](https://github.com/bpmn-io/bower-bpmn-js).


## Context pad

[diagram-js](https://github.com/bpmn-io/diagram-js), the underlying diagram toolkit received a context pad that allows users to carry out actions local to an element.
These actions include appending other nodes (just shipped) or removing the current element (still to be implemented).
The context pad is designed to be easily extended and bpmn-js builds its modeling actions on top of it.

<div style="margin: 30px 0; text-align: center">
  <img style="box-shadow: 0px 2px 6px 2px #C2C2C2; max-width: 100%"
       src="{{ assets }}/attachments/blog/2014/005-context-pad.gif">
</div>


## Touch and smoother navigation


We added [touch gesture support](https://github.com/bpmn-io/bpmn-js/issues/46) to the BPMN 2.0 toolkit that allows you to navigate through processes on your mobile devices.

As part of it we reworked the way we perform zooming and scrolling in diagrams.
We now use [svg transforms and matrix manipulation magic](https://github.com/bpmn-io/bpmn-js/issues/81) that can be optimized by browsers.
This gives us noticable performance boosts on older browsers and mobile devices.

You may edit labels from your tablet or phone, too.

## BPMN 2.0 manipulation (know your $parent)

[bpmn-moddle](https://github.com/bpmn-io/bpmn-moddle) is our in-memory BPMN 2.0 document representation.
It now exposes the parent element of a BPMN node via the `$parent` variable.
This comes handy for model inspection, traversal and manipulation.

One use case is removing a flow node from its parent process, effectively removing it from the BPMN 2.0 document.

```xml
<bpmn:definitions ...>
  <bpmn:process id="process_1">
    <bpmn:startEvent id="startEvent_1" />
    <bpmn:task id="task_1" />
  </bpmn:process>
</bpmn:definitions>
```

Let us say we imported the above definitions and got hold on the task `task_1`.

```javascript
var task; // task_1

var process = task.$parent;
var flowElements = process.get('flowElements');

flowElements; // [ startEvent_1, task_1 ]

// remove task
flowElements.splice(flowElements.indexOf(task), 1);
```

After exporting the diagram again, the task got removed from the XML file:

```xml
<bpmn:definitions ...>
  <bpmn:process id="process_1">
    <bpmn:startEvent id="startEvent_1" />
  </bpmn:process>
</bpmn:definitions>
```


## Final words

The release ships with many more under the hood improvements and bug fixes.
To learn about everything that is inside have a look at the issues closed for [bpmn-js](https://github.com/bpmn-io/bpmn-js/issues?milestone=6&state=closed), [diagram-js](https://github.com/bpmn-io/diagram-js/issues?milestone=1&state=closed) as well as [bpmn-moddle](https://github.com/bpmn-io/bpmn-moddle/issues?milestone=2&state=closed).

In the next milestone we plan to ship drag and drop of process elements along with [other goodies](https://github.com/bpmn-io/bpmn-js/issues?milestone=3&state=open). Stay updated on what we do via [twitter](https://twitter.com/bpmn_io).

For now, happy modeling on [demo.bpmn.io](http://demo.bpmn.io/new).