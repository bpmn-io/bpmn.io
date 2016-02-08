[intro]: #introduction-to-bpmn-js


## Table of Contents
---

* [Introduction to bpmn-js](#introduction-to-bpmn-js)
* [How to get started with bpmn-js?](#how-to-get-started-with-bpmn-js-)
  * [Using the Viewer](#using-the-viewer)
  * [Using the Modeler](#using-the-modeler)
* [How does bpmn-js work?](#how-does-bpmn-js-work-)
  * [What is diagram-js?](#what-is-diagram-js-)
    * [Data Model](#data-model)
  * [What is bpmn-moddle?](#what-is-bpmn-moddle-)
  * [What *really* is bpmn-js?](#what-really-is-bpmn-js-)

## Introduction to bpmn-js
---

In this section, we'll be explaining what constitutes [bpmn-js](https://github.com/bpmn-io/bpmn-js).

In **bpmn.io** our purpose is to provide a great suite of business modeling toolkits and [bpmn-js](https://github.com/bpmn-io/bpmn-js) is the main player in this sphere. With [bpmn-js](https://github.com/bpmn-io/bpmn-js) we provide
the tools necessary to create *BPMN* modelers (or related tools) that are extensible and flexible. Therefore we've built [bpmn-js](https://github.com/bpmn-io/bpmn-js) around two main infrastructures:

* [diagram-js](https://github.com/bpmn-io/diagram-js) which is in charge of providing the rendering and interaction aspects as well as core development related infrastructures
* [bpmn-moddle](https://github.com/bpmn-io/bpmn-moddle) provides the necessary validation for us to be *BPMN* **schema** compliant and gives read/write support of XML in the browser

To tie it together we can say that [bpmn-js](https://github.com/bpmn-io/bpmn-js) is an extension of [diagram-js](https://github.com/bpmn-io/diagram-js) that adds *BPMN* concepts, rules and elements,
which in turn are **schema** validated through [bpmn-moddle](https://github.com/bpmn-io/bpmn-moddle).


## How to get started with bpmn-js?
---

There are two approaches to start using [bpmn-js](https://github.com/bpmn-io/bpmn-js), you can either use it as a global Javascript library provided by **bower**,
as you would use *jquery* or you can use it as module (CommonJS) through **npm**.

There are pro's and con's for both approaches, but in this tutorial we will only focus on how to get started with each of them.

We won't be covering the basics of how to install [**node**](https://nodejs.org/en/) in this tutorial, since there are already enough resources out there
about the topic.

### Using the Viewer

Download the source code of this tutorial [here](https://github.com/bpmn-io/bpmn-js-examples), then go to the folder called **simple-bower**
and follow along.

This example will be focused on creating a simple [`Viewer`](https://github.com/bpmn-io/bpmn-js/blob/master/lib/Viewer.js) with [bpmn-js](https://github.com/bpmn-io/bpmn-js).

---

First off you should get bower trough **npm**:

`npm install -g bower`

After you've installed **bower** move on to getting **bpmn-js**:

`bower install --save bpmn-js`

Now if you head over to *app/index.html* you can see the following code:

```
  <div id="canvas"></div>

  <!-- viewer -->
  <script src="../bower_components/bpmn-js/dist/bpmn-viewer.js"></script>

  <!-- app -->
  <script src="./app.js"></script>

```

First off we need to load bpmn-js, in this case we're loading the [`Viewer`](https://github.com/bpmn-io/bpmn-js/blob/master/lib/Viewer.js) service, which only allows us to visualize diagrams.

After loading the [`Viewer`](https://github.com/bpmn-io/bpmn-js/blob/master/lib/Viewer.js) we can finally move on to our *app.js* file which contains the logic necessary to get the [`Viewer`](https://github.com/bpmn-io/bpmn-js/blob/master/lib/Viewer.js) running.

The last thing we need is a HTML node where to attach [bpmn-js](https://github.com/bpmn-io/bpmn-js), which in this case we are using a `div` with the id of `canvas`:


Now head over to *app/app.js* where you can see the following code:

```
  var BpmnViewer = window.BpmnJS;

  var viewer = new BpmnViewer({ container: '#canvas' });

  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
          viewer.importXML(xhr.response, function(err) {
            var canvas;

            if (!err) {
              console.log('success!');
              canvas = viewer.get('canvas');

              canvas.zoom('fit-viewport');
            } else {
              console.log('something went wrong:', err);
            }
          });
      }
  };

  xhr.open('GET', '../resources/pizza-collaboration.bpmn', true);
  xhr.send(null);
```

First off we're initializing the [`Viewer`](https://github.com/bpmn-io/bpmn-js/blob/master/lib/Viewer.js) with the HTML node which we'll act as a container for [bpmn-js](https://github.com/bpmn-io/bpmn-js),
then we are using `XMLHttpRequest` to load a *BPMN* diagram file (you can use alternatives ways to get the file).

Once we have the file, we're invoking `importXML` with the file content and passing in a callback which allows us to know
wether it was possible to load the diagram successfully or not. If not, then the function will be called with an `error`.
When the [`Viewer`](https://github.com/bpmn-io/bpmn-js/blob/master/lib/Viewer.js) successfully imports the diagram, we're using the [Canvas](https://github.com/bpmn-io/diagram-js/blob/master/lib/core/Canvas.js)
service that allows us to handle the zoom level.

Now that everything is set, you can run the application with `python -m SimpleHTTPServer 8080` or [live-server](https://www.npmjs.com/package/live-server) or any other kind of server that is able to deliver web pages.


### Using the Modeler

Download the source code of this tutorial [here](https://github.com/bpmn-io/bpmn-js-examples), go to the folder called **modeler**
and follow along.

This example will be focused on creating a simple [`Modeler`](https://github.com/bpmn-io/bpmn-js/blob/master/lib/Modeler.js) with [bpmn-js](https://github.com/bpmn-io/bpmn-js).

---

Start by installing all project dependencies with **npm**:

`npm install`

you should also have `grunt-cli` globally installed:

`npm install -g grunt-cli`


Now you can build the application with:

`grunt`

or spawn a development setup with:

`grunt auto-build`


Now if you head over to `app/index.html` you'll see the following:

```
  <link rel="stylesheet" href="css/diagram-js.css" />
  <link rel="stylesheet" href="vendor/bpmn-font/css/bpmn-embedded.css" />
  <link rel="stylesheet" href="css/app.css" />

  <-- stuff in between -->

  <script src="index.js"></script>
```

To get [bpmn-js](https://github.com/bpmn-io/bpmn-js) working properly for *modeling* you need to load the above **css** assets. Also, because we're using [`browserify`](http://browserify.org/) we are able to bundle all of our Javascript
files as modules (CommonJS) in one file.

Moving on to our behavior, head to `app/index.js`:

```
  var $ = require('jquery'),
      BpmnModeler = require('bpmn-js/lib/Modeler');

  var container = $('#js-drop-zone');

  var canvas = $('#js-canvas');

  var renderer = new BpmnModeler({ container: canvas });
```

Here we `require` the [`Modeler`](https://github.com/bpmn-io/bpmn-js/blob/master/lib/Modeler.js) by passing the path to its module, then we grab the HTML element that acts as our container and instantiate `BpmnModeler`.

```
function openDiagram(xml) {

  renderer.importXML(xml, function(err) {
    if (err) {
      container
        .removeClass('with-diagram')
        .addClass('with-error');

      container.find('.error pre').text(err.message);

      console.error(err);
    } else {
      container
        .removeClass('with-error')
        .addClass('with-diagram');
    }
  });
}
```

Inside `openDiagram` we'll be importing the XML diagrams and setting up our modeler.

```
  function saveSVG(done) {
    renderer.saveSVG(done);
  }

  function saveDiagram(done) {

    renderer.saveXML({ format: true }, function(err, xml) {
      done(err, xml);
    });
  }
```

Here we have two functions that allow to export our diagrams as XML or SVG.

```
  var exportArtifacts = _.debounce(function() {

    saveSVG(function(err, svg) {
      setEncoded(downloadSvgLink, 'diagram.svg', err ? null : svg);
    });

    saveDiagram(function(err, xml) {
      setEncoded(downloadLink, 'diagram.bpmn', err ? null : xml);
    });
  }, 500);

  renderer.on('commandStack.changed', exportArtifacts);
```

This last piece of code is worth going over, because of that last line. In [diagram-js](https://github.com/bpmn-io/diagram-js) we have something called [`commandStack`](https://github.com/bpmn-io/diagram-js/blob/master/lib/command/CommandStack.js), that in very simple terms is a stack of all the actions that happen
within [bpmn-js](https://github.com/bpmn-io/bpmn-js). Because of this, it's a good place to hook up when we want to know if something changed. In this case, we're interested in keeping up to date with
the current diagram's state so we can export it correctly.



## How does bpmn-js work?
---

This guide will explore [bpmn-js](https://github.com/bpmn-io/bpmn-js) and it's ecosystem, what libraries does it use and what for. We believe that web development doesn't have to be painful, therefore we have created a modular and pluggable system around [bpmn-js](https://github.com/bpmn-io/bpmn-js), instead of having one monolithic library that does everything. This allows to safely (and sanely) test and iterate over features that we want to implement.

To understand how [bpmn-js](https://github.com/bpmn-io/bpmn-js) works, you first have to understand the underlying pillars that act as a foundation to it.

There are two main pillars that support [bpmn-js](https://github.com/bpmn-io/bpmn-js):

* diagram-js (rendering/modeling)
* bpmn-moddle (schema)


### What is diagram-js?

Simply put, [diagram-js](https://github.com/bpmn-io/diagram-js) is a toolbox for displaying and modifying diagrams on the web. But in terms of our ecosystem, [diagram-js](https://github.com/bpmn-io/diagram-js) it's the pillar that allows us to render everything you see on a diagram and provides [core](https://github.com/bpmn-io/diagram-js/tree/master/lib/core) services which are essential for *BPMN* modeling, such as:

* [Canvas](https://github.com/bpmn-io/diagram-js/blob/master/lib/core/Canvas.js)
* [GraphicsFactory](https://github.com/bpmn-io/diagram-js/blob/master/lib/core/GraphicsFactory.js)
* [ElementFactory](https://github.com/bpmn-io/diagram-js/blob/master/lib/core/ElementFactory.js)
* [ElementRegistry](https://github.com/bpmn-io/diagram-js/blob/master/lib/core/ElementRegistry.js)
* [EventBus](https://github.com/bpmn-io/diagram-js/blob/master/lib/core/EventBus.js)

and other plugins (services) where we can build upon, like:

* [ContextPad](https://github.com/bpmn-io/diagram-js/blob/master/lib/features/context-pad/ContextPad.js)
* [Overlays](https://github.com/bpmn-io/diagram-js/blob/master/lib/features/overlays/Overlays.js)
* [Palette](https://github.com/bpmn-io/diagram-js/blob/master/lib/features/palette/Palette.js)

Onto explaining the basics of how [diagram-js](https://github.com/bpmn-io/diagram-js) works. I'll base this explanation on some of the [core](https://github.com/bpmn-io/diagram-js/tree/master/lib/core) services, which will provide you with a bridge between concepts and the actual code.

Lets start with [EventBus](https://github.com/bpmn-io/diagram-js/blob/master/lib/core/EventBus.js). This is a global communication channel with a *fire and forget* policy, where the interested services (feature modules) act upon the events that are emitted. This allows decoupling of concerns and the ability to modularize, where new features can hook up with the execution chain of established behaviors.

Next there's the [ElementFactory](https://github.com/bpmn-io/diagram-js/blob/master/lib/core/ElementFactory.js), an interface for our [data model](https://github.com/bpmn-io/diagram-js/blob/master/lib/model/index.js) which is pretty simple and it's worth going over.


#### Data Model

* **shapes** have a list of incoming and outgoing connections
* **shapes** have children and a parent
* **connections** have source and target

Every shape and connection that is added to a diagram gets tracked by the [ElementRegistry](https://github.com/bpmn-io/diagram-js/blob/master/lib/core/ElementRegistry.js), which provides a simple interface to deal with *element* management.

Lets start with [Canvas](https://github.com/bpmn-io/diagram-js/blob/master/lib/core/Canvas.js), not to confuse with the infinite **canvas** where the modeling is done and which is SVG based. The [Canvas](https://github.com/bpmn-io/diagram-js/blob/master/lib/core/Canvas.js) service is a layer between the infinite **canvas** and the rest. The main things it takes care of are setting up the **canvas**, dealing with it's life cycle, providing a way to add/remove elements and applying zooming and scrolling.

Closely related to the [Canvas](https://github.com/bpmn-io/diagram-js/blob/master/lib/core/Canvas.js) is another service called [GraphicsFactory](https://github.com/bpmn-io/diagram-js/blob/master/lib/core/GraphicsFactory.js), that acts as a middle man for element **rendering**. This allows the decoupling of "*what is an element*" with the actual drawing of the element to the **canvas**. The [GraphicsFactory](https://github.com/bpmn-io/diagram-js/blob/master/lib/core/GraphicsFactory.js) shares an interface for drawing and updating *elements*, which in turn are defined by a [`DefaultRenderer`](https://github.com/bpmn-io/diagram-js/blob/master/lib/draw/DefaultRenderer.js) belonging to the [draw](https://github.com/bpmn-io/diagram-js/tree/master/lib/draw) service.


### What is bpmn-moddle?

As mentioned in the [introduction](#introduction-to-bpmn-js), [bpmn-moddle](https://github.com/bpmn-io/bpmn-moddle) uses the *BPMN 2.0* meta-model to validate the input and produce correct *BPMN 2.0* XML. It is able to parse XML into a Javascript object tree, which can be edited and validated during modeling and then exported back to XML. It's also important to mention that we also validate during import and export, which allows us to display errors and warnings.

Much like [bpmn-js](https://github.com/bpmn-io/bpmn-js), the foundations of [bpmn-moddle](https://github.com/bpmn-io/bpmn-moddle) are based on top of two libraries:

* [moddle](https://github.com/bpmn-io/moddle) which offers a concise way to define [meta-models](https://en.wikipedia.org/wiki/Metamodeling) in JavaScript
* [moddle-xml](https://github.com/bpmn-io/moddle-xml) which reads and writes **XML** documents based on [moddle](https://github.com/bpmn-io/moddle)

In essence [bpmn-moddle](https://github.com/bpmn-io/bpmn-moddle) adds the *BPMN* spec as a meta-model and offers a simple interface for *BPMN* schema validation. It provides the following API:

* [`fromXML`](https://github.com/bpmn-io/bpmn-moddle/blob/master/lib/bpmn-moddle.js#L38) which instantiates a *BPMN 2.0* tree from a given XML string
* [`toXML`](https://github.com/bpmn-io/bpmn-moddle/blob/master/lib/bpmn-moddle.js#L65) which serializes a *BPMN 2.0* object tree to XML

This is a very important aspect of [bpmn-js](https://github.com/bpmn-io/bpmn-js), because we want to make sure that people are able to export valid *BPMN* that any schema compliant modeler can understand.


### What *really* is bpmn-js?

As mentioned before, [bpmn-js](https://github.com/bpmn-io/bpmn-js) is the layer on top of [diagram-js](https://github.com/bpmn-io/diagram-js) and [bpmn-moddle](https://github.com/bpmn-io/bpmn-moddle) that ties both together and adds *BPMN* concepts, rules and elements. In this section, we'll be explaining how does that work in different phases of modeling.

When we import a *BPMN* file, it's parsed by [bpmn-moddle](https://github.com/bpmn-io/bpmn-moddle) from XML into a Javascript tree object during which we validate. As previously described, our [data model](#data-model) basically consists of shapes and connections and it continues to do so. **But** we extend these with **business logic** in a property called `businessObject`, that for a *Start Event* inside a *Process* looks as follows:

```
businessObject: {
  $attrs: Object
  $parent: {
    $attrs: Object
    $parent: ModdleElement
    $type: "bpmn:Process"
    flowElements: Array[1]
    id: "Process_1"
    isExecutable: false
  }
  $type: "bpmn:StartEvent"
  id: "StartEvent_1"
}
```

As soon as we have the *BPMN* Javascript tree we can start rendering the elements onto the canvas. [bpmn-js](https://github.com/bpmn-io/bpmn-js) has the responsibility of knowing how each *BPMN* element looks like. It does this through [`BpmnRenderer`](https://github.com/bpmn-io/bpmn-js/blob/master/lib/draw/BpmnRenderer.js).

We can start modeling once the importing is done. We use rules to direct the user towards a valid *BPMN* diagram. These rules are applied by [BpmnRules](https://github.com/bpmn-io/bpmn-js/blob/master/lib/features/rules/BpmnRules.js), which hooks up to several events (interactions) and defines if they are allowed or not. We base these decisions on the *BPMN 2.0* standard as defined by the [OMG](http://www.omg.org/).

Something worth mentioning is that it's possible to use [bpmn-js](https://github.com/bpmn-io/bpmn-js) in three modes:

* [`Viewer`](https://github.com/bpmn-io/bpmn-js/blob/master/lib/Viewer.js) - is able to display diagrams
* [`NavigatedViewer`](https://github.com/bpmn-io/bpmn-js/blob/master/lib/NavigatedViewer.js) - is able to display diagrams and it's possible to navigate the diagrams
* [`Modeler`](https://github.com/bpmn-io/bpmn-js/blob/master/lib/Modeler.js) - allows modeling of *BPMN* diagrams

The basic difference between them is that they rely on different (or additional) modules. The [`NavigatedViewer`](https://github.com/bpmn-io/bpmn-js/blob/master/lib/NavigatedViewer.js) and  [`Modeler`](https://github.com/bpmn-io/bpmn-js/blob/master/lib/Modeler.js) are based on the [`Viewer`](https://github.com/bpmn-io/bpmn-js/blob/master/lib/Viewer.js). As you can see [here](https://github.com/bpmn-io/bpmn-js/blob/master/lib/NavigatedViewer.js#L21), the [`NavigatedViewer`](https://github.com/bpmn-io/bpmn-js/blob/master/lib/NavigatedViewer.js) is only requiring two additional modules `zoomscroll` and `movecanvas`, that on top of the [`Viewer`](https://github.com/bpmn-io/bpmn-js/blob/master/lib/Viewer.js) allow navigating around the canvas.

Something worth checking is the [modeling](https://github.com/bpmn-io/bpmn-js/tree/master/lib/features/modeling) module which encompasses a lot of interaction related functionality.

---

*This walkthrough is a work in progress, make sure to check it again in the future.*
