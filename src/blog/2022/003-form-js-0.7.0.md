---

title: Custom Properties in form-js
description: "Introducing form-js@0.7.0: This release introduces custom properties for form fields."
preview_image: assets/attachments/blog/2022/003-preview.png
layout: blogpost.hbs
slug: 2022-form-js-070-custom-properties
author:
- Beatriz Mendes <https://github.com/smbea>
published: 2022-03-11 15:35

releases:
  - 'form-js@0.7.0'

---

<p class="introduction">
  We're happy to announce the latest release of [form-js](https://github.com/bpmn-io/form-js), our form builder and renderer. This release introduces custom properties for form fields.
</p>

<!-- continue -->


With this form-js release, you can specify custom properties for form fields. You define these properties through the properties panel, and the form editor will export them with the form definition file.

<div class="figure full-size">
  <a href="https://demo.bpmn.io/form">
    <img src="{{ assets }}/attachments/blog/2022/003-custom-properties.gif">
  </a>

  <p class="caption">
    Define custom properties via properties panel.
  </p>
</div>


## Using Custom Properties

You can use custom properties to extend forms in several ways; the classic example is to enrich the form schema before rendering the form.

The following shows how to pre-populate the options of a select field dynamically based on a custom property called `externalData`:

```javascript
const { components } = schema;

for (let i = 0; i < components.length; i++) {

  const field = components[i];
  const {
    properties,
    id,
    type
  } = field;

  if (type === "select" && properties && properties.externalData) {

    // use custom property "externalData" to get external API endpoint
    const endpoint = properties.externalData;
    const res = await preloadData(endpoint, "GET");

    // map API response to field values
    field.values = res.map(option => ({
      value: option.id,
      label: option.name
    }))

  }

}

// render form with enriched schema
form.importSchema(schema);
```

Let's say we want to populate the options of a "Customer" select field with active customers. Using the snippet above, this can be achieved by having an `externalData` property, which value is the API endpoint to be used to retrieve this data.

```javascript
 const schema = {
     ...
    components: [
      {
        label: "Customer",
        type: "select",
        id: "Field_1",
        key: "costumer",
        values: [],
        properties: {
          externalData: "https://mycompany/active-customers"
        }
      }
    ]
    ...
};
```

Checkout the full example [here](https://github.com/bpmn-io/form-js-examples/tree/master/custom-properties).

Try out the new feature [on our demo](https://demo.bpmn.io/form) or using the [form-js playground](https://github.com/bpmn-io/form-js/tree/master/packages/form-js-playground).


## Wrapping Up

Read through the [full changelog](https://github.com/bpmn-io/form-js/blob/master/packages/form-js/CHANGELOG.md#070) to learn about all issues that we addressed with `form-js@0.7.0`.

Did we miss anything? Did you spot a bug, or would you like to suggest an improvement? Reach out to us via [our forums](https://forum.bpmn.io/), tweet us [@bpmn_io](https://twitter.com/bpmn_io) or file an issue you found in [the form-js issue tracker](https://github.com/bpmn-io/form-js/issues).

Get the latest Forms modeling toolkit pre-packaged or as source code via [npm](https://www.npmjs.com/package/@bpmn-io/form-js) or [unpkg](https://unpkg.com/@bpmn-io/form-js).