---

title: How Bubblz Integrates bpmn-js to Improve Workflow Configuration
description: This blog post explains how Bubblz integrates bpmn-js to provide a visual workflow configuration to their customers.
preview_image: https://stage.bpmn.io/assets/attachments/blog/2021/005-config-bpmn.png
url: https://bpmn.io/blog/posts/2021-bpmn-js-visual-workflow-configuration-in-bubblz.html
layout: blogpost.hbs
slug: 2021-bpmn-js-visual-workflow-configuration-in-bubblz
author:
  - Anis Zane<https://github.com/mzane42>
published_time: "2021-09-16T13:17:09+01:00"
modified_time: "2021-09-16T13:17:09+01:00"
published: 2021-09-16 13:17
releases:
  - 'bpmn-js'

---

<p class="introduction">
  [Bubblz](https://bubblz.net) is a no-code SaaS platform that allows users to build user-centric workflows. Each workflow is represented by and configured through a Kanban board.
  In this post, Anis from Bubblz shares how they embedded [bpmn-js](https://github.com/bpmn-io/bpmn-js) to offer users a BPMN view onto their workflows and which benefits he has seen by doing so.
</p>

<!-- continue -->

<p class="thanks">
  _A big thanks to Sébastien Bencherqui and [Anis Zane](https://github.com/mzane42) from [Bubblz](https://bubblz.net) for writing this guest blog post._
</p>


## Kanban as a Representation for our Workflows

The principle of our no-code SaaS platform is to have a super-kanban with a form at each step to make recurring project management more fluid, with emailing, automation of decision scenarios, etc.

<div class="figure">
  <a href="https://bubblz.net">
    <img src="{{ assets }}/attachments/blog/2021/005-execution-kanban.png">
  </a>

  <p class="caption">
     Bubblz workflow execution interface
  </p>
</div>

Each transition to a next step is backed by a user task form:

<div class="figure">
  <a href="https://bubblz.net">
    <img src="{{ assets }}/attachments/blog/2021/005-execution-form.png">
  </a>

  <p class="caption">
    Transitioning to the next step through a form
  </p>
</div>


## How bpmn-js Gives us Superpowers

To configure the Kanban board, we had an edit mode also in the form of Kanban board. The main problem with that edit mode was was that we could not quickly realize a project's <em>workflow</em> aspect.

<div class="figure">
  <img src="{{ assets }}/attachments/blog/2021/005-config-steps.png">

  <p class="caption">
     Screenshot of the old configuration mode
  </p>
</div>

Our way of working is to create the workflow as a BPMN diagram on [Cawemo](https://Cawemo.com), let our customers validate them, and then configure it using this interface. For our customers, that meant going from a BPMN view to a not-so-sexy configuration view.


### Configuring Things as a Workflow

To solve this problem, we decided to use [bpmn-js](https://github.com/bpmn-io/bpmn-js) and embed its BPMN display and edit capabilities directly into our application. The first step was to build an algorithm to transform a proprietary process description into a BPMN file in Camunda format. We tuned the performance of that algorithm to translate between both formats in quasi-real-time (8ms to transform a process of about 20 steps).

Once we finished the algorithm, we integrated [bpmn-js](https://github.com/bpmn-io/bpmn-js) on the front end. The modularity of the framework allowed us to use it in an ultra-flexible way. Our algorithm had an auto-positioning feature of the elements. So we removed drag & drop. Our users are used to our very own way of editing things. So we customized the left panel as well as all the context pads of the different elements.

With everything set and done, this is what the BPMN representation looks like for the workflow shown above:

<div class="figure">
  <img src="{{ assets }}/attachments/blog/2021/005-config-bpmn.png">

  <p class="caption">
     The new configuration mode, powered by bpmn-js.
  </p>
</div>


## Benefits

[bpmn-js](https://github.com/bpmn-io/bpmn-js) allowed us to integrate it and customize it to suit our needs.
As a result, it tightly integrates into our application and the existing way of editing things.

In business terms, this integration has greatly improved the understanding of the process by the users. It also made configuring projects quicker and more intuitive. We estimated that this reduced the configuration time by at least 50%.

---

## About the Authors

[Anis Zane](https://github.com/mzane42) is a software developer at [Bubblz](https://bubblz.net/).