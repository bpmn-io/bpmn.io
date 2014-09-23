---

title: Connect and Delete
layout: blogpost.hbs

slug: 2014-connect-and-delete
author: Nico Rehwaldt<https://github.com/Nikku>

published: 2014-09-23 13:00

---

<p class="introduction">
  Today we released a new version of [bpmn-js](https://github.com/bpmn-io/bpmn-js).
  It adds the ability to connect and delete elements along with snapping and automatic connection layouting to our BPMN 2.0 modeler.
  The viewer received a new marker API that allows individual, contextual styling of BPMN 2.0 elements and attached overlays.
</p>

<!-- continue -->


Todays release of [bpmn-js](https://github.com/bpmn-io/bpmn-js) comes with two big modeling features. Via the modeler you can now connect elements via the context pad.

<div style="margin: 30px 0; text-align: center">
  <img style="box-shadow: 0px 2px 6px 2px #C2C2C2; max-width: 100%"
       src="{{ assets }}/attachments/blog/2014/007-connect.gif">
</div>

Also via the context pad you can delete individual elements. This removes incoming / outgoing connections, too.
Both, connecting elements and deletion can be undone and result in valid BPMN 2.0 XML.

<div style="margin: 30px 0; text-align: center">
  <img style="box-shadow: 0px 2px 6px 2px #C2C2C2; max-width: 100%"
       src="{{ assets }}/attachments/blog/2014/007-delete.gif">
</div>

Create your own process on [demo.bpmn.io](http://demo.bpmn.io/new) and try out the new modeling features yourself.


## Element Snapping

On top of the added modeling functionality we worked on improving the existing modeling features.
To ease modeling of well organized process diagrams we added element snapping.
A feature well known from other modeling tools adjusts an elements position during move to be on line (horizontally or vertically) with related elements. See yourself:

<div style="margin: 30px 0; text-align: center">
  <img style="box-shadow: 0px 2px 6px 2px #C2C2C2; max-width: 100%"
       src="{{ assets }}/attachments/blog/2014/007-snapline.gif">
</div>


## Connection Layout and Repair

The new modeler ships with automatic connection layouting and repair.
The mechanism ensures that flows are always layouted according to the [manhattan layout](https://www.google.com/maps/place/Manhattan,+New+York,+NY/@40.7577612,-73.9796594,15z/data=!4m2!3m1!1s0x89c2588f046ee661:0xa0b3281fcecc08c), a layout that permits only horizontal and vertical connection parts.
Instead of relayouting connections on every change, we added a number of repair strategies that try to fix existing flows before breaking their original layout.

Automatic layouting applies to both, new and existing sequence and message flows:

<div style="margin: 30px 0; text-align: center">
  <img style="box-shadow: 0px 2px 6px 2px #C2C2C2; max-width: 100%"
       src="{{ assets }}/attachments/blog/2014/007-layout.gif">
</div>


## Markers

Markers are CSS classes that can be added to elements in a BPMN 2.0 diagram.
These classes allow you to style elements and overlays interactively.

Starting from this version we expose an API that allows you to attach markers to individual elements using only a few lines of code:

```javascript
// get canvas
var canvas = bpmnViewer.get('canvas');

// add <needs-discussion> marker
canvas.addMarker('StartEvent_1', 'needs-discussion');
```

You can provide an individual styling for the elements via CSS:

```css
.needs-discussion:not(.djs-connection) .djs-visual > :nth-child(1) {
  fill: red !important; /* color elements as red */
}
```

Check out our [visual process diffing tool](http://demo.bpmn.io/diff) for an example using the API.


## Example Applications

Probably as important as building toolkits is building usable example applications around them.
We have a growing list of these examples. Two recently published once are a model diffing application and a simple commenting solution for BPMN 2.0 process diagrams.


### Model Diff

A visual BPMN 2.0 diagram comparison tool. Try it out at [demo.bpmn.io/diff](http://demo.bpmn.io/diff) now!

<div style="margin: 30px 0; text-align: center">
  <a href="http://demo.bpmn.io/diff">
    <img style="box-shadow: 0px 2px 6px 2px #C2C2C2; max-width: 70%"
         src="{{ assets }}/attachments/blog/2014/007-diff.png">
  </a>
</div>

The tool uses our BPMN 2.0 viewer, the [overlay](http://bpmn.io/blog/posts/2014-overlays-and-more-modeling.html#overlays) and marker apis as well as a little [BPMN 2.0 diffing helper](https://github.com/bpmn-io/bpmn-js-differ).


### Commenting

A new example application available on [GitHub](https://github.com/bpmn-io/bpmn-js-examples/tree/master/commenting).
It shows how commenting on process diagrams may be integrated into bpmn-js.

<div style="margin: 30px 0; text-align: center">
  <a href="{{ assets }}/attachments/blog/2014/007-comments.png">
    <img style="box-shadow: 0px 2px 6px 2px #C2C2C2; max-width: 70%"
         src="{{ assets }}/attachments/blog/2014/007-comments.png">
  </a>
</div>


## Wrapping up

With all new features, demos and updates this was quite a crazy release. Still we are not even half way through on the road to a complete BPMN 2.0 modeler. Palette, connection selection, pools, lanes, bendpoints and advanced modeling interaction are only a few things we have on our menu for the next months.

Check out our [issue tracker](https://github.com/bpmn-io/bpmn-js/issues) for a more complete list of things that lie ahead of us. Make sure to try out our new modeling features, too and report the bugs and problems you have. If you would like to stay up to date with the things to come follow us on twitter [@bpmn_io](https://twitter.com/bpmn_io).


PS: The new version of bpmn-js is available via [npm](http://npmjs.org/bpmn-js) and [bower](https://github.com/bpmn-io/bower-bpmn-js).
