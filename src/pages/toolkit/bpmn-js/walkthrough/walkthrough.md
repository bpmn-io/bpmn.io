<style>
  h3, .h3 {
    margin-top: 30px;
  }

  h2, .h2 {
    margin-top: 30px;
  }

  blockquote {
    margin-top: 20px;
    border-left-color: #FFB300;
    background: #FFF8E1;
    font-size: inherit;
  }
</style>

<div class="h1 page-header" id="introduction">
  A Quick Introduction
</div>

[bpmn-js](https://github.com/bpmn-io/bpmn-js) is a BPMN 2.0 rendering toolkit and web modeler.
It is written in JavaScript, embeds BPMN 2.0 diagrams into modern browsers and requires no server backend. That makes it easy to embed it into any web application.

The library is built in a way that it can be both a viewer and web modeler. Use the [viewer](https://github.com/bpmn-io/bpmn-js-examples/tree/master/url-viewer) to embed BPMN 2.0 into your applications and [enrich it with your data](https://github.com/bpmn-io/bpmn-js-examples/tree/master/overlays). Use the [modeler](https://github.com/bpmn-io/bpmn-js-examples/tree/master/modeler) to create BPMN 2.0 diagrams inside your application.

This walkthrough will give you an introduction on how to use the library as well as some insights into its internals, i.e. the components that contribute to its highly modular and extensible structure.


<div class="h2 page-header">
  Contents
</div>

* [Using the Library](#using-the-library)
  * [Embed the Viewer (pre-packaged)](#viewer-pre-packaged)
  * [Roll your own Modeler (via npm)](#modeler-npm)
* [Understanding bpmn-js Internals](#bpmn-js-internals)
  * [Diagram Interaction / Modeling (diagram-js)](#diagram-js)
  * [BPMN Meta-Model (bpmn-moddle)](#bpmn-moddle)
  * [Plugging Things together (bpmn-js)](#bpmn-js)
* [Going Further](#going-further)


<div class="h1 page-header" id="using-the-library">
  Using the Library
</div>

There are two approaches to use [bpmn-js](https://github.com/bpmn-io/bpmn-js) in your application.
An all-in-one pre-packaged version of the library allows you to quickly add BPMN to any website.
The [npm](https://www.npmjs.com) version is more complicated to set-up but gives you access to individual library components and allows for easier extensibility.

This section gives you an overview of both approaches.
We start with an introduction on how to embed the pre-packaged version of the BPMN viewer into a website.
Following that, we show how to bundle bpmn-js with your application to create a web-based BPMN editor.


<div class="h2" id="viewer-pre-packaged">
  Embed the Pre-Packaged Viewer
</div>

The [pre-packaged version](https://github.com/bpmn-io/bpmn-js-examples/tree/master/pre-packaged) of bpmn-js allows you to embed BPMN to your website with a simple script include.

Add a container element for the rendered diagram to your website and include the library into the page.

```html
<!-- BPMN diagram container -->
<div id="canvas"></div>

<!-- replace CDN url with local bpmn-js path -->
<script src="https://unpkg.com/bpmn-js/dist/bpmn-viewer.development.js"></script>
```

The included script makes the viewer available via the `BpmnJS` variable. We may access it via JavaScript as shown below.

```html
<script>
  // the diagram you are going to display
  var bpmnXML;

  // BpmnJS is the BPMN viewer instance
  var viewer = new BpmnJS({ container: '#canvas' });

  // import a BPMN 2.0 diagram
  viewer.importXML(bpmnXML, function(err) {
    if (err) {
      // import failed :-(
    } else {
      // we did well!

      var canvas = viewer.get('canvas');
      canvas.zoom('fit-viewport');
    }
  });
</script>
```

The snippet uses the [`Viewer#importXML`](https://github.com/bpmn-io/bpmn-js/blob/master/lib/Viewer.js#L147) API to display a pre-loaded BPMN 2.0 diagram. Importing a diagram is asynchronous and, once finished, the viewer notifies us via a callback about the results.

After import, we may access various diagram services via [`Viewer#get`](https://github.com/bpmn-io/bpmn-js/blob/master/lib/Viewer.js#L246). In the snippet above, we interact with the [`Canvas`](https://github.com/bpmn-io/diagram-js/blob/master/lib/core/Canvas.js#L77) to fit the diagram to the currently available viewport size.

Often times it is more practical to load the BPMN 2.0 diagram dynamically via AJAX.
This can be accomplished using plain JavaScript (as seen below) or via utility libraries such as [jQuery](https://api.jquery.com/jQuery.get), which provide more convenient APIs.

```html
<script>
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      viewer.importXML(xhr.response, function(err) {
        // ...
      });
    }
  };

  xhr.open('GET', 'path-to-diagram.bpmn', true);
  xhr.send(null);
</script>
```

Check out the [pre-packaged example](https://github.com/bpmn-io/bpmn-js-examples/tree/master/pre-packaged) as well as our [starter examples](https://github.com/bpmn-io/bpmn-js-examples/tree/master/starter) to learn more.


<div class="h2" id="modeler-npm">
  Roll Your Own Modeler
</div>

Use bpmn-js via [npm](https://www.npmjs.com) if you would like to build customizations around the library.
This approach has various advantages such as access to individual library components.
It also gives us more control over what to package as part of the viewer / modeler.
However, it requires us to bundle bpmn-js with our application using an ES module aware bundler such as [Webpack](https://webpack.js.org/).

> If you are new to the world of JavaScript bundling follow along our [bundling example](https://github.com/bpmn-io/bpmn-js-examples/tree/master/bundling).

In the remainder of this section we loosely follow the [modeler example](https://github.com/bpmn-io/bpmn-js-examples/tree/master/modeler) to create a web-based BPMN editor.


### Include the Library

First install bpmn-js via [npm](https://www.npmjs.com):

```bash
npm install bpmn-js
```

Then access the BPMN modeler via an ES `import`:

```javascript
import Modeler from 'bpmn-js/lib/Modeler';

// create a modeler
var modeler = new Modeler({ container: '#canvas' });

// import diagram
modeler.importXML(bpmnXML, function(err) {
  // ...
});
```

Again, this assumes you provide an element with the id `canvas` as part of your HTML for the modeler to render into.


### Add Stylesheets

When embedding the modeler into a webpage, include the [diagram-js](https://github.com/bpmn-io/diagram-js) stylesheet as well as the [BPMN icon font](https://github.com/bpmn-io/bpmn-font) with it. Both are shipped with the bpmn-js distribution under the [`dist/assets` folder](https://unpkg.com/bpmn-js/dist/assets/).

```html
<link rel="stylesheet" href="bpmn-js/dist/assets/diagram-js.css" />
<link rel="stylesheet" href="bpmn-js/dist/assets/bpmn-font/css/bpmn.css" />
```

Adding the stylesheets ensures diagram elements receive proper styling as well as context pad and palette entries show BPMN symbols.


### Bundle for the Browser

bpmn-js and its dependencies distribute [ES modules](http://exploringjs.com/es6/ch_modules.html#sec_basics-of-es6-modules).
Use an ES module aware bundler to pack bpmn-js along with your application. Learn more by following along with the [bundling example](https://github.com/bpmn-io/bpmn-js-examples/tree/master/bundling).


### Hook into Life-Cycle Events

Events allow you to hook into the life-cycle of the modeler as well as diagram interaction.
The following snippet shows how changed elements and modeling operations in general can be captured.

```javascript
modeler.on('commandStack.changed', function() {
  // user modeled something or
  // performed an undo/redo operation
});

modeler.on('element.changed', function(event) {
  var element = event.element;

  // the element was changed by the user
});
```

Use [`Viewer#on`](https://github.com/bpmn-io/bpmn-js/blob/master/lib/Viewer.js#L403) to register for events or the [`EventBus`](https://github.com/bpmn-io/diagram-js/blob/master/lib/core/EventBus.js) inside extension modules. Stop listening for events using the [`Viewer#off`](https://github.com/bpmn-io/bpmn-js/blob/master/lib/Viewer.js#L413) method. Check out the [interaction example](https://github.com/bpmn-io/bpmn-js-examples/tree/master/interaction) to see listening for events in action.


### Extend the Modeler

You may use the `additionalModules` option to extend the `Viewer` and [`Modeler`](https://github.com/bpmn-io/bpmn-js/blob/master/lib/Modeler.js) on creation. This allows you to pass custom _modules_ that amend or replace existing functionality.

```javascript
import OriginModule from 'diagram-js-origin';

// create a modeler
var modeler = new Modeler({
  container: '#canvas',
  additionalModules: [
    OriginModule,
    require('./custom-rules'),
    require('./custom-context-pad')
  ]
});
```

A _module_ (cf. [Module System section](#module-system)) is a unit that defines one or more named _services_.
These services configure bpmn-js or provide additional functionality, i.e. by hooking into the diagram life-cycle.

Some modules, such as [diagram-js-origin](https://github.com/bpmn-io/diagram-js-origin) or [diagram-js-minimap](https://github.com/bpmn-io/diagram-js-minimap), provide generic user interface additions.
Built-in bpmn-js modules, such as [bpmn rules](https://github.com/bpmn-io/bpmn-js/blob/master/lib/features/rules) or [modeling](https://github.com/bpmn-io/bpmn-js/tree/master/lib/features/modeling), provide highly BPMN-specific functionality.

One common way to extend the BPMN modeler is to add [custom modeling rules](https://github.com/bpmn-io/bpmn-js-examples/tree/master/custom-modeling-rules).
In doing so, you can limit or extend the modeling operations allowed by the user.

Other examples for extensions are:

* [Adding custom elements](https://github.com/bpmn-io/bpmn-js-examples/tree/master/custom-elements)
* [Custom palette / context pad](https://github.com/bpmn-io/bpmn-js-nyan)
* [Custom shape rendering](https://github.com/bpmn-io/bpmn-js-nyan)

Check out the [bpmn-js-examples project](https://github.com/bpmn-io/bpmn-js-examples) for many more toolkit extension show cases.


### Build a Custom Distribution

If you would like to create your own pre-packaged version of your custom modeler or viewer, refer to the [custom-bundle](https://github.com/bpmn-io/bpmn-js-examples/tree/master/custom-bundle) example.
This could make sense if you carried out heavy customizations that you would like to ship to your users in simple way.


<div class="h1 page-header" id="bpmn-js-internals">
  Understanding bpmn-js Internals
</div>

This section explores some [bpmn-js](https://github.com/bpmn-io/bpmn-js) internals.

As depicted in the architecture diagram below, bpmn-js builds on top of two important libraries: [diagram-js](https://github.com/bpmn-io/diagram-js) and [bpmn-moddle](https://github.com/bpmn-io/bpmn-moddle).

<figure class="bi-img">
  <img src="{{ assets }}/img/toolkit/bpmn-js/walkthrough/overview.svg" alt="bpmn-js architecture: parts and responsibilities" />
  <figcaption>bpmn-js Architecture: Parts and Responsibilities</figcaption>
</figure>

We use [diagram-js](https://github.com/bpmn-io/diagram-js) to draw shapes and connections. It provides us with ways to interact with these graphical elements as well as additional tools such as overlays that help users to build powerful BPMN viewers. For advanced use cases such as modeling it contributes the context pad, palette and facilities like redo/undo.

[bpmn-moddle](https://github.com/bpmn-io/bpmn-moddle) knows about the BPMN 2.0 meta-model defined in the [BPMN 2.0 standard](http://www.omg.org/spec/BPMN/2.0/). It allows us to read and write BPMN 2.0 schema-compliant XML documents and access BPMN-related information behind shapes and connections drawn on the diagram.

On top of these two libraries, bpmn-js defines the BPMN specifics such as look and feel, modeling rules and tooling (i.e. palette). We will go into detail about the individual components in the following paragraphs.


<h2 id="diagram-js">
  Diagram Interaction / Modeling (diagram-js)
</h2>

[diagram-js](https://github.com/bpmn-io/diagram-js) is a toolbox for displaying and modifying diagrams on the web. It allows us to render visual elements and build interactive experiences on top of them.

It provides us with a very simple module system for building features and dependency injection for service discovery. This system also provides a number of core services that implement the diagram essentials.

Additionally, diagram-js defines a data model for graphical elements and their relationships.


### Module System

Under the hood, [diagram-js](https://github.com/bpmn-io/diagram-js) employs dependency injection (DI) to wire and discover diagram components. This mechanism is built on top of [didi](https://github.com/nikku/didi).

When talking about _modules_ in the context of diagram-js, we refer to units that provide named services along with their implementation. A _service_ in that sense is a function or instance that may consume other services to do stuff in the context of the diagram.

The following shows a service that [hooks into life-cycle events](#hooking-into-life-cycle-events).
It does so by registering an event via the `eventBus`, another well-known service:

```javascript
function MyLoggingPlugin(eventBus) {
  eventBus.on('element.changed', function(event) {
    console.log('element ', event.element, ' changed');
  });
}

// ensure the dependency names are still available after minification
MyLoggingPlugin.$inject = [ 'eventBus' ];
```

We must publish the service under a unique name using a module definition:

```javascript
import CoreModule from 'diagram-js/lib/core';

// export as module
export default {
  __depends__: [ CoreModule ], // {2}
  __init__: [ 'myLoggingPlugin' ], // {3}
  myLoggingPlugin: [ 'type', MyLoggingPlugin ] // {1}
};
```

The definition tells the DI infrastructure that the service is called `myLoggingPlugin` `{1}`, that it depends on the diagram-js core module `{2}` and that the service should be initialized upon diagram creation `{3}`. For more details have a look at the [didi documentation](https://github.com/nikku/didi/blob/master/README.md).

We may now bootstrap diagram-js, passing our custom module:

```javascript
import MyLoggingModule from 'path-to-my-logging-module';

var diagram = new Diagram({
  modules: [
    MyLoggingModule
  ]
});
```

To plug in the module into [bpmn-js](https://github.com/bpmn-io/bpmn-js), you would use the `additionalModules` option as shown in the [Extending the Modeler section](#extending-the-modeler).


### Core Services

The [diagram-js core](https://github.com/bpmn-io/diagram-js/tree/master/lib/core) is built around a number of essential services:

* [`Canvas`](https://github.com/bpmn-io/diagram-js/blob/master/lib/core/Canvas.js) - provides APIs for adding and removing graphical elements; deals with element life cycle and provides APIs to zoom and scroll.

* [`EventBus`](https://github.com/bpmn-io/diagram-js/blob/master/lib/core/EventBus.js) - the library's global communication channel with a *fire and forget* policy. Interested parties can subscribe to various events and act upon them once they are emitted. The event bus helps us to decouple concerns and to modularize functionality so that new features can hook up easily with existing behavior.

* [`ElementFactory`](https://github.com/bpmn-io/diagram-js/blob/master/lib/core/ElementFactory.js) - a factory for creating shapes and connections according to diagram-js' internal data model.

* [`ElementRegistry`](https://github.com/bpmn-io/diagram-js/blob/master/lib/core/ElementRegistry.js) - knows all elements added to the diagram and provides APIs to retrieve the elements and their graphical representation by _id_.

* [`GraphicsFactory`](https://github.com/bpmn-io/diagram-js/blob/master/lib/core/GraphicsFactory.js) - responsible for creating graphical representations of shapes and connections. The actual look and feel is defined by renderers, i.e. the [`DefaultRenderer`](https://github.com/bpmn-io/diagram-js/blob/master/lib/draw/DefaultRenderer.js) inside the [draw module](https://github.com/bpmn-io/diagram-js/tree/master/lib/draw).


### Data Model

Under the hood, diagram-js implements a simple data model consisting of shapes and connections.

<figure class="bi-img">
  <img src="{{ assets }}/img/toolkit/bpmn-js/walkthrough/data-model.png" alt="diagram-js data model: shapes and connections" style="max-width: 500px" />
  <figcaption>Data Model Essentials: Shapes and Connections</figcaption>
</figure>

A _shape_ has a parent, a list of children as well as a list of incoming and outgoing _connections_.

A _connection_ has a parent as well as a source and target, pointing to a _shape_.

The [`ElementRegistry`](https://github.com/bpmn-io/diagram-js/blob/master/lib/core/ElementRegistry.js) is responsible for creating shapes and connections [according to that model](https://github.com/bpmn-io/diagram-js/blob/master/lib/model/index.js).
During modeling, element relationships will be updated according to user operations by the [`Modeling` service](https://github.com/bpmn-io/diagram-js/blob/master/lib/features/modeling/Modeling.js).


### Auxiliary Services (i.e. the Toolbox)

Aside from the data model and its core services, diagram-js provides a rich toolbox of additional helpers.

* [`CommandStack`](https://github.com/bpmn-io/diagram-js/blob/master/lib/command/CommandStack.js) - responsible for redo and undo during modeling.
* [`ContextPad`](https://github.com/bpmn-io/diagram-js/blob/master/lib/features/context-pad/ContextPad.js) - provides contextual actions around an element.
* [`Overlays`](https://github.com/bpmn-io/diagram-js/blob/master/lib/features/overlays/Overlays.js) - provides APIs for attaching additional information to diagram elements.
* [`Modeling`](https://github.com/bpmn-io/diagram-js/blob/master/lib/features/modeling/Modeling.js) - provides APIs for updating elements on the canvas (moving, deleting)
* [`Palette`](https://github.com/bpmn-io/diagram-js/blob/master/lib/features/palette/Palette.js)
* ...


Let's move on to the BPMN magic that is happening behind the scenes.

<h2 id="bpmn-moddle">
  BPMN Meta-Model (bpmn-moddle)
</h2>

[bpmn-moddle](https://github.com/bpmn-io/bpmn-moddle) encapsulates the BPMN 2.0 meta-model and provides us with facilities to read and write BPMN 2.0 XML documents.
On import, it parses the XML document into a JavaScript object tree.
That tree is edited and validated during modeling and then exported back to BPMN 2.0 XML once the user wishes to save the diagram.
Because bpmn-moddle encapsulates knowledge about BPMN, we are able to validate during import and modeling. Based on the results, we can constrain certain modeling actions and output helpful error messages and warnings to the user.

Much like [bpmn-js](https://github.com/bpmn-io/bpmn-js), the foundations of [bpmn-moddle](https://github.com/bpmn-io/bpmn-moddle) are built on top of two libraries:

* [moddle](https://github.com/bpmn-io/moddle) which offers a concise way to define [meta-models](https://en.wikipedia.org/wiki/Metamodeling) in JavaScript
* [moddle-xml](https://github.com/bpmn-io/moddle-xml) which reads and writes XML documents based on [moddle](https://github.com/bpmn-io/moddle)

In essence [bpmn-moddle](https://github.com/bpmn-io/bpmn-moddle) adds the BPMN spec as a meta-model and offers a simple interface for BPMN schema validation. From the library perspective it provides the following API:

* [`fromXML`](https://github.com/bpmn-io/bpmn-moddle/blob/master/lib/bpmn-moddle.js#L38) - create a BPMN tree from a given XML string
* [`toXML`](https://github.com/bpmn-io/bpmn-moddle/blob/master/lib/bpmn-moddle.js#L65) - write a BPMN object tree to BPMN 2.0 XML

The BPMN meta-model is essential for bpmn-js, as it allows us to validate BPMN 2.0 documents we consume, provide proper modeling rules and export valid BPMN documents that _all_ compliant BPMN modelers can understand.

<h2 id="bpmn-js">
  Plugging Things Together (bpmn-js)
</h2>

We learned [bpmn-js](https://github.com/bpmn-io/bpmn-js) is built on top of [diagram-js](https://github.com/bpmn-io/diagram-js) and [bpmn-moddle](https://github.com/bpmn-io/bpmn-moddle). It ties both together and adds the BPMN look and feel. This includes a BPMN palette, BPMN context pad as well as BPMN 2.0 specific rules. In this section, we'll be explaining how that works in different phases of modeling.


When we import a BPMN 2.0 document, it is parsed from XML into an object tree by [bpmn-moddle](https://github.com/bpmn-io/bpmn-moddle). bpmn-js renders all visible elements of that tree, i.e. it creates the respective shapes and connections on the canvas. Thereby it ties both the BPMN elements and the graphical elements together.
This results in a structure, as shown below, for a start event shape.

```javascript
{
  id: 'StartEvent_1',
  x: 100,
  y: 100,
  width: 50,
  height: 50,
  businessObject: {
    $attrs: Object
    $parent: {
      $attrs: Object
      $parent: ModdleElement
      $type: 'bpmn:Process'
      flowElements: Array[1]
      id: 'Process_1'
      isExecutable: false
    }
    $type: 'bpmn:StartEvent'
    id: 'StartEvent_1'
  }
}
```

You may access the underlying BPMN type from each graphical element via the `businessObject` property.


[bpmn-js](https://github.com/bpmn-io/bpmn-js) also knows how each BPMN element looks like thanks to the [`BpmnRenderer`](https://github.com/bpmn-io/bpmn-js/blob/master/lib/draw/BpmnRenderer.js).
By plugging into the render cycle, you may also define custom representations of individual BPMN elements.


We can start modeling once the importing is done.
We use rules to allow or disallow certain modeling operations.
These rules are defined by [`BpmnRules`](https://github.com/bpmn-io/bpmn-js/blob/master/lib/features/rules/BpmnRules.js).
We base these rules on the BPMN 2.0 standard as defined by the [OMG](http://www.omg.org/).
However as mentioned earlier, others may also hook up with the rule evaluation to contribute different behavior.

The [modeling module](https://github.com/bpmn-io/bpmn-js/tree/master/lib/features/modeling) bundles BPMN 2.0 related modeling functionality.
It adds BPMN 2.0 specific modeling behaviors and is responsible for updating the BPMN 2.0 document tree with every modeling operation carried out by the user (cf. [`BpmnUpdater`](https://github.com/bpmn-io/bpmn-js/blob/master/lib/features/modeling/BpmnUpdater.js)).
Check it out to get a deeper insight into rules, behaviors and the BPMN update cycle.

When looking at bpmn-js purely from the library perspective, it's worth mentioning it can be used in three variants:

* [`Viewer`](https://github.com/bpmn-io/bpmn-js/blob/master/lib/Viewer.js) to display diagrams
* [`NavigatedViewer`](https://github.com/bpmn-io/bpmn-js/blob/master/lib/NavigatedViewer.js) to display and navigate BPMN diagrams
* [`Modeler`](https://github.com/bpmn-io/bpmn-js/blob/master/lib/Modeler.js) to model BPMN diagrams

The only difference between the versions is that they bundle a different set of functionality.
The [`NavigatedViewer`](https://github.com/bpmn-io/bpmn-js/blob/master/lib/NavigatedViewer.js) adds modules for navigating the canvas and the [`Modeler`](https://github.com/bpmn-io/bpmn-js/blob/master/lib/Modeler.js) adds a whole lot of functionality for creating, editing and interacting with elements on the canvas.


<div class="h1 page-header" id="going-further">
  Going Further
</div>

In the first part of this walkthrough, we focused on using bpmn-js as a BPMN viewer as well as a modeler.
This should have given you a good understanding of the toolkit from the library perspective.

In the second part, we focused on bpmn-js internals. We presented diagram-js as well as bpmn-moddle, the two foundations bpmn-js is built upon and gave you an overview of how bpmn-js plugs all of these together.

There exists a number of additional resources that allow you to progress further:

* [Examples](https://github.com/bpmn-io/bpmn-js-examples) - numerous examples that showcase how to embed and extend bpmn-js.
* Source Code ([bpmn-js](https://github.com/bpmn-io/bpmn-js), [diagram-js](https://github.com/bpmn-io/diagram-js)) - mostly well documented; should give you great insights into the library's internals.
* [Forum](https://forum.bpmn.io/c/developers) - a good place to get help for using and extending bpmn-js.


Was there anything that we could have explained better / you got stuck with? [Propose an improvement](https://github.com/bpmn-io/bpmn.io/edit/master/src/pages/toolkit/bpmn-js/walkthrough/walkthrough.md) to this document or tell us about it in our [forums](https://forum.bpmn.io).
