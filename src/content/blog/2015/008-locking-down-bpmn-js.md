---

title: Locking Down bpmn-js
layout: blogpost.hbs

slug: 2015-locking-down-bpmn-js
author: Tim Sneed<https://github.com/tsneed290>

published: 2015-07-15 14:00

---
Here at Sparta Systems, we are working on a customized version of bpmn-js, effectively called sparta-bpmn-js. Our main goal is to prototype a restricted version of the web modeler so that our users will only be able to edit certain areas of the workflow.

In our first round of prototyping, we had two objectives. The first objective was to determine if there was a way to prevent users from modifying a workflow that has loaded in our web modeler. This would include preventing palette items from being dropped anywhere on the workflow, and removing any modifiable actions from the context pad of an element.

For the second objective, we wanted to introduce a palette that would allow an item to be dropped only on a “special” SequenceFlow and nothing else.

For example, here is a simple workflow. Notice the “special” SequenceFlow decorated as a red dashed line.
 
 <div style="margin: 30px 0; text-align: center">
    <img style="box-shadow: 0px 2px 6px 2px #C2C2C2; max-width: 90%"
src="{{ assets }}/attachments/blog/2015/008-poc-step1.png">
</div>

A user is not allowed to place a palette item on a non-“special” SequenceFlow.
 
 <div style="margin: 30px 0; text-align: center">
    <img style="box-shadow: 0px 2px 6px 2px #C2C2C2; max-width: 90%"
src="{{ assets }}/attachments/blog/2015/008-poc-step2.png">
</div>

A user should be allowed, however, to place the palette item on the “special” SequenceFlow.

 <div style="margin: 30px 0; text-align: center">
    <img style="box-shadow: 0px 2px 6px 2px #C2C2C2; max-width: 90%"
src="{{ assets }}/attachments/blog/2015/008-poc-step3.png">
</div>

 <div style="margin: 30px 0; text-align: center">
    <img style="box-shadow: 0px 2px 6px 2px #C2C2C2; max-width: 90%"
src="{{ assets }}/attachments/blog/2015/008-poc-step4.png">
</div>

This post will describe the steps we took to achieve both objectives and come out with a demonstrable prototype.


##The Requirements
Given the problem that we wanted to solve, we came up with the following requirements:

###Lock down everything!!
We at Sparta supply our users with best practice workflows.  It is important that the integrity of the workflow remain intact with the goal of little to no customization needed.  The very conservative approach is the “lock-down” the entire workflow.  However we know after many years of experience in the quality management business that clients will need to make perhaps a few minor tweaks to suit the specific nuances of their business. So while our desire is to permit a little customization as possible we recognize some will be necessary.

###Customized palette
For this proof-of-concept, our palette will contain only one model element, a Call Activity to some other process. This will require us to create our own palette provider feature module.

###Customized context pad
Given that we do not want the users to manipulate existing workflow elements, we need to completely control the context pad. So, like the customized palette, we want to create our own context pad provider feature module.

###Certain SequenceFlows can accept palette items
Now that the modeler is effectively locked down, we want to identify certain SequenceFlows in a workflow that would allow the Call Activity palette item to be dropped onto it. Once dropped, the palette item must be allowed to be removed. Upon removal, the initial SequenceFlow between the Call Activity’s source and target elements must be automatically re-established (since a user would not be allowed to re-establish their own SequenceFlows).


##The Prototype
Now that we have our requirements, let’s get to work. To make things simpler, we are using the same project structure as bpmn-js in the sparta-bpmn-js project. For the sparta-bpmn-js project, bpmn-js will become a dependency where we can require the features and start to build out our own sparta-bpmn-js Modeler.

###Controlling the Palette
Since we only need a single palette item for this prototype, we created our own PaletteProvider module and replaced the bpmn-js Palette Provider with our own.

```javascript
assign(actions, {
  'lasso-tool': {
    group: 'tools',
    className: 'icon-lasso-tool',
    title: 'Activate the lasso tool',
    action: {
      click: function(event) {
        lassoTool.activateSelection(event);
      }
    }
  },
  'space-tool': {
    group: 'tools',
    className: 'icon-space-tool',
    title: 'Activate the create/remove space tool',
    action: {
      click: function(event) {
        spaceTool.activateSelection(event);
      }
    }
  },
  'tool-separator': {
    group: 'tools',
    separator: true
  },
  'create.call-activity': createAction(
    'bpmn:CallActivity', 'event', 'icon-call-activity', 'Add Investigation Process', {
      labelText: 'Investigation',
      moddleAttrs: {
        calledElement: 'Investigation-800',
        'ssi:droppable': 'true'
      }
    }
  )
});
```
> Take note of the “ssi:droppable” moddle attribute defined for the “create.call-activity” palette item, that will be explained later in this post.

###Controlling the Palette
Like the Palette, we needed to customize the Context Pad completely. Therefore we added our own ContextPadProvider module to remove any action that would modify an element.

```javascript
if (is(element, 'bpmn:FlowNode') || is(element, 'bpmn:InteractionNode')) {

  assign(actions, {
    'append.text-annotation': appendAction('bpmn:TextAnnotation', 'icon-text-annotation'),
  });
}
We leave in the text annotation to allow users to make notes if they wish.


if (element.businessObject.get('ssi:droppable') === 'true' || is(element, 'bpmn:TextAnnotation')) {
  assign(actions, {
    'delete': {
      group: 'edit',
      className: 'icon-trash',
      title: 'Remove',
      action: {
        click: removeElement,
        dragstart: removeElement
      }
    }
  });
}
```
> Only elements that contain the attribute “ssi:droppable” and value of “true” do we allow them to be removed. This prevents other “locked-down” elements from being removed.

###Using the Rules API
To start with a “locked-down” approach, we want to first prevent any element (or shape) created from the Palette from being dropped onto the workflow. Thankfully, the diagram-js library provides us with an interface to add our own rules. We inherit from the RuleProvider class and make use of the “addRule” function.
Every time an element is created from the Palette, a “shape.create” event is fired. When adding a rule, if the evaluation returns false, then the action to drop the element will not be allowed. Easy enough, we just always return false.

```javascript
function SpartaRules(eventBus) {
    RuleProvider.call(this, eventBus);
}

inherits(SpartaRules, RuleProvider);

SpartaRules.$inject = ['eventBus'];

SpartaRules.prototype.init = function() {

    this.addRule('shape.create', function(context) {
        return false;
    });
};
```
> At this point, no item from the palette can be dropped onto the workflow.

> **NOTE:** Your custom rules module MUST be the first module in the Modeler._modules array, otherwise the custom rules would not be evaluated before other rule modules.

 <div style="margin: 30px 0; text-align: center">
    <img style="box-shadow: 0px 2px 6px 2px #C2C2C2; max-width: 90%"
src="{{ assets }}/attachments/blog/2015/008-no-drop.gif">
</div>

Since we want to allow users to eventually add custom palette items onto the workflow, we need to continue to allow users to move elements and connections around the diagram as they may see fit. But we do not want allow them modify a connection’s source and target elements. Using the Rules API this is easily achieved by adding rules for the “connection.reconnectStart” and “connection.reconnectEnd” events.

```javascript
this.addRule('connection.reconnectStart', function(context) {
    var target = context.hover;
    var connection = context.connection;

    return canReconnectStart(connection, target);
});

this.addRule('connection.reconnectEnd', function(context) {
    var target = context.hover;
    var connection = context.connection;

    return canReconnectEnd(connection, target);
});

function canReconnectStart(connection, target) {
    return target.id === connection.source.id;
}

function canReconnectEnd(connection, target) {
    return target.id === connection.target.id;
}
```
By validating the hover element’s id attribute against the connection’s source or target element id attribute, we can prevent users from modifying connections’ source/target element.

 <div style="margin: 30px 0; text-align: center">
    <img style="box-shadow: 0px 2px 6px 2px #C2C2C2; max-width: 90%"
src="{{ assets }}/attachments/blog/2015/008-no-reconnect.gif">
</div>

###“Special” SequenceFlows
At this point, we still cannot add any elements from the Palette since the “shape.create” rule always returns false. We want to allow specific elements to be dropped on certain SequenceFlows.

This next objective is to configure a SequenceFlow in an existing workflow to allow a Call Activity to be dropped onto it. We do this first by adding the attribute **ssi:allowDrop** to a SequenceFlow element in our BPMN file. The value is the element type that the SequenceFlow will allowed to be dropped on it. In this case, “bpmn:CallActivity”.

```
<bpmn2:sequenceFlow id="SequenceFlow_2" ssi:allowDrop="bpmn:CallActivity" name="" sourceRef="SourceRef" targetRef="SourceRef"/>
```

Now we want to display these “special” SequenceFlows differently. In this example we will decorate the SequenceFlow as a red, dashed line. This can be achieved by making use of the event bus and listening to certain events that will allow us to re-style the “special” SequenceFlows.

```javascript
eventBus.on(['canvas.init'], function(event) {
    svg = event.svg;
});
```
> We must first obtain a reference to the SVG library (Snap.svg) when the canvas is initialized.

```javascript
eventBus.on([
    'connection.added',
    'connection.changed',
    'bendpoint.move.move',
    'bendpoint.move.cleanup'
], function(event) {
    var element = event.element || event.connection;
    var bo = element.businessObject;

    if (bo.get('ssi:allowDrop')) {
        //...
        //modify connection color
        //...
    }
});
```
Then we listen to various “connection” events, as well as “bendpoint” events to re-style the connection when users are moving connections around. [Click here](https://github.com/SpartaSystems/sparta-bpmn-js/blob/master/lib/features/connect/CustomConnect.js) to check out the rest of the source to see how we re-style the connections.

Now, are "special" SequenceFlow went from looking like this

<div style="margin: 30px 0; text-align: center">
    <img style="box-shadow: 0px 2px 6px 2px #C2C2C2; max-width: 90%"
src="{{ assets }}/attachments/blog/2015/008-normal-connection.png">
</div>

to this

<div style="margin: 30px 0; text-align: center">
    <img style="box-shadow: 0px 2px 6px 2px #C2C2C2; max-width: 90%"
src="{{ assets }}/attachments/blog/2015/008-special-connection.png">
</div>

Next, in our custom Rule module, we modify our evaluation of the “shape.create” rule to allow specific palette items to be dropped on these “special” SequenceFlows.

```javascript
this.addRule('shape.create', function(context) {
    var target = context.parent;
    var shape = context.shape;

    return canCreate(shape, target);
});

function canCreate(shape, target) {
    var allowDrop = target.businessObject.get('ssi:allowDrop');
    var droppable = shape.businessObject.get('ssi:droppable');

    if (droppable === 'true') {
        if ((!allowDrop || !ModelUtil.is(shape, allowDrop))) {
            return false;
        } else {
            return true;
        }
    } else {
        return false;
    }
}
```
Here the shape being dropped is checked to ensure that the “ssi:droppable” attribute is defined (we defined this before in the custom PaletteProvider). If defined, we ensure that the target connection accepts the shape type that is being dropped.

Because the palette item we added contains the attribute “ssi:droppable”, we can now drop the CallActivity onto the “special” SequenceFlow!

<div style="margin: 30px 0; text-align: center">
    <img style="box-shadow: 0px 2px 6px 2px #C2C2C2; max-width: 90%"
src="{{ assets }}/attachments/blog/2015/008-drop-on-special-connection.gif">
</div>

###Removing the CallActivity
Given our current customization of bpmn-js, a user cannot establish their own SequenceFlows in the modeler tool. Therefore, when removing the CallActivity we just dropped onto the “special” SequenceFlow, we need to re-establish the “special” SequenceFlow.

To do this, we make use of the CommandInterceptor API and add a behavior. Prior to the ‘shape.delete’ event from executing, we want to take the incoming connection to the CallActivity and re-attach its end to the CallActivity’s target element.

```javascript
function RemoveDroppableBehavior(eventBus, modeling) {

  CommandInterceptor.call(this, eventBus);

  this.preExecute('shape.delete', function(context) {
    var shape = context.shape;

    if (shape.businessObject.get('ssi:droppable') === 'true') {

      var incoming = shape.incoming[0];
      var outgoing = shape.outgoing[0];
      var incomingWaypoints = incoming.waypoints.slice();
      var outgoingWaypoints = outgoing.waypoints.slice();
      var target = outgoing.target;
      var newWaypoints;

      //remove waypoints that connected between the call activity element
      incomingWaypoints.pop();
      outgoingWaypoints.shift();
      newWaypoints = incomingWaypoints.concat(outgoingWaypoints);

      //reconnect incoming connection's target to the call activity's outgoing connection's target
      modeling.reconnectEnd(incoming, target, newWaypoints);
    }

  }, true);
}
```

<div style="margin: 30px 0; text-align: center">
    <img style="box-shadow: 0px 2px 6px 2px #C2C2C2; max-width: 90%"
src="{{ assets }}/attachments/blog/2015/008-remove-element.gif">
</div>

###Conclusion
This post showed how we built our very own customized BPMN 2.0 modeler using bpmn-js. Through the use of the Rules and CommandInterceptor APIs we discovered how to introduce custom rules and behaviors. Thanks to the feature-based pattern of bpmn-js, we could easily swap out the context pad and the palette with our own. This all proves that strong customization is possible with bpmn-js, and we are extremely happy to come out with a working prototype. A big thanks to the Camunda team for assisting us in this endeavor!

We have open sourced an example project to our GitHub, feel free to [check it out](https://github.com/SpartaSystems/sparta-bpmn-js).