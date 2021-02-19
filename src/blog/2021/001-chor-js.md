---

title: chor-js – an Editor for BPMN Choreography Diagrams
layout: blogpost.hbs

slug: 2021-chor-js-an-editor-for-bpmn-choreography-diagrams
author: Jan Ladleif <https://github.com/jan-ladleif> and Anton von Weltzien <https://github.com/yT0n1>

published: 2021-02-19 12:00


---

<p class="introduction">
  Let’s say you are craving your favorite pizza from that pizza place a ten-minute walk away. You call them up, place your order, and are then asked whether you would like to have the pizza delivered or pick it up yourself. In your mind, you think about how convenient it would be to have a delivery driver knock on your door and hand you the pizza within half an hour or so, but then again it is only a short walk, and some fresh air would really do you good…
</p>

<!-- continue -->

Putting somewhat existential questions aside, what we just described is a prime example for a so-called choreography in Business Process Management. Different participants (you, the pizza place and the delivery driver) communicate in a certain choreographed fashion to achieve a common goal: In this case to sell a pizza for the monetary benefit of the pizza place and driver, and the culinary benefit of yourself. The communication is usually limited to simple message and information exchanges only, and no participant cares too much about the private actions or ponderings of the others as long as the goal is eventually reached. [chor-js](https://github.com/bptlab/chor-js) was made to let you model such choreographies. [Click here]( https://bpt-lab.org/chor-js-demo/) to try it out.


We did not invent our own type of modeling language, though. Instead, chor-js is a faithful implementation of BPMN choreography diagrams and the figure above shows an example. If you have never heard of or seen one of them before, don’t worry. In comparison to BPMN’s much more common process and collaboration diagrams, which are the focus of bpmn-js, choreography diagrams have remained somewhat obscure. You may find them in some BPMN tools, but they are rarely properly supported and some feature is seemingly always missing [1]. Which begs the question: Why do we bother now, almost exactly ten years after choreography diagrams were first introduced to the BPMN standard?

We come from a research world and, in research, choreographies have enjoyed a resurgence in the last few years. In particular, they are a core aspect of Jan’s PhD project on smart contract modeling, which required an easy-to-use and extensible choreography diagram editor that is true to the BPMN standard—much like bpmn-js. And thus, chor-js was born as a direct extension to bpmn-js making use of the great open-source community behind it.


<div class="figure">
  <img src="{{ assets }}/attachments/blog/2021/001_01-choreography-model.png">
</div>

In Part I of this article, we will introduce you to some features of BPMN choreography diagrams, and how we crafted chor-js to let you model them in a nice and intuitive fashion. In Part II we then dive deeper into several challenges which we faced while developing chor-js, both from a conceptual (What does the standard actually say?) as well as from a technological perspective (How do we even begin to implement this?).

Oh, and if you want to know why chor-js was presented in a nice hotel lobby in sunny Salvador, Brazil, (see the photograph above) be sure to read to the end. There we wrap up our development journey, talk about the scientific impact of chor-js, and what our plans for the future are.

<div class="figure">
  <img src="{{ assets }}/attachments/blog/2021/001_02-roll-up.jpg">
</div>

## Part I: How to model choreography diagrams with chor-js
If you look at the example choreography diagram above, you may recognize some elements from process or collaboration diagrams. While their meaning is sometimes slightly different in the context of choreography diagrams, start and end events, the timer event, or the gateways largely behave the same as in process diagrams. The major additions are choreography activities — those rounded rectangles with the occasional message attached to them. There are different concrete types, but for the sake of brevity we will only look at one in detail in this article: choreography tasks.

<div class="figure">
  <img src="{{ assets }}/attachments/blog/2021/001_03-choreography-tasks.png">
</div>

Each choreography task represents an atomic message exchange between two participants. One participant is the initiator and initially sends the message. The other is the receiver who may optionally send a reply message as part of the exchange. The participants are attached to the choreography task in a participant band, which are white for the initiator and gray for receivers. Messages may be attached to the tasks as well, using the familiar envelope element. For the moment, this is all you need to know—some of the more nitty-gritty details will follow further down.

The level of abstraction that can be achieved is significant: A process modeler does not need to worry about the exact internal behavior of each participant, exception paths, or other low-level features of BPMN. Instead, a choreography diagram constitutes a kind of contract specification, in which the obligations of each participant are modeled without disclosing internal information.

While chor-js inherits and adapts most of its editor tools directly from bpmn-js, choreography diagrams have some very distinct features that required us to build new ways of interacting with them. Most of these features concern the handling of participant bands, like moving them up or down and adding or removing messages.

<div class="figure" id="left">
	<style type="text/css" scoped>
		#left { float: left; } 
	</style>
  <img src="{{ assets }}/attachments/blog/2021/001_01-ordering-and-handling-participant-bands.gif" alt="Ordering and handeling participant bands">
  <p class="caption">
    ordering and handling participant bands
  </p>
</div>

<div class="figure" id="right">
	<style type="text/css" scoped>
		#right { float: right; } 
	</style>
  <img src="{{ assets }}/attachments/blog/2021/001_02-creating-hiding-changing-messages.gif" alt="Creating, hiding and changing messages">
  <p class="caption">
    Creating, hiding and changing messages
  </p>
</div>

One choreography model file can hold multiple diagrams and you can easily create and switch between them in a menu bar at the top of the editor. This is used for one of the more advanced features of choreography diagrams: call choreographies. Reusable choreography snippets can then be linked from other diagrams, similar to how call activities are used in process diagrams.

Finally, we also created a validator plugin that helps you keep track of all the constraints choreographies bring with them. For example, much like you would not just go to your pizza place and grab the first pizza you see without having ordered one, there are certain rules as to how choreography tasks must be ordered. This leads to the infamous “the initiator of a choreography task needs to be involved in the previous task” constraint, which the validator helps you check.

<div class="figure" id="left">
	<style type="text/css" scoped>
		#left { float: left; } 
	</style>
  <img src="{{ assets }}/attachments/blog/2021/001_03-linking-call-choreography.gif" alt="Linking call choreography">
  <p class="caption">
    Linking call choreography
  </p>
</div>

<div class="figure" id="right">
	<style type="text/css" scoped>
		#right { float: right; } 
	</style>
  <img src="{{ assets }}/attachments/blog/2021/001_04-visual-validation-tool.gif" alt="Visual validation tool">
  <p class="caption">
    Visual validation toll
  </p>
</div>



## Part II: How did we do it? Where did we struggle?

Choreography diagrams and process diagrams are not only both part of the BPMN standard, they are also closely related. Most elements like events, gateways, and sequence flows are reused and behave very similarly to their process counterparts. Thus, it seemed reasonable for us to build on top of bpmn-js by reusing large parts of the rules, excluding elements unavailable for choreographies and adding choreography specific elements. For the latter, the only real addition are choreography activities—and what an impact they have.

## 1-to-1 becomes 1-to-n in the diagram interchange

By far the biggest issue we have encountered throughout development concerns one seemingly innocuous specialty of choreography diagrams that requires us to look at the so-called BPMN diagram interchange (DI). The DI is a separate layer in the BPMN metamodel and contains purely visual presentation information such as the position of activities, the waypoints of sequence flows and more fun stuff like colors. Below is a very small BPMN model showing how the resulting XML may look like:

```XML
<?xml version="1.0" encoding="UTF-8"?>
<bpmn:definitions>
  <bpmn:process id="foo">
    <bpmn:task id="bar" name="Something with pizza" />
  </bpmn:process>
  <bpmndi:BPMNDiagram id="Diagram">
    <bpmndi:BPMNPlane id="foo_di" bpmnElement="foo">
      <bpmndi:BPMNShape id="bar_di" bpmnElement="bar" bioc:fill="green">
        <dc:Bounds x="170" y="80" width="100" height="80" />
      </bpmndi:BPMNShape>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</bpmn:definitions>
```

The bpmn-js and chor-js renderers use this information to display your diagrams. How this usually works is simple: Each shape in the editor represents one semantic BPMN model element, the “businessObject”, for example the task with the ID “bar” in the XML. To render this task, we look for the corresponding DI element, in this case the BPMNShape which references “bar” as its “bpmnElement”. To avoid having to search the entire document each time this is done, bpmn-js adds a reference from each model element to its linked DI during import, resulting in the 1-to-1 mapping between shape and DI shown in the left part of the figure below.

<div class="figure">
  <img src="{{ assets }}/attachments/blog/2021/001_04-1-to-1-mapping-architecture.png">
</div>

However, to the best of our knowledge there is exactly one instance where the BPMN standard deviates from this 1-to-1 mapping — unfortunately that is for the participant bands attached to choreography activities.

In collaboration diagrams, a participant is rendered as a big rectangle, a so-called pool containing a process diagram. There is exactly one pool per participant. In choreography diagrams, however, the same participant may be found arbitrarily often. If you look again at the pizza scenario below, “Pizza Place” makes a total of five appearances. For each appearance, a participant band needs to be rendered—and thus, each appearance has its own DI element despite there only being one participant business object, resulting in a 1-to-n mapping.

<div class="figure">
  <img src="{{ assets }}/attachments/blog/2021/001_05-choreography-model.png">
</div>

While the regular bpmn-js importer would link some DI element to a participant, you could never be sure which band it was, as illustrated in the right side of the figure above. We eventually settled on writing our own importer, which sets up an additional “diBand” reference from each participant band shape directly. The amount of things this breaks is astounding, not least since handling participants and their pools has so much code and logic attached to it in bpmn-js in the first place. Consequently, we often had to overwrite certain bpmn-js features—luckily for us, bpmn-js and its parent project diagram-js are very easy to extend.

## Extending bpmn-js and its interfaces

bpmn-js and diagram-js use an event-based architecture and a very extensible command system. Consequently, it is quite simple to intercept existing commands and add custom behavior. We use that, for example, to make the regular logic for deleting shapes aware of the new “diBand” reference. The snippet below shows a part of this extension:


```JavaScript
this.executed('shape.delete', function(event) {
  let context = event.context;
  let shape = context.shape;
  if (is(shape, 'bpmn:Participant')) {
    // unlink the DI object of the band
    context.oldDiBand = shape.diBand;
    let choreo = canvas.getRootElement().businessObject;
    let bpmnDiagram = choreo.di;
    context.oldDiBandIndex =
      removeAndGetIndex(bpmnDiagram.get('planeElement'), shape.diBand);
  }
});
```

Basically, we intercept the regular “shape.delete” command by listening to the associated “executed” event. If we find that a participant band is to be deleted, we remove the DI element manually and enrich the context with information for a possible revert operation.

For some features we planned, extending existing logic was not enough and we had to create custom features. Especially handling participant bands and messages calls for novel tools and interactions. In the screenshot below you see can see some of the results as they appear in chor-js: The context menu of participant bands yields tools to move the band up (and down again), make the band the initiating one, hide and unhide the attached message and swap and create the attached participant. On a side note, we also created custom icons in the style of bpmn-js for all our additions.

<div class="figure">
  <img src="{{ assets }}/attachments/blog/2021/001_06-context-menu.png">
</div>

Unfortunately, we do not have the space to talk about each and every extension and feature we implemented, but if you browse through the [repository](https://github.com/bptlab/chor-js) you will certainly find some interesting techniques and insights, which may even help you with your own projects.

## About the standard, or why there are no boundary events

While exploring the BPMN standard on a level detailed enough to implement chor-js, we often ran into minor and, sometimes, major roadblocks. Such obstacles are to be expected in a standard as large and complex, and often they disappeared on their own after some meditation. This was not always the case, however.

In one instance, the obstacle was rather mundane: a typo. There is a bit of confusion in the standard regarding the correct name for the reference of a choreography activity to its participants. In the standard text and the CMOF version of the metamodel “participantRefs” seems to be the preferred way, but the XSD version of the metamodel and most existing tools actually use “participantRef”. In an effort to keep the fronts united, we [reached out](https://github.com/bpmn-io/bpmn-moddle/issues/59) to the nice folks at bpmn-io on GitHub and submitted a pull request that adapted bpmn-moddle to the s-less version in line with other vendors.

Not all issues could be fixed by just correcting a typo, though. Some things seem to have slipped under the radar entirely when the BPMN metamodel was conceived. One of them concerns boundary events. While the standard goes into much length as to which boundary events are allowed in choreography diagrams, one thing is missing: a way to connect said events in a model. The figure below shows a tiny excerpt from the BPMN metamodel.

<div class="figure">
  <img src="{{ assets }}/attachments/blog/2021/001_07-extract-BPMN-metamodel.png">
</div>

This view makes it rather obvious: An instance of bpmn:BoundaryEvent can only be attached to a bpmn:Activity. But a bpmn:ChoreographyActivity is specified entirely separately, and can not be used interchangeably in this context. As a result, it is not possible to create a valid BPMN choreography model with boundary events attached to any choreography activity, despite the standard text intending otherwise.

Of course, a metamodel extension is easily done in [bpmn-moddle](https://github.com/bpmn-io/bpmn-moddle), and we did successfully implement boundary events in one of our [chor-js extensions](https://github.com/bptlab/active-chor-js/blob/master/lib/metamodel/ActiveChoreographies.js#L32). We still opted not to include boundary events in the shipped official version of chor-js, since custom metamodel extensions are often a source of incompatibility. Additionally, boundary events do not really make sense in choreography diagrams anyways—but that is a story for another article.

## Conclusion

Coming back to the picture at the beginning of this article, there obviously is a rather mundane explanation as to why chor-js was featured in that Brazilian hotel lobby. And that is due to the fact that it has had a much larger impact in the scientific community than we expected. Not long after chor-js was published, people began using it for their own research prototypes. Thus, we in turn wrote a demonstration paper describing chor-js and how it can be used, which was published and presented at the International Conference on Conceptual Modeling (ER) in Salvador, Brazil, in late 2019.

In general, we are excited everytime we spot a research paper which utilizes chor-js somehow, when an issue is submitted, or when we gain a star on GitHub. chor-js was and continues to be a very interesting project for us to work on. We learned a great deal about the essentials of open-source software development, project setup and maintenance, and behind-the-scenes infrastructures.

At this point, the core functionality is all there: chor-js lets you use (almost) the entirety of the BPMN choreography diagram standard in your projects. It is easy to set up, and essentially provides the same interfaces as bpmn-js. Check out the [repository on GitHub](https://github.com/bptlab/chor-js), and if you spot something to do, we are always happy about new contributors!

## About the authors

Jan Ladleif is a research assistant and doctoral student at the Business Process Technology chair at Hasso Plattner Institute, University of Potsdam. He is working on his dissertation about modeling and enforcing smart contracts by connecting business process management and blockchain technology.  Get in touch at jan.ladleif@hpi.de

Anton von Weltzien is currently finishing up his master’s degree in IT-Systems Engineering at the Hasso Plattner Institute, University of Potsdam. There, he met Jan while writing his bachelor’s thesis. Having made first contact with Camunda during his work on chor-js, he is now employed by Camunda as a working student. Get in touch at anton.weltzien@student.hpi.de

### References

[1] Jan Ladleif, Anton von Weltzien, Mathias Weske (2019) chor-js: A Modeling Framework for BPMN 2.0 Choreography Diagrams. Joint Proceedings of the ER Forum and Poster & Demos Session 2019 co-located with 38th International Conference on Conceptual Modeling (ER 2019). CEUR-WS.org. URL: http://ceur-ws.org/Vol-2469/ERDemo02.pdf

This [post](https://camunda.com/blog/2021/01/chor-js-an-editor-for-bpmn-choreography-diagrams) was originally posted on the [Camunda Blog](https://camunda.com/blog/). 
