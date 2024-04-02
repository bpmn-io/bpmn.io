---

title: Introducing EBPMN
layout: blogpost_fooled.hbs

slug: 2024-ebpmn
author: Nico Rehwaldt <https://github.com/nikku>
description: "This post introduces the Egg-based process modeling notation, or in short EBPMN. Expanding on the successful BPMN 2.0 standard EBPMN allows you to model and communicate your processes more tangibly."
preview_image: assets/attachments/blog/2024/004-preview.png
url: blog/posts/2024-ebpmn.html
published: 2024-04-01 7:37
published_time: "2024-04-01T07:37:09+01:00"
modified_time: "2024-04-01T07:37:09+01:00"

releases:
  - 'ebpmn-js@0.0.1'

---


<p class="introduction">
  Today, we announce EBPMN, an improved way to model and communicate your processes. EBPMN (Egg-based Process Modeling Notation) builds upon the successful [BPMN 2.0 standard](https://www.bpmn.org/) but replaces abstract concepts ("events") with tangible, colorful goods ("eggs"). It increases user engagement with (E)BPMN diagrams and empowers more people to "think in processes".
</p>

<!-- continue -->

We propose EBPMN (Egg-based Process Modeling Notation) as a BPMN 2.0 compatible modeling notation and evolution of the [BPMN standard](https://www.bpmn.org/). With EBPMN, we support our [vision to empower more people to do process modeling](./2014-announcing-bpmn-io.html) and hope to contribute to the larger BPM community.

<div class="figure condensed-size">
  <img src="{{ assets }}/attachments/blog/2024/004-preview.png" alt="A simple EBPMN diagram">
  <p class="caption">
    An EBPMN diagram. Rendered with [ebpmn-js](https://github.com/bpmn-io/ebpmn-js), our experimental toolkit to support the standards proposal.
  </p>
</div>


## Towards Tangible, Colorful Process Modeling

The EBPMN standards proposal results from many years of user research and experimentation. It aims to address two critical issues that are inherent to BPMN:

* **Level of abstraction:** BPMN uses numerous abstract concepts ("transaction", "event", "activity"). Such abstractions make it complicated for non-experts to comprehend complex process diagrams. Research suggests that thinking in tangible goods improves "thinking in processes". Hence, EBPMN introduces what we call the "egg".
* **Lack of engagement:** A complex BPMN process makes a good wallpaper motive. It may transport critical bits of information or the algorithms of your organization, but does so in a surprisingly unagitated, dull manner. Backed by [years of feedback](https://forum.bpmn.io/search?q=color), EBPMN adds colors to the core of your processes, raising user engagement and attention span.

While the impact of EBPMN on simple process diagrams is negligible, we found many positive effects on larger diagrams. Our research suggests that EBPMN increases average user satisfaction and stickiness when there is a lot going on:

<div class="figure full-size">
  <img src="{{ assets }}/attachments/blog/2024/004-modeling.png" alt="The EBPMN-js modeler in action" style="padding: 20px">
  <p class="caption">
    Modeling a larger EBPMN diagram with [ebpmn-js](https://github.com/bpmn-io/ebpmn-js).
  </p>
</div>


## Just Another BPMN Dialect?

The initial proposal for EBPMN (0.0.1) builds on top of BPMN in a backward-compatible manner. That means that BPMN engines can execute EBPMN processes without any modifications.

We aim to move fast. Hence, future versions may incorporate additional, backward incompatible changes. Migration between both modeling dialects will always be possible through a SCBAF (swift conversion back and forth) toolkit. A first version of the conversion toolkit will commence soon.


## Wrapping Up

This post introduced EBPMN (Egg-based Process Modeling Notation), a standards proposal for next-gen process modeling. It builds upon many years of learning and supports our mission to make [great BPM tooling available _everywhere, for everyone_](./2014-announcing-bpmn-io).

Today, we make EBPMN available as a 751-page specification proposal [on GitHub](https://github.com/bpmn-io/ebpmn-spec). Along with the proposal, we publish an initial version of [ebpmn-js](https://github.com/bpmn-io/ebpmn-js), the first diagram toolkit that supports this novel notation.

We are eager to hear your feedback [on Mastodon](https://fosstodon.org/@bpmn_io), [GitHub](https://github.com/bpmn-io/ebpmn-spec) or our [forums](https://forum.bpmn.io).

> In EBPMN the egg comes first <img class="emoji" src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f95a.svg" alt="Egg"> <img class="emoji" src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f430.svg" alt="Rabbit">.
>
> —An excited early adopter.