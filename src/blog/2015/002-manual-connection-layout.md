---

title: Manual Connection Layouting
layout: blogpost.hbs

slug: 2015-manual-connection-layouting
author: Jörg Dotzki<https://github.com/ISO50>

published: 2015-01-22 18:00

releases:
  - 'bpmn-js'

---


<p class="introduction">
  Our first release this year adds manual connection layouting to the bpmn-js modeler. Additionally it provides a number of BPMN 2.0 serialization fixes and a new lasso selection tool.
  We ship the modeler prepackaged via our bower packaging, too. This should make it easier to play around and embed the bpmn.io web modeler.
</p>

<!-- continue -->


The major feature of our release is the ability manually layout connections. You can now customize the way points of connection and reconnect connections to different sources / targets.

<div class="figure">
  <a href="http://demo.bpmn.io/new">
    <img src="{{ assets }}/attachments/blog/2015/002-bendpoints.gif">
  </a>
</div>

To support the user creating clean diagrams, the connection snaps automatically at vertical and horizontal orientation. The start and end points of a connection can be moved and attached to another shape.

<div class="figure">
  <a href="http://demo.bpmn.io/new">
    <img   src="{{ assets }}/attachments/blog/2015/002-reconnect.gif">
  </a>
</div>


Try out our the manual connection layouting on [demo.bpmn.io](http://demo.bpmn.io/new).


## Selection improvements

The modeler now support two selection modes. First one is by using our new lasso tool. It allows to draw a box around the elements you want to select.
The other way allows adding individual elements to the selection.

<div class="figure">
  <a href="http://demo.bpmn.io/new">
    <img   src="{{ assets }}/attachments/blog/2015/002-lasso-tool.gif">
  </a>
</div>

<table>
  <tr>
    <th style="padding-right: 15px">Function</th>
    <th style="padding-right: 15px">Key combination</th>
  </tr>
  <tr>
    <td style="padding-right: 15px">Lasso tool</td>
    <td style="padding-right: 15px">Hold `Alt` key + left mouse button + mouse move</td>
  </tr>
  <tr>
    <td style="padding-right: 15px">Add elements to selection</td>
    <td style="padding-right: 15px">Hold `Shift` key + left mouse</td>
  </tr>
</table>


## More keyboard control

With this release we added a consistent way of handling keyboard events. Developers should have a look at the documentation of this new [keyboard service](https://github.com/bpmn-io/diagram-js/blob/master/lib/features/keyboard/Keyboard.js). For Mac users the system specific shortcuts were added.

For users of the bpmn-js modeler, a number of keyboard shortcuts are available:

<table>
  <tr>
    <th style="padding-right: 15px">Function</th>
    <th style="padding-right: 15px">Shortcut</th>
  </tr>
    <td style="padding-right: 15px">Delete</td>
    <td style="padding-right: 15px">`Del`</td>
  <tr>
    <td style="padding-right: 15px">Undo</td>
    <td style="padding-right: 15px">`Strg` + z, `Cmd` + z</td>
  </tr>
  <tr>
    <td style="padding-right: 15px">Redo</td>
    <td style="padding-right: 15px">`Strg` + y, `Cmd` + `shift` + z</td>
  </tr>
</table>


## A prepackaged modeler distribution

The [bower packaging](https://github.com/bpmn-io/bower-bpmn-js) received a major update. We now ship three different versions of bpmn-js prebundled:

* The plain viewer
* The viewer with mouse navigation capability
* The modeler


Additional changes to previous version:

* The package ships with all necessary css + font files to style both viewer and modeler distributions.
* The prebuild artifacts can now be found in the `dist` directory.

To get the prebundled packaging install using [bower](http://bower.io/) via `bower install bpmn-js`.
Alternatively you can directly download it from [GitHub](https://github.com/bpmn-io/bower-bpmn-js/releases).


## XML magic

The modeler supports serialization / deserialization of expression as well as di extensions.

Expressions are now correctly serialized with their respective `xsi:type`:

```xml
<bpmn2:sequenceFlow id="SequenceFlow_1" name="" sourceRef="Task_1" targetRef="ParallelGateway_1">
  <bpmn2:conditionExpression xsi:type="bpmn2:tFormalExpression">${foo > bar}</bpmn2:conditionExpression>
</bpmn2:sequenceFlow>
```

Extensions for BPMN DI allow vendors to attach custom meta-data to graphical elements. We now properly read and write these elements.

```xml
<bpmndi:BPMNShape id="_BPMNShape_Task_4" bpmnElement="Task_1">
  <di:extension xmlns:vendor="http://mycompany">
    <vendor:color>green</vendor:color>
  </di:extension>
  <dc:Bounds height="80.0" width="100.0" x="194.0" y="166.0"/>
</bpmndi:BPMNShape>
```

Try out importing and exporting [this example diagram]({{ assets }}/attachments/blog/2015/002-import-export-sample.bpmn).


## Wrapping up

Please give us feedback on the connection layouting improvements shipped with this release. Make sure to follow us [@bpmn_io](https://twitter.com/bpmn_io) to stay up-to-date, too. As always you can fetch the latest version of bpmn-js via [npm](http://npmjs.org/bpmn-js) or [bower](https://github.com/bpmn-io/bower-bpmn-js). Happy BPMN modeling!