---

title: Working with array data in form-js@1.6
description: "Discover how form-js 1.6 changes the game with the Dynamic List and Table components, enhancing complexity and usability in your forms."
preview_image: http://bpmn.io/assets/attachments/blog/2023/008-form-js-1-6-update.png
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
  The release of [form-js@1.6](https://github.com/bpmn-io/form-js) didn't take long, but its impact on handling array data is a game changer. In this update, we introduce two powerful components: tables for elegant tabular data display and dynamic lists for crafting flexible, repeatable, and editable form sections. These components are designed to enable working with complex data arrangements, without altering the familiar workflow of the form builder.
</p>

<!-- continue -->

In our continuous effort over recent months, we wanted to build a powerful way you deal with arrays of data. Our goal was to enable handling of arrays of any data structures, giving you complete control over your data outputs. We settled on a very flexible solution while maintaining the ease and familiarity of the current form builder interactions.


## Dynamic lists, the flexible solution to array data entry

Our new dynamic list component brings flexibility to form-js, enabling users to dynamically add or remove repetitions of a form section, while handling all the data mapping for you out of the box.

<div class="figure full-size">
  <img src="{{ assets }}/attachments/blog/2023/011-dynamic-list.gif">
  <p class="caption">
    Add or remove entries of the list with a single click.
  </p>
</div>

Customize the behavior of your dynamic list. The ability to add/remove components, how many default items are rendered, how many items show uncollapsed, and more. We give you quite a lot of control in configuring this component.

As an example, if wanted to use dynamic lists as a read-only array data renderer, simply disable the ability to add/remove entries on the dynamic list, make all the child fields read-only and voilà.

<div class="figure full-size">
  <img src="{{ assets }}/attachments/blog/2023/011-dynamic-list-readonly.png">
  <p class="caption">
    Use the component however you like, it opens up many avenues for creative use cases.
  </p>
</div>

And the best part, you still get all the features you expect out of simple elements in your dynamic list repetitions. You may now make use of the `this` variable within FEEL expressions to refer to the local 'scope' of a dynamic list's rendered element. 

As small heads up however, we are planning to make some changes to how these scopes work in the future, so keep this in mind.

<div class="figure full-size">
  <img src="{{ assets }}/attachments/blog/2023/011-dynamic-list-simple-scope.gif">
  <p class="caption">
    Conditionally hide or show on a row by row basis within a dynamic list. 
  </p>
</div>

So, while simple on the surface, the dynamic list really was the final piece of the puzzle for a great deal of applications. The ability to flexibly handle data arrays combined with binding paths and keys leads to make quick configuration and clean data outputs the default experience in form-js.

Now, what if you're dealing with much larger data sets that you want to render in the application, browse through, maybe use as a reference within your form?


## Tables, displaying structured data at scale

The new table component in `form-js@1.6.0` brings an improved approach data displaying within forms, allowing you to work with massive datasources in a clean and structured environment, with sorting and pagination giving you plenty of control.

<div class="figure full-size">
  <img src="{{ assets }}/attachments/blog/2023/011-tables.gif">
  <p class="caption">
    Efficiently manage tabular data with the new Table Component.
  </p>
</div>

To top it off, you can use both static and dynamic definition of headers which means you have the ability to render your tables entirely from input data definitions, giving you a great deal of programatic control over the final appearance.

<div class="figure full-size">
  <img src="{{ assets }}/attachments/blog/2023/011-tables-more.png">
  <p class="caption">
    Tables are there. What else you need?
  </p>
</div>


## Our focus for 1.7

As you've probably noticed, form-js has grown a lot in the last year or two. We've made a lot of experimental calls, and built a lot of new things from scratch. But we haven't had dedicated time to step off the gas yet, which has caused some performance slowdowns and some of the usual problems in growing projects. 

So, we're not going to focus on any major features for 1.7, but instead to polish, fix any issues we're aware of, get rid of architectural pains in the code base and work on form rendering performance.


# Wrapping Up

To discover all the enhancements in form-js 1.6 and recent versions, check out our [full changelog](https://github.com/bpmn-io/form-js/blob/master/packages/form-js/CHANGELOG.md#140).

We are always looking for feedback, so if you've spotted a bug, have an improvement to suggest, or just a related thought really, then don't be shy and reach out to us via [our forums](https://forum.bpmn.io/), [follow us on Mastodon](https://fosstodon.org/@bpmn_io), or file any issue you found in [the form-js issue tracker](https://github.com/bpmn-io/form-js/issues).

Get the latest Forms modeling toolkit pre-packaged or as source code via [npm](https://www.npmjs.com/package/@bpmn-io/form-js) or [unpkg](https://unpkg.com/@bpmn-io/form-js).
