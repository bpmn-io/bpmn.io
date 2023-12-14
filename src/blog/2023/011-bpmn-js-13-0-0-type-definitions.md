---

title: Type Definitions Land in bpmn-js
description: "The latest bpmn-js release ships with built-in type definitions, representing a huge leap in editor assistance."
layout: blogpost.hbs
slug: 2023-bpmn-js-type-definitions
url: https://bpmn.io/blog/posts/2023-bpmn-js-type-definitions.html
author:
- Nico Rehwaldt <https://github.com/nikku>
published: 2023-05-11 12:00

releases:
  - 'bpmn-js@13.0.0'
  - 'diagram-js@12.0.0'

---

<p class="introduction">
  We are proud to announce the [bpmn-js@13](https://github.com/bpmn-io/bpmn-js) release. It ships with one major feature: Built-in type definitions. Learn how to use them, and how they help you to navigate and work with our BPMN toolkit code base easier.
</p>

<!-- continue -->

Type definitions, pioneered by [TypeScript](https://www.typescriptlang.org/), super-power your development flow: They define the structure of your front-end code base, allow your editor to validate what you write, and offer you smart suggestions.

```javascript
const xml = '...'; // my BPMN 2.0 xml
const viewer = new BpmnJS({
  container: 'body'
});

try {
  const { warnings } = await viewer.importXML(xml);

  console.log('rendered');
} catch (err) {
  console.log('error rendering', err);
}
```

## Under the Hood

Without saying, typing our huge code base was a massive endevour.

* At scale: Generate types
* Keep type information close to the core
* No rewrite
* Test what you type


## Wrapping up

Reach out to us via [our forums](https://forum.bpmn.io/), follow our updates via [Mastodon](https://fosstodon.org/@bpmn_io), and file any issue you found in the respective toolkit issue trackers.
