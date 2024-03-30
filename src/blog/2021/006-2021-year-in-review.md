---

title: 2021 in Review
layout: blogpost.hbs

slug: 2021-year-in-review
author: Nico Rehwaldt <https://github.com/nikku>
description: "From form-js over token-simulation to the things we usually do, 2021 was a good, busy year for bpmn.io."
preview_image: assets/attachments/blog/2021/006-preview.png
url: blog/posts/2021-year-in-review.html
published: 2021-12-21 13:17
published_time: "2021-12-21T13:17:09+01:00"
modified_time: "2021-12-21T13:17:09+01:00"

releases:

---


<p class="introduction">
  This year, [form-js](https://bpmn.io/toolkit/form-js/) joined our bpmn.io family. Besides that, we shipped numerous modeling and stability improvements in our core projects. As always, exciting things happened on the side-line, too. Great times to look back at what we have accomplished! Good times to take a small glimpse into the near 2022 future, too.
</p>

<!-- continue -->


<div class="figure condensed-size">
  <img src="{{ assets }}/attachments/blog/2018/014-christmas-tree.gif" alt="Merry Christmas to whom it may concern!" style="border-color: #14966396">
  <p class="caption">
    It is that time of the year again!
  </p>
</div>


## The Year in Features

Early this year, [form-js](https://bpmn.io/toolkit/form-js/) joined the bpmn.io project family. It also retrieved four minor follow-up releases and, with those, represents our minimal take on form editing and embedding, powered by bpmn.io. With form-js, we acknowledge that, along with BPMN and DMN, forms are an [integral part of process communication](./2021-form-js-visual-form-editing-and-embedding.html).

Other focus areas were code-base modernization, improvement of standards compatibility, and modeling UX. Some noteworthy core library milestones we accomplished this year:

* Released in January, [`bpmn-js@8`](https://github.com/bpmn-io/bpmn-js/blob/develop/CHANGELOG.md#800) significantly improves mouse and keyboard navigation.
* In March, [form-js](https://bpmn.io/toolkit/form-js/) joins as our take on visual form editing and embedding.
* Released in May, [`bpmn-js@8.5`](https://github.com/bpmn-io/bpmn-js/blob/develop/CHANGELOG.md#850) significantly improves the message flow editing experience.
* Released in June, [`form-js@0.1`](./2021-form-js-visual-form-editing-and-embedding.html) is our first stable form library release.
* Also released in June, [`bpmn-js@8.7`](https://github.com/bpmn-io/bpmn-js/blob/develop/CHANGELOG.md#870) ships native support for the [BPMN in color](https://github.com/bpmn-miwg/bpmn-in-color) specification. Along with that, we published a reworked [color picker extension](https://github.com/bpmn-io/bpmn-js-color-picker).
* Also released in June, [`dmn-js@11`](https://github.com/bpmn-io/dmn-js/blob/develop/packages/dmn-js/CHANGELOG.md#1100) ships with [modern import and export APIs](./2021-dmn-js-11-0-awaitable-import-export-apis.html).
* Released in October, [`form-js@0.5.0`](https://github.com/bpmn-io/form-js/blob/master/packages/form-js/CHANGELOG.md#050) ships [a playground](https://github.com/bpmn-io/form-js/tree/master/packages/form-js-playground) to interactively edit and preview forms.
* In November, several releases of our core editing libraries rolled out an improved, reduced color schema across the whole tool stack.
* Released in December, [`diagram-js@8`](https://github.com/bpmn-io/diagram-js/blob/develop/CHANGELOG.md#800) prepares us for a [truly multi-layered future](#looking-ahead).

In the larger ecosystem, we made significant investments in two areas:

* We released new versions of [bpmnlint](https://github.com/bpmn-io/bpmnlint), our take on pluggable BPMN 2.0 diagram validation. [New validation hooks](https://github.com/bpmn-io/bpmnlint/blob/main/CHANGELOG.md#710) allow you to build more expressive and performant lint rules; new recommended lint rules and quality of life improvements help you to get the most out of the tool, out of the box. A new version of the [bpmnlint-playground](https://github.com/bpmn-io/bpmnlint-playground) makes it even easier to build and debug your lint rules in a visual manner.
* We reworked the [bpmn-js-token-simulation](https://github.com/bpmn-io/bpmn-js-token-simulation) and turned it from an experiment into a fully-fledged, visual BPMN simulator. The tool now follows the BPMN spec closely. Use it to learn the basics of token flow playfully or understand more complicated BPMN constructs and their inner working. [Read](https://github.com/nikku/talks/tree/main/talks/2021-token-simulation#readme) [more](https://github.com/nikku/talks/tree/main/talks/2021-token-simulation-internals#readme) on what we did and why. [Give token simulation a try](https://bpmn-io.github.io/bpmn-js-token-simulation/modeler.html?e=1).

Significant work happened in one of the many underlying libraries that support our editing ecosystem. For example, we [published 20 releases](https://www.npmjs.com/package/diagram-js?activeTab=versions) of [diagram-js](https://github.com/bpmn-io/diagram-js/blob/develop/CHANGELOG.md), each improving the way our core modeling UX works.

We cut more than 95 releases (more than 40 being actual feature releases) in [over 30 libraries](https://github.com/bpmn-io). To communicate the new and noteworthy in our ecosystem, we published [five blog posts](https://bpmn.io/blog/) and sent out [numerous tweets](https://twitter.com/bpmn_io).


## The Year in Numbers

Similar to [previous](./2018-year-in-review.html) [years](./2019-year-in-review.html), interest in our projects and toolkits increased substantially.
More people visited [our project website](https://bpmn.io/), asked for help, contributed to [our forum](https://forum.bpmn.io/), and starred our projects on [GitHub](https://github.com/bpmn-io). Community work led to several contributions, too, such as [Spanish translations for bpmn-js](https://github.com/bpmn-io/bpmn-js-i18n/pull/11) and [improved](https://github.com/bpmn-io/diagram-js/pull/484) [keyboard accessibility](https://github.com/bpmn-io/diagram-js/pull/493) of our editors.

<div class="figure no-border condensed-size" style="margin: 50px 0 40px 0; text-align: center">
  <img src="{{ assets }}/attachments/blog/2021/006-stats.png" alt="Some project statistics" >
  <p class="caption" style="margin-top: 10px">
    2021 in numbers (with percentages compared to 2020).
  </p>
</div>

Newly implemented features paid a minimal toll with regards to bpmn-js bundle size. [Roll your own BPMN editor](https://github.com/bpmn-io/bpmn-js/pull/1252) to see that number shrink.


## The Year as a Collaborative Effort

With two more folks on board in 2021, we are now a good team of seven developers dedicated to working on our toolkits and the core Camunda modeling apps. Head over to [our about page](https://bpmn.io/about/) to learn more about us.


## Looking Ahead <a name="looking-ahead"></a>

Making great BPM tooling available _everywhere, for everyone_ is a mission, not a task on a checklist. Our future could not be more exciting. So what is up next?

In 2022 we will ship a complete rework of our [properties panel infrastructure](https://github.com/bpmn-io/properties-panel), and new properties panels for BPMN, DMN, and forms. Async data loading will be easily possible. Promised <img class="emoji" src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f91e-1f3fc.svg" alt="crossed fingers">.

Further, an entire rework of our BPMN collapsed sub-process handling is in the works. You can look forward to powerful drill-down functionality coming for you in 2022.

Do you want to follow along for the ride? [Follow us on Mastodon](https://fosstodon.org/@bpmn_io). Share your thoughts and feedback [in our forum](https://forum.bpmn.ion).

May a peaceful holiday season be with you! <img class="emoji" src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f385-1f3fe.svg" alt="santa" title="Ho!"> <img class="emoji" src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f334.svg" alt="palm tree" title="Yo!">
