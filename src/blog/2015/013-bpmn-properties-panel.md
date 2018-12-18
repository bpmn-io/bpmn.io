---

title: Properties Panel for BPMN
layout: blogpost.hbs

slug: 2015-bpmn-properties-panel
author: Nico Rehwaldt<https://github.com/nikku>

published: 2015-11-27 09:10

releases:
  - 'bpmn-js-properties-panel@0.1.0'

---


<p class="introduction">
  Say hello to [bpmn-js-properties-panel](https://github.com/bpmn-io/bpmn-js-properties-panel), the latest addition to our modeling universe. It is an extension for [bpmn-js](https://github.com/bpmn-io/bpmn-js) that allows you to maintain invisible BPMN and [Camunda](https://camunda.org) properties in BPMN 2.0 diagrams.
</p>

<!-- continue -->

The [bpmn-js-properties-panel](https://github.com/bpmn-js-properties-panel) released today comes with two varieties: The [first one](https://github.com/bpmn-io/bpmn-js-properties-panel/tree/master/lib/provider/bpmn) provides basic support for BPMN related properties. The [second one](https://github.com/bpmn-io/bpmn-js-properties-panel/tree/master/lib/provider/camunda) allows you to edit a large subset of execution related [Camunda](https://camunda.org) extensions.

<div class="figure no-border">
  <a href="https://github.com/bpmn-io/bpmn-js-properties-panel">
    <img src="{{ assets }}/attachments/blog/2015/013-properties-panel.png">
  </a>
</div>


The properties panel integrates tightly with [bpmn-js](https://github.com/bpmn-io/bpmn-js). By pluggin into the modeler's editing lifecycle it should give users a unified editing experience.

If you would like to checkout the properties panel in action, have a look at the [properties-panel example](https://github.com/bpmn-io/bpmn-js-examples/tree/properties-panel) we have put together.


## Project Scope and Outlook

The panel is built with plugability and extensibility in mind. Depending on your requirements it is a few lines of code to add it to an existing [bpmn.io](http://bpmn.io)-powered BPMN 2.0 modeler. If you are a developer and would like to provide your own custom extensions, look into the [Camunda properties provider](https://github.com/bpmn-io/bpmn-js-properties-panel/tree/master/lib/provider/camunda) for inspiration.

Do you have feedback or questions on the new project? Don't hesitate sure to reach out to us via [Twitter](https://twitter.com/bpmn_io) or [our forums](https://forum.bpmn.io) and tell us what you think.

We plan to extend the panel with more editing support and usability improvements in the months to come. Stay tuned for updates!