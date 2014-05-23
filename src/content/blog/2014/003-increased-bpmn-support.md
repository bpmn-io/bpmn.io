---

title: Full BPMN render support
layout: blogpost.hbs

slug: 2014-003-full-bpmn-render-support
author: Joerg Dotzki<https://github.com/ISO50>

published: 2014-05-23 20:00

---

<p class="introduction">
  Today we want to present you the newest features of our BPMN tool kit and give you a bit of insight into our current roadmap.
</p>

<!-- continue -->

In the last two weeks we worked on feature completing the BPMN rendering engine. That means we have completed the base work and will now start with the work on the modeller.
<div style="margin: 30px 0; border-bottom: solid 1px #CCC; text-align: center">
    <img src="{{ assets }}/img/blog/2014/003-process.png" style="max-width: 800px; width: 100%; margin: auto" />
</div>
<p>With activity markers and task types you are now able to express more clearly what happens in a specific task. Are task running in parallel or are they limited to a sequential workflow? Is it executed by a human or does a script do all the work?</p>
<p>If you prefer flow based over gateway based modelling you are now able to do so as we added conditional flows to our rendering engine as well.
</p>
We hope you enjoy all our improvements. If you want to see the <a href="{{ assets }}/bpmn/01-process.bpmn">process</a>, download and open it in our bpmn viewer on <a href="http://demo.bpmn.io">demo.bpmn.io</a>.


<h2>The Roadmap</h2>
<p>
A rough overview over our plannings is available in our published <a href="../../../roadmap">roadmap</a>.<br />
If you want more detailed information feel free to check our next planned milestones and issues on GitHub: <a href="https://github.com/bpmn-io/">bpmn-js planning</a>.
<p>


<h2>Final words</h2>
<p>Feel free to look inside the projects. It is never to early to contribute bug reports and feature requests! Note however that we are still in alpha stage. Because of that documentation may be lacking and APIs might break with future releases.</p>

