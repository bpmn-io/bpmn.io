---

title: Announcing bpmn.io - BPMN everywhere, for everyone
layout: blogpost.hbs

slug: 2014-announcing-bpmn-io
author: Nico Rehwaldt<https://github.com/Nikku>

published: 2014-02-20 16:00

---


<p class="introduction">
  We are proud to announce <a href="http://bpmn.io">bpmn.io</a>, an open source toolkit for working with BPMN 2.0 diagrams on the web.
  It will offer a free to use web based modeling component and can serve as an extensible library to embed and annotate business processes modeled with BPMN 2.0.
</p>

<!-- continue -->


## A Brief Introduction

<a href="http://www.bpmn.org/">BPMN 2.0</a> is an established global standard for modelling business processes. It <a href="http://camunda.org/bpmn/tutorial.html">allows you to visualize business processes</a>, thereby making them easier to capture, discuss and change.
Through its well defined file format, it also enables you to exchange modeled diagrams freely across compliant modeling tools. In short: It is a great way to communicate processes.

To leverage the full potential of BPMN the standard must be available to everyone.
Everybody should have the possibility to model BPMN with a great usability and every developer should be able to use BPMN diagrams in his or her application.
With bpmn.io we build a toolkit that aims accomplish nothing more than this.

Because we believe free and easily accessible tools can make the difference, bpmn.io will be open source and free to use for everyone.


## BPMN Everywhere, for Everyone

bpmn.io should help you to communicate processes with BPMN and targets both, modeling users and developers.

For __modeling users__ who use BPMN to communicate processes it will offer a free to use web based modeling component.
The component will allow you to create and modify BPMN 2.0 diagrams. With a strong focus on good usability it should allow anyone to start modelling processes with BPMN.
The modeling component will understand BPMN 2.0 natively and will allow you to import/export diagrams from/to your favorite storage and any other BPMN 2.0 compliant modeling tool.

<div class="bi-img">
  <img src="/assets/img/model.png" alt="Model BPMN 2.0 diagrams" class="img-responsive">
  <p class="caption">Model BPMN 2.0 diagrams</p>
</div>

For __developers__ who create applications that can be enhanced through BPMN, bpmn.io will offer a lightweight toolkit to embed BPMN 2.0 diagrams.
Integrated into any web application the toolkit will allow you to render BPMN diagrams, add interactivity and annotate diagrams with data that is important for you and your users.
The toolkit will offer an extensible plug-in API, too. Via that API you may enhance the library to serve all those use cases we have not yet thought of.

<div class="bi-img">
  <img src="{{assets}}/img/embed.png" alt="Embed BPMN 2.0 diagrams into the application" class="img-responsive">
  <img src="{{assets}}/img/extend.png" alt="Extend the framework" class="img-responsive">

  <p class="caption">Embed and annotate BPMN 2.0 diagrams and extend the library to suit your use cases</p>
</div>


## Next Steps

An initial version of our toolkit is already in the making. We plan to publish it in the next weeks.
It will be available as a running demo (i.e. _clickable_) on [bpmn.io](http://bpmn.io), downloadable and embeddable into web applications and [open source on GitHub](https://github.com/bpmn-io).

Give us feedback and make sure to follow us on [Twitter](https://twitter.com/bpmn_io) or [subscribe to our newsletter](http://bpmn.io) to stay in touch.

<br/>

bpmn.io is a joint project of [Camunda](http://www.camunda.com) and [Zalando](http://tech.zalando.com) and part of [Camunda BPM](http://camunda.org). Learn more about [us]({{ relative page.dest 'dist/about/' }}).



