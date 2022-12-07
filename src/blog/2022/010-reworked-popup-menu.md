---

title: Reworked Popup Menu lands in diagram-js
description: "Introducing diagram-js@11: The release reworks the popup menu improving scalability and accessibility and adding a fresh new look."
layout: blogpost.hbs
slug: 2022-reworked-popup-menu
preview_image: http://bpmn.io/assets/attachments/blog/2022/010-popup-menu.png
url: https://bpmn.io/blog/posts/2022-reworked-popup-menu.html
author:
- Nico Rehwaldt <https://github.com/nikku>
published: 2022-12-07 12:00

releases:
  - 'bpmn-js@11.0.0'
  - 'diagram-js@11.0.0'

---

<p class="introduction">
  We are happy to announce new major releases of our [core diagramming](https://github.com/bpmn-io/diagram-js) and [BPMN](https://github.com/bpmn-io/bpmn-js) toolkits. The new releases ship a powerful new popup menu that is keyboard accessible, versatile, and scalable across many different use cases.
</p>

<!-- continue -->

The popup menu is a core utility that powers many parts of our modeling UX: Anywhere on the canvas, you can open a menu to offer actions for the user. It can be customized by extensions and used throughout our modeling tools to implement the replace menu, alignment utilities, [color pickers](https://github.com/bpmn-io/bpmn-js-color-picker), or [create/append anything](https://github.com/bpmn-io/bpmn-js-connectors-extension).

The `diagram-js@11` release reworks the tool, adding state-of-the-art features, improved scalability, and a fresh new look.

<div class="figure">
  <img src="{{ assets }}/attachments/blog/2022/010-popup-menu.png" alt="New diagram-js popup menu" style="max-width: 80%">

  <p class="caption">
    The new popup menu has a fresh look, search/filtering, and many other goodies.
  </p>
</div>

Try it on [demo.bpmn.io](https://demo.bpmn.io/s/start).


## Scalable and (Keyboard) Accessible

The new popup menu solves a couple of issues, an important one being scaling: A static menu does not work well beyond a few options. The reworked menu is scrollable and (optionally) allows you to search/filter for entries via your keyboard.

You can drive many parts of the core editor using your keyboard, so why not the popup menu? The reworked menu is completely keyboard-accessible, enabling end-to-end keyboard-only flows. For example, use the new `<r>` shortcut in the BPMN editor to replace an element, never leaving your keyboard:

<div class="figure">
  <img src="{{ assets }}/attachments/blog/2022/010-keyboard-usage.gif" alt="Screen capture showing the new keyboard-only replace workflow">

  <p class="caption">
    Enjoy new keyboard-only journeys.
  </p>
</div>

Another noteworthy improvement in the accessibility realm is that you can now attach a title to your menu. Use it wisely to establish additional context.


## Rich Actions

The new popup menu considers additional meta-data provided through entries:

* `description` allows you to add descriptive text
* `documentationRef` allows you to link documentation resources
* `group` allows you to group entries semantically

Use that meta-data to make actions more meaningful to your users.

<div class="figure">
  <img src="{{ assets }}/attachments/blog/2022/010-groups-search.gif" alt="New diagram-js popup menu in action">

  <p class="caption">
    Supporting [create/append anything](https://github.com/bpmn-io/bpmn-js-connectors-extension), and more.
  </p>
</div>


## Migration

As expected in a rework, the HTML structure and CSS classes changed in the restructuring process. Because of that, we advise you to double-check your style customizations as you upgrade to `diagram-js@11` / `bpmn-js@11`.

API-wise this release is backward compatible. That means popup menu entry providers continue to work as expected, as do your custom popup menus.


## Wrapping up

As users of our [demo](https://demo.bpmn.io) may have noticed, the reworked popup menu is only the first step on our journey to incorporate [create/append anything](https://bpmn-io.github.io/bpmn-js-connectors-extension/?aa=1) into our core. Stay tuned for future exciting updates in core modeling.

Did we miss anything? Did you spot a bug, or would you like to suggest an improvement?

Reach out to us via [our forums](https://forum.bpmn.io/), tweet us [@bpmn_io](https://twitter.com/bpmn_io), or file any issue you found in the respective issue trackers for [bpmn-js](https://github.com/bpmn-io/bpmn-js/issues) or [diagram-js](https://github.com/bpmn-io/diagram-js/issues).
