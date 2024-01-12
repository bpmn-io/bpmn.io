---

title: Modeling, Kids at Home Edition
layout: blogpost_fooled.hbs

slug: 2020-modeling-kids-at-home-edition
author: Nico Rehwaldt<https://github.com/nikku>

published: 2020-04-01 12:00

releases:
  - 'bpmn-js@6.5.0-kah.1'

---


<p class="introduction">
  We're proud to announce the latest update of our [BPMN modeler and rendering toolkit](https://github.com/bpmn-io/bpmn-js). The release ships major simplifications to our BPMN modeling experience and a fresh symbol set. Combined, they make BPMN modeling more engaging and family, kids-at-home friendly. Define your next workflow with all local stakeholders today. You will recognize the difference!
</p>

<!-- continue -->

A shared understanding and visibility of procedures are essential for frictionless collaboration. When it comes to workflows, we have always embraced tools such as BPMN to provide that understanding and clarity. Draw a BPMN diagram. It will tell more than a thousand words.

That holds for home-workflows that power our daily family operations, too. However, here the target group is different. We want to be more visual. We must be more visible. And we must tame the complexity of BPMN&mdash;reduce it to the core&mdash;if we would like to include all stakeholders.

That is what we are delivering today: A brand new BPMN modeling experience baked into our [BPMN toolkit](https://github.com/bpmn-io/bpmn-js), that is simplified, refreshing, and engaging for the whole family.

<div class="figure full-size">

  <a href="https://demo.bpmn.io/s/start">
    <img src="{{ assets }}/attachments/blog/2020/002-order-pizza.png">
  </a>

  <p class="caption">
    Your children will immediately understand the potential waiting time.
  </p>
</div>

Include all local stakeholders and try out the new modeling experience [on demo.bpmn.io](https://demo.bpmn.io/s/start).


## Benefits Over Classic BPMN

Compared to our old, classic look, the updated iconography looks bold and refreshing. Beyond that, it offers some immediate benefits, too.

### Motivating

A process is nothing if we do not follow it. The new, positive look does not only motivate to _draw_ but also to _do_ what has been drawn.

<div class="figure">

  <img src="{{ assets }}/attachments/blog/2020/002-happy-path.png">

  <p class="caption">
    You want to get that workflow started, and you want to see it finished.
  </p>
</div>

### Designed For Safe Operation

A [livelock](https://en.wikipedia.org/wiki/Deadlock#Livelock) is a special kind of deadlock. It describes the situation in which your workflow is stuck in a way that makes it impossible to continue. With careful color-coding we ensure you catch this as well as other issues while you model your workflow and not while you are exercising it.

<div class="figure">

  <img src="{{ assets }}/attachments/blog/2020/002-fork-join.png">

  <p class="caption">
    Fork and join, that will work.
  </p>
</div>

Double-checking with a broken diagram makes it clear: With color coding in place, it becomes much harder to overlook potential fork / join related issues.

<div class="figure">

  <img src="{{ assets }}/attachments/blog/2020/002-fork-not-join.png">

  <p class="caption">
    Not looking good (but also not lifelocking).
  </p>
</div>


## It is Standard BPMN, After All

We still save all diagrams as standard BPMN 2.0 documents. That means you can open your workflows in tools that offer the classic BPMN look and feel. Or you can exchange your processes with your local BPMN professional to help you polish and roll them out.

Finally, you could dive into _process automation_ yourself and get machines to help you orchestrate some of your agreed-upon family routines. Pick any BPMN compliant process engine for that. We recommend [Camunda](https://camunda.com/).


## Looking Forward To Feedback

We are excited about the latest changes and hope you are excited, too!

Did we miss anything? Did you spot a bug, or would you like to suggest an improvement? Reach out to us via [our forums](https://forum.bpmn.io), toot us on [Mastodon](https://fosstodon.org/@bpmn_io) or file an issue you found in [the bpmn-js issue tracker](https://github.com/bpmn-io/bpmn-js/issues).

Get the latest BPMN toolkit pre-packaged or as source code via [npm](https://www.npmjs.com/package/bpmn-js) or [unpkg](https://unpkg.com/bpmn-js/).


__PS:__ Do you miss certain elements from the palette, and do you really think you need them? We have made some [available here](https://demo.bpmn.io/s/all-elements).