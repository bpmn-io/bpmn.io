---

title: Camunda Properties Feature Complete with Properties Panel v0.6.0
layout: blogpost.hbs

slug: 2016-camunda-properties-complete-properties-panel
author: Patrick Dehn<https://github.com/pedesen>

published: 2016-03-04 15:30

---


<p class="introduction">
  With the latest version of our [properties panel](https://github.com/bpmn-io/bpmn-js-properties-panel) we provide editing support for all [Camunda](https://camunda.org) execution related properties. We added input/output variable mappings, form fields, connectors, compensation activity references and `camunda:properties` for form fields and extension elements. Besides that we carried out some significant usability improvements and fixed tons of bugs. We took big steps to further improve the internal code quality so that contributions should be easier, too.
</p>

<!-- continue -->

## What's new

Let's take a look at the new features and how to use them.


### Input/Output Mappings

One of the most important feature is the support for input/output mappings. If you start adding parameters, the properties panel automatically adds the Camunda extension element `inputOutput` to the element. It can contain multiple `inputParameter` and `outputParameter` elements of different types. Besides the `text`, `script` and `list` type you can configure complex input/output parameter mappings using the type `map`.

<div class="figure">
  <img src="{{ assets }}/attachments/blog/2016/004-input-output.png">
</div>

Learn more about using [input/output variable mappings](https://docs.camunda.org/manual/7.4/user-guide/process-engine/variables/#input-output-variable-mapping) with [Camunda](https://camunda.org).


### Form Fields

The second major feature is the configuration of form field properties. Both types form key and form data are supported. Choose the Form Data type to configure complex form fields which allows fine grained control over ids, types, label and default values for each field. If you select the enum type, you can furthermore add, edit and remove `camunda:value` properties. It is also possible to configure properties of the type `camunda:properties`.


<div class="figure">
  <img src="{{ assets }}/attachments/blog/2016/004-form-fields.png">
</div>

Learn more about generated task forms and [using form fields](https://docs.camunda.org/manual/7.4/user-guide/task-forms/#generated-task-forms) with [Camunda](https://camunda.org).


### Scrollable Tabs

Supporting more and more properties to the panel is great but it also makes it harder for users to find what they are looking for. In the [last release](https://bpmn.io/blog/posts/2016-properties-panel-050.html) we introduced tabs to improve discoverability. With this release we greatly improved the tabbing usability. You can now switch tabs via mouse wheel or, in case they overflow, via distinct scroll controls left and right of the tabbar:

<div class="figure">
  <img src="{{ assets }}/attachments/blog/2016/004-tabs.gif">
</div>


### Connector Configuration

We added the ability to configure [Camunda connectors](https://docs.camunda.org/manual/7.4/user-guide/process-engine/connectors). If you select the implementation type `connector` for a service task a new connector tab will appear. Additionally you get quick feedback on whether the connector is already properly configured. Clicking on the configuration note gets you directly to the tab. There you can maintain the connector details such as id an input/output mappings.

<div class="figure">
  <img src="{{ assets }}/attachments/blog/2016/004-connector.gif">
</div>


### Editable Names

You can now edit the names of individual diagram elements directly in the properties panel.
Type `ENTER` to add pre-formated line breaks to your element labels and the name input box will resize accordingly, too.

<div class="figure">
  <img src="{{ assets }}/attachments/blog/2016/004-names.gif">
</div>


### What Else

Along with the things highlighted above we added numerous other features, bug fixes and improvements.


__Features__

* `camunda:properties` editable for form fields and as extensions for all elements
* `camunda:in` and `camunda:out` variables editable for call activities
* Compensation details editable for compensation throwing events
* Business key can be passed to sub processes ([learn more](https://docs.camunda.org/manual/7.4/reference/bpmn20/subprocesses/call-activity/#passing-business-key))


__Bug Fixes__

* Multi instance configuration fixed
* Retry time-cycles fixed
* Event definition properties (for signals, messages  and receive tasks) clear properly
* Escalation and error references fixed
* [...](https://github.com/bpmn-io/bpmn-js-properties-panel/commits/master)


__Other Improvements__

* Simplified validation
* Improved structure of the properties panel with groups, labels and dividers
* Improved undo/redo behavior
* Bullet proof testing (we added 995 tests while keeping the test suite fast)


## What's next

This release of the properties panel is also part of the brand new release of the [Camunda Modeler](https://camunda.org/bpmn/tool/). If you still miss a feature or can't configure a property let us know! Get in touch with us via our [forums](https://forum.bpmn.io) and tell us what you think.

Make sure to follow us on [Twitter](https://twitter.com/bpmn_io) if you would like to keep track on what is happening in the bpmn-io sphere.

Get the latest release of our properties panel via [npm](https://www.npmjs.com/package/bpmn-js-properties-panel).
