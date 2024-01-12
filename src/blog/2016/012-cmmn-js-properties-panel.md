---

title: Edit CMMN Technical Properties
layout: blogpost.hbs

slug: 2016-edit-cmmn-properties-with-cmmn-js-properties-panel
author: Patrick Dehn <https://github.com/pedesen>

published: 2016-07-14 15:00

releases:
  - 'cmmn-js-properties-panel@0.1.0'

---


<p class="introduction">
  We are proud to announce the first release of our [CMMN properties panel](https://github.com/bpmn-io/cmmn-js-properties-panel) project. With this feature packed release you can configure CMMN properties with the same comfort known from our [BPMN properties panel](https://github.com/bpmn-io/bpmn-js-properties-panel). You can edit general properties, details, rules, extension elements, variables, standard events and more.
</p>

<!-- continue -->

## Configure General Properties

* Case Id
* Case Name
* Documentation

<div class="figure">
  <img src="{{ assets }}/attachments/blog/2016/012-case-id.png">
</div>

## Listeners

* Task Listener
* Case Execution Listener
* Variable Listeners

## Human Task Attributes

* Form Key
* Assignee
* Candidate Users
* Candidate Groups
* Due Date
* Follow Up Date
* Priority

## Attributes for Process, Decision and Case Tasks

* Type
* Reference
* Binding
* Tenant Id
* Business Key

## In/Out Variable Mappings

For process and case tasks you can specify variables which should be passed to and back from a sub instance:

<div class="figure">
  <img src="{{ assets }}/attachments/blog/2016/012-in-mapping.png">
</div>

## Edit Rules

With the properties panel you can define the following rules:

* Manual Activation Rule
* Required Rule
* Repetition Rule

We make sure that you have fine grained control over the rules. You can either define them on a default control basis, which means the rules are valid for all plan items referencing to the same element. Or define them on an item control basis which means the rule is valid for each plan item individually:

<div class="figure">
  <img src="{{ assets }}/attachments/blog/2016/012-rules-item-control.gif">
</div>

If the repetition rule is activated and defined you are able to select from a list of standard events you want to repeat on.

## Standard Event

For OnPart connections you can define a standard event and decide if it should be visible as a label.

<div class="figure">
  <img src="{{ assets }}/attachments/blog/2016/012-standard-event.gif">
</div>


## What else?

Give us your feedback on this release [in our forums](https://forum.bpmn.io). Make sure to [follow us on Mastodon](https://fosstodon.org/@bpmn_io) to stay up to date.

Get the latest [cmmn-js-properties-panel](https://github.com/bpmn-io/cmmn-js-properties-panel) release via [npm](https://www.npmjs.com/package/cmmn-js-properties-panel).
