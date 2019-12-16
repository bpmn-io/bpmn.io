---

title: 2019 in Review
layout: blogpost.hbs

slug: 2019-year-in-review
author: Nico Rehwaldt <https://github.com/nikku>

published: 2019-12-17 12:00

releases:

---


<p class="introduction">
  For our project, 2019 was a year of significant modeling UX improvements. Great times to look back at what we have accomplished! Good times to take a small glimpse into the near 2020 future, too.
</p>

<!-- continue -->


<div class="figure condensed-size">
  <img src="{{ assets }}/attachments/blog/2018/014-christmas-tree.gif" alt="Merry Christmas to whom it may concern!" style="border-color: #489d1273">
  <p class="caption">
    It is that time of the year again!
  </p>
</div>


## The Year in Features

Inspired by the [GitHub papercuts project](https://github.blog/2018-08-28-announcing-paper-cuts/), we sat down at the beginning of the year to review the small things our users report to us regularly. What are the issues that most people come across when they use our tools? Which little interaction nuances require you to learn more about our supported modeling standards that you should? What keeps you from freely changing your diagrams, as they evolve? Which bigger issues force you to work around our tools rather than work with them, intuitively?

Equipped with a plan, we reworked substantial parts of the core modeling experience over the year. Let us look into the features implemented, tracked along with the bigger releases we shipped:

* [Released in June](./2019-bpmn-js-3-4-0.html), `bpmn-js@3.4` ships with significant connection layout improvements
* [Released in July](./2019-bpmn-js-4-0-0.html), `bpmn-js@4` adds grid snapping, connect previews, attachable/detachable events as well as support for modeling BPMN groups
* [Released in August](./2019-bpmn-js-5-0-0.html), `bpmn-js@5` ships with improved container navigation and a more powerful than ever two-step copy and paste mechanism
* [Released in December](./2019-bpmn-js-6-dmn-js-7-2.html), `bpmn-js@6` adds connect from/to anywhere and horizontal/vertical resize handles
* [Also released in December](./2019-bpmn-js-6-dmn-js-7-2.html), `dmn-js@7.2` incorporates substantial bits of the reworked core modeling experience

Outside the feature department, we reworked our [existing examples](https://github.com/bpmn-io/bpmn-js-examples) to answer common usage related questions better. Customizing is one of the most frequently asked for use cases for our BPMN editing toolkit. So we went the extra mile and reworked our existing customization examples. Now, a [series of reworked customization examples](https://github.com/bpmn-io/bpmn-js-examples/tree/master/custom-elements) showcase the capabilities of our tools.

Significant work happened in one of the many underlying libraries that support our editing ecosystem. As an example, we [published 35 releases](https://www.npmjs.com/package/diagram-js?activeTab=versions) of [diagram-js](https://github.com/bpmn-io/diagram-js/blob/develop/CHANGELOG.md), each improving the way our core modeling UX works.

We cut more than 90 releases (more than 35 being actual feature releases) in [over 25 libraries](https://github.com/bpmn-io). To communicate the new and noteworthy in our ecosystem, we published [seven blog posts](https://bpmn.io/blog/).


## The Year in Numbers

[Similar to 2018](./2018-year-in-review.html), we see another significant increase in interest in our project and toolkits.
Significantly more new people visited [our project website](https://bpmn.io/), asked for help, and contributed to [our forum](https://forum.bpmn.io/) and starred our projects on [GitHub](https://github.com/bpmn-io). Community work led to several contributions, too, such as [support for rendering multiple BPMN diagrams](./2019-bpmn-js-3-4-0.html#multiple-bpmn-diagrams-support) or [internationalization of our DMN decision table editor](https://github.com/bpmn-io/dmn-js/issues/434).

<div class="figure no-border condensed-size" style="margin: 50px 0 40px 0; text-align: center">
  <img src="{{ assets }}/attachments/blog/2019/009-stats.png" alt="Some project statistics" style="max-width: 720px">
  <p class="caption" style="margin-top: 10px">
    2019 in numbers (with percentages compared to 2018).
  </p>
</div>

Newly implemented features paid its toll on our toolkits bundle sizes. Grid snapping and other modeling UX improvements increased the BPMN modeler's bundle size by seven percent. If you'd like that number to shrink, [roll your own, minimal BPMN editor](https://github.com/bpmn-io/bpmn-js/pull/1252).


## The Year as a Collaborative Effort

With one more person on board in 2019, we are now at a respectable size of five full-time developers, dedicated to working on our toolkits as well as the core Camunda modeling apps. Head over to [our about page](https://bpmn.io/about/) to learn more about us.


## The Future is Now

Our tooling is in good shape now. However, that does not mean we completed our mission to offer great BPMN, CMMN, and DMN tooling that is accessible to everyone.

So what is up next? In the first quarter of 2020, we focus on [dmn-js](https://github.com/bpmn-io/dmn-js), our DMN editor and rendering toolkit:

* [Support the latest DMN standard](https://github.com/bpmn-io/dmn-js/issues/409).

* Explore ways to make it easier to navigate and model complex DMN diagrams.

Look forward to more, substantial updates of our BPMN as well as DMN (all editors) toolkits.

Share your thoughts and feedback [in our forum](https://forum.bpmn.io/) or [@bpmn_io](https://twitter.com/bpmn_io) and stick with us for updates on our _just great_ modeling mission in 2020.

May a peaceful holiday season be with you! <img class="emoji" src="https://twemoji.maxcdn.com/2/svg/1f385-1f3fe.svg" alt="santa" title="Ho!"> <img class="emoji" src="https://twemoji.maxcdn.com/2/svg/1f334.svg" alt="palm tree" title="Yo!">