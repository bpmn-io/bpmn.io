---

title: bpmn-questionnaire - Build your own Interactive BPMN 2.0 Questionnaires
layout: blogpost.hbs

slug: 2015-bpmn-questionnaire
author: Philipp Fromme<https://github.com/PHILIPPFROMME>

published: 2015-10-07 12:00

---

<p class="introduction">
  I joined the bpmn.io team for the duration of my thesis. Over the next few months I'll build a framework for embeddable questionnaires on BPMN 2.0. You will be able to create your own interactive questionnaires, embed them into your website and extend the framework by creating new types of questions.
</p>

<!-- continue -->

<p class="thanks">
  _A big thanks to [Philipp Fromme](https://github.com/PHILIPPFROMME) for writing this guest blog post._
</p>


How can you test your knowledge of BPMN 2.0? Wouldn't it be great to have the opportunity to practice what you've learned so far? In the browser? Interactively?

I'm Philipp. I study media informatics and I'm going to write my thesis on this topic curated by [Camunda](https://www.camunda.com). During the course of my thesis I will build a framework for embeddable questionnaires on BPMN 2.0. [bpmn-js](https://github.com/bpmn-io/bpmn-js) already provides all the functionality to render and interact with BPMN 2.0 diagrams in the browser.


## What can you do with it?

Let's say you want to test your knowledge of BPMN 2.0. bpmn-questionnaire will give you the ability to answer different types of questions on the topic. Let’s give you an example.


<div class="figure">
  <img src="{{ assets }}/attachments/blog/2015/011-question.png">
</div>

As a non-developer you will be able to create your own questionnaires and populate it with questions ranging from simple multiple-choice questions to more complex types of questions like finding errors in a BPMN 2.0 diagram.

As a developer you can extend the range of questions by implementing your own type of question with it's own behavior. The best thing about it is you will be able to embed the questionnaires into your own application. I will provide you with a basic example of such an application to get you started.

##What's the scope of my thesis?

The core functionality of this framework will be embeddable questionnaires you can answer. From the beginning developers will be able to add new types of questions to the framework. After the questionnaires are up and running I will build a sample application that allows non-developers to create new questionnaires in the browser. Finally I will write the documentation to get you started.

The framework will be open-source and on GitHub soon. Feel free to provide feedback and to discuss. Towards the end of this project there will be another blog post. Stay tuned.