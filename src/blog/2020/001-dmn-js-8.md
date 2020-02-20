---

title: DMN 1.3 Support in dmn-js
layout: blogpost.hbs

slug: 2020-dmn-js-8-0-0
author: Philipp Fromme<https://github.com/philippfromme>

published: 2020-02-20 12:00

releases:
  - 'dmn-js@8.0.0'

---


<p class="introduction">
  We are excited to announce the latest release of our [DMN modeling toolkit](https://github.com/bpmn-io/dmn-js). The release supports DMN 1.3, the next version of the DMN standard. Facilitating the latest DMN features, we now export graphical information in a standardized format. Along with this release, we introduce a migration path that allows you to open DMN 1.1 diagrams using the toolkit or batch migrate all your DMN 1.1 diagrams to DMN 1.3.
</p>

<!-- continue -->

Since DMN 1.2, the standard defines diagram interchange (DMN DI), a standardized way to specify graphical information of diagrams. In DMN 1.1, that capability was missing, so older versions of our toolkit represented graphical information via a vendor extension.

Starting with `dmn-js@8`, we read and write DMN 1.3 files and use the DMN standard facilities access graphical information:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<definitions
  xmlns="https://www.omg.org/spec/DMN/20191111/MODEL/"
  xmlns:dmndi="https://www.omg.org/spec/DMN/20191111/DMNDI/"
  xmlns:dc="http://www.omg.org/spec/DMN/20180521/DC/"
  id="Definitions_1"
  name="Definitions_1">
  <decision id="Decision_1" name="Decision_1" />
  <dmndi:DMNDI>
    <dmndi:DMNDiagram id="DMNDiagram_0docyxs">
      <dmndi:DMNShape id="DMNShape_1gx1owo" dmnElementRef="Decision_1">
        <dc:Bounds height="80" width="180" x="100" y="100" />
      </dmndi:DMNShape>
    </dmndi:DMNDiagram>
  </dmndi:DMNDI>
</definitions>
```

Check out [this diff](https://gist.github.com/nikku/1b5bbb3ea929d2f64e5338fe6fe8b57b/revisions
) for a before-after comparison. Try out modeling DMN 1.3 [on our demo](https://demo.bpmn.io/dmn/s/check-order).


## Opening DMN 1.1 and DMN 1.2 Files

As a significant, breaking change, __the library reads and writes DMN 1.3 files only__.

We provide a migration utility, [`@bpmn-io/dmn-migrate`](https://github.com/bpmn-io/dmn-migrate) that transforms a valid DMN 1.1 diagram, including our custom DI extension into valid and standards-compliant DMN 1.3.

To open older DMN files (DMN 1.1, DMN 1.2), use the utility as a pre-processor:

```javascript
import { migrateDiagram } from '@bpmn-io/dmn-migrate';

// migrate diagram to DMN 1.3, if it is an older DMN version file
const dmn13XML = await migrateDiagram(dmnXML);

// open DMN 1.3 diagram
dmnJS.importXML(dmn13XML);
```

During export, the library will produce DMN 1.3 diagrams:

```javascript
// export DMN 1.3 diagram
dmnJS.saveXML((err, xml) => {

  // xml => DMN 1.3 XML file
});
```

We will update the `@bpmn-io/dmn-migrate` utility to support upcoming DMN standards, as they get supported by the DMN toolkit.

To learn more about how to retain DMN 1.1 and DMN 1.2 file opening compatibility, checkout the [DMN compatibility example](https://github.com/bpmn-io/dmn-js-examples/tree/master/dmn-compatibility).


## Batch Migrating Diagrams to DMN 1.3

You may migrate your local DMN diagrams to DMN 1.3 by using the [`@bpmn-io/dmn-migrate-cli`](https://github.com/bpmn-io/dmn-migrate-cli) command-line tool:

```shell
> npx @bpmn-io/dmn-migrate-cli -o migrated/ '**/*.dmn'
Converted /diagrams/dish.dmn -> /migrated/diagrams/dish.dmn
Converted /diagrams/two-eyes.dmn -> /migrated/diagrams/two-eyes.dmn
Done.
```

The tool supports both single diagram and batch migration.

Of course, one-off diagram migration will only work if you are in full control of the DMN diagrams fed into dmn-js.


## Wrapping Up

Read through the [full changelog](https://github.com/bpmn-io/dmn-js/blob/develop/packages/dmn-js/CHANGELOG.md) to learn about all issues that we addressed with `dmn-js@8` as well as breaking changes that may require your action during the upgrade.

Did we miss anything? Did you spot a bug, or would you like to suggest an improvement? Reach out to us via [our forums](https://forum.bpmn.io), tweet us [@bpmn_io](https://twitter.com/bpmn_io) or file an issue you found in [the dmn-js issue tracker](https://github.com/bpmn-io/dmn-js/issues).

Get the latest DMN toolkit pre-packaged or as source code via [npm](https://www.npmjs.com/package/dmn-js) or [unpkg](https://unpkg.com/dmn-js/).
