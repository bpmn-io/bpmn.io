---

title: Element Replacement and Forgiveness
layout: blogpost.hbs

slug: 2015-element-replacement-and-forgiveness
author: Nico Rehwaldt<https://github.com/nikku>

published: 2015-03-13 14:00

---


<p class="introduction">
  Todays release of [our BPMN toolkit](https://github.com/bpmn-io/bpmn-js) ships with a big modeling update. The modeler now allows you to change the type of a BPMN element in place from the elements context pad. The release brings massive improvements in the handling of malformed BPMN diagrams. Last but not least it allows you to extend our toolkit to recognize custom BPMN 2.0 vendor extensions.
</p>

<!-- continue -->


Todays [bpmn-js](https://github.com/bpmn-io/bpmn-js) release brings us one step closer to complete BPMN 2.0 support in our modeler. Via the context pad of an element it is now possible to change the type of activities, gateways and events. The replace action respects BPMN specific connection rules and is fully un- and redoable.

<div class="figure">
  <a href="http://demo.bpmn.io/new">
    <img src="{{ assets }}/attachments/blog/2015/004-replace.gif">
  </a>
</div>

Try out the new replace feature yourself in our [live demo](http://demo.bpmn.io/new).


## Better error handling on diagram open

BPMN 2.0 XML, BPMN's interchange format is a complex beast and creating it properly can be tough. The more important it is for a BPMN toolkit to be lenient with all the BPMN 2.0 XML files out there.

With this release we improved bpmn-js ability to handle malformed process diagrams by magnitudes. The latest version of our toolkit will not fail on most read errors but instead propagate them as warnings. This allows you to handle these problems in a graceful manner.

```javascript
bpmnjs.importXML(someXML, function(err, warnings) {
  if (err) {
    console.error('something went seriously wrong', err);
  }

  console.log(warnings); // [ { message: 'unparsable content <...>' }, ... ]
});
```

Our [demo application](http://demo.bpmn.io) shows graceful error handling in action. It displays an alert, notifying the users about possible import problems. Upon request it displays a detailed listing of all the problems that have been found during the import.

<div class="figure">
  <a href="http://demo.bpmn.io/">
    <img src="{{ assets }}/attachments/blog/2015/004-import-warnings.png">
  </a>
</div>

Feel free to report any BPMN diagram import issues in our [project forum](https://forum.bpmn.io).


## More BPMN symbols

While implementing the replace feature we updated our [BPMN font](https://github.com/bpmn-io/bpmn-js) with lots of new BPMN glyphs.

<div class="figure">
  <a href="https://github.com/bpmn-io/bpmn-font">
    <img src="{{ assets }}/attachments/blog/2015/004-bpmn-font.png">
  </a>
</div>

Try out the font if your style of writing is BPMN.


## Custom meta-model extensions

It is now possible to extend bpmn-js with type information about your BPMN 2.0 XML vendor extensions. Once extended, bpmn-js will read and validate your extension while importing process diagrams. Tooling can pick up the information later to display tooltips or attach additional vendor specific data to BPMN diagrams during modeling.

Have a look into our [examples repository](https://github.com/bpmn-io/bpmn-js-examples) for a [detailed example](https://github.com/bpmn-io/bpmn-js-examples/tree/master/custom-meta-model) that showcases this feature in action.


## Wrapping up

The community hero of this release is [Sebastian](https://github.com/SebastianStamm), a friend over at [camunda BPM](https://camunda.org). He reported and fixed quite a number of bugs and verified that our bpmn viewer actually runs on Internet Explorer 9, too. Cheerio to him!

As always, fetch the latest version of bpmn-js via [npm](https://www.npmjs.org/package/bpmn-js) or [bower](https://github.com/bpmn-io/bower-bpmn-js). Make sure to try out our new modeling and toolkit changes.

Happy BPMN modeling!