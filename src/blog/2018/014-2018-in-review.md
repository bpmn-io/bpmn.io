---

title: 2018 in Review
layout: blogpost.hbs

slug: 2018-year-in-review
author: Nico Rehwaldt <https://github.com/nikku>

published: 2018-12-19 11:00

releases:

---


<p class="introduction">
  For our project, 2018 was a year of significant modeling improvements, library rewrites, refactorings, and increased popularity.
  With the end of the year quickly approaching, let us take a look at this year's accomplishments and the near future.
</p>

<!-- continue -->


<div class="figure condensed-size">
  <img src="{{ assets }}/attachments/blog/2018/014-christmas-tree.gif" alt="Merry Christmas to whom it may concern!" style="border-color: #489d1273">
  <p class="caption">
    It is that time of the year again!
  </p>
</div>


## The Year in Features

Looking at the year from the feature perspective a few aspects are worth highlighting:

* Beginning of 2018 we [dropped our existing Bower distributions](https://bpmn.io/blog/posts/2018-bpmn-js-0-27.html) in favor of pre-packaged and CDN distributed version of bpmn-js. As a result, users are now able to integrate pre-packaged variants of our modelers/viewers with a single script include. Along with new HTML only starters, this resulted in a much-improved getting started experience for new users. (Later on, we rolled out that change across all our toolkits).

* In the first quarter of 2018, we completed the full rewrite of [DMN toolkit](https://github.com/bpmn-io/dmn-js) with a focus on usability and performance. The modernized foundation fully supports the [multi-view characteristics](https://github.com/bpmn-io/dmn-js-examples/tree/master/modeler) of DMN diagrams and offers us the solid foundations for future DMN editing improvements. Read the [release blog post](https://bpmn.io/blog/posts/2018-dmn-js-4-0-0.html) to recapture the rationale behind the changes.

* Mid-year we undertook a larger refactoring to port the majority of our code base to [ES modules](http://exploringjs.com/es6/ch_modules.html#sec_basics-of-es6-modules). Building upon the first and only standardized JavaScript module system allows users of our libraries to bundle them more efficiently. By employing techniques such as _tree-shaking_ library consumers are now able to further cut down bundle sizes, keeping only the bits that are actually used (cf. [accompanying blog post](https://bpmn.io/blog/posts/2018-migrating-to-es-modules.html)).

* We rolled out semantic change logs across all our libraries, making it easier to track which improvements (and breaking changes) new releases ship with.

* [bpmn-js](https://github.com/bpmn-io/bpmn-js), our flagship BPMN modeling library, saw various improvements across the year, ranging from [much-requested modeling features](https://bpmn.io/blog/posts/2018-bpmn-js-2-0-0.html) to [theming support](https://bpmn.io/blog/posts/2018-bpmn-js-2-1-0.html), [diagram interaction, and modeling convenience enhancements](https://bpmn.io/blog/posts/2018-bpmn-js-0-26.html). Three major releases in 2018 overhauled many parts of the libraries inner workings, too.

* [bpmnlint](https://github.com/bpmn-io/bpmnlint), a new side project, sketches our solution for configurable, extensible diagram validation that helps everyone to build even better, easier to understand diagrams. Give it a try via the [bpmnlint-playground](https://github.com/bpmn-io/bpmnlint-playground) and give us feedback, if you missed the opportunity until now!

Often times significant work happened in one of the many underlying libraries supporting our diagram toolkits/editors. As an example we [published twelve releases](https://github.com/bpmn-io/bpmn-moddle/blob/master/CHANGELOG.md) in [bpmn-moddle](https://github.com/bpmn-io/bpmn-moddle), each improving the way our BPMN modeler consumes and exports BPMN 2.0 diagrams.

Altogether we cut more than 75 releases (40 being actual feature releases) in [over 20 libraries](https://github.com/bpmn-io) and wrote
[twelve blog posts](https://bpmn.io/blog/) to communicate the new and noteworthy in our ecosystem.



## The Year in Numbers

Looking at 2018 in numbers it is hard to ignore the increased interest in our project.
Significantly more new people visited [our project website](https://bpmn.io/), asked for help and contributed to [our forum](https://forum.bpmn.io/) and starred our projects on [GitHub](https://github.com/bpmn-io). As a result of increased popularity, more people than ever contributed their extensions and gave valuable feedback on improving, embedding as well as extending our libraries.

<div class="figure no-border condensed-size" style="margin: 50px 0 40px 0">
  <img src="{{ assets }}/attachments/blog/2018/014-stats.png" alt="Some project statistics">
  <p class="caption" style="margin-top: 10px">
    2018 in numbers (with percentages compared to 2017).
  </p>
</div>

Crawling our stats we found one interesting number that dwindled, too:
Despite many features added over the year our BPMN modeler it is actually lighter now than it was at the end of 2017. Good news in times of [bundle phobia](https://bundlephobia.com) and rising bandwidth awareness!


## The Year as a Collaborative Effort

With two new people onboarded in 2018, we are now back at a respectable size of 3,5 full-time developers, dedicated to working on our toolkits as well as the [Camunda Modeler](https://github.com/camunda/camunda-modeler).

We realize that our libraries are in a good shape now. This, however, does not mean we completed our mission to offer great BPMN, CMMN and DMN tooling that is accessible to everyone. Your feedback helps us realize that there exists [significant room](https://github.com/bpmn-io/bpmn-js/issues?q=is%3Aopen+is%3Aissue+label%3Aenhancement) for future improvements across all our tools.


## The Future is Now

So what is up in 2019? For the first quarter we set out to carry out the following:

* [Support BPMN Groups](https://github.com/bpmn-io/bpmn-js/issues/343) and make it [even easier/more intuitive](https://github.com/bpmn-io/bpmn-js/issues/478) to model BPMN diagrams with intermediate / boundary events.

* Better understand the integrator/developer journey and give you improved guidance on how to integrate and extend our libraries.

Share your thoughts and feedback [in our forum](https://forum.bpmn.io/) or [@bpmn_io](https://twitter.com/bpmn_io) and stick with us for updates on our _just great_ modeling mission in 2019.

May a peaceful holiday season be with you! <img class="emoji" src="https://twemoji.maxcdn.com/2/svg/1f385-1f3fe.svg" alt="santa" title="Ho!"> <img class="emoji" src="https://twemoji.maxcdn.com/2/svg/1f334.svg" alt="palm tree" title="Yo!">