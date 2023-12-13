---

title: Dropping Legacy Callback Style APIs
description: "Recent and upcoming releases will fully remove long deprecated callback style APIs for our BPMN and DMN toolkits."
layout: blogpost.hbs
slug: 2023-dropping-legacy-callback-style-apis
url: https://bpmn.io/blog/posts/2023-dropping-legacy-callback-style-apis.html
author:
- Nico Rehwaldt <https://github.com/nikku>
published: 2023-01-05 12:00

releases:
  - 'bpmn-js@14.0.0'

---

<p class="introduction">
  With the recent [bpmn-js@14](https://github.com/bpmn-io/bpmn-js) major release we removed callback style APIs from our BPMN toolkit. We'll follow-up with other toolkits in the near future.
</p>

<!-- continue -->

If you still work with the deprecated callbacks, ensure to move over to the web platform friendly `Promise`-based APIs:

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

Reach out to us via [our forums](https://forum.bpmn.io/), follow our updates via [@bpmn_io@fosstodon.org](https://fosstodon.org/@bpmn_io), and file any issue you found in the respective toolkit issue trackers.
