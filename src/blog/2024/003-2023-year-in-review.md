---

title: 2023 in Review
layout: blogpost.hbs

slug: 2023-year-in-review
author: Nico Rehwaldt <https://github.com/nikku>
description: "From custom form components to bpmn-js type declarations and from advancements in intelligent FEEL editing to modeling core UX improvements: This post recaps 2023, a busy, good year for bpmn.io and the community."
preview_image: assets/attachments/blog/2024/003-preview.png
url: blog/posts/2023-year-in-review.html
published: 2024-01-24 13:28
published_time: "2024-01-24T13:28:09+01:00"
modified_time: "2024-01-24T13:28:09+01:00"

releases:

---


<p class="introduction">
  From custom form components to bpmn-js type declarations and from advancements in intelligent FEEL editing to modeling core UX improvements: 2023 was indeed a busy and fruitful year for the [bpmn.io project](https://bpmn.io/) and our community. Let's take a moment to reflect on our achievements and glimpse into the near future.
</p>

<!-- continue -->


<div class="figure condensed-size">
  <img src="{{ assets }}/attachments/blog/2024/003-fireworks.gif" alt="Happy new year!">
  <p class="caption">
    Happy New Year, everyone!
  </p>
</div>


## The Year in Features

Early in 2023, we released [create/append anything](./2023-bpmn-js-11-3-0-improved-rendering-create-append-anything.html), super-powering technical and domain-specific modelers. If you check out our [BPMN toolkit](https://bpmn.io/toolkit/bpmn-js/) today, you may (or may not) notice improved BPMN support and significant UI and UX improvements.

[form-js](https://bpmn.io/toolkit/form-js/) is still a young library in bpmn.io terms, but oh did it improve! In 2023, it matured into a stable state, framework-wise, featuring [extension points for custom form elements](./2023-custom-form-components.html). Nowadays, it supports various advanced form design use cases. Thanks, of course, to the many new components and features shipped throughout the year.

A continued focus area across our toolkits is code-base modernization, improved standards compatibility, and ease of use for modeling users and those that embed our tools. Let us examine some noteworthy releases and milestones reached in 2023:

* In February, [bpmn-js@11.2.0](https://github.com/bpmn-io/bpmn-js/blob/main/CHANGELOG.md#1120) reworks element rendering and [adds create/append anything](./2023-bpmn-js-11-3-0-improved-rendering-create-append-anything.html). It took [bpmn-js@12.0.0](https://github.com/bpmn-io/bpmn-js/blob/main/CHANGELOG.md#1200) to give you back full control over what BPMN editor you want to build.
* Also in February, searchable select fields and a scalable palette component land in [form-js@0.12.0](https://github.com/bpmn-io/form-js/blob/develop/packages/form-js/CHANGELOG.md#0120).
* In March, [form-js@0.13.0](https://github.com/bpmn-io/form-js/blob/develop/packages/form-js/CHANGELOG.md#0130) ships with a flexible layout component and simple text templating.
* In April, [bpmn-js@13.0.0](https://github.com/bpmn-io/bpmn-js/blob/develop/CHANGELOG.md#1300) adds [type declarations](./2024-bpmn-js-type-declarations.html), super powering your editor tooling as you integrate the library in your applications.
* Shipped in July [form-js@1.0.0](https://github.com/bpmn-io/form-js/blob/develop/packages/form-js/CHANGELOG.md#100) marks a significant milestone with a unified API, improved theming support, and support for numerous form field customizations.
* August, among other changes, [bpmn-js@14.0.0](https://github.com/bpmn-io/bpmn-js/blob/develop/CHANGELOG.md#1400) drops [long deprecated APIs](./2023-dropping-legacy-callback-style-apis.html).
* A localized date picker and a group component ship with [form-js@1.3.0](https://github.com/bpmn-io/form-js/blob/develop/packages/form-js/CHANGELOG.md#130) in September.
* Also in September, [dmn-js v14.2.0](https://github.com/bpmn-io/dmn-js/blob/develop/packages/dmn-js/CHANGELOG.md#1430) significantly improves FEEL editing experience. Embedding our [FEEL editor](https://github.com/bpmn-io/feel-editor), you can now enjoy intelligent code completion as you create your DMN diagrams and decision tables.
* In October, [bpmn-js@14.2.0](https://github.com/bpmn-io/bpmn-js/blob/develop/CHANGELOG.md#1420) makes the spacetool local per default—a significant step to turn this powerful tool into something more predictable.
* In November releases across [our](https://github.com/bpmn-io/bpmn-js/blob/develop/CHANGELOG.md#1500) [toolkits](https://github.com/bpmn-io/dmn-js/blob/develop/packages/dmn-js/CHANGELOG.md#1470) ship a [fresh new selection outline](./2023-reworked-element-selection.html).
* Also shipped in November, [form-js@1.4.0](https://github.com/bpmn-io/form-js/blob/develop/packages/form-js/CHANGELOG.md#140) adds the [ability to create custom form fields](./2023-custom-form-components.html).
* [form-js@1.5.0](https://github.com/bpmn-io/form-js/blob/develop/packages/form-js/CHANGELOG.md#150) released in December [adds a `iframe` component](./2023-form-js-1-5-0-building-complex-forms.html) for displaying external resources inside a form.
* Quickly following up [form-js@1.6.0](https://github.com/bpmn-io/form-js/blob/develop/packages/form-js/CHANGELOG.md#160) ships table and dynamic list components as tools to conveniently [work with array data](./2024-form-js-1-6-dynamic-list-and-table.html).
* Just before the holiday season, [bpmn-js@16.3.0](https://github.com/bpmn-io/bpmn-js/blob/develop/CHANGELOG.md#1630) ships, improving modeling of compensation activities significantly.

In the larger eco-system, we made significant investments in a couple of areas:

* We expanded our FEEL editor tooling to [empower technical usage scenarios](https://nikku.github.io/talks/2023-language-tooling/). What started with an [embeddable FEEL editor](https://github.com/bpmn-io/feel-editor) is now rolled out across our editing toolkits. We expanded FEEL editing to the domain of [text templating](https://github.com/bpmn-io/feelers) and added pluggable support for [advanced code completion](https://github.com/bpmn-io/variable-resolver) for those who need it.
* Maintaining the code bases, we completed two significant projects: Migrating our build tools to Node@20 and moving from the `master` to the `main` branch. At the same time, we continue our journey to make our code-base future-proof by slowly transitioning to [ES modules](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/).
* We continued to refresh our toolkit UX foundations,  adding an optional [grid](https://github.com/bpmn-io/diagram-js-grid), fine-tuning existing rendering, and refining element selection.
* We incorporated several new rules to [bpmnlint](https://github.com/bpmn-io/bpmnlint) to help our users build understandable BPMN diagrams. Related (and doing the impossible), [token simulation](https://github.com/bpmn-io/bpmn-js-token-simulation) can now execute the OR gateway <img class="emoji" src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f643.svg" alt="upside down smiley face" title=":)">.

We cut more than 120 releases (more than 60 being actual feature releases) in [over 37 libraries](https://github.com/bpmn-io). To communicate the new and noteworthy in our eco-system, we published [eleven blog posts](https://bpmn.io/blog/) and sent out [numerous tweets and toots](https://fosstodon.org/@bpmn_io).


## The Year in Numbers

Similar to [previous](./2021-year-in-review.html) [years](./2022-year-in-review.html), interest in our projects and toolkits increased substantially.
More people visited [our project website](https://bpmn.io/) and starred our projects on [GitHub](https://github.com/bpmn-io). Again, we saw a little drop in [forum questions](https://forum.bpmn.io/). Has everything been answered (yet)?

<div class="figure no-border condensed-size" style="margin: 50px 0 40px 0; text-align: center">
  <img src="{{ assets }}/attachments/blog/2024/003-stats.png" alt="Some project statistics" >
  <p class="caption" style="margin-top: 10px">
    2023 in numbers (with percentages compared to 2022).
  </p>
</div>

Despite tons of new features, the bpmn-js bundle stayed more or less constant—a good sign in our current [bloat economy](https://bundlephobia.com/). [Roll your own BPMN editor](https://github.com/bpmn-io/bpmn-js/pull/1252), pick only needed components, and see that number shrink.


## The Year as a Collaborative Effort

Over the year, we received a whooping number of 87 community contributions. Noteworthy ones improved our internationalization and accessibility, added or fixed type definitions, or contributed features to extend our BPMN support. But let us not forget the numerous bug reports and smaller fixes folks contributed in 2023.

Today, we are working on bpmn.io with a stable group of seven developers split across two teams. It is an excellent setup to improve our toolkits and support the community in the upcoming year. Head to [our about page](https://bpmn.io/about/) to learn more about us.


## Looking Ahead <a name="looking-ahead"></a>

Making great BPM tooling available _everywhere, for everyone_ is a mission, not a task on a checklist - it guides us and extends to [everything we do](./2023-the-case-for-bpmn-token-simulation.html). So, what is up next on our path?

For what we can spoil, we will further invest in intelligent editor tooling, both within the modeling and implementation space, with an emphasis on guidance and modeling in [domain-specific, reusable building blocks](https://github.com/bpmn-io/element-templates). We will also continue to super-power those acknowledging forms as the language of human task orchestration.

Do you want to join us for the ride? Follow us [on Mastodon](https://fosstodon.org/@bpmn_io), share your thoughts and feedback [in our forum](https://forum.bpmn.ion), or subscribe to our website updates via old school [RSS](https://rss.com/blog/how-do-rss-feeds-work/).

We hope you had a great 2023, and we'll see you again in 2024! <img class="emoji" src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f385-1f3fe.svg" alt="Santa" title="Ho!"> <img class="emoji" src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f334.svg" alt="palm tree" title="Yo!">
