---

title: A new Properties Panel Foundation
description: "Introducing @bpmn-io/properties-panel, a modern properties panel foundation for our eco-system, built upon by our BPMN, DMN, and Form tooling."
preview_image: assets/attachments/blog/2022/004-1-preview.png
layout: blogpost.hbs
slug: 2022-new-properties-panel-foundation
author:
- Nico Rehwaldt <https://github.com/nikku>
published: 2022-05-05 13:37

releases:
  - 'bpmn-js-properties-panel@1.0.0'
  - 'dmn-js-properties-panel@1.0.0'
  - 'form-js@0.10.0'
  - 'properties-panel@0.13.0'

---

<p class="introduction">
  We're excited to announce a major rewrite of our properties panel infrastructure. Its integration across our tool stack brings users an improved editing experience and offers developers new, powerful ways to extend.
</p>

<!-- continue -->

Properties panels are an essential part of our editing tools. They are the implementation workhorse and allow you to edit what matters under the hood: Technical identifiers, domain-specific input/output bindings, and more. Today we announce a major rewrite of that very infrastructure.

The new properties panels for [BPMN](https://github.com/bpmn-io/bpmn-js-properties-panel), [DMN](https://github.com/bpmn-io/dmn-js-properties-panel), and [forms](https://github.com/bpmn-io/form-js) build upon that shared core and ship significant usability and extensibility improvements.

<div class="figure full-size">
  <a href="https://bpmn-io.github.io/bpmn-js-connectors-extension/?aa=1">
    <img src="{{ assets }}/attachments/blog/2022/004-1-preview.png">
  </a>

  <p class="caption">
    The new BPMN properties panel in action.
  </p>
</div>

Try out the BPMN version in the [create/append anything demo](https://bpmn-io.github.io/bpmn-js-connectors-extension/?aa=1) or in the [Camunda Modeler](https://github.com/camunda/camunda-modeler).


## A Substantial UX Rework

The new properties panel is a major change usability-wise. Rethought from scratch, it aims to simplify property editing as much as possible. But there is more: It ships with crucial new features, too.

### Flat structure

The UI framework is simplified significantly. Tabs are gone as an additional search dimension. Get a quick overview of everything that can be configured and enjoy a new editing experience where scrolling to find your properties is all you need, and filtering is straightforward, too.

### Powerful groups

A group is the main building block a properties panel is composed of, and they got powerful:

* Dirty markers indicate whether a group has changed contents inside
* The group can naturally host different contents: As an item list container, it conveniently allows you to add new entries. As a header-only group, it contains a single call to action. As a plain group, it serves as a simple container for standard inputs.

### Contextual headers

Always know what you're doing. The reworked header shows a preview along with the element type and name. Group headers are adaptive and support their (optional) contents.

### Stateful components

The new architecture allows components to be stateful, thus supporting [async data loading](https://github.com/bpmn-io/bpmn-js-examples/tree/master/properties-panel-async-extension) and improving the integration with external, custom-made components.


## A Shared Foundation

The new properties panels are composed around a shared core, [`@bpmn-io/properties-panel`](https://github.com/bpmn-io/properties-panel). That shared core ensures a uniform UX and simplifies customizing by re-using existing building blocks.

<div class="figure">
  <a href="https://bpmn-io.github.io/bpmn-js-connectors-extension/?aa=1">
    <img src="{{ assets }}/attachments/blog/2022/004-1-architecture.png">
  </a>

  <p class="caption">
    The new properties panel architecture.
  </p>
</div>

Follow along with the reworked [extension example](https://github.com/bpmn-io/bpmn-js-examples/tree/master/properties-panel-extension) to learn how to build your extensions upon the shared infrastructure.


## Migration

Adapting your properties panel extensions to the new infrastructure, you have to perform two adjustments:

* `PropertiesProvider#getTabs` is no longer used. Migrate to the new `PropertiesProvider#getGroups` API instead.
* Previously exported entry factory functions are no longer available. Use components exported from
  [`@bpmn-io/properties-panel`](https://github.com/bpmn-io/properties-panel) instead.

Look at the reworked [BPMN properties panel extension example](https://github.com/bpmn-io/bpmn-js-examples/tree/master/properties-panel-extension) or check out [the example migration](https://github.com/bpmn-io/bpmn-js-examples/pull/142) and [this pull request](https://github.com/bpmn-io/bpmn-js-properties-panel/pull/590) for guidance. Inspect individual property panel changelogs for further hints.


## Wrapping Up

The new properties panel is a major improvement over our `0.x` properties in infrastructure and UI framework terms. We are excited about what you'll build using it.

Did we miss anything? Did you spot a bug, or would you like to suggest an improvement? Reach out to us via [our forums](https://forum.bpmn.io/), tweet us [@bpmn_io](https://twitter.com/bpmn_io), or file your issues in the [properties panel core](https://github.com/bpmn-io/properties-panel/issues) or the respective implementation repository.

Get the latest releases via [npm](https://www.npmjs.com/org/bpmn-io).