---

title: Conditional Rendering, New Components & Expression Properties in form-js
description: "Introducing form-js@0.10.0: This release introduces conditional rendering, new form components & FEEL expression properties."
preview_image: assets/attachments/blog/2022/003-preview.png
layout: blogpost.hbs
slug: 2022-form-js-0-10-0-new-components-and-conditional-rendering
author:
- Roman Kostka <https://github.com/RomanKostka>
published: 2022-12-23 18:00

releases:
  - 'form-js@0.10.0'

---

<p class="introduction">
  We are excited to announce the latest [form-js@0.10 release](https://github.com/bpmn-io/form-js). 
  This release significantly improves the capabilities of our form builder & renderer.
</p>

<!-- continue -->


The release introduces new form components such as ‘image view’, ‘multiline text’, and ‘date time’, in order to support all basic data types and form needs. 
It also adds the ability to add a prefix and/or suffix adornment to selected components.
Form-js now also supports decimal numbers.

Another highlight is that you are now able to hide components based on conditions and get a live preview of your form with the ability to validate it.

The whole release is dedicated to helping you to build more flexible forms with awesome usability.
Try out the new features on https://demo.bpmn.io/form/s/start.

## Image View

The new image view components lets you display images based on a link, data URI or variables.

<div class="figure full-size">
  <a href="https://demo.bpmn.io/form">
    <img src="{{ assets }}/attachments/blog/2022/011-image-view.gif">
  </a>

  <p class="caption">
    Display an image from any source using the image view component.
  </p>
</div>

## Text View

The text view component now supports FEEL expressions to display additional context via form variables and other form fields. Format your text using markdown or basic HTML.

<div class="figure full-size">
  <a href="https://demo.bpmn.io/form">
    <img src="{{ assets }}/attachments/blog/2022/011-text-view.gif">
  </a>

  <p class="caption">
    You can reference the value of other form components to display in the text view component.
  </p>
</div>

## Date and Time

The date and time component allows your users to display and select a date, time, or both. It is fully accessible from the keyboard.

<div class="figure full-size">
  <a href="https://demo.bpmn.io/form">
    <img src="{{ assets }}/attachments/blog/2022/011-date-time.gif">
  </a>

  <p class="caption">
    The new date and time picker is designed for maximum convenience, whether accessed with the mouse or keyboard.
  </p>
</div>

## Prefix and Suffix Adornments

With the new prefix and suffix adornments you are able to enrich your components with additional information, and provide guidance for your users.

<div class="figure full-size">
  <a href="https://demo.bpmn.io/form">
    <img src="{{ assets }}/attachments/blog/2022/011-adornments.gif">
  </a>

  <p class="caption">
    Adornments provide guidance for users in a more convenient way than labels or hints.
  </p>
</div>

## Decimal Numbers

The number component now supports decimals. You are able to define the maximum allowed decimal digit and also the increment.

<div class="figure full-size">
  <a href="https://demo.bpmn.io/form">
    <img src="{{ assets }}/attachments/blog/2022/011-decimals.gif">
  </a>

  <p class="caption">
    Decimal number inputs are crucial for many form applications.
  </p>
</div>

## Hiding Components Based on FEEL Expressions

With this feature you are able to hide components based on variables and conditions.
This allows you to build forms which are truly flexible and adaptive.

<div class="figure full-size">
  <a href="https://demo.bpmn.io/form">
    <img src="{{ assets }}/attachments/blog/2022/011-conditional-rendering.gif">
  </a>

  <p class="caption">
    FEEL & Conditional Rendering makes it easy to hide components based on easy-to-write, yet powerful rules.
  </p>
</div>

## Validate and Preview Mode 

With the new validate and preview mode you are provided with a live preview of your form. Furthermore you get access to the data input and output section which allows you to immediately validate your form with data.

<div class="figure full-size">
  <a href="https://demo.bpmn.io/form">
    <img src="{{ assets }}/attachments/blog/2022/011-playground.gif">
  </a>

  <p class="caption">
    The form preview is shown next to the form editor, allowing to immediately validate a form and its rules.
  </p>
</div>

Try out the new features [on our demo](https://demo.bpmn.io/form) or using the [form-js playground](https://github.com/bpmn-io/form-js/tree/master/packages/form-js-playground).

## Wrapping Up

Read through the [full changelog](https://github.com/bpmn-io/form-js/blob/master/packages/form-js/CHANGELOG.md#0100) to learn about all issues that we addressed with `form-js@0.10.0`.

Did we miss anything? Did you spot a bug, or would you like to suggest an improvement? Reach out to us via [our forums](https://forum.bpmn.io/), tweet us [@bpmn_io](https://twitter.com/bpmn_io) or file an issue you found in [the form-js issue tracker](https://github.com/bpmn-io/form-js/issues).

Get the latest Forms modeling toolkit pre-packaged or as source code via [npm](https://www.npmjs.com/package/@bpmn-io/form-js) or [unpkg](https://unpkg.com/@bpmn-io/form-js).