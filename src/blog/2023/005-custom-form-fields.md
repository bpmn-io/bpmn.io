---

title: Create custom form components
description: "Introducing newest form-js extension capabilities to create custom form components."
preview_image: http://bpmn.io/assets/attachments/blog/2023/005-range-validate.png
layout: blogpost.hbs
slug: 2023-custom-form-components
author:
- Niklas Kiefer <https://github.com/pinussilvestrus>
published: 2023-11-01 18:00

releases:
  - 'form-js@1.4.0'

---

<p class="introduction">
  We are excited to inform you about the latest [form-js](https://github.com/bpmn-io/form-js) improvements that add new extension capabilities to create custom form components. It is easier now to use existing form-js components in your custom renderers and provide properties panel extensions.
</p>

<!-- continue -->

The ability to create custom form components was [a long-awaited feature](https://github.com/bpmn-io/form-js/issues/123). With the recent form-js@1.4.0 release, we added extension features to the toolkit in the nature of common bpmn-io extension patterns.

Check out [our example](https://github.com/bpmn-io/form-js-examples/tree/master/custom-components) to gather more insights about the new extension capabilities.

## Define a custom form component renderer

Creating and registering custom form components with a [Preact](https://github.com/preactjs/preact) component was already possible. It is now also possible to use existing core form-js components in the renderer.

```javascript
import {
  Errors,
  Description,
  Label
} from '@bpmn-io/form-js';

import {
  html
} from 'diagram-js/lib/ui';

export function RangeRenderer(props) {

  // ...

  return html`<div class="my-component-wrapper">
    <${Label}
      id=${ prefixId(id, formId) }
      label=${ label } />
    <div class="my-form-component">
      // ...
    </div>
    <${Description} description=${ description } />
    <${Errors} errors=${ errors } id=${ errorMessageId } />
  </div>`;
}
```

<div class="figure full-size">
  <a href="https://demo.bpmn.io/form">
    <img src="{{ assets }}/attachments/blog/2023/005-range-validate.png" alt="The custom range component in the form viewer.">
  </a>

  <p class="caption">
    Render a custom range component into the form viewer.
  </p>
</div>

We also added new options to a form field `config` object. For example, you can now define the default properties panel entries that should be shown in the form editor. You can also specify an icon for the form component.

```javascript
import {
  Numberfield
} from '@bpmn-io/form-js';

RangeRenderer.config = {

  /* we can even extend the configuration of existing fields */
  ...Numberfield.config,
  type: rangeType,
  label: 'Range',
  iconUrl: `data:image/svg+xml,${ encodeURIComponent(RangeIcon) }`,
  propertiesPanelEntries: [
    'key',
    'label',
    'description',
    'min',
    'max',
    'disabled',
    'readonly'
  ]
};
```

That's all! The component library and properties panel will be automatically updated with the new form component, and the renderer will take over the rendering of the form component.

<div class="figure full-size">
  <a href="https://demo.bpmn.io/form">
    <img src="{{ assets }}/attachments/blog/2023/005-range-palette.png" alt="The component library with the custom range component">
  </a>

  <p class="caption">
    The custom range component gets populated into the component library.
  </p>
</div>


<div class="figure condensed-size">
  <a href="https://demo.bpmn.io/form">
    <img src="{{ assets }}/attachments/blog/2023/005-range-properties.png" alt="The properties panel with default entries for the custom range component">
  </a>

  <p class="caption">
    Re-use existing properties entries.
  </p>
</div>

Please find out more about [rendering extensions](https://github.com/bpmn-io/form-js-examples/tree/master/custom-components#add-a-custom-form-component-renderer) in our dedicated example. 


## Create a properties panel extension

We added the ability to extend the properties panel with custom entries. We mirrored the [proven provider architecture](https://bpmn.io/blog/posts/2022-new-properties-panel-foundation.html) of other bpmn.io properties panel libraries.

Next to the `propertiesPanelEntries` we described above, you can create a properties provider that can add, remove, and modify existing entries.

```javascript 
export class CustomPropertiesProvider {
  constructor(propertiesPanel) {
    propertiesPanel.registerProvider(this, 500);
  }

  getGroups(field, editField) {

    ...
    return (groups) => {

      if (field.type !== 'range') {
        return groups;
      }

      const generalIdx = findGroupIdx(groups, 'general');

      groups.splice(generalIdx + 1, 0, {
        id: 'range',
        label: 'Range',
        entries: RangeEntries(field, editField)
      });

      return groups;
    };
  }
}
```

<div class="figure full-size">
  <a href="https://demo.bpmn.io/form">
    <img src="{{ assets }}/attachments/blog/2023/005-range-custom-entries.png" alt="Custom properties panel entries for the range component">
  </a>

  <p class="caption">
    Custom properties panel entries for the range component.
  </p>
</div>

Find out more about [properties panel extensions](https://github.com/bpmn-io/form-js-examples/tree/master/custom-components#add-custom-properties-panel-entries) in our dedicated example.


## Plugging everything together

You can plug your custom modules into the different form-js components as `viewerAdditionalModules` and `editorAdditionalModules`. With the latest release, we also added the `additionalModules` option that allows you to provide extensions to both simultaneously, for example, the renderer.


```javascript
import { FormPlayground } from '@bpmn-io/form-js';

new FormPlayground({
  container,
  schema,
  data,
  additionalModules: [
    RenderExtension
  ],
  editorAdditionalModules: [
    PropertiesPanelExtension
  ]
});
```

## Wrapping Up

We'd love to hear your feedback on the new extension capabilities. We are looking forward to seeing what you build upon the new features!

Did we miss anything? Did you spot a bug, or would you like to suggest an improvement? Reach out to us via [our forums](https://forum.bpmn.io/), tweet us [@bpmn_io](https://twitter.com/bpmn_io), or file an issue you found in [the form-js issue tracker](https://github.com/bpmn-io/form-js/issues).

Get the latest Forms modeling toolkit pre-packaged or as source code via [npm](https://www.npmjs.com/package/@bpmn-io/form-js) or [unpkg](https://unpkg.com/@bpmn-io/form-js).