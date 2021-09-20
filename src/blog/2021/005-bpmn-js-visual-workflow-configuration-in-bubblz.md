---

title: How Bubblz Integrates bpmn-js to Improve Workflow Configuration
description: This blog post explains how Bubblz integrates bpmn-js to provide a visual workflow configuration to their customers.
# preview_image: https://bpmn.io/assets/attachments/blog/2021/003-preview.png
# url: https://bpmn.io/blog/posts/2021-form-js-visual-form-editing-and-embedding.html
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
  [Bubblz](https://bubblz.net) is a no-code SaaS platform that allows users to build user centric workflows. Each workflow is represented by and configured through a Kanban board.
  In this post Anis from Bubblz shares how they embedded [bpmn-js](https://github.com/bpmn-io/bpmn-js) to offer users a BPMN view onto their workflows and which benefits he has seen by doing so.
</p>

<!-- continue -->

<p class="thanks">
  _A big thanks to Sébastien Bencherqui and [Anis Zane](https://github.com/mzane42) from [Bubblz](https://bubblz.net) for writing this guest blog post._
</p>


## Kanban as a Representation for our Workflows

The principle of our no-code SaaS platform is to have a super-kanban with a form at each step to make recurring project management more fluid, with emailing, automation of decision scenarios etc...

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

To configure the Kanban board, we had an edition mode also in the form of Kanban board. The main problem was that it did not allow us to quickly realize the <em>workflow</em> aspect of the thing we were configuring.

<div class="figure">
  <img src="{{ assets }}/attachments/blog/2021/005-config-steps.png">

  <p class="caption">
     Screenshot of the old configuration mode
  </p>
</div>

Our way of working is to create the workflow as a BPMN diagram on [Cawemo](https://Cawemo.com), let our customers validate them and then configure it using this interface. For our customers that meant going from a BPMN view to a not so sexy configuration view.


### Configuring Things as a Workflow

To solve this problem, we decided to use [bpmn-js](https://github.com/bpmn-io/bpmn-js) and embed its BPMN display abilities directly into our application. The first step was to build an algorithm to transform a proprietary process json into a bpmn file in Camunda format. This was a lot of work and the performance of the algorithm (8ms to translate a process of about 20 steps) allows us to propose an approach in quasi real-time.

Once the algorithm was done, we integrated [bpmn-js](https://github.com/bpmn-io/bpmn-js) on the front end. The modularity of the framework allowed us to use it in an ultra-flexible way. We removed the drag & drop (our algorithm has an auto-positioning feature of the elements so we didn't need it), we customized the left panel as well as all the context pads of the different elements. And look, for the workflow shown above, this is what the BPMN representation looks like:

<div class="figure">
  <img src="{{ assets }}/attachments/blog/2021/005-config-bpmn.png">

  <p class="caption">
     The new configuration mode, powered by bpmn-js.
  </p>
</div>


## Benefits

[bpmn-js](https://github.com/bpmn-io/bpmn-js), through its modularity, allowed us to integrate it and customize it to suite our needs.
As a result, it tightly integrates into our application and the existing way of editing things.

In business terms, this integration has allowed us to greatly improve the understanding of the process by the users but also to facilitate the configuration of the processes. We estimated that this reduced the configuration time by at least 50%.

---

## About the Authors

[Anis Zane](https://github.com/mzane42) is a software developer at [Bubblz](https://bubblz.net/).