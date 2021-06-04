---

title: form-js - Visual Form Editing and Embedding
description: This blog introduces form-js, a new library to help you build, share and embed forms.
preview_image: https://bpmn.io/assets/attachments/blog/2021/003-preview.png
url: https://bpmn.io/blog/posts/2021-form-js-visual-form-editing-and-embedding.html
layout: blogpost.hbs
slug: 2021-form-js-visual-form-editing-and-embedding
author:
- Nico Rehwaldt<https://github.com/nikku>

published_time: "2021-05-18T13:17:09+01:00"
modified_time: "2021-05-18T13:17:09+01:00"
published: 2021-05-18 13:17

releases:
  - form-js@0.1.0

---

<p class="introduction">
  Today we are proud to introduce [form-js](https://bpmn.io/toolkit/form-js), an editor and viewer for forms. The editor allows you to create and configure your forms in an intuitive manner. The viewer embeds your forms into any webpage, renders them with existing data, and allows you to capture the modified data on submission. In the spirit of our [existing bpmn.io toolkits](https://bpmn.io) both, viewer and editor are meant to be embedded into your applications. Use them as building blocks to support your documentation or automation journey.
</p>

<!-- continue -->

If you're using our tooling to draw or embed process or decision diagrams, you will sooner or later wonder where your data is coming from. Data, along with events, decide which path in your BPMN diagram to take. Data alone decides the result of your DMN modeled decision. Data, in many cases, is naturally captured from your users via forms. This is where [form-js](https://bpmn.io/toolkit/form-js) comes in. It allows you to design and embed forms similar to how our existing tooling allows you to design and embed BPMN and DMN diagrams.


## A Form Editor

The [form-js](https://bpmn.io/toolkit/form-js) editor is a full-fledged form builder. Use it to create your forms via drag and drop. Configure description, label, validation, and additional details via a simple properties panel. No software development experience is required as you build your forms in an all-visual manner. [Try it out on our demo](https://demo.bpmn.io/form).

<div class="figure">
  <a href="https://demo.bpmn.io/form">
    <img src="{{ assets }}/attachments/blog/2021/003-editor.gif">
  </a>

  <p class="caption">
    Design your forms in a visual manner.
  </p>
</div>

Once you are done, you can save your form to a file and embed it for viewing.


## A Form Viewer

The [form-js](https://bpmn.io/toolkit/form-js) viewer is a lightweight library that embeds your forms into any web page. It handles rendering, form validation, and submission.

<div class="figure">
  <img src="{{ assets }}/attachments/blog/2021/003-viewer.gif" style="width: 80%">

  <p class="caption">
    A form in action.
  </p>
</div>

Only a few lines of JavaScript are required to embed it into a webpage.  You must supply your modeled form file, of course. You may provide optional input data, too.


```javascript
import { createForm } from '@bpmn-io/form-js';

const data = {
  creditor: 'Mike'
};

const schema = ...;

const form = createForm({
  schema,
  data,
  container: document.querySelector('#form')
});
```

Hook into form submission and handle the form result, i.e., by submitting the data to a remote API.

```javascript
form.on('submit', (event) => {

  const {
    data,
    errors
  } = event;

  // if no errors, submit form with resulting data
});
```


## Embeddable Building Blocks

As you may have noticed, form-js editor and viewer do not perform any remote interaction. Those who are [familiar with our tools](https://bpmn.io) should not be surprised: We offer embeddable, extensible building blocks rather than full-blown, closed products.

If you plan to use form-js, you will most likely integrate it into your applications, may it be as a form editor or as a form viewer in your little task list or CRM tool. At [Camunda](https://camunda.com/), for example, we embed form-js to [power Camunda Forms](https://camunda.com/blog/2021/04/camunda-forms-visual-editing-of-user-task-forms/), our take on powerful and friendly user task forms.

Are you interested in form-js? Check out the library [on GitHub](https://github.com/bpmn-io/form-js) and learn how to embed it into your application.


## Wrapping Up

This post introduced [form-js](https://bpmn.io/toolkit/form-js), a library to design and render forms embeddable into any web application.

We've made a case for forms being a vital building block in any user-centric documentation or automation journey. We are confident that decent form tooling supports you on that journey.

In the following months, we will continue to improve form-js both feature and documentation-wise.

Are you excited about form-js the way we are? Check out the documentation [on GitHub](https://github.com/bpmn-io/form-js) and don't forget to share your feedback [@bpmn_io](https://twitter.com/bpmn_io) or [on our forums](https://forum.bpmn.io/). Stay tuned for further updates!