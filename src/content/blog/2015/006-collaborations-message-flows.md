---

title: Model BPMN Collaboration Diagrams
layout: blogpost.hbs

slug: 2015-bpmn-collaboration-diagrams
author: Nico Rehwaldt<https://github.com/nikku>

published: 2015-05-13 14:00

---

<p class="introduction">
  Today we release a new version of [our bpmn toolkit](https://github.com/bpmn-io/bpmn-js) that focuses on collaboration modeling. The new modeler allows you to create participants and message flows.
  With the space and lasso tools it offers two new helpers that support you in building and
  maintaining larger BPMN diagrams. The release improves the modelers user feedback as well as error handling.
</p>

<!-- continue -->


The new version of [bpmn-js](https://github.com/bpmn-io/bpmn-js) released today allows you to create participants (pools) and message flows and thus allows you to build complex collaboration diagrams. It comes baked in with a number of convenient features including automatic process to participant conversion, participant alignment / snapping, message flow layouting and more.

<div style="margin: 30px 0; text-align: center">
  <img style="box-shadow: 0px 2px 6px 2px #C2C2C2; max-width: 80%" src="{{ assets }}/attachments/blog/2015/006-participant-modeling.gif">
</div>

On top of that we added new modeling tools and improved the modeling interaction, feedback and error handling of the BPMN modeler. Try out the changes [yourself](http://demo.bpmn.io).


## Modeling Helpers

We added two new tools to the modeler that help you creating and maintaining larger BPMN diagrams: The space and lasso tools.


### Space Tool

The space tool allows you to create or remove space both horizontally and vertically in a diagram. It can be activated via palette or by pressing `s` on the keyboard. If you would like to remove space instead of creating it use the `CTRL` modifier (`ALT` on Mac) during initialization.

<div style="margin: 30px 0; text-align: center">
  <img style="box-shadow: 0px 2px 6px 2px #C2C2C2; max-width: 90%" src="{{ assets }}/attachments/blog/2015/006-space-tool.gif">
</div>


### Lasso Tool

The __lasso__ allows you to easily select a number of diagram elements. You can then proceed to move or delete (try `DEL` on your keyboard) the elements. Activate the lasso tool from the palette, by pressing `l` on your keyboard or via `CTRL` + drag using the mouse.

<div style="margin: 30px 0; text-align: center">
  <img style="box-shadow: 0px 2px 6px 2px #C2C2C2; max-width: 90%" src="{{ assets }}/attachments/blog/2015/006-multi-select-tool.gif">
</div>


## Better Feedback

WIth collaborations we added a number of modeling rules. These are required to ensure that diagrams are semantically correct BPMN. To better transport these rules to the user the modeler now displays an explaination whenever he violates one of the more often forgotten rules.

<div style="margin: 30px 0; text-align: center">
  <img style="box-shadow: 0px 2px 6px 2px #C2C2C2; max-width: 90%" src="{{ assets }}/attachments/blog/2015/006-feedback.gif">
</div>

_Tip:_ Hover over the explaination and it will stay up longer.

In addition the the features above this release fixes a vast amount of minor modeling and rendering bugs.
Check out the [change log](https://github.com/bpmn-io/bpmn-js/compare/v0.9.2...v0.10.0) for all the details.


## Wrapping up

Please give us feedback on the latest modeler updates [our forums](https://forum.bpmn.io) or [Twitter](https://twitter.com/bpmn_io)! We have a number of interesting topics on [our roadmap](http://bpmn.io/roadmap). These topics include enhancing our [offline modeler](https://github.com/bpmn-io/bpmn-io-chrome), boundary events and lane support. Stay tuned for exciting updates in the near future.

As always, fetch the latest version of bpmn-js via [npm](http://npmjs.org/bpmn-js) or [bower](https://github.com/bpmn-io/bower-bpmn-js).

Happy collaboration modeling!