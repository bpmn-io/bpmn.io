---

title: Connect From and To Anywhere
layout: blogpost.hbs

slug: 2019-bpmn-js-6-dmn-js-7-2
author: Nico Rehwaldt<https://github.com/nikku>

published: 2019-12-12 10:00

releases:
  - 'bpmn-js@6.0.0'
  - 'diagram-js@6.0.0'
  - 'dmn-js@7.2.0'

---

<p class="introduction">
  We're proud to announce the latest releases of our [BPMN](https://github.com/bpmn-io/bpmn-js) and [DMN](https://github.com/bpmn-io/dmn-js) toolkits. New in DMN: The DRD editor shows connection previews as you drag and is now based on top of our current diagram editing foundation. New in all diagram editors: An improved (re-)connect experience that swaps the connection direction as needed.
</p>

<!-- continue -->

The updated diagram editors now allow you to connect elements regardless of what the direction of the resulting connection will be. If the elements can be connected, you’re able to connect them. The same also applies to reconnecting connections to other elements.

In conjunction with previews of the resulting connection this allows you to learn the implemented standards in a graceful manner, without running into a brick wall.

<div class="figure">
  <a href="https://demo.bpmn.io/s/start">
    <img src="{{ assets }}/attachments/blog/2019/007-bpmn-reconnect-end-event.gif" alt="You cannot connect FROM and end event">
  </a>

  <p class="caption">
    In BPMN, you can connect a sequence flow <em>to</em> but not <em>from</em> an end event.
  </p>
</div>

[Try out this feature](https://demo.bpmn.io/s/start) on our demo.


## DRD Connection Previews

The decision requirements diagram (DRD) editor shipped with [dmn-js](https://github.com/bpmn-io/dmn-js) incorporates the latest improvements in our diagram editing foundation: Connection previews. Re-connect an element and get an immediate feedback what the resulting connection will look like.

<div class="figure">
  <a href="https://demo.bpmn.io/dmn/s/check-order">
    <img src="{{ assets }}/attachments/blog/2019/007-dmn-connect-preview.gif" alt="See previews of diagram connection as you (re-)connect">
  </a>

  <p class="caption">
    See what you will get arrived in DMN, too.
  </p>
</div>

[Try out this feature](https://demo.bpmn.io/dmn/s/check-order) on our demo.


## Looking Forward To Feedback

Read through the full changelogs ([bpmn-js](https://github.com/bpmn-io/bpmn-js/blob/main/CHANGELOG.md#600), [dmn-js](https://github.com/bpmn-io/dmn-js/blob/main/packages/dmn-js/CHANGELOG.md#720)) to learn about all issues that were addressed as well as potential breaking changes that may require your action during the upgrade.

Did we miss anything? Did you spot a bug or would you like to suggest an improvement? Reach out to us via [our forums](https://forum.bpmn.io), tweet us [@bpmn_io](https://twitter.com/bpmn_io) or file an issue you found in [the bpmn-js issue tracker](https://github.com/bpmn-io/bpmn-js/issues).

Get the latest toolkits pre-packaged via [unpkg](https://unpkg.com) or as source code from [GitHub](https://github.com/bpmn-io).