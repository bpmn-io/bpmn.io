---

title: Type Declarations for bpmn-js
description: "Learn how to use the type declarations that ship with bpmn-js@13 to get the most out of your editor tooling."
layout: blogpost.hbs
slug: 2024-bpmn-js-type-declarations
preview_image: http://bpmn.io/assets/attachments/blog/2024/001-code-completion.png
url: https://bpmn.io/blog/posts/2024-bpmn-js-type-declarations.html
author:
- Nico Rehwaldt <https://github.com/nikku>
published: 2024-01-09 12:00

releases:
  - 'bpmn-js@13.0.0'
  - 'diagram-js@12.0.0'

---

<p class="introduction">
  Earlier last year, [bpmn-js@13](https://github.com/bpmn-io/bpmn-js/blob/main/CHANGELOG.md#1300) shipped with a single feature: Built-in [type declarations](https://www.typescriptlang.org/docs/handbook/2/type-declarations.html). Learn how they help you get the most out of your editor tooling as you work with bpmn-js, whether through code completion, introspection, or validation. Look behind the scenes and understand how we ended up creating these declarations.
</p>

<!-- continue -->

Advanced code intelligence for JavaScript (and TypeScript) in modern code editors relies on a single feature: [Type declarations](https://www.typescriptlang.org/docs/handbook/2/type-declarations.html). Type declarations, shipped with the libraries you use, superpower your code editor, allow for auto-completion, and enable static syntax checking.

With [bpmn-js@13](https://github.com/bpmn-io/bpmn-js/blob/main/CHANGELOG.md#1300), we made this utility available for users, too:

<div class="figure full-size">
  <img src="{{ assets }}/attachments/blog/2024/001-code-completion.gif" alt="Code completion for bpmn-js in a modern editor.">

  <p class="caption">
    Code completion for bpmn-js in a modern editor.
  </p>
</div>

## Using the Declarations

Type declarations ship out of the box, starting with `bpmn-js@13`. A modern code editor picks those up automatically or with minimal configuration effort.

We implemented types so that event listeners (`Diagram#on`) and service getters (`Diagram#get`) are generics. Cast them to the appropriate type as you use the library:

```javascript
import BpmnViewer from 'bpmn-js/lib/Viewer';

/**
 * @typedef {
 *   import('diagram-js/lib/core/ElementRegistry').default
 * } ElementRegistry
 */

const viewer = new BpmnViewer();

/**
 * @type { ElementRegistry }
 */
const elementRegistry = viewer.get('elementRegistry');

const element = elementRegistry.get('MY_TASK');

console.log(element.id); // MY_TASK
```

Check out the [full types example](https://github.com/bpmn-io/bpmn-js-examples/blob/main/types) to learn more about bpmn-js type declarations and their use cases.


## Under the Hood

Our code base has already had comprehensive [JSDoc](https://jsdoc.app/) hints for years. Those annotations captured loads of crucial information on how things work. They were never accessible to library consumers, though.

In early 2023, we started to explore ways to make type information and linked documentation available to users of [bpmn.io](https://bpmn.io/). The obvious way was to provide [type declarations](https://www.typescriptlang.org/docs/handbook/2/type-declarations.html) with our libraries. But typing a vast, multi-layered code base with more than 160,000 lines of code posed a unique challenge.

We ended up generating the type declarations. Before, though, we polished our existing JSDoc declarations and added type specs and interface types (where missing). To generate the actual declarations, we use [`bio-dts`](https://github.com/nikku/bio-dts). It is a utility that produces clean type definitions from idiomatic JavaScript, all while keeping documentation and additional meta-data intact.

Today, [every service](https://github.com/bpmn-io/diagram-js/tree/develop/lib/core) is accompanied by its type declaration (generated and shipped to library consumers) as well as a test that verifies the declarations satisfy expected usage patterns:

```
lib
├── core
│   ├── EventBus.js        (original, shipped)
│   ├── EventBus.d.ts      (generated, shipped)
│   ├── EventBus.spec.ts   (not shipped)
│   └── ...
└── ...
```


## Wrapping up

This blog introduced the type declarations that first shipped out-of-the-box with bpmn-js@13. We hope those declarations make you more productive as you work with [bpmn-js](https://github.com/bpmn-io/bpmn-js). We look forward to using our generator toolchain to bring type declarations to more [bpmn.io](https://bpmn.io/) libraries.

Did we miss anything? Did you spot a bug, or would you like to suggest an improvement?

Contact us via [our forums](https://forum.bpmn.io/), [follow us on Mastodon](https://fosstodon.org/@bpmn_io), and file any issue you find in the respective toolkit issue trackers.
