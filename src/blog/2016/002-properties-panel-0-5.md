---

title: Configure Job Priorities and Retry Time Cycle
layout: blogpost.hbs

slug: 2016-properties-panel-050
author: Patrick Dehn<https://github.com/pedesen>

published: 2016-01-14 17:00

releases:
  - 'bpmn-js-properties-panel@0.5.0'

---


<p class="introduction">
  We just released the latest version of our [properties panel](https://github.com/bpmn-io/bpmn-js-properties-panel). Besides plenty of bug fixes it also includes some new features such as support for Camunda process engine's job prioritization and job retry time cycle. We also managed to improve the usability significantly using a new tabbed layout. Finding the right property is now a lot easier!
</p>

<!-- continue -->

## What's new

It is now possible to specify a job priority using the properties panel. Under the hood it sets the `camunda:jobPriority` attribute in the diagram XML. [Learn more about Camunda process engine's job prioritization](http://blog.camunda.org/post/2015/08/job-prioritization-asynchronous-processing/).

You can also define the retry time cycle for failed jobs in the same place. This changes the `camunda:failedJobRetryTimeCycle` attribute in the diagram XML. You can configure the time cycle using the ISO_8601 standard for repeating time intervals. [Learn more about failed jobs and the ISO_8601 input format](https://docs.camunda.org/manual/7.4/user-guide/process-engine/the-job-executor/#failed-jobs). We also added support for the `camunda:initiator` property.

<div class="figure">
  <img src="{{ assets }}/attachments/blog/2016/002-job-config.png">
</div>

Adding more and more properties to the panel is great but it also makes it harder for users to find the property they are looking for. Therefore we decided to group properties together and introduce a tabbed layout. If there are many properties for an element you can easily find the right one using tabs.

<div class="figure">
  <img src="{{ assets }}/attachments/blog/2016/002-tabs.gif">
</div>

For a full list of changes, check out the project on [Github](https://github.com/bpmn-io/bpmn-js-properties-panel/commits/main).

## Improvements under the hood

Besides new features and several bug fixes we further improved our code quality to ensure maintainability. Several refactorings especially in the css and less code were applied to lower the borders for future contributors.

## What's next

This release of the properties panel will be part of the next version of our [Camunda Modeler](https://camunda.org/bpmn/tool/) and is already included in the [nightly builds](https://camunda.org/release/camunda-modeler/nightly/). We are interested in your feedback on our latest properties panel improvements! Get in touch with us via our [forums](https://forum.bpmn.io) and tell us what you think.

Make sure to [follow us on Mastodon](https://fosstodon.org/@bpmn_io) if you would like to keep track on what is happening in the bpmn-io sphere.

Get the latest release of our properteis panel via [npm](https://www.npmjs.com/package/bpmn-js-properties-panel).
