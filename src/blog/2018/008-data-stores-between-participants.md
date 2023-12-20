---

title: Model Data Stores between Participants/Pools
layout: blogpost.hbs

slug: 2018-bpmn-js-2-0-0
author: Nico Rehwaldt<https://github.com/nikku>

published: 2018-05-23 10:00

releases:
  - 'bpmn-js@2.0.0'
  - 'diagram-js@2.0.0'

---


<p class="introduction">
  The latest release of our [BPMN toolkit](https://github.com/bpmn-io/bpmn-js) ships with a small but impactful change: It is now possible to model shared data stores that sit in between pools/participants. Another small under-the-hood improvement made this a new major release.
</p>

<!-- continue -->

Being able to model data stores between participants is one of the [most requested features](https://forum.bpmn.io/t/data-stores-to-share-data-in-between-processes-pools/469/18) for our BPMN toolkit. With `bpmn-js@2.0.0` we finally implemented it:

<div class="figure full-size">
  <a href="https://demo.bpmn.io">
    <img src="{{ assets }}/attachments/blog/2018/008-cast.gif">
  </a>
  <p class="caption">
    Model data stores between participants, at last!
  </p>
</div>


## Other Improvements

This release also ships with a small under-the-hood refactoring and improves the handling of labels with incomplete graphical information. Read our [changelog](https://github.com/bpmn-io/bpmn-js/blob/main/CHANGELOG.md) for details on these improvements.

Get the latest BPMN toolkit pre-packaged or as source code via [npm](https://www.npmjs.com/package/bpmn-js) or [unpkg](https://unpkg.com/bpmn-js/).