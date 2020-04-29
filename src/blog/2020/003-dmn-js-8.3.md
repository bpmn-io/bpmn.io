---

title: Simplified DRD Modeling
layout: blogpost.hbs

slug: 2020-dmn-js-8-3
author: Philipp Fromme<https://github.com/philippfromme>

published: 2020-04-30 12:00

releases:
  - 'dmn-js@8.3.0'

---


<p class="introduction">
  We are excited to announce the latest release of our [DMN modeling toolkit](https://github.com/bpmn-io/dmn-js). It makes creating well laid out decision requirement diagrams (DRDs) much easier and faster while encouraging the use of DMN modeling best practices.
</p>

<!-- continue -->

After adopting the latest DMN standard in the [last release](https://bpmn.io/blog/posts/2020-dmn-js-8-0-0.html), we're continuing to invest into our DMN toolkit to make an even better tool for decision modeling. With the introduction of [automatic layout in bpmn-js](https://bpmn.io/blog/posts/2018-bpmn-js-0-26.html), creating well laid out diagrams became both easier and faster. The latest version of dmn-js finally brings this feature to the DRD editor in our DMN toolkit.

<div class="figure">
  <a href="https://demo.bpmn.io/dmn/s/check-order">
    <img src="{{ assets }}/attachments/blog/2020/003-dmn.gif" alt="The new DRD top-down modeling experience">
  </a>

  <p class="caption">
    The new DRD top-down editing modeling
  </p>
</div>

Try out the new modeling experience [in our demo](https://demo.bpmn.io/dmn/s/check-order).

## Encouraging Best Practices...

When building the new modeling experience, we incorporated the latest results of our ongoing user research. The most significant one is that DRD diagrams are modeled from top to bottom, resulting in a tree structure. In contrast, BPMN diagrams are modeled from left to right. Now, diagrams in both toolkits are automatically laid out accordingly.

<div class="figure">
  <img src="{{ assets }}/attachments/blog/2020/003-dmn-1.gif" alt="DRD diagrams are automatically laid out top to bottom">
  <p class="caption">
    DRD diagrams are automatically laid out top to bottom
  </p>
</div>

Following the top to bottom layout, created connections will connect newly created elements to already existing ones. Furthermore, the layout of information requirements has been adjusted to support the tree structure resulting from the top to bottom approach.

## ...Without Enforcing Them

Even though we encourage you to layout your decision requirement diagrams top to bottom, you can still create diagrams any way you want. If you prefer modeling left-to-right, simply drag the elements from the context pad instead of clicking.

## Feedback Welcome

As this release introduces quite substantial changes to the DRD modeling experience, we encourage you to [give it a try](https://demo.bpmn.io/dmn/s/new) and [let us know what you think about it](https://forum.bpmn.io).

## Wrapping Up

Read through the [full changelog](https://github.com/bpmn-io/dmn-js/blob/develop/packages/dmn-js/CHANGELOG.md) to learn about all issues that we addressed with `dmn-js@8.3`.

Did we miss anything? Did you spot a bug, or would you like to suggest an improvement? Reach out to us via [our forums](https://forum.bpmn.io), tweet us [@bpmn_io](https://twitter.com/bpmn_io) or file an issue you found in [the dmn-js issue tracker](https://github.com/bpmn-io/dmn-js/issues).

Get the latest DMN toolkit pre-packaged or as source code via [npm](https://www.npmjs.com/package/dmn-js) or [unpkg](https://unpkg.com/dmn-js/).
