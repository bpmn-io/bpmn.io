---

title: Reworked Element Selection
description: "Learn how the latest releases of our BPMN and DMN editors substantially rework diagram selection."
layout: blogpost.hbs
slug: 2023-reworked-element-selection
preview_image: http://bpmn.io/assets/attachments/blog/2023/010-selection-rework.png
url: https://bpmn.io/blog/posts/2023-reworked-element-selection.html
author:
- Nico Rehwaldt <https://github.com/nikku>
published: 2023-11-06 12:00

releases:
  - 'bpmn-js@15.0.0'
  - 'dmn-js@14.7.0'
  - 'diagram-js@12.6.0'

---

<p class="introduction">
  The latest [BPMN](https://github.com/bpmn-io/bpmn-js) and [DMN](https://github.com/bpmn-io/dmn-js) toolkit releases ship with a reworked selection UI. The improved UI makes diagram element selection more ergonomic and less verbose.
</p>

<!-- continue -->

Selection is an integral part of the core modeling UX. It has to work; you come across it immediately, and it leaves a lasting impression. Recent releases of our modeling toolkit simplify selection following the selected element's shape. The change results in a less verbose look and feel and clearly distinguishes single-element selections and multi-selection:

<div class="figure full-size">
  <a href="https://demo.bpmn.io/s/start">
    <img src="{{ assets }}/attachments/blog/2023/010-selection-rework.gif" alt="Improved selection in BPMN">
  </a>

  <p class="caption">
    Enjoy reworked selection in BPMN and DMN editing.
  </p>
</div>

Try it on [demo.bpmn.io](https://demo.bpmn.io/s/start).


## Wrapping up

The latest update is another important step towards an overhauled core modeling experience. Stay tuned for future exciting updates in the near future.

Did we miss anything? Did you spot a bug, or would you like to suggest an improvement?

Reach out to us via [our forums](https://forum.bpmn.io/), [follow us on Mastodon](https://fosstodon.org/@bpmn_io), and file any issue you find in the respective toolkit issue trackers.
