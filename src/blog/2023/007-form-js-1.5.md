---

title: Empowering complex forms with form-js@1.x
description: "Recapping our recent form-js releases: form layouting, flexible data binding, and FEEL expression properties to simplify complex form development"
preview_image: http://bpmn.io/assets/attachments/blog/2023/007-group-path.png
layout: blogpost.hbs
slug: 2023-form-js-1.5-recent-developments
author:
- Niklas Kiefer <https://github.com/pinussilvestrus>
- Valentin Serra  <https://github.com/skaiir>
published: 2023-12-11 12:00

releases:
  - 'form-js@1.0.0'
  - 'form-js@1.5.0'

---

<p class="introduction">
  Hey folks, it's been a while since our last formal form-js updates blog post, so we'd like to take this opportunity to bring everybody up to speed with all the powerful developments and features we've brought to our form builder.
</p>

<!-- continue -->

Our focus these past few quarters have been to enable more complex use-cases for form-js via more flexible customizations, and broader adoption of FEEL expressions, new components and entirely new capabilities like layouting. As always, you may try out the new features [on our demo](https://demo.bpmn.io/form) or using the [Camunda form playground](https://github.com/camunda/form-playground).

## Form layouting

Resizable form fields allow you to adjust the horizontal size of your components, as well as bringing multiple components into the same row.

<div class="figure full-size">
  <img src="{{ assets }}/attachments/blog/2023/007-resize-field.gif">

  <p class="caption">
    Resize form fields to fit the layout.
  </p>
</div>

With the addition of groups, you can now organize form components both visually and logically. In combination with component resizing, this gives you a lot of control over where your fields end up and allows you to create visually appealing form layouts

<div class="figure full-size">
  <img src="{{ assets }}/attachments/blog/2023/007-group.png">

  <p class="caption">
    Create groups to organize form components logically.
  </p>
</div>

The spacer component enables you to create white space between form components, making it possible to place them more freely. They may also be used as placeholders for conditionally hidden fields to maintain your form structure.

<div class="figure full-size">
  <img src="{{ assets }}/attachments/blog/2023/007-spacer.png">

  <p class="caption">
    Use spacers to align form components to the right.
  </p>
</div>

And just for good measure, we also added a separator component that makes it possible to visually separate form components.

<div class="figure condensed-size">
  <img src="{{ assets }}/attachments/blog/2023/007-separator.png">

  <p class="caption">
    Use separators to visually distinguish form components.
  </p>
</div>

## Flexible data binding

We significantly enhanced the data binding capabilities of form-js. You can now use nested keys to bind structured data to form components.

<div class="figure full-size">
  <img src="{{ assets }}/attachments/blog/2023/007-nested-key.png">

  <p class="caption">
    Use nested form keys to bind structured data.
  </p>
</div>

You can also specify a data path on the group component, which will route all of the child components down a certain binding path.

<div class="figure full-size">
  <img src="{{ assets }}/attachments/blog/2023/007-group-path.png">

  <p class="caption">
    Keep your data nicely organized without configuration overheads.
  </p>
</div>

## Controllable and reusable forms via FEEL expression properties

Most real world use cases aren't as simple as just data entry. We see the need for more fine-grained control over the form's behaviours and interaction, as well as being able to re-use the same form based on slight differences in input data.

Our direction with this is leveraging FEEL, the expression language [standardized by the OMG](http://www.omg.org/spec/DMN/)  and [feelers](https://github.com/bpmn-io/feelers), our own templating language built on top of it. Read-only settings, labels, descriptions, field options, validations, and most of our new component properties will now be configurable via expressions for a dynamic and powerful form building experience.

<div class="figure full-size">
  <img src="{{ assets }}/attachments/blog/2023/007-expressions.gif">

  <p class="caption">
    FEEL expressions let you control properties dynamically.
  </p>
</div>

## More components, more use cases

You should have already noticed that we made some changes to our component palette, in exchange for a scalable and searchable alternative. This highlights the direction where we are taking the library. We want to offer a toolkit which is sufficient for the majority of use-cases out of the box.

There are certain limitations to this however, we understand that we cannot provide everybody with the flexibility they need, and hence in a true bpmn-io fashion we've opened up the library to component extensions, which are outlined in the following [blog post](https://bpmn.io/blog/posts/2023-custom-form-components).

<div class="figure full-size">
  <img src="{{ assets }}/attachments/blog/2023/007-flexible-component-library.png">

  <p class="caption">
    Find the component you want easily.
  </p>
</div>

Aside from the visual polishing, selects have received a new configuration which allows them to be searchable. It works similarly to our taglist, but handles single-selection cases.

<div class="figure full-size">
  <img src="{{ assets }}/attachments/blog/2023/007-searchable-select.png">

  <p class="caption">
    Handle large dataset selection without scrolling endlessly.
  </p>
</div>

A fresh new arrival to our component suite with 1.5 is the iframe component, allowing you to embed other webpages inside of your forms, be it portfolios, documents, ect.. We have decided to ship these with restricted access for now, but do plan to allow you to configure security parameters in the future to grant the iframes more permissions.

<div class="figure full-size">
  <img src="{{ assets }}/attachments/blog/2023/007-iframe.png">

  <p class="caption">
    Be sure to understand the security implications before using iframes.
  </p>
</div>

## Wrapping Up

This is just the tip of the iceberg, if you want to have a full overview of the changes, feel free to browse through our [full changelog](https://github.com/bpmn-io/form-js/blob/master/packages/form-js/CHANGELOG.md#140).

Did we miss anything? Did you spot a bug, or would you like to suggest an improvement? Reach out to us via [our forums](https://forum.bpmn.io/), tweet us [@bpmn_io](https://twitter.com/bpmn_io), or file an issue you found in [the form-js issue tracker](https://github.com/bpmn-io/form-js/issues).

Get the latest Forms modeling toolkit pre-packaged or as source code via [npm](https://www.npmjs.com/package/@bpmn-io/form-js) or [unpkg](https://unpkg.com/@bpmn-io/form-js).