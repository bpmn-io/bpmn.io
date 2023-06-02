---

title: How Jmix integrates bpmn-js to boost process centric application development
description: "This guest blog explains how Jmix introduced workflow support into the platform, embedded bpmn-js, and how Jmix users benefit from the integration."
layout: blogpost.hbs
slug: 2023-how-jmix-uses-bpmn-js
preview_image: http://bpmn.io/assets/attachments/blog/2023/004-image9.png
url: https://bpmn.io/blog/posts/2023-how-jmix-uses-bpmn-js.html
author:
- Maxim Gorbunkov <https://github.com/gorbunkov>
published: 2023-06-03 11:24

releases: [ "bpmn-js" ]

---

<p class="introduction">
[Jmix](http://jmix.io/?utm_source=bpmn&utm_medium=referral&utm_campaign=bpnmio-article) is an open-source high-productivity platform for building enterprise-grade applications. Java developers worldwide use it to build data-centric, business-process centric, and content management applications, especially when faced with strict time and budget constraints. In a nutshell Jmix enables a Java developer to become a full-stack developer, delivering a standard Spring Boot application at the end. No runtime fees, a single language (Java/Kotlin) for the backend and UI, using mainstream core technologies, and a developer-friendly professional IDE are reasons the platform appeals to developers.
This post looks into how we introduced workflow support into the platform, embedded [bpmn-js](https://github.com/bpmn-io/bpmn-js), and how our users benefit from the integration.
</p>

<!-- continue -->

<p class="thanks">
  _A big thanks to [Maxim Gorbunkov](https://github.com/gorbunkov) from [Haulmont](https://haulmont.tech/?utm_source=bpmn&utm_medium=referral&utm_campaign=bpnmio-article) for writing this guest blog post._
</p>

## First steps with BPMN

Data-centric and content management applications often require business process automation functionality to separate transactional business logic from the code. This can be done with an embedded workflow modeler allowing analysts and developers to design business logic following BPMN standards. We came to this in 2017 when we began receiving requests from our community. Initially, we provided a custom business process design tool powered by Activiti as part of the CUBA platform, Jmix's predecessor.

<div class="figure">
  <img src="{{ assets }}/attachments/blog/2023/004-image1.png" alt="The BPMN modeler inside the CUBA Platform, Jmix's predecessor">

  <p class="caption">
    The BPMN modeler inside the CUBA Platform, Jmix's predecessor.
  </p>
</div>

We provided this modeler as a part of the Business Process Management add-on, which included the following features:

* Integrated runtime BPMN visual designer;
* Integrated data model — Activiti data model wrapped in CUBA entities, enabling developers to use them in UI and business logic easily;
* Process forms — a convenient way to display process assignments and actions;
* UI for managing process models, running process instances, and assignments;
* Sub-processes — existing process models can be incorporated into a larger process model;
* Localization.

The BPMN modeler stored business processes internally in a specific JSON format. When the developer launched the process deployment CUBA automatically converted it to BPMN XML format for use by the Activiti BPM engine. This marked the initial introduction of an integrated environment for designing processes in BPMN, enhancing process context with data model objects and business-specific process forms, and executing them. While CUBA community members started adopting the feature in real projects, the platform team found the CUBA BPM add-on limited in potential extensions. By the end of 2018, it also became clear that the UI of the BPMN modeler was outdated.

## BPMN revisited in Jmix

In 2019, we began designing the next generation of the CUBA Platform — Jmix. There were two main ideas for the next generation:

- Reduce custom technology implementations and align more closely with mainstream Java application development approaches;
- Consolidate maximum productivity tools into a single development environment, eliminating the need to switch between different windows and keeping everything needed right under the developer’s fingertips.

We significantly emphasised the principle – "Don’t reinvent the wheel". Consequently, integrating a modern BPMN modeler with minimal customisations became essential. After a series of internal R&D efforts, we concluded that [bpmn-js](https://github.com/bpmn-io/bpmn-js) was the winner, given its list of features:

- Modern appearance;
- Extensive capabilities for enhancements, such as new elements and styles;
- A wealth of real use-case implementation examples on GitHub;
- Support from a free community forum that features intensive discussions;
- Rapid evolution.

Engine wise we switched from Activiti to Flowable BPM. 

Modeling wise we integrated [bpmn-js](https://github.com/bpmn-io/bpmn-js) as a modeler in the Jmix application run-time. The new appearance of the BPMN designer was impressive.

<div class="figure no-border full-size">
  <img src="{{ assets }}/attachments/blog/2023/004-image2.png" alt="Jmix BPMN designer powered by bpmn-js">

  <p class="caption">
    Jmix BPMN designer powered by bpmn-js.
  </p>
</div>


## bpmn-js, accessible to Java developers

As mentioned, one of the key Jmix features is that developers use a single language to build both the application’s front- and backend. This feature is supported by a server-side Vaadin technology within the Jmix framework. Vaadin enables manipulation of front-end layout via Java APIs. The Jmix platform dev team primarily consists of professional Java developers. Consequently, we decided to wrap the bpmn-js modeler into a Vaadin UI component and interconnect specific Java methods with the js-modeler functions. As a result, Jmix developers received a ready-to-use Java component, which can be seamlessly integrated into the application according to the business task requirements.

As an example of this implementation, you can examine the Java component used to monitor the current state of a process. Out-of-the-box, Jmix provides a BPM subsystem in application runtime and allows monitoring of the process state in the process instance editor screen, as illustrated in the following screenshot.

<div class="figure no-border full-size">
  <img src="{{ assets }}/attachments/blog/2023/004-image3.png" alt="A process instance editor with the state monitoring diagram">

  <p class="caption">
    A process instance editor with the state monitoring diagram.
  </p>
</div>

In Jmix, developers can easily reuse the `bpmnViewer` component and add it to the custom screen on demand with just a few simple steps. First, you should add the `bpmnViewer` component to the Jmix screen layout descriptor as a standard UI component.

<div class="figure no-border">
  <img src="{{ assets }}/attachments/blog/2023/004-image4.png" alt="Jmix screen layout descriptor with the bpmnViewer component">

  <p class="caption">
    Jmix screen layout descriptor with the `bpmnViewer` component.
  </p>
</div>

Second, the `bpmnViewer` must be injected into the custom screen controller, and the behavior should be specified according to the application's business logic.

<div class="figure no-border full-size">
  <img src="{{ assets }}/attachments/blog/2023/004-image5.png" alt="Jmix screen controller demonstrating bpmnViewer initialization">

  <p class="caption">
    Jmix screen controller demonstrating `bpmnViewer` initialization.
  </p>
</div>

As shown in the screen above Java developers have all the tools in their hands to embed and configure BPMN rendering in their application:

1. Inject `bpmnViewer` component
2. Set BPMN XML into the viewer component
3. Call the `addMarker` function to set the specific style on an element

Once completed, it operates seamlessly on your custom screen. With minimum coding efforts, Jmix developers can reuse bpmn-js capabilities throughout the entire project.

<div class="figure no-border full-size">
  <img src="{{ assets }}/attachments/blog/2023/004-image6.png" alt="Rendered view with BPMN diagram">

  <p class="caption">
    Rendered view with a BPMN diagram.
  </p>
</div>

This is an example of how the integration of bmpn-js with Vaadin technology has brought new ideas to the application development process. However, we didn’t just wrap up the existing functionality of the bpmn-js modeler - we also extended it with some Jmix-specific features. To name a few:

* The service task configuration tool window offers a set of fields enabling the setup of a project’s Spring Bean, thereby eliminating potential naming errors and typos;
* Developers can manage Execution Listeners using a convenient list view and editor dialogs.

<div class="figure no-border full-size">
  <img src="{{ assets }}/attachments/blog/2023/004-image7.png" alt="Service task tool window, extended for simple Spring Bean set up">

  <p class="caption">
    Service task tool window, extended for simple Spring Bean set up.
  </p>
</div>


<div class="figure no-border full-size">
  <img src="{{ assets }}/attachments/blog/2023/004-image8.png" alt="An Execution Listeners tool window with a dedicated configuration dialog.">

  <p class="caption">
    An Execution Listeners tool window with a dedicated configuration dialog.
  </p>
</div>

The integration of the bpmn-js modeler and an embeddable BPMN engine has allowed developers and analysts to design business processes visually and seamlessly connect them with the data model, application roles, and business logic. This appeared modern and valuable, but it didn’t match the core product idea – the developer still needed to switch between design time and runtime when creating a business process. Our goal was to introduce an experience where a developer can do almost the same as in runtime but without switching between different tools. Sounds awesome? In reality, it looks even better.

## Moving to an integrated BPM development environment

This vision of a seemless, integrated BPM development environment became a reality in 2021 when we brought BPMN editing powered by [bpmn-js](https://github.com/bpmn-io/bpmn-js) into the IntelliJ IDEA IDE.

<div class="figure no-border full-size">
  <img src="{{ assets }}/attachments/blog/2023/004-image9.png" alt="Jmix Studio plugin for IntelliJ IDEA with an integrated BPMN modeler.">

  <p class="caption">
    Jmix Studio plugin for IntelliJ IDEA with an integrated BPMN modeler.
  </p>
</div>

 We maintained the same application development lifecycle – once a process is designed in Jmix Studio, the developer runs it in the application using the embedded BPMN engine on their local environment. The most challenging aspect was transferring the existing user experience from the previously designed BPMN modeler in runtime to IntelliJ IDEA. Our focus was on keeping a similar experience for the Jmix community while ensuring it was native to IDE tooling design guidelines. Embedding the BPMN modeler canvas was not particularly difficult; in contrast, creating an IDE native process parameters property editor tool window proved to be more challenging. After some internal R&D, the team decided to implement special highlighting of the edited property items in the IDE tool window, preserving the logical grouping of properties as it was in runtime. You can see the similarities by comparing the same User Task tool window in the Jmix runtime modeler and the Jmix Studio modeler.


## A positive impact on developer productivity

To summarize some benefits we've seen from the BPMN integration into Jmix:

- Using [bpmn-js](https://github.com/bpmn-io/bpmn-js), we were able to seemlessly integrate BPMN editing into IntelliJ IDEA. As a developers, you get a great BPMN modeling experience; at the same time you benefit from a uniform configuration UX and code intelligence features.
- You can upload BPMN diagrams prepared by an analyst directly into IntelliJ IDEA and then enrich them with project-specific business logic, user screens, integrations, and exception handling without the need to switch to one another tool;
- You can deploy and run it on the developer’s workstation and test its business logic to ensure it runs as intended. Here you get access to all of IntelliJ's powerful debugging tools to streamline the process and make it more efficient;
- When finished with local debugging, you can commit and push the changes into the shared repository, allowing the analyst to see the updated version of the BPMN diagram and check the live version of the diagram within the application running in the test environment;
- If the analyst needs to change the BPMN model, the diagram can be adjusted in the application runtime using the same tool and tested again. After successful testing, the updated diagram version can be downloaded and sent back to the developer for implementation of the changes.

Thus, with [Jmix](http://jmix.io/?utm_source=bpmn&utm_medium=referral&utm_campaign=bpnmio-article), teams can cover the entire business process development lifecycle within the known tools, and what’s more, it can be integrated within CI/CD pipelines. In real projects, developers add dashboards to implement various process analytics and acquire statistics. This approach is quite similar to a BPMS solution that is tailored to a data-centric application and business logic in Java or Kotlin. 

Thanks to the [bpmn.io project](http://bpmn.io/), developers can address diverse use cases with the same easy-to-use and widely applicable tooling, in a standalone designer, as part of their IntelliJ IDEA or embedded inside their applications.

---

## About the Author

[Maxim Gorbunkov](https://github.com/gorbunkov) is a Jmix developer and works at [Haulmont](https://haulmont.tech/?utm_source=bpmn&utm_medium=referral&utm_campaign=bpnmio-article), where we’re focused on developing tools and platforms that enhance developers’ productivity by automating coding routines and bringing ready-to-use application components into a single development environment — IntelliJ IDEA. Established in 2008 as a custom development software house, we understand what productivity means for technical leaders. When time and resources are limited, selecting the right tools for the job and capitalising on framework strengths rather than fighting against them is essential. This led to the creation of a high-productivity platform for Java enterprise applications. In 2016 our team introduced the CUBA Platform as open-source, and in 2020, we released the CUBA Platform successor — [Jmix](http://jmix.io/?utm_source=bpmn&utm_medium=referral&utm_campaign=bpnmio-article).