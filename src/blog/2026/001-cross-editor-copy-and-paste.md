---

title: Copy and Paste Across BPMN Editors
layout: blogpost.hbs

slug: 2026-cross-editor-copy-and-paste
author: Nico Rehwaldt <https://github.com/nikku>
description: "Discussing copy and paste across BPMN editors, browsers, and applications, powered by recent core library improvements and extensions in the bpmn.io eco-system."
url: blog/posts/2026-cross-editor-copy-and-paste.html
preview_image: http://bpmn.io/assets/attachments/blog/2026/001-duplicate.png
published: 2026-01-20 11:31
published_time: "2026-01-20T11:31:12+01:00"
modified_time: "2026-01-20T11:31:12+01:00"

releases:
  - 'bpmn-js@18.10.0'

---


<p class="introduction">
  With the recent releases of [bpmn-js](https://github.com/bpmn-io/bpmn-js) and [bpmn-js-native-copy-paste](https://github.com/nikku/bpmn-js-native-copy-paste), we allow you to copy and paste across any BPMN editor, any BPMN diagram. No matter where you are and what you do, you'll be able to mix and match your BPMN processes.
</p>

<!-- continue -->

BPMN processes are often complex, and so is the process of creating and evolving them over time. Different personas interact, draw, and review BPMN diagrams. Changes may cause conflicts that have to be resolved by humans. Details or entire diagrams have to be merged- potentially across different tools.

For a long time, you could copy within a single BPMN editor, and applying some hacks, you'd be able to copy and paste across editor instances within the same browser or application tab, too. With recent changes shipped to [bpmn-js](https://github.com/bpmn-io/bpmn-js), we gave you the ability to replace the built-in clipboard entirely, with something more elaborate, i.e., the [operating system clipboard](https://github.com/nikku/bpmn-js-native-copy-paste). Powered by the shared clipboard, users get what they expect: Copy and paste across contexts, applications, and online BPMN editors.

## Integrating with the System Clipboard

Building on top of core library improvements, [bpmn-js-native-copy-paste](https://github.com/nikku/bpmn-js-native-copy-paste) disables the built-in clipboard and uses the operating system clipboard instead, for all copy and paste operations:

<div class="figure full-size">
  <a href="https://demo.bpmn.io/s/start">
    <img src="{{ assets }}/attachments/blog/2026/001-cross-tab-copy-paste.gif" />
  </a>
  <p class="caption">
    Copy and paste across browser tabs on [demo.bpmn.io](https://demo.bpmn.io/).
  </p>
</div>

Adding system clipboard support to your BPMN editor is straightforward; plug it in as an additional module:

```javascript
import NativeCopyPaste from 'bpmn-js-native-copy-paste';

const modeler = new BpmnModeler({
  additionalModules: [
    ...
    NativeCopyPasteModule
  ]
});
```

Under the hood, the extension uses the existing copy-and-paste facilities provided by `bpmn-js`. For example, those ensure that only BPMN and extensions known in the target context are pasted.

## Duplicate Elements

Duplication of elements is the little brother of copy and paste, supported across many design tools: It allows you to replicate an element, without using the clipboard. With [`bpmn-js@18.10.0`](https://github.com/bpmn-io/bpmn-js/blob/develop/CHANGELOG.md#18100) we ship support for duplicating elements, bound to the `CTRL/CMD+D` shortcut, or available as a `duplicate` editor action:

<div class="figure full-size">
  <img src="{{ assets }}/attachments/blog/2026/001-duplicate.gif">
  <p class="caption">
    Duplicate parts of your BPMN diagram within the editor.
  </p>
</div>

## Wrapping up

In this post, we looked at recent improvements to copy-and-paste and diagram interchange. We showcased cross-browser/application copy-and-paste and the mechanisms that power it.

We'd like to hear your thoughts as we shape the future of BPMN! Contact us via [our forums](https://forum.bpmn.io/) or [follow us on Mastodon](https://fosstodon.org/@bpmn_io).