---

title: Colors Land in bpmn-js v0.19.0
layout: blogpost.hbs

slug: 2016-colors-bpmn-js
author: Nico Rehwaldt<https://github.com/nikku>

published: 2016-12-21 14:00

---


<p class="introduction">
  We are proud to announce the latest release of our [BPMN modeler / toolkit](https://github.com/bpmn-io/bpmn-js).
  It brings support for colors in BPMN diagrams and adresses a number of small drawing and modeling issues.
</p>

<!-- continue -->

## Color Your Processes

Colors help you communicate certain aspects on your process models more effectively. With the latest bpmn-js release you can now use them for whatever you'd like to; to communicate ongoing work on the diagram (áka _needs discussion_) or to mark certain diagram elements as _special_ (whatever that means in your organization).

<!-- Screenshot -->
<div class="figure no-border">
  <img src="{{ assets }}/attachments/blog/2016/019-colors.png">
  <p class="caption">Things got colorful.</p>
</div>

Download an <a href="{{ assets }}/attachments/blog/2016/colors.bpmn" download>example diagram</a> and play with in [on our demo](http://demo.bpmn.io).


### Built-in Color Support

Colors work in both modeler and viewer and get read from / persisted to the BPMN 2.0 XML.
To set colors in the modeler, do that programatically:

```javascript
var bpmnModeler = ...;
var modeling = bpmnModeler.get('modeling');

var elementsToColor = [ element1, element2 ];

modeling.setColor(elementsToColor, {
  stroke: 'green',
  fill: 'yellow'
});
```


### Color Pickers?

We deliberately decided to not include any color picker. This is because the usage of colors (and the variety of colors to offer) is highly domain specific. Adding a color picker will probably not be complicated for you, too. How it could look like in your application? Check the following screenshot taken from the soon to be released [Camunda Modeler](https://github.com/camunda/camunda-modeler):

<div class="figure no-border">
  <img src="{{ assets }}/attachments/blog/2016/019-color-picker.png">
  <p class="caption">Picking Colors in the [Camunda Modeler](https://github.com/camunda/camunda-modeler).</p>
</div>


## What's Next?

We do not have anything concrete on our roadmap. Anything you are missing? Approach us [on our forums](https://forum.bpmn.io) and tell us what you think about the latest color additions.

As always, get the latest bpmn-js release via [npm](https://www.npmjs.com/package/bpmn-js) or [bower](https://github.com/bpmn-io/bower-bpmn-js).
