---

title: The Case for BPMN Token Simulation
description: In this blog we make the case for BPMN token simulation and how it contributes to the overall bpmn.io project vision.
preview_image: https://bpmn.io/assets/attachments/blog/2023/006-bpmn-js-token-simulation.png
url: https://bpmn.io/blog/posts/2023-the-case-for-bpmn-token-simulation.html
layout: blogpost.hbs
slug: 2023-the-case-for-bpmn-token-simulation
author:
  - Nico Rehwaldt<https://github.com/nikku>
published_time: "2023-12-01T13:17:09+01:00"
modified_time: "2023-12-01T13:17:09+01:00"
published: 2023-12-01 13:17
releases:
  - 'bpmn-js-token-simulation@0.32.0'

---

<p class="introduction">
  Over time [token simulation](https://github.com/bpmn-io/bpmn-js-token-simulation) transitioned from an experiment to a powerful tool to learn BPMN and its execution semantics. Let us examine how it contributes to the vision of the [bpmn.io project](https://bpmn.io).
</p>

<!-- continue -->

When we incorporated [bpmn.io](https://bpmn.io) in 2014, we focussed on [bpmn-js](https://bpmn.io/toolkit/bpmn-js/), our BPMN viewer and modeling toolkit. We had one vision at that time: BPMN everywhere, for everyone.

Times passed, toolkits for CMMN, [DMN](/toolkit/dmn-js/), and [forms](/toolkit/form-js/) joined the bpmn.io family. Not much has changed regarding our vision: We remain committed to making fundamental bits of process communication technology accessible to everyone, everywhere, where needed.


## Everywhere, for Everyone

Everywhere, for everyone, is where embeddability and extensibility meet accessibility.

For once, our tools are easily embeddable into any browser-based application. All you need to have is a basic understanding of core web technology. Equipped with that, you can transform any website into a fully-fledged BPMN or DMN editor. When our stock editors don't fully support your use case, we provide you with [a comprehensive set of examples](https://github.com/bpmn-io/bpmn-js-examples) on how to customize our tools deeply.

Then again, what is a BPMN or DMN editor if it is not _accessible_? We're discussing [standardized but complex visual languages](https://www.omg.org/intro/TripleCrown.pdf) that you must learn to use effectively. Our tooling [plays an integral role](https://github.com/bpmn-io/design-principles#readme); it shall be friendly and supportive enough. Empower, not overwhelm you, the user.


## Token Simulation: A Fundamental Learning Tool

We built [token simulation](https://github.com/bpmn-io/bpmn-js-token-simulation) more than five years ago as an experiment. How well could we [integrate moving tokens](https://nikku.github.io/talks/2021-token-simulation) onto the bpmn-js core editor? Already in its early days, it was well received by the community, being used in BPMN trainings and other occasions to visualize how BPMN works.

At the core, it is, and always has been, a powerful learning tool for BPMN execution semantics. To be a reliable help, it has to adhere to the standard it set out to explain. Realizing this, we evolved token simulation from a single instance token visualization into a [powerful, BPMN spec-compliant engine](https://page.camunda.com/ccs2022-bpmn-js-token-simulation).

<div class="figure">
  <img src="{{ assets }}/attachments/blog/2023/006-token-simulation.gif" alt="Exploring BPMN compensation with bpmn-js-token-simulation">

  <p class="caption">
    Let's learn how BPMN compensation works.
  </p>
</div>

Nowadays, several BPMN editors embed token simulation. BPMN learners around the globe use it to understand the standard in a [playful manner](https://www.gse.harvard.edu/news/19/10/power-playful-learning).

## Or Gateway included

Today [token-simulation@0.32.0](https://github.com/bpmn-io/bpmn-js-token-simulation/blob/main/CHANGELOG.md#0320) ships long-awaited support for inclusive gateways. With that, we complete our support for all no-magic BPMN elements.

<div class="figure full-size">
  <img src="{{ assets }}/attachments/blog/2023/006-or-gateway.gif" alt="Inclusive gateway simulation support in bpmn-js-token-simulation">

  <p class="caption">
    Play with forking and joining inclusive gateways in token simulation.
  </p>
</div>

[Try it out](https://bpmn-io.github.io/bpmn-js-token-simulation/modeler.html?pp=1&diagram=https%3A%2F%2Fraw.githubusercontent.com%2Fbpmn-io%2Fbpmn-js-token-simulation%2Fmaster%2Fexample%2Fresources%2Finclusive-gateway.bpmn&e=1) or explore the [full capability demo](https://bpmn-io.github.io/bpmn-js-token-simulation/modeler.html?e=1&pp=1&diagram=https%3A%2F%2Fraw.githubusercontent.com%2Fbpmn-io%2Fbpmn-js-token-simulation%2Fmaster%2Fexample%2Fresources%2Fall.bpmn).


## Outlook

In this post, we made the case for [BPMN token simulation](https://github.com/bpmn-io/bpmn-js-token-simulation) as a fundamental BPMN learning tool.

We look forward to directly incorporating the tool into our official [tool demo site](https://demo.bpmn.io), someday. Until then, go to the dedicated [token simulation demo](https://bpmn-io.github.io/bpmn-js-token-simulation/modeler.html?e=1) and let these tokens flow.

As always, we rely on your feedback! Reach out to us [via our forum](https://forum.bpmn.io) or [GitHub](https://github.com/bpmn-io/bpmn-js-token-simulation/issues/new/choose) and help us to improve our BPM tooling, for everyone.
