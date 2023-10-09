---

title: Empowering complex forms with form-js@1.x
description: "Introducing recent form-js@1.x versions: These releases offer improved layouting, dynamic data binding, and FEEL expression properties to simplify complex form development."
preview_image: http://bpmn.io/assets/attachments/blog/2023/006-group-path.png
layout: blogpost.hbs
slug: 2023-form-js-1-complex-form-development
author:
- Niklas Kiefer <https://github.com/pinussilvestrus>
published: 2023-10-10 18:00

releases:
  - 'form-js@1.0.0'
  - 'form-js@1.5.0'

---

<p class="introduction">
  We are excited to inform about the latest [form-js@1.x releases](https://github.com/bpmn-io/form-js). 
  These releases significantly improve the development of complex forms by enhancing layouting, dynamic data binding, and utilizing FEEL expression properties.
</p>

<!-- continue -->

We dedicate the theme to helping you build complex and reusable forms with ease. Try out the new features [on our demo](https://demo.bpmn.io/form) or using the [Camunda form playground](https://github.com/camunda/form-playground).

## New layouting capabilities

With the addition of group components, you can now organize form components seamlessly. You can add and arrange other form components into the group, like in the parent form.

<div class="figure full-size">
  <img src="{{ assets }}/attachments/blog/2023/006-group.png">

  <p class="caption">
    Create groups to organize form components logically.
  </p>
</div>

Resizable form fields allow you to adjust the size of form components, creating visually appealing form layouts.

<div class="figure full-size">
  <img src="{{ assets }}/attachments/blog/2023/006-resize-field.gif">

  <p class="caption">
    Resize form fields to fit the layout.
  </p>
</div>

Additionally, introducing the spacer component enables you to create white space between form components, making it possible to place them more freely.

<div class="figure full-size">
  <img src="{{ assets }}/attachments/blog/2023/006-spacer.png">

  <p class="caption">
    Use spacers to align form components to the right.
  </p>
</div>

Finally, we also added a separator component that makes it possible to visually separate form components.

<div class="figure condensed-size">
  <img src="{{ assets }}/attachments/blog/2023/006-separator.png">

  <p class="caption">
    Use separators to visually distinguish form components.
  </p>
</div>

## New data binding capabilities

We significantly enhance the data binding capabilities of form-js. You can now use nested keys to bind structured data to form components.

<div class="figure full-size">
  <img src="{{ assets }}/attachments/blog/2023/006-nested-key.png">

  <p class="caption">
    Use nested form keys to bind structured data.
  </p>
</div>

You can also specify a data path to a group component, which helps to provide more context to the group and its form components.

<div class="figure full-size">
  <img src="{{ assets }}/attachments/blog/2023/006-group-path.png">

  <p class="caption">
    Specify a data path to a group to provide more context.
  </p>
</div>

Without manual work, dynamic lists enable the effortless generation of repetitive sets of form components, such as data tables or ordered lists.

<div class="figure full-size">
  <img src="{{ assets }}/attachments/blog/2023/006-dynamic-list.png">

  <p class="caption">
    Dynamic lists allow to model repetitive lists of form components.
  </p>
</div>

## Controllable and reusable forms via expression properties

By leveraging FEEL - the expression language [standardized by the OMG](http://www.omg.org/spec/DMN/) - and [FEEL templating](https://github.com/bpmn-io/feelers), you can streamline the development process and ensure consistency across a wide range of forms, making complex form creation more efficient and reusable.

As part of these releases and moving forward, we allow you to define more properties via FEEL expression and templates, including read-only settings, labels, descriptions, multi-select options, and minimum and maximum validation.

<div class="figure full-size">
  <img src="{{ assets }}/attachments/blog/2023/006-expressions.gif">

  <p class="caption">
    FEEL expressions let you control properties dynamically.
  </p>
</div>

## Wrapping Up

Read through the [full changelog](https://github.com/bpmn-io/form-js/blob/master/packages/form-js/CHANGELOG.md#140) to learn about all issues that we addressed with `form-js@1.x`.

Did we miss anything? Did you spot a bug, or would you like to suggest an improvement? Reach out to us via [our forums](https://forum.bpmn.io/), tweet us [@bpmn_io](https://twitter.com/bpmn_io), or file an issue you found in [the form-js issue tracker](https://github.com/bpmn-io/form-js/issues).

Get the latest Forms modeling toolkit pre-packaged or as source code via [npm](https://www.npmjs.com/package/@bpmn-io/form-js) or [unpkg](https://unpkg.com/@bpmn-io/form-js).