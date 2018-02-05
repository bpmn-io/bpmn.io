<div class="h1 page-header" id="introduction">
  A Quick Introduction
</div>

[bpmn-js](https://github.com/bpmn-io/bpmn-js) is a BPMN 2.0 rendering toolkit and web modeler.
It is written in JavaScript, embeds BPMN 2.0 diagrams into modern browsers and requires no server backend. That makes it easy to embed it into any web application.

The library is built in a way that it can be both a viewer and web modeler. Use the [viewer](https://github.com/bpmn-io/bpmn-js-examples/tree/master/url-viewer) to embed BPMN 2.0 into your applications and [enrich it with your data](https://github.com/bpmn-io/bpmn-js-examples/tree/master/overlays). Use the [modeler](https://github.com/bpmn-io/bpmn-js-examples/tree/master/modeler) to create BPMN 2.0 diagrams inside your application.

This walkthrough will give you an introduction how to use the library and some insights into its internals, i.e. the components that contribute to its highly modular and extensible structure.


<div class="h2 page-header">
  Contents
</div>

* [Using the Library](#using-the-library)
  * [Embed the Viewer (pre-packaged)](#viewer-pre-packaged)
  * [Roll your own Modeler (via npm)](#modeler-npm)
* [Understanding bpmn-js Internals](#bpmn-js-internals)
  * [Diagram Interaction / Modeling (diagram-js)](diagram-js)
  * [BPMN Meta-Model (bpmn-moddle)](#bpmn-moddle)
  * [Plugging Things together (bpmn-js)](#bpmn-js)
* [Going Further](#going-further)


<div class="h1 page-header" id="using-the-library">
  Using the Library
</div>

There are two approaches to use [bpmn-js](https://github.com/bpmn-io/bpmn-js) in your application.
An all-in-one pre-packaged version of the library allows you to quickly add BPMN to any website.
The [npm](https://www.npmjs.com) version is more complicated to set-up but gives you access to individual library components and allows for easier extensibility.

This section gives you an overview over both approaches.
We start with an introduction how to embed the pre-packaged version of the BPMN viewer into a website.
Following that we will show how to create a BPMN modeler using the npm version of the library.


<div class="h2" id="viewer-pre-packaged">
  Embed the Viewer (pre-packaged)
</div>

<<<<<<< HEAD
The pre-packaged version of bpmn-js allows you to embed BPMN to your website with a simple script include.
Fetch bpmn-js via [Bower](http://bower.io) or downloading it yourself from the [bower-bpmn-js repository](https://github.com/bpmn-io/bower-bpmn-js).
=======
The [pre-packaged version](https://github.com/bpmn-io/bpmn-js-examples/tree/master/pre-packaged) of bpmn-js allows you to embed BPMN to your website with a simple script include.
>>>>>>> d7b25ce... chore(toolkit/bpmn-js): remove bower from walkthrough

Add a container element for the rendered diagram to your website and include the library into the page.

```html
<!-- BPMN diagram container -->
<div id="canvas"></div>

<!-- replace CDN url with local bpmn-js path -->
<script src="https://unpkg.com/bpmn-js@0.27.0-1/dist/bpmn-viewer.development.js"></script>
```

The included script makes the viewer available via the `BpmnJS` variable. We may access it via JavaScript as seen below.

```html
<script>
  // the diagram we are going to display
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

The snipped uses the [`Viewer#importXML`](https://github.com/bpmn-io/bpmn-js/blob/master/lib/Viewer.js#L147) API to display a pre-loaded BPMN 2.0 diagram. Importing a diagram is asynchronous and, once finished, the viewer notifies us via a callback about the results.

After import we may access various diagram services via [`Viewer#get`](https://github.com/bpmn-io/bpmn-js/blob/master/lib/Viewer.js#L246). In the snippet above we interact with the [`Canvas`](https://github.com/bpmn-io/diagram-js/blob/master/lib/core/Canvas.js#L77) to fit the diagram to the currently available viewport size.

Often times it is more practical to load the BPMN 2.0 diagram dynamically via AJAX.
This can be accomplished using plain JavaScript (as seen below) or via utility libraries such as [jQuery](https://api.jquery.com/jQuery.get) that provide more convenient APIs.

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

Checkout the [pre-packaged example](https://github.com/bpmn-io/bpmn-js-examples/tree/master/pre-packaged) as well as our [starter examples](https://github.com/bpmn-io/bpmn-js-examples/tree/master/starter) to learn more.


<div class="h2" id="modeler-npm">
  Roll your own Modeler (via npm)
</div>

Use bpmn-js via [npm](https://www.npmjs.com) if you would like to build customizations around the library.
This approach has various advantages such as access to individual library components.
It also gives us more control over what to package as part of the viewer / modeler.
However, it requires us to bundle the custom bpmn-js variant for the web using [Browserify](http://browserify.org) or [Webpack](https://webpack.github.io) ourselves.

Here we are loosely following the [modeler example](https://github.com/bpmn-io/bpmn-js-examples/tree/master/modeler) to create a BPMN modeler using the library.
In a first step we are going to install it into our project via [npm](https://www.npmjs.com):

```bash
npm install bpmn-js
```

Following that we are able to access the BPMN modeler via [Node.js](https://nodejs.org/)'s `require`:

```javascript
var Modeler = require('bpmn-js/lib/Modeler');

// create a modeler
var modeler = new Modeler({ container: '#canvas' });

// import diagram
modeler.importXML(bpmnXML, function(err) {
  // ...
});
```

Again, this assumes you provide an element with the id `canvas` as part of your HTML for the modeler to render into.

When embedding the modeler into a webpage include the [diagram-js stylesheet](https://github.com/bpmn-io/diagram-js/blob/master/assets/diagram-js.css) as well as the [BPMN icon font](https://github.com/bpmn-io/bpmn-js/tree/master/assets/bpmn-font) with it. This ensures that diagram elements receive proper styling and context pad as well as palette entries show BPMN symbols.

```html
<link rel="stylesheet" href="vendor/diagram-js/diagram-js.css" />
<link rel="stylesheet" href="vendor/bpmn-font/css/bpmn-embedded.css" />
```

### Extending the Modeler

The [`Modeler`](https://github.com/bpmn-io/bpmn-js/blob/master/lib/Modeler.js) constructor gives us the ability to pass in additional modules via the `additionalModules` option.

```javascript
// create a modeler
var modeler = new Modeler({
  container: '#canvas',
  additionalModules: [
    require('./custom-rules'),
    require('./custom-context-pad')
  ]
});
```

Simply speaking modules are units of functionality (cf. [Module System](#module-system)). They hook into the diagrams life cycle and contribute functionality encapsulated in named services to bpmn-js. As an example the [bpmn rules module](https://github.com/bpmn-io/bpmn-js/blob/master/lib/features/rules) provides BPMN specific modeling rules.

One obvious way of exploiting this is to define [custom modeling rules](https://github.com/bpmn-io/bpmn-js-examples/tree/master/custom-modeling-rules).
Doing so you are able to limit the modeling operations allowed by the user. Or you allow more to implement a less restrictive variant of the BPMN 2.0 standard.

Other examples for extensions are:

* [Adding custom elements](https://github.com/bpmn-io/bpmn-js-examples/tree/master/custom-elements)
* [Custom palette / context pad](https://github.com/bpmn-io/bpmn-js-nyan)
* [Custom shape rendering](https://github.com/bpmn-io/bpmn-js-nyan)


### Hooking into Life-Cycle Events

Events allow you to hook into the life-cycle of the modeler as well as diagram interaction.
The following snipped shows how changed elements and modeling operations in general can be captured.

```javascript
modeler.on('commandStack.changed', function() {
  // user modeled something or
  // performed a undo/redo operation
});

modeler.on('element.changed', function(event) {
  var element = event.element;

  // the element got changed by the users
});
```

Use [`Viewer#on`](https://github.com/bpmn-io/bpmn-js/blob/master/lib/Viewer.js#L365) to register for events or the [`EventBus`](https://github.com/bpmn-io/diagram-js/blob/master/lib/core/EventBus.js) inside extension modules.

The [modeler example](https://github.com/bpmn-io/bpmn-js-examples/tree/master/modeler) covers all necessary steps needed to consume bpmn-js via npm and create a BPMN editor application around it. This includes additional steps needed for bundling the application for the browser.

If you would like to create your own pre-packaged version of your custom modeler refer to the [custom-bundle](https://github.com/bpmn-io/bpmn-js-examples/tree/master/custom-bundle) example.


<div class="h1 page-header" id="bpmn-js-internals">
  Understanding bpmn-js Internals
</div>

This section explores some [bpmn-js](https://github.com/bpmn-io/bpmn-js) internals.
Have a look at the improvised architecture diagram shown below.
As depicted bpmn-js builds on top of two libraries: diagram-js and bpmn-moddle.

<figure class="bi-img">
  <img src="{{ assets }}/img/toolkit/bpmn-js/walkthrough/overview.svg" alt="bpmn-js architecture: parts and responsibilities" />
  <figcaption>bpmn-js Architecture: Parts and Responsibilities</figcaption>
</figure>

We use [diagram-js](https://github.com/bpmn-io/diagram-js) to draw shapes and connections. It provides us with ways to interact with these graphical elements as well as additional tools such as overlays that help users to build powerful BPMN viewers. For advanced use cases such as modeling it contributes the context pad, palette and facilities like redo/undo.

[bpmn-moddle](https://github.com/bpmn-io/bpmn-moddle) knows about the BPMN 2.0 meta-model defined in the [BPMN 2.0 standard](http://www.omg.org/spec/BPMN/2.0/). It allows us to read and write BPMN 2.0 schema compliant XML documents and access BPMN related information behind shapes and connections drawn on the diagram.

On top of these two libraries bpmn-js defines the BPMN specifics such as look and feel, modeling rules and tooling (i.e. palette). We will go into detail about the individual components in the following paragraphs.


<h2 id="diagram-js">
  Diagram Interaction / Modeling (diagram-js)
</h2>

[diagram-js](https://github.com/bpmn-io/diagram-js) is a toolbox for displaying and modifying diagrams on the web. It allows us to render visual elements and build interactive experiences on top of them.

It provides us with a very simple module system for building features and dependency injection for service discovery. As part of that system it provides a number of core services that implement the diagram essentials.

On top of that diagram-js defines a data model for graphical elements and their relationships.


### Module System

*To be documented*


### Core Services

The [diagram-js core](https://github.com/bpmn-io/diagram-js/tree/master/lib/core) is built around a number of essential services:

* [`Canvas`](https://github.com/bpmn-io/diagram-js/blob/master/lib/core/Canvas.js) - provides APIs for adding and removing graphical elements; deals with element life cycle and provides APIs to zoom and scroll scrolling.

* [`EventBus`](https://github.com/bpmn-io/diagram-js/blob/master/lib/core/EventBus.js) - the libraries global communication channel with a *fire and forget* policy. Interested parties can subscribe to various events and act upon them once they are emitted. The event bus helps us to decouple concerns and to modularize functionality so that new features can hook up easily with existing behavior.

* [`ElementFactory`](https://github.com/bpmn-io/diagram-js/blob/master/lib/core/ElementFactory.js) - a factory for creating shapes and connections according to diagram-js internal data model.

* [`ElementRegistry`](https://github.com/bpmn-io/diagram-js/blob/master/lib/core/ElementRegistry.js) - knows all elements added to the diagram and provides APIs to retrieve the elements and their graphical representation by _id_.

* [`GraphicsFactory`](https://github.com/bpmn-io/diagram-js/blob/master/lib/core/GraphicsFactory.js) - responsible to create graphical representations for shapes and connections. The actual look and feel is defined by renderers, i.e. the [`DefaultRenderer`](https://github.com/bpmn-io/diagram-js/blob/master/lib/draw/DefaultRenderer.js) inside the [draw module](https://github.com/bpmn-io/diagram-js/tree/master/lib/draw).


### Data Model

Underlying diagram-js is a simple data model consisting of shapes and connections.

<figure class="bi-img">
  <img src="{{ assets }}/img/toolkit/bpmn-js/walkthrough/data-model.png" alt="diagram-js data model: shapes and connections" style="max-width: 500px" />
  <figcaption>Data Model Essentials: Shapes and Connections</figcaption>
</figure>

A _shape_ has a parent, a list of children as well as a list of incoming and outgoing _connections_.

A _connection_ has a parent as well as a source and target, pointing to a _shape_.

The [`ElementRegistry`](https://github.com/bpmn-io/diagram-js/blob/master/lib/core/ElementRegistry.js) is responsible for creating shapes and connections [according to that model](https://github.com/bpmn-io/diagram-js/blob/master/lib/model/index.js).
During modeling element relationships will be update according to user operations by the [`Modeling` service](https://github.com/bpmn-io/diagram-js/blob/master/lib/features/modeling/Modeling.js).


### Auxilary Services (i.e. the Toolbox)

Around the data model as well as its core services diagram-js provides a rich toolbox of additional helpers.

* [`CommandStack`](https://github.com/bpmn-io/diagram-js/blob/master/lib/command/CommandStack.js) - responsible for redo and undo during modeling.
* [`ContextPad`](https://github.com/bpmn-io/diagram-js/blob/master/lib/features/context-pad/ContextPad.js) - provides contextual actions around an element.
* [`Overlays`](https://github.com/bpmn-io/diagram-js/blob/master/lib/features/overlays/Overlays.js) - provides APIs for attaching additional information to diagram elements.
* [`Modeling`](https://github.com/bpmn-io/diagram-js/blob/master/lib/features/modeling/Modeling.js) - provides APIs for updating elements on the canvas (moving, deleting)
* [`Palette`](https://github.com/bpmn-io/diagram-js/blob/master/lib/features/palette/Palette.js)
* ...


Let's move on to the BPMN magic that is happening behind the scenes.


## BPMN Meta-Model (bpmn-moddle)

[bpmn-moddle](https://github.com/bpmn-io/bpmn-moddle) encapsulates the BPMN 2.0 meta-model and provides us with facilities to read and write BPMN 2.0 XML documents.
On import it parses the XML document into a JavaScript object tree.
That tree is edited and validated during modeling and then exported back to BPMN 2.0 XML once the user wishes to save the diagram.
Because bpmn-moddle encapsulates knowledge about BPMN we are able to validate during import and modeling. Based on the results we can constrain certain modeling actions and output helpful error messages and warnings to the user.

Much like [bpmn-js](https://github.com/bpmn-io/bpmn-js), the foundations of [bpmn-moddle](https://github.com/bpmn-io/bpmn-moddle) are based on top of two libraries:

* [moddle](https://github.com/bpmn-io/moddle) which offers a concise way to define [meta-models](https://en.wikipedia.org/wiki/Metamodeling) in JavaScript
* [moddle-xml](https://github.com/bpmn-io/moddle-xml) which reads and writes XML documents based on [moddle](https://github.com/bpmn-io/moddle)

In essence [bpmn-moddle](https://github.com/bpmn-io/bpmn-moddle) adds the BPMN spec as a meta-model and offers a simple interface for BPMN schema validation. From the library perspective it provides the following API:

* [`fromXML`](https://github.com/bpmn-io/bpmn-moddle/blob/master/lib/bpmn-moddle.js#L38) - create a BPMN tree from a given XML string
* [`toXML`](https://github.com/bpmn-io/bpmn-moddle/blob/master/lib/bpmn-moddle.js#L65) - write a BPMN object tree to BPMN 2.0 XML

The BPMN meta-model is an essential for bpmn-js, as it allows us to validate BPMN 2.0 documents we consume, provide proper modeling rules and export valid BPMN documents that _all_ compliant BPMN modelers can understand.


## Plugging Things together (bpmn-js)

We learned [bpmn-js](https://github.com/bpmn-io/bpmn-js) is build on top of [diagram-js](https://github.com/bpmn-io/diagram-js) and [bpmn-moddle](https://github.com/bpmn-io/bpmn-moddle). It ties both together and adds the BPMN look and feel. This includes a BPMN palette, BPMN context pad as well as BPMN 2.0 specific rules. In this section, we'll be explaining how that works in different phases of modeling.


When we import a BPMN 2.0 document, it is parsed by [bpmn-moddle](https://github.com/bpmn-io/bpmn-moddle) from XML into an object tree. bpmn-js renders all visible elements of that tree, i.e. it creates the respective shapes and connections on the canvas. Thereby it ties both the BPMN elements and the graphical elements together.
This results into a structure as shown below for a start event shape.

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

From each graphical element you may access the underlying BPMN type via the `businessObject` property.


[bpmn-js](https://github.com/bpmn-io/bpmn-js) also knows how each BPMN element looks like and decides so through the [`BpmnRenderer`](https://github.com/bpmn-io/bpmn-js/blob/master/lib/draw/BpmnRenderer.js).
By plugging into the render cycle you may define custom representations of individual BPMN elements, too.


We can start modeling once the importing is done.
We use rules to allow or disallow certain modeling operations.
These rules are defined by [`BpmnRules`](https://github.com/bpmn-io/bpmn-js/blob/master/lib/features/rules/BpmnRules.js).
We base these rules on the BPMN 2.0 standard as defined by the [OMG](http://www.omg.org/).
But as mentioned earlier others may hook up with the rule evaluation to contribute different behavior, too.

The [modeling module](https://github.com/bpmn-io/bpmn-js/tree/master/lib/features/modeling) bundles BPMN 2.0 related modeling functionality.
It adds BPMN 2.0 specific modeling behaviors and is responsible to update the BPMN 2.0 document tree with every modeling operation carried out by the user (cf. [`BpmnUpdater`](https://github.com/bpmn-io/bpmn-js/blob/master/lib/features/modeling/BpmnUpdater.js)).
Check it out to learn get a deeper insight into rules, behaviors and the BPMN update cycle.

When looking at bpmn-js purely from the library perspective it is worth mentioning is that it can be used in three variants:

* [`Viewer`](https://github.com/bpmn-io/bpmn-js/blob/master/lib/Viewer.js) to display diagrams
* [`NavigatedViewer`](https://github.com/bpmn-io/bpmn-js/blob/master/lib/NavigatedViewer.js) to display and navigate BPMN diagrams
* [`Modeler`](https://github.com/bpmn-io/bpmn-js/blob/master/lib/Modeler.js) to model BPMN diagrams

The only difference between the versions is that they bundle a different set of functionality.
The [`NavigatedViewer`](https://github.com/bpmn-io/bpmn-js/blob/master/lib/NavigatedViewer.js) adds modules for navigating the canvas and the [`Modeler`](https://github.com/bpmn-io/bpmn-js/blob/master/lib/Modeler.js) adds a whole lot of functionality for creating, editing and interacting elements on the canvas.


<div class="h1 page-header" id="going-further">
  Going Further
</div>

The first part of this walkthrough we focused on using bpmn-js as a BPMN viewer as well as modeler.
This should have given you a good understanding of the toolkit from the library perspective.

In the second part, we focused on bpmn-js internals. We presented diagram-js as well as bpmn-moddle, the two foundations bpmn-js is built upon and gave you an overview how bpmn-js plugs all these together.

There exist a number of additional resources that allow you to progress further:

* [Examples](https://github.com/bpmn-io/bpmn-js-examples) - a few example projects that showcase various ways to embed and extend bpmn-js.
* Source Code ([bpmn-js](https://github.com/bpmn-io/bpmn-js), [diagram-js](https://github.com/bpmn-io/diagram-js)) - mostly well documented; should give you great insights in the library internals.
* [Forum](https://forum.bpmn.io/c/developers) - a good place to get help for using and extending bpmn-js.


Was there anything that we could have explained better / you got stuck with? [Propose an improvement](https://github.com/bpmn-io/bpmn.io/edit/master/src/pages/toolkit/bpmn-js/walkthrough/walkthrough.md) to this document or tell us about it in our [forums](https://forum.bpmn.io).
