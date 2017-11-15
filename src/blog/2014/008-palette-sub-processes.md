---

title: Palette and Sub-Process Modeling
layout: blogpost.hbs

slug: 2014-palette-and-sub-processes
author: Nico Rehwaldt<https://github.com/Nikku>

published: 2014-12-11 13:00

releases:
  - 'bpmn-js'

---

<p class="introduction">
  Today we release a new version of [bpmn-js](https://github.com/bpmn-io/bpmn-js). It ships with some big BPMN 2.0 modeling improvements and a number of rendering and import fixes.

  Using the modeler it is now possible to model sub-processes.
  A new palette gives you access to common elements. New elements can be dragged from the palette or an element's context pad to create them anywhere on the canvas.
</p>

<!-- continue -->


Todays release of [bpmn-js](https://github.com/bpmn-io/bpmn-js) contains a number of significant modeling improvements, first and foremost the palette.

<div class="figure">
  <a href="http://demo.bpmn.io/new">
    <img          src="{{ assets }}/attachments/blog/2014/008-palette.gif">
  </a>
</div>

The palette gives you quick access to common modeling elements. It allows you to drag out elements to place them onto valid locations on the canvas.

Create a process on [demo.bpmn.io](http://demo.bpmn.io/new) and try out the new palette yourself.


## Dragging everywhere

Elements may be dragged from the context pad, too, to add them at a specific position.

<div class="figure">
  <img        src="{{ assets }}/attachments/blog/2014/008-drag-from-context-pad.gif">
</div>

The diagram will snap to certain anchor points during move and create, allowing a faster and simpler creation of BPMN 2.0 process diagrams.


## Model sub-processes

The palette allows you to add collapsed and expanded sub-processes to BPMN 2.0 diagrams.
Once added to the canvas, expanded sub-processes may be resized and child elements may be added or removed from them.

<div class="figure">
  <img        src="{{ assets }}/attachments/blog/2014/008-sub-processes.gif">
</div>

Child elements of sub-processes will move with the container once the sub-process is moved.


## A BPMN 2.0 icon font

The modeler is now using an icon font to render BPMN 2.0 symbols in the context pad and the palette.

<div class="figure">
  <img        src="{{ assets }}/attachments/blog/2014/008-font.png">
</div>

The font is available under an open font license in its own [GitHub repository](https://github.com/bpmn-io/bpmn-font).
Try it out and enjoy crisp BPMN 2.0 symbols in your applications.


## Rendering improvements

We have fixed various issues with the rendering of BPMN 2.0. As a result the bpmn-js viewer now displays the BPMN 2.0 timer in a spec compliant. Labels are positioned correctly (again), too, and the plus symbol on collapsed sub-processes / call activities returned.


## Things may break

During our last release we performed a number of crucial refactorings and code cleanups.

As a result some internals changed, most notably the API to access diagram elements and the internal SVG layout.

Diagram elements and their graphical representation may now be accessed using the `ElementRegistry` through two simple API methods `#get(id|gfx) -> Element` and `#getGraphics(id|element) -> Gfx`. Existing methods have been removed.

```javascript
var bpmnjs;

var elementRegistry = bpmnjs.get('elementRegistry');

var connection = elementRegistry.get('SequenceFlow_1'),
    connectionGfx = elementRegistry.getGraphics(connection); // or use the elements id
```

The internal SVG representation changed and now reflects the element hierarchy:

```html
<g class="djs-group">
  <!-- gfx -->
  <g class="djs-element djs-(shape|connection)" data-element-id="Task_1">
    <g class="djs-visual">
      <!-- visual -->
    </g>
  </g>
  <g class="djs-children">
    <!-- direct children -->
    <g class="djs-group"></g>
    <!-- ... -->
  </g>
</g>
```

This enables advanced styling via CSS. It may require some adjustments in your applications, too.


## Wrapping up

A lot has happened under the hood in this release, laying the ground works for many future updates.
Interested in all the details? Have a look at [the complete list of issues](https://github.com/bpmn-io/bpmn-js/issues?q=milestone%3A%22007+-+Modeling+from+Palette%22) closed in the last milestone.

For our next release we will focus on making connecting elements (more) awesome. Check out our [issue tracker](https://github.com/bpmn-io/bpmn-js/issues) to learn about everything that lies ahead of us.

In the mean time, make sure to try out our new modeling features. A lot of things can be done using bpmn-js already:

<div class="figure">
  <a href="http://demo.bpmn.io/new">
    <img          src="{{ assets }}/attachments/blog/2014/008-modeled.gif">
  </a>
</div>

Please report the bugs and problems you have with the latest release. If you would like to stay up to date with the things to come follow us on twitter [@bpmn_io](https://twitter.com/bpmn_io).


PS: The new version of bpmn-js is available via [npm](http://npmjs.org/bpmn-js) and [bower](https://github.com/bpmn-io/bower-bpmn-js).