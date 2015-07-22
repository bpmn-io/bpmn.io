---

title: BPMN 2.0 Modeling Revamped
layout: blogpost_fooled.hbs

slug: 2015-modeling-revamped
author: Nico Rehwaldt<https://github.com/nikku>

published: 2015-04-01 14:00

---

<p class="introduction">
  Good user interaction is a basis for a solid modeling experience. This post introduces a new way to model BPMN 2.0 with [bpmn-js](https://github.com/bpmn-io/bpmn-js). It unleashes the full complexity of the BPMN 2.0 specification onto users while going back to simplicity in the little things.
</p>

<!-- continue -->


We are proud to say we listened to our users. As a result we overhauled some of the basic mechanics behind our BPMN 2.0 modeling interaction. Have a look yourself:

<div class="figure">
  <img  src="{{ assets }}/attachments/blog/2015/005-new-modeling.gif">
</div>

The new layout adresses two issues: access to BPMN 2.0 elements and confusion about the context pad.


## Quick access to BPMN 2.0 symbols from the palette

The new user interface gives users access to __all__ BPMN 2.0 elements, __all the time__. This allows you to be more precise about what to model. It helps you to learn about various available BPMN 2.0 elements quicker, too.


<div style="margin: 30px 10px; text-align: center">

  <div>
    <img style="box-shadow: 0px 2px 6px 2px #C2C2C2; max-width: 90%; margin: 0 20px;" src="{{ assets }}/attachments/blog/2015/005-palette-old.png">
    <img style="box-shadow: 0px 2px 6px 2px #C2C2C2; max-width: 90%; margin: 0 20px;" src="{{ assets }}/attachments/blog/2015/005-palette-new.png">
  </div>

  <p style="margin-top: 20px">
    Old palette (left) and the new, reworked version (right).
  </p>
</div>


## Simpler context pad

Initially we thought that a context pad, i.e., a number of action buttons next to a modeled element was a good idea.
Over time, however, the number of actions in the context pad grew and it became a fiddly, hard to understand collection of symbols.
We realised it is about simplification in the little details. That is why we got rid of the append element actions as well as the trash bin. The new context pad should be dead simple to handle, once again.

<div style="margin: 30px 10px; text-align: center">

  <div>
    <img style="box-shadow: 0px 2px 6px 2px #C2C2C2; max-width: 90%; margin: 0 20px;" src="{{ assets }}/attachments/blog/2015/005-context-pad-old.png">
    <img style="box-shadow: 0px 2px 6px 2px #C2C2C2; max-width: 90%; margin: 0 20px;" src="{{ assets }}/attachments/blog/2015/005-context-pad-new.png">
  </div>

  <p style="margin-top: 20px">
    Old context pad (left) and the new, simplified version (right).
  </p>
</div>


## Feedback wanted

We are excited about the upcoming user interface changes and see them as a first step towards building a really awesome BPMN 2.0 modeling tool. How do you feel about them though? Is there anything you particularily like or dislike about the new UI?

We are open to your feedback via [Twitter](https://twitter.com/bpmn_io) and [our forums](https://forum.bpmn.io).


PS: You want to try out the new user interface yourself? It is [in our code base already](https://github.com/bpmn-io/bpmn-js/tree/new-ui).