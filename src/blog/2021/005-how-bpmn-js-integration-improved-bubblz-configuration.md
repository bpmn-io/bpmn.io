---
title: How BPMN.js integration improved Bubblz’ configuration.
description: This blog post explain how bpmn.js is integrated in our Bubblz engine
# preview_image: https://bpmn.io/assets/attachments/blog/2021/003-preview.png
# url: https://bpmn.io/blog/posts/2021-form-js-visual-form-editing-and-embedding.html
# layout: blogpost.hbs
slug: 2021-how-bpmn-js-integration-improved-bubblz-configuration
author:
  - Anis Zane<https://github.com/mzane42>
# published_time: "2021-06-03T13:17:09+01:00"
# modified_time: "2021-06-03T13:17:09+01:00"
# published: 2021-06-03 13:17
---

<p class="introduction">
  The idea of this blog post is to explain how bpmn.js helped [Bubblz](https://bubblz.net) technology that we edit to greatly improve its UX.
</p>

<!-- continue -->

## Kanban in a standard BPMN

The principle of our no-code SaaS platform is to have a super-kanban with a form at each step to make recurring project management more fluid, with emailing, automation of decision scenarios etc...

<div class="figure">
  <a href="https://bubblz.net">
    <img src="{{ assets }}/attachments/blog/2021/005-execution-kanban.png">
  </a>

  <p class="caption">
     Screenshot of a Bubblz process (execution interface)
  </p>
</div>

<div class="figure">
  <a href="https://bubblz.net">
    <img src="{{ assets }}/attachments/blog/2021/005-execution-form.png">
  </a>

  <p class="caption">
     Screenshot of a step form
  </p>
</div>

## Bpmn.js gives us superpowers

To configure the kanban, we had an edition mode also in the form of kanban. The main problem was that it did not allow us to quickly realize the <em>workflow</em> aspect of the process we were configuring.

<div class="figure">
  <img src="{{ assets }}/attachments/blog/2021/005-config-steps.png">

  <p class="caption">
     Screenshot of the old configuration mode
  </p>
</div>

Our way of working is to realize process BPMN on [Cawemo](https://Cawemo.com) for customers validation and then to configure it using this interface. Our customers were going from a nice bpmn view to a not so sexy configuration view.

To solve this problem, we decided to use [bpmn.js](https://github.com/bpmn-io/bpmn-js). The first step was to build an algorithm to transform a proprietary process json into a bpmn file in Camunda format. This was a lot of work and the performance of the algorithm (8ms to translate a process of about 20 steps) allows us to propose an approach in quasi real-time.

Once the algorithm was done, we had to integrate [bpmn.js](https://github.com/bpmn-io/bpmn-js) on the front end. The ultra-modularity of the framework allowed us to use it in an ultra-flexible way. We removed the drag & drop (our algorithm has an auto-positioning feature of the elements so we didn't need it), we customized the left panel as well as all the context pads of the different elements. And look, for the same process, what it gives via [bpmn.js](https://github.com/bpmn-io/bpmn-js) :

<div class="figure">
  <img src="{{ assets }}/attachments/blog/2021/005-config-bpmn.png">

  <p class="caption">
     Screenshot of the new configuration mode with bpmn.js
  </p>
</div>

## Benefits

In business terms, this integration has allowed us to greatly improve the understanding of the process by the users but also to facilitate the configuration of the processes. We estimated that this reduced the configuration time by at least 50%.
