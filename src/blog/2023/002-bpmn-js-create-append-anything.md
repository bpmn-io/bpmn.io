---

title: Create/Append Anything Tools and Reworked BPMN Rendering Ship with bpmn-js
description: "Introducing bpmn-js@11.3: The release adds create/append anything tools to the BPMN editor and reworks BPMN element rendering."
layout: blogpost.hbs
slug: 2023-bpmn-js-11-3-0-improved-rendering-create-append-anything
preview_image: http://bpmn.io/assets/attachments/blog/2023/002-preview.png
url: https://bpmn.io/blog/posts/2023-bpmn-js-11-3-0-improved-rendering-create-append-anything.html
author:
- Nico Rehwaldt <https://github.com/nikku>
published: 2023-02-10 12:00

releases:
  - 'bpmn-js@11.3.0'

---

<p class="introduction">
  We are happy to announce [bpmn-js@11.3](https://github.com/bpmn-io/bpmn-js). The new release improves BPMN rendering significantly, making it easier to understand and work with larger BPMN diagrams. The release also incorporates new create/append anything tools into the BPMN editor. These give you access to any BPMN element everywhere.
</p>

<!-- continue -->

How we render BPMN significantly impacts diagram understanding: When viewing diagrams from different zoom levels, users must still be able to distinguish various BPMN constructs. Even in the most crowded BPMN diagrams, you must be able to follow the flow and make sense of what is happening. Finally, elements of similar importance must have a similar UI presence, or you may overlook one.

This release accounts for these aspects and reworks BPMN rendering significantly:

<div class="figure full-size">
  <a href="https://demo.bpmn.io/s/start">
    <img src="{{ assets }}/attachments/blog/2023/002-rendering-rework.gif" alt="Old vs. new rendering BPMN rendering">
  </a>

  <p class="caption">
    Enjoy reworked BPMN rendering, aka find the 20 differences.
  </p>
</div>

Try it on [demo.bpmn.io](https://demo.bpmn.io/s/start).


## Improved Rendering

The release makes significant (albeit not necessarily noticeable) changes to BPMN element rendering:

* Reworked BPMN elements to be more clearly distinguishable, with an equal visual presence.
* Smooth rendering makes looking at a BPMN model less exhausting.
* Round connection corners help trace the BPMN flow with less ambiguity.

Whether or not you notice these changes, these will contribute to a more pleasant and effective way of working with our tool.

<div class="figure">
  <img style="max-width: 70%" src="{{ assets }}/attachments/blog/2023/002-round-connection-corners.png" alt="BPMN diagram with round connection corners">

  <p class="caption">
    Follow flows more easily with rounded corners.
  </p>
</div>


## Create/Append Anything

Following our reworked [replace menu](./2022-reworked-popup-menu.html) and to no surprise for users of our [demo](https://demo.bpmn.io/) this release adds create and append anything tools to the core editor. Through palette and context pad, both tools give you access to any BPMN element, no matter where you are on the diagram:

<div class="figure full-size">
  <img src="{{ assets }}/attachments/blog/2023/002-append-anything.gif" alt="BPMN diagram with round connection corners">

  <p class="caption">
    Model specific BPMN elements, no upgrade required.
  </p>
</div>

The tools are fully keyboard accessible. Trigger them via the `n` (create) and `a` (append) shortcuts.

With create/append available in our core, we are sunsetting the [extension that accomplishes the same thing](https://github.com/bpmn-io/bpmn-js-connectors-extension).


## Wrapping up

As users of our [demo](https://demo.bpmn.io) may have noticed, the reworked popup menu is only the first step on our journey to incorporate [create/append anything](https://bpmn-io.github.io/bpmn-js-connectors-extension/?aa=1) into our core. Stay tuned for future exciting updates in core modeling.

Did we miss anything? Did you spot a bug, or would you like to suggest an improvement?

Reach out to us via [our forums](https://forum.bpmn.io/), tweet us [@bpmn_io](https://twitter.com/bpmn_io), or file any issue you found in the respective issue trackers for [bpmn-js](https://github.com/bpmn-io/bpmn-js/issues) or [diagram-js](https://github.com/bpmn-io/diagram-js/issues).
