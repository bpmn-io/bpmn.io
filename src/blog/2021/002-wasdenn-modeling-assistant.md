---

title: Introducing WASDENN - An intent-aware, AI-powered, personal modeling assistant
layout: blogpost.hbs
slug: 2021-wasdenn-ai-modeling-assistant
author:
- Nico Rehwaldt<https://github.com/nikku>

published: 2021-04-01 12:00

releases:

---

<p class="introduction">
Today we are proud to reveal WASDENN, an AI-powered modeling assistant. Deeply integrated into our [BPMN editor](https://github.com/bpmn-io/bpmn-js), WASDENN offers you help based on your personal needs. WASDENN is fed with actual processes and organizational structures and fine-tuned with years of deep self-learning. It is here to solve your issues, whether you are getting started with BPMN modeling or optimizing your companies procurement processes.
</p>

<!-- continue -->

<style>
  .bi-blogpost.single .figure {
    margin: 40px auto;
  }
</style>

Process modeling is a complex activity. No matter how good the BPMN editor of your choice is, no matter how well [it gets out of your way](https://github.com/bpmn-io/design-principles) as a tool, in the end, process discovery, optimization, and organizational alignment are deeply human activities - until now.

With WASDENN, we're revealing a first-of-a-kind tool that offers AI-powered modeling assistance, directly integrated into our [BPMN modeling tooling](https://github.com/bpmn-io/bpmn-js). Powered by a highly sophisticated, intensely trained neural network and behavioral analytics, WASDENN can offer you solutions at any stage of your process journey.

Due to its intent-aware capabilities, it will quickly become your _personal_ assistant, pick up on what you are trying to achieve, and give you contextually, real-world advice.

<div class="figure full-size">

  <a href="https://demo.bpmn.io/s/start">
    <img src="{{ assets }}/attachments/blog/2021/002_wasdenn-1.gif">
  </a>

  <p class="caption">
    How does WASDENN know Mary?
  </p>
</div>

Try it out on [demo.bpmn.io](https://demo.bpmn.io/s/start).


## Intent-aware Suggestions

Behavioral analysis and its deep understanding of BPMN modeling and organizational contexts allow WASDENN to give contextual advice, depending on a user's _intent_. That can mean modeling a complete, domain-specific process they may have in mind:

<div class="figure full-size">

  <a href="https://demo.bpmn.io/s/start">
    <img src="{{ assets }}/attachments/blog/2021/002_wasdenn-2.gif">
  </a>

  <p class="caption">
    WASDENN showcasing full end-to-end modeling capabilities.
  </p>
</div>

That can also mean providing help for BPMN newcomers, as they open the tool for the first time:

<div class="figure full-size">

  <a href="https://demo.bpmn.io/s/start">
    <img src="{{ assets }}/attachments/blog/2021/002_wasdenn-3.gif">
  </a>

  <p class="caption">
    WASDENN helping out during getting started.
  </p>
</div>

Will WASDENN anticipate what you would like to model today? Give it a try on [demo.bpmn.io](https://demo.bpmn.io/s/start).


## General (Modeling) Artificial Intelligence

Process modeling is a complex domain that requires deep organizational knowledge and communication abilities.
WASDENN works so well in its domain, as it is a [general (modeling) artificial intelligence](https://en.wikipedia.org/wiki/Artificial_general_intelligence): It understands and learns BPMN modeling like we humans do, just at a much higher, compute-bound, pace.

WASDENN is powered by seven specialized neural networks, each trained using [reinforcement learning](https://en.wikipedia.org/wiki/Reinforcement_learning). Reinforcement learning allows us to find a balance between exploration (uncharted territory) and exploitation (current knowledge).

To become the friendly helper it is today, WASDENN had to acquire understanding in different focus areas:

* Modeling guidelines and best practices
* Being able to create understandable diagrams
* Organizational knowledge, business KPIs
* Communication patterns
* Ability to analyze and optimize processes
* General and situational awareness
* Empathy and communication skills

It continues to improve in all these areas as you read this.


## Feedback to WASDENN

Some things are arguably hard for WASDENN to ever anticipate without your (human) feedback. One example is modeling trends. Yesterday we did labels on our events; today, our company does not do it anymore. Yesterday we modeled huge process landscapes and collaboration diagrams, today we follow the [KISS principles](https://en.wikipedia.org/wiki/KISS_principle) and ensure we deliver our end-to-end business value with a maximum of five activities.

Being truly useful, WASDENN needs to adapt and account for even the slightest human _changes in plans_. It does so via two feedback channels:

* It learns from users as they model. Modeling conventions and organizational patterns are often implicit, unwritten rules. Better than us humans WASDENN can distill the common ground in institutional knowledge: By observing the diagrams your organization produces, WASDENN figures out patterns that you phase out before you know it. If WASDENN removes labels from your diagrams, trust it. It knows where your processes are heading.

* It learns from users as they interact with it. As an example, if your colleagues continuously reject its help, WASDENN will stop bothering them. It may start to communicate in [Haikus](https://en.wikipedia.org/wiki/Haiku), too, if it feels that is what you desire.

Feedback to WASDENN is opt-in. We highly recommend you enable it for maximum effect.


### Opt-in to WASDENN Feedback

Integrators have to enable human feedback to WASDENN on a per-editor level. To do it, pass a configuration, as you instantiate a [BPMN editor instance](https://bpmn.io/toolkit/bpmn-js/):

```javascript
import BpmnModeler from 'bpmn-js/lib/Modeler';

const modeler = new BpmnModeler({
  wasdenn: {
    cloudConnect: true
  }
});
```

Once enabled, you may approach WASDENN any time and mandate to not be tracked. This way, WASDENN won't benefit from your modeling experience. It may, however, not be as supportive to you, too.


## Wrapping Up

In this post, we presented WASDENN, a first-of-a-kind AI-powered modeling assistant that supports you wherever you are on your process journey.

We showcased how [intent-awareness](#intent-aware-suggestions) allows WASDENN to help in contexts that look arbitrary for an outsider. WASDENN knows what you'd like to do and loves to help you get it done.

With WASDENN's first iteration, we deliberately chose to ship a simple in-app character that interacts with you, text-based. We actively explore voice recognition for future versions, giving you more freedom to interact with the assistant. You can look forward to vocally disagreeing with WASDENN's proposals, sharing your excitement, or command it to your desire on the voice line.

Give WASDENN a try and let it [support you on your BPMN journey](https://demo.bpmn.io/s/start) today!

As always, please share your feedback [@bpmn_io](https://twitter.com/bpmn_io) or [via our forum](https://forum.bpmn.io/).