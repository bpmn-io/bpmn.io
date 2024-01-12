---

title: Full BPMN render support
layout: blogpost.hbs

slug: 2014-003-full-bpmn-render-support
author: Joerg Dotzki<https://github.com/ISO50>

published: 2014-05-23 20:00

releases:
  - 'bpmn-js'

---


<p class="introduction">
  Today we released a new version of our BPMN toolkit with complete support for BPMN 2.0 rendering.
</p>

<!-- continue -->

In the last two weeks we worked on feature completing the BPMN rendering engine.
<div style="margin: 30px 0; border-bottom: solid 1px #CCC; text-align: center">
  <img src="{{ assets }}/attachments/blog/2014/003-process.png" style="max-width: 800px; width: 100%; margin: auto" />
</div>


With activity markers and task types you are now able to express more clearly what happens in a specific task. Are tasks running in parallel or are they limited to a sequential workflow? Is it executed by a human or does a script do all the work?

If you prefer flow based over gateway based modelling you are now able to do so as we added conditional flows to our rendering engine as well.

We hope you enjoy all our improvements. If you want to see the <a href="{{ assets }}/attachments/blog/2014/003-process.bpmn">process</a>, download and open it in our bpmn viewer on <a href="http://demo.bpmn.io">demo.bpmn.io</a>.


## Next steps

After completing the basic rendering work, we will now focus more and more on the modeller. Check out our roadmap for a rough overview on where we are heading to or participate in the [planning on Git](https://github.com/bpmn-io/bpmn-js/issues/milestones).


## Final words

Anything not rendering correctly? Give us feedback via the [bpmn-js github project](https://github.com/bpmn-io/bpmn-js), directly on [demo.bpmn.io](http://demo.bpmn.io) or [via Mastodon](https://fosstodon.org/@bpmn_io).

