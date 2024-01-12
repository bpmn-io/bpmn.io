---

title: Working with Array Data in form-js@1.6
description: "Discover the new dynamic list and table components. Learn how they allow you to handle array data with ease."
preview_image: http://bpmn.io/assets/attachments/blog/2023/011-dynamic-list-readonly.png
layout: blogpost.hbs
slug: 2023-form-js-1-6-dynamic-list-and-table
author:
  - Vinicius Goulart <https://github.com/vsgoulart>
  - Valentin Serra <https://github.com/skaiir>
published: 2023-12-19 12:00
releases:
  - 'form-js@1.6.0'

---

<p class="introduction">
  The release of [form-js@1.6](https://github.com/bpmn-io/form-js) didn't take long, but its impact on handling array data is a game changer. This update introduces two powerful components: tables for elegant tabular data display and dynamic lists for crafting flexible, repeatable, and editable form sections. We designed these components to allow working with complex data arrangements without altering the familiar workflow of the form builder.
</p>

<!-- continue -->

In our continuous effort over recent months, we wanted to build a powerful way to deal with arrays of data. Our goal was to enable the handling of arrays of any data structures, giving you complete control over your data outputs. We settled on a flexible solution while maintaining the ease and familiarity of the current form builder interactions.


## Dynamic Lists, the Flexible Solution to Array Data

Our new dynamic list component brings flexibility to form-js, enabling users to dynamically add or remove repetitions of a form section while handling all the data mapping for you out of the box.

<div class="figure full-size">
  <img src="{{ assets }}/attachments/blog/2023/011-dynamic-list.gif">
  <p class="caption">
    Add or remove entries of the list with a single click.
  </p>
</div>

Customize the behavior of your dynamic list: Decide whether adding and removing items should be possible, how many default items to render, how many items to show uncollapsed, and more. We give you quite a lot of control in configuring this component.

For example, if you want to use dynamic lists as a read-only array data renderer, simply disable the ability to add/remove entries on the dynamic list, make all the child fields read-only, and voilà.

<div class="figure full-size">
  <img src="{{ assets }}/attachments/blog/2023/011-dynamic-list-readonly.png">
  <p class="caption">
    Use the component however you like. It opens up many avenues for creative use cases.
  </p>
</div>

The best part is that you still get all the features you expect from simple elements in your dynamic list repetitions. You may now use the `this` variable within FEEL expressions to refer to the local 'scope' of a dynamic list's rendered element. This allows you to do things like templating, conditional hiding and so on.

<div class="figure full-size">
  <img src="{{ assets }}/attachments/blog/2023/011-dynamic-list-simple-scope.gif">
  <p class="caption">
    Conditionally hide or show on a row-by-row basis within a dynamic list.
  </p>
</div>

So, while simple on the surface, the dynamic list is the final piece of the puzzle for most complex form use cases. Now with just a few configurations, you get to manage collections of data of any structure in your forms.

But what if you're dealing with much larger data sets that you want to render, browse through, and use as a reference within your form?


## Tables Displaying Structured Data at Scale

The new table component allows you to work with large amounts of data in a clean and structured manner. It supports sorting and pagination, giving you plenty of control.

<div class="figure full-size">
  <img src="{{ assets }}/attachments/blog/2023/011-tables.gif">
  <p class="caption">
    Efficiently manage tabular data with the new Table Component.
  </p>
</div>

Using dynamic bindings for table headers, you can render your tables entirely from input data definitions. This gives you a lot of programmatic control over the final appearance.

<div class="figure full-size">
  <img src="{{ assets }}/attachments/blog/2023/011-tables-more.png">
  <p class="caption">
    The tables component is there. What else do you need?
  </p>
</div>


## Our Focus for 1.7

Form-js has grown a lot in the last year or two. We've made a lot of experimental calls and built a lot of new things from scratch. Adding many features quickly, we introduced some performance slowdowns, among other things. It's time to take a step off the gas and clean things up. We've already taken some measures in 1.6 in terms of performance, introducing text field debouncing and removing some redundant FEEL calls.

With the upcoming 1.7 version, we plan to focus on polishing existing features, fixing any issues we're aware of, eliminating architectural pains in the code base, and further improve form rendering performance.


# Wrapping Up

To discover all the enhancements in form-js 1.6 and recent versions, check out our [full changelog](https://github.com/bpmn-io/form-js/blob/master/packages/form-js/CHANGELOG.md#140).

We are always looking for feedback, so if you've spotted a bug, have an improvement to suggest, or just a related thought really, then don't be shy and reach out to us via [our forums](https://forum.bpmn.io/), [follow us on Mastodon](https://fosstodon.org/@bpmn_io), or file any issue you found in [the form-js issue tracker](https://github.com/bpmn-io/form-js/issues).

Get the latest Forms modeling toolkit pre-packaged or as source code via [npm](https://www.npmjs.com/package/@bpmn-io/form-js) or [unpkg](https://unpkg.com/@bpmn-io/form-js).
