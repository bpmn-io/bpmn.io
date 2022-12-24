---

title: 2022 in Review
layout: blogpost.hbs

slug: 2022-year-in-review
author: Nico Rehwaldt <https://github.com/nikku>
description: "From properties panel rewrite over drill down into collapsed sub-processes, between form-js improvements and significant UX improvements at the modeling core: This post recaps another busy year at bpmn.io."
preview_image: assets/attachments/blog/2022/011-preview.png
url: blog/posts/2022-year-in-review.html
published: 2022-12-22 13:17
published_time: "2022-12-22T13:17:09+01:00"
modified_time: "2022-12-22T13:17:09+01:00"

releases:

---


<p class="introduction">
  From properties panel rewrites to drill down into collapsed BPMN sub-processes, between form-js improvements and significant UX improvements at the modeling core: 2022 was a feature-packed, busy year at [bpmn.io](https://bpmn.io/). A great time to look back at what we have accomplished and a good time to take a small glimpse into the near 2023 future.
</p>

<!-- continue -->


<div class="figure condensed-size">
  <img src="{{ assets }}/attachments/blog/2018/014-christmas-tree.gif" alt="Merry Christmas to whom it may concern!" style="border-color: #14966396">
  <p class="caption">
    It is that time of the year again!
  </p>
</div>


## The Year in Features

Early this year, we completed our [properties panels rewrite](./2022-new-properties-panel-foundation.html), building solid foundations for future editing of (technical) details. [form-js](https://bpmn.io/toolkit/form-js/), the new kid on our blog last year, is developing quickly in framework terms and feature set. And we have yet to publish its most significant update to date. Checking out our [BPMN toolkit](https://bpmn.io/toolkit/bpmn-js/) today, you may (or may not) notice improved BPMN support, but also substantial UX improvements.

Other focus areas across our eco-system were code-base modernization (our target is now [ES2018](./2022-migration-to-es2018.html)), improvement of standards compatibility, and modeling UX. Some noteworthy core library milestones we accomplished this year:

* Released in February [form-js@0.6](https://github.com/bpmn-io/form-js/blob/develop/packages/form-js/CHANGELOG.md#060) adds [default values and an improved submit behavior](./2022-form-js-default-values-improved-submit.html).
* Also shipped February [bpmn-js@9](https://github.com/bpmn-io/bpmn-js/blob/develop/CHANGELOG.md#900) ships [drilldown into collapsed sub-processes](./2022-bpmn-js-900-collapsed-subprocesses.html).
* In March [form-js@0.7](https://github.com/bpmn-io/form-js/blob/develop/packages/form-js/CHANGELOG.md#070) ships with [custom properties](./2022-form-js-070-custom-properties.html), a generic extension point.
* Released in April [dmn-js@12]() [switches to FEEL](./2022-dmn-js-1200.html) as the default expression language. Better DMN standards compliance is the direction.
* Released in May, we conclude the large [properties panel rewrite](./2022-new-properties-panel-foundation.html), improving UX and extensibility of our implementation workhorse(s).
* In June [bpmn-js@9.2](https://github.com/bpmn-io/bpmn-js/blob/develop/CHANGELOG.md#920) improves [selection UX and multi-selection](./2022-bpmn-js-9-2-0-improved-editing-ux.html). It also adds a multi-element context pad. Earlier [bpmn-js@9.1](https://github.com/bpmn-io/bpmn-js/blob/develop/CHANGELOG.md#910) significantly improved [container selection](./2022-bpmn-js-9-1-0-improved-participant-sub-process-selection.html). Also shipped in June, you can now describe sequence flows with text annotations.
* Released in July [bpmn-js@9.3](https://github.com/bpmn-io/bpmn-js/blob/develop/CHANGELOG.md#930) adds actions to align and distribute elements on the modeling canvas.
* September releases of our toolkits lift our libraries targets to [ES2018](./2022-migration-to-es2018.html).
* Also released in September [form-js@0.8](https://github.com/bpmn-io/form-js/blob/develop/packages/form-js/CHANGELOG.md#080) ships with a taglist and checklist component, and the ability to provide selection values dynamically.
* Shipped in November [bpmn-js@10.3.0](https://github.com/bpmn-io/bpmn-js/blob/develop/CHANGELOG.md#1030) ships with an improved BPMN space tool.
* December releases of our toolkits integrate a [reworked popup menu](./2022-reworked-popup-menu.html), the foundation for [create/append anything](https://github.com/bpmn-io/bpmn-js-connectors-extension).

In the larger eco-system, we made significant investments in two areas:

* Acknowledging FEEL as the script language of choice in current and upcoming OMG standards, we put significant work into FEEL editor tooling. One important building block is [`feel-editor`](https://github.com/bpmn-io/feel-editor), an embeddable editor for DMN FEEL expressions built on top of [CodeMirror](https://codemirror.net/). It includes syntax highlighting, validation, and auto-completion.
* With [create/append anything](https://github.com/bpmn-io/bpmn-js-connectors-extension) we built an extension to [show the future](https://bpmn-io.github.io/bpmn-js-connectors-extension/?aa=1) of BPMN modeling. Save valuable clicks by appending or creating any applicable element on the canvas. Deeply integrated with [element templates](https://github.com/bpmn-io/element-templates) this becomes a powerful tool to model in reusable, domain-specific building blocks.

We cut more than 120 releases (more than 50 being actual feature releases) in [over 37 libraries](https://github.com/bpmn-io). To communicate the new and noteworthy in our eco-system, we published [eleven blog posts](https://bpmn.io/blog/) and sent out [numerous tweets](https://twitter.com/bpmn_io).


## The Year in Numbers

Similar to [previous](./2020-year-in-review.html) [years](./2021-year-in-review.html), interest in our projects and toolkits increased substantially.
More people visited [our project website](https://bpmn.io/) and starred our projects on [GitHub](https://github.com/bpmn-io). Interestingly, we saw a little drop in [forum questions](https://forum.bpmn.io/).

<div class="figure no-border condensed-size" style="margin: 50px 0 40px 0; text-align: center">
  <img src="{{ assets }}/attachments/blog/2022/011-stats.png" alt="Some project statistics" >
  <p class="caption" style="margin-top: 10px">
    2022 in numbers (with percentages compared to 2021).
  </p>
</div>

Newly implemented features, such as the reworked popup menu and drill down into sub-processes, caused the bpmn-js bundle size to increase. [Roll your own BPMN editor](https://github.com/bpmn-io/bpmn-js/pull/1252), pick only needed components, and see that number shrink.


## The Year as a Collaborative Effort

The community contributed several contributions such as improved support for [international keyboard layouts](https://github.com/bpmn-io/diagram-js/pull/681), support for [strict content security policies](https://github.com/bpmn-io/bpmn-js/issues/1625), let alone fixes for various bugs.

With a stable group of seven developers split across two teams, we are set up to improve our toolkits and support the community in the upcoming year. Head to [our about page](https://bpmn.io/about/) to learn more about us.


## Looking Ahead <a name="looking-ahead"></a>

Making great BPM tooling available _everywhere, for everyone_ is a mission, not a task on a checklist. Our future could not be more exciting. So what is up next?

Deep editor tooling, especially around data and FEEL language support, remains one of our core investment topics. API documentation and improved type support are two aspects that we'll tackle, too. Promised <img class="emoji" src="https://twemoji.maxcdn.com/v/13.1.0/svg/1f91e-1f3fc.svg" alt="crossed fingers">.

Further, incorporating [create/append anything](https://github.com/bpmn-io/bpmn-js-connectors-extension) into the core and strengthening modeling in [domain-specific, reusable building blocks](https://github.com/bpmn-io/element-templates) are two exciting investment topics we will tackle in 2023.

Do you want to follow along for the ride? Follow us [@bpmn_io](https://twitter.com/bpmn_io) or [`@bpmn_io@fosstodon.org`](https://fosstodon.org/@bpmn_io). Share your thoughts and feedback [in our forum](https://forum.bpmn.ion).

May a peaceful holiday season be with you! <img class="emoji" src="https://twemoji.maxcdn.com/2/svg/1f385-1f3fe.svg" alt="santa" title="Ho!"> <img class="emoji" src="https://twemoji.maxcdn.com/2/svg/1f334.svg" alt="palm tree" title="Yo!">
