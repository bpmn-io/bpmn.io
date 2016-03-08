---

title: A Toolkit for Questionnaires on BPMN 2.0
layout: blogpost.hbs

slug: 2016-bpmn-questionnaire-toolkit
author: Philipp Fromme<https://github.com/PHILIPPFROMME>

published: 2016-03-10 14:00

---

<p class="introduction">Questionnaires on BPMN 2.0 are here. With [bpmn-questionnaire](https://github.com/bpmn-io/bpmn-questionnaire) I have built a library that allows you to create your own questionnaires incorporating BPMN 2.0 diagrams. It can be easily embedded into any website and allows you to create and use your own types of questions, too.</p>

<!-- continue -->

A few months ago I joined the bpmn.io team for the course of my thesis. The goal was to give you as a developer a tool for creating questionnaires on BPMN 2.0, embeddable into any website. In [my original post](http://bpmn.io/blog/posts/2015-bpmn-questionnaire) I talked about it as a framework. Ultimately it has become a toolkit composed of the multiple parts you wouldn't necessarily want to be tied together:

- [bpmn-questionnaire](https://github.com/bpmn-io/bpmn-questionnaire) - a library for embeddable questionnaires on BPMN 2.0
- [bpmn-questionnaire-example](https://github.com/bpmn-io/bpmn-questionnaire-example) - an example application using the library
- [bpmn-questionnaire-builder](https://github.com/bpmn-io/bpmn-questionnaire-builder) - a questionaire builder application

Let us look into each of these parts in a bit more detail.


## The Library

Very early in the course of development it was becoming obvious that the [application](https://github.com/bpmn-io/bpmn-questionnaire) for questionnaires has to be available in the form of a libary to enable developers to embed a questionnaire into a website. The following screencast shows the questionaire in action:

<div class="figure">
  <img src="{{ assets }}/attachments/blog/2016/005-bpmn-questionnaire.gif">
</div>

To use the library, you have to instantiate it with the defined questions. You may pass additional configuration such as your own defined question types, too.

```javascript
var questionnaireJson;

var questionaire = new BpmnQuestionnaire({
  container: '#questions',
  questionnaireJson: questionnaireJson
});
```

Embeding a questionnaire in your website is one thing but where do you go from there? Hook up to the libraries `results` event to get notified about questionaire completion and the answers selected by the user.

```javascript
// get notified when questionaire is completed
questionaire.on('results', function(results) {
  console.log(results);
});
```

The library is available through [npm](https://www.npmjs.com/package/bpmn-questionnaire).


## The Example Application

An [example application](https://github.com/bpmn-io/bpmn-questionnaire-example) showcases the usage of the bpmn-questionnaire library. Developers can use this example in order to learn how to use bpmn-questionnaire themselves. The example application makes use of the node module available through npm and creates three different types of questions.


## The Questionaire Builder

Last but not least there's also a [builder application](https://github.com/bpmn-io/bpmn-questionnaire-builder) that let's you create questionnaires without having to write the JSON file yourself. This is especially valuable for non-developers that would like to create questionnaires on BPMN 2.0 without any programming knowledge. Like with bpmn-questionnaire you can create your own types of questions that will be available in the application. You can download the questionnaire JSON file and use it with bpmn-questionnaire.

<div class="figure">
  <img src="{{ assets }}/attachments/blog/2016/005-bpmn-questionnaire-builder.gif">
</div>


## Next Steps

The toolkit is not finished at this point. There are many possible improvements both for the user and under the hood. CSS was not the focus of my thesis but now that I'm finished I can take care of that. The bpmn-questionnaire-builder application is still in a very early state of development and needs several improvements but that's it for now.

Feel free to provide feedback or to contribute. Get the bpmn-questionnaire library via [npm](https://www.npmjs.com/package/bpmn-questionnaire).
