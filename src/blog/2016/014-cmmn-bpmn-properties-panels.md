---

title: Properties Panel Improvements
layout: blogpost.hbs

slug: 2016-improvements-bpmn-cmmn-properties-panels
author: Patrick Dehn<https://github.com/pedesen>

published: 2016-09-09 15:00

releases:
  - 'bpmn-js-properties-panel@0.9.0'
  - 'cmmn-js-properties-panel@0.2.0'

---

<p class="introduction">
  This time we are twice as proud, because with [bpmn-js-properties-panel](https://github.com/bpmn-io/bpmn-js-properties-panel) v0.9.0 and [cmmn-js-properties-panel](https://github.com/bpmn-io/cmmn-js-properties-panel) 0.2.0 we can announce two releases at once. In both panels we provide the possibility to add descriptions for input fields. Besides several bug fixes we improved the tab behavior and added support to configure field injection.
</p>

<!-- continue -->

## Input Descriptions

We are providing the infrastructure for adding descriptions to specific input fields. We also implemented them for due date and follow up date properties describing the supported date formats.

<div class="figure">
  <img src="{{ assets }}/attachments/blog/2016/014-input-description.png">
</div>

## Keep Selected Tab

When you edit properties from the same tab for different elements it is convenient to keep the current tab when selecting another
element. From now this is the default behavior in both properties panels.

## Configure Field Injection

In BPMN it is now possible to set one or more fields to use field injection. This works for service tasks in the field injection tab as well as for task listeners and execution listeners in the listeners tab. In CMMN you can configure fields for case execution listeners, task listeners and variable listeners.

<div class="figure">
  <img src="{{ assets }}/attachments/blog/2016/014-field-injection.png">
</div>

See a list of all changes in the milestones of [bpmn-js-properties-panel](https://github.com/bpmn-io/bpmn-js-properties-panel/milestone/12?closed=1) and [cmmn-js-properties-panel](https://github.com/bpmn-io/cmmn-js-properties-panel/milestone/2?closed=1).

Give us your feedback on this release [via our forums](https://forum.bpmn.io). Make sure to [follow us on Mastodon](https://fosstodon.org/@bpmn_io) to stay up to date, too.

Get the latest bpmn-js-properties-panel release via [npm](https://www.npmjs.com/package/bpmn-js-properties-panel). The cmmn-js-properties-panel release is also available via [npm](https://www.npmjs.com/package/cmmn-js-properties-panel).
