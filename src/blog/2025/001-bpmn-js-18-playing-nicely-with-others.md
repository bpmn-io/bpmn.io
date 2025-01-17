---

title: Playing Nicely With Others
layout: blogpost.hbs

slug: 2025-bpmn-js-18-playing-nicely-with-others
author: Nico Rehwaldt <https://github.com/nikku>
description: "Introducing bpmn-js v18 (and related diagram-js v15). The releases rework how diagrams integrate with any webpage or application: They turn the diagram canvas into a selectable element and make key functions such as keyboard shortcuts activation implicit. As a result, diagram interaction becomes more predictable, and hence diagrams play nicely with others, per default."
url: blog/posts/2025-bpmn-js-18-playing-nicely-with-others.html
preview_image: http://bpmn.io/assets/attachments/blog/2025/001-preview.png
published: 2025-01-20 9:21
published_time: "2025-01-20T9:21:11+01:00"
modified_time: "2025-01-20T9:21:11+01:00"

releases:
  - 'bpmn-js@18.0.0'
  - 'diagram-js@15.0.0'

---


<p class="introduction">
  The latest major releases of our [diagram](https://github.com/bpmn-io/diagram-js) and [BPMN](https://github.com/bpmn-io/bpmn-js) toolkits change the diagram integration in a simple, but impactful way: The canvas now plugs natively into the browser focus and accessibility tree, and in the process, the toolkit supports an improved, safe per default interaction with the diagram, and any other components inside your webpage or application.
</p>

<!-- continue -->

With pleasure, we've observed over the years many integrations of our toolkits into [various complex applications](https://page.camunda.com/camunda-community-summit-2023-bpmnio-outside-of-camunda#main_content-module-4). In fact, with the [Camunda Modeler](https://github.com/camunda/camunda-modeler) and its web-based sister project, parts of our team work on integration into complex application landscapes, themselves.

We have seen that a smooth integration of our diagram editors is not always easy, especially when you have keyboard shortcuts in place. One reason is that the diagram canvas has always been an alien on a website. It did not offer any immediately focusable element and hence was non-existent from the browsers [accessibility tree](https://developer.mozilla.org/en-US/docs/Glossary/Accessibility_tree). At the same time, resembling browser-like keyboard interaction without actual browser focus is _hard_, if not impossible.

## Embed Anywhere, Embed Safely

To overcome past limitations, [bpmn-js v18](https://github.com/bpmn-io/bpmn-js/blob/develop/CHANGELOG.md#1800) / [diagram-js v15](https://github.com/bpmn-io/diagram-js/blob/v15.0.0/CHANGELOG.md#1500) turn the canvas into a browser native, focusable element. Multiple diagram editors and other complex components integrate nicely, and batteries—including keyboard support—are included.

<div class="figure full-size">
  <img src="{{ assets }}/attachments/blog/2025/001-keyboard-demo.gif">
  <p class="caption">
    Browser native focus state enables smooth interactions.
  </p>
</div>

Moving forward, key interactions depend on the focus state, and, as a result, interaction with diagrams is simpler and more predictable:

* Users focus the diagram using the mouse (click or hover) or tabbing.
* **Only when focused** interactions such as mouse wheel scroll or keyboard shortcuts trigger.
* Because [focus state is observable](#observing-and-controlling-focus-state), integrators can implement advanced focus patterns.

If you want to learn more, check out our [embedding example](https://github.com/bpmn-io/bpmn-js-examples/tree/main/embedding) to explore the integration of multiple BPMN editors into a larger website. Follow along with the [original pull request](https://github.com/bpmn-io/diagram-js/pull/662) for many more details on this change.

## No More Explicit Keyboard Binding

To activate keyboard shortcuts, you would previously need to explicitly pass a keyboard container. This would often be the diagram container itself, manually made selectable, or the `document`. The latter option would break keyboard interaction and integration with other parts of your website or application in interesting ways.

With the new library releases, the explicit binding option is gone. Instead, keyboard shortcuts trigger whenever the diagram canvas has browser focus.

```diff
--- a/app.js
+++ b/app.js
@@ -3,9 +3,6 @@ import Modeler from 'bpmn-js/lib/Modeler';

     const modeler = new Modeler({
       container,
-      keyboard: {
-        bindTo: document
-      }
     });
```


## Observing and Controlling Focus State

UX-wise, the changes should be non-breaking for most applications. Where manual control is needed, the diagram offers support to observe and control focus behavior:

```js
modeler.on('canvas.focus.changed', ({ focused }) => {
  console.log('Canvas focussed?', focused);
});

const canvas = modeler.get('canvas');

if (!canvas.isFocused()) {
  canvas.focus();
}
```


### Wrapping up

The latest bpmn-js and diagram-js releases turn the canvas into a browser-focusable element. This improves accessibility and allows us to offer a safe-per-default integration with other parts of the document tree. One improvement that builds on that change is implicit keyboard binding: By only reacting to keyboard shortcuts once the canvas is focused, diagrams play nicely with whatever other components you host on your website or application.

As always, the new version of our diagram toolkits is available on the [usual](https://www.npmjs.com/package/bpmn-js) [places](https://github.com/bpmn-io/bpmn-js-examples/tree/main/starter#readme).

Contact us via [our forums](https://forum.bpmn.io/) or [follow us on Mastodon](https://fosstodon.org/@bpmn_io). File any issues you find in the respective toolkit issue trackers.
