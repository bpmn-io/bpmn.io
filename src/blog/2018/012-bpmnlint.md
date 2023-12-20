---

title: Validate and Improve your BPMN Diagrams with bpmnlint
layout: blogpost.hbs

slug: 2018-bpmnlint
author: Seif Ghezala<https://github.com/siffogh>

published: 2018-10-11 16:00

releases:
  - 'bpmnlint@5.0.0'

---


<p class="introduction">
  Today we are excited to reveal [bpmnlint](https://github.com/bpmn-io/bpmnlint), a linting and validation tool which helps you to check and improve your BPMN diagrams based on configurable rules.
</p>

<!-- continue -->

BPMN is a powerful language for visualizing processes and collaboration.
Often, it allows you to express a certain interaction in a number of ways, one way harder to understand than the other.
Sometimes the same modeling pattern is expressed in different ways, making it harder to recognize it across your diagrams.
Ever so often you may even end up creating BPMN diagrams that are syntactically incorrect, incomplete or completely not understandable for the uninitiated reader.

In this context, [bpmnlint](https://github.com/bpmn-io/bpmnlint) steps in.
It validates your diagram against a defined set of rules and reports these as errors or warnings.
It may check your BPMN diagrams from the command line or run integrated into our [BPMN modeler](https://bpmn.io/toolkit/bpmn-js/) via [bpmn-js-bpmnlint](https://github.com/bpmn-io/bpmn-js-bpmnlint):

<div class="figure">
  <img src="{{ assets }}/attachments/blog/2018/012-bpmnlint.gif" />
  <figcaption>
    [bpmnlint](https://github.com/bpmn-io/bpmnlint) validating a diagram as you model.
  </figcaption>
</div>


## Rules at the Core

Rules to detect certain patterns in BPMN diagrams are at the core of the library.
Each rule is defined by a piece of code that may detect and report anything from label missing to the fact that a specific error prone modeling pattern got detected.

To give you a better taste of what a rule may be, here is the [list of rules](https://github.com/bpmn-io/bpmnlint/tree/main/rules) built into the library as of today:

<style>
  table {
    margin: 20px 0;
  }

  th, td {
    padding: 5px;
    vertical-align: top;
    border-bottom: solid 1px #CCC;
    border-collapse: collapse;
  }

  th:first-child,
  td:first-child {
    white-space: nowrap;
    padding-left: 0;
  }
</style>

| Rule Name | Description |
|:--- | :---|
| `conditional-flows` | Reports outgoing flows with missing conditions. |
| `end-event-required` | Reports missing end events. |
| `fake-join` | Reports an implicit join that actually is none. |
| `label-required` | Reports missing labels. |
| `no-complex-gateway` | Reports complex gateways. |
| `no-disconnected` | Reports unconnected elements. |
| `no-gateway-join-fork` | Reports gateways that fork and join at the same time. |
| `no-implicit-split` | Reports implicit splits. |
| `no-inclusive-gateway` | Reports inclusive gateways. |
| `single-blank-start-event` | Reports multiple blank start events in a scope. |
| `single-event-definition` | Reports events with multiple definitions. |
| `start-event-required` | Reports missing start events. |

In addition to these rules, we got [a few ones](https://github.com/bpmn-io/bpmnlint/issues?q=is%3Aissue+is%3Aopen+label%3Arules) we intend to implement.

Are there common modeling errors that you experienced?
Could these errors be avoided with bpmnlint?
Propose a [new bpmnlint rule](https://github.com/bpmn-io/bpmnlint/issues/new?template=NEW_RULE.md) and help us to build a strong foundation for BPMN diagram validation.


## From Zero to bpmnlint

Let us get a better understanding of bpmnlint's configuration and extensibility.
To get started, checkout and run the [bpmnlint-playground](https://github.com/bpmn-io/bpmnlint-playground), a project designed specificly to play around with the model validation project.

```sh
git clone git@github.com:bpmn-io/bpmnlint-playground.git

cd bpmnlint-playground

npm install
npm start
```

Executing `npm start` opens a browser window with the playground app that has linting support baked in.


## Configure Available Rules

A `.bpmnlintrc` file placed in your current working directory defines which rules to apply and whether to treat them as errors or warnings. The playground holds a [`.bpmnlintrc`](https://github.com/bpmn-io/bpmnlint-playground/blob/main/.bpmnlintrc) that looks like this:

```json
{
  "extends": [
    "bpmnlint:recommended",
    "plugin:playground/recommended"
  ],
  "rules": {
    "playground/no-manual-task": "warn"
  }
}
```

The `extends` block tells bpmnlint to inherit the configuration from two pre-defined rule sets: `bpmnlint:recommended` and `playground/recommended`, the later provided by the playground plug-in.

The `rules` block overrides reporting for a specific rule.
The example configures the `playground/no-manual-task` as a warning (rather than an error).
We could pick any rule, e.g. a [built-in one](https://github.com/bpmn-io/bpmnlint/tree/main/rules), and turn it off entirely, too:

```json
{
  ...
  "rules": {
    ...
    "bpmnlint/label-required": "off"
  }
}
```

In the playground app, we can see that the linter won't report start events without labels anymore.


## Create Custom Rules

Customizing reporting of existing rules is great, but it does not satisfy every use case.
Sometimes, a user or an organization wants to identify domain specific patterns, relevant to their particular style of modeling.
bpmnlint solves this issue by allowing you to contribute custom rules and rule sets.

For instance, what if we want to have a rule that enforces having an emoji in the label of every flow node?
Let us jump into the playgrounds [`plugin` folder](https://github.com/bpmn-io/bpmnlint-playground/tree/main/plugin) and create the `emoji-label-required` rule in the `rules/emoji-label-required.js` file:

```js
const {
  isAny
} = require('bpmnlint-utils');

const emojiRegex = require('emoji-regex');

/**
 * Detect and report missing emojis in element names.
 */
module.exports = function() {

  function check(node, reporter) {
    if (isAny(node, [
      'bpmn:FlowNode',
      'bpmn:SequenceFlow',
      'bpmn:Participant',
      'bpmn:Lane'
    ])) {

      const name = (node.name || '').trim();

      if (!emojiRegex().test(name)) {
        reporter.report(node.id, 'Element must have an emoji');
      }
    }
  }

  return {
    check
  };
};
```

The rule exposes a `check(node, reporter)` function that simply reports whenever a BPMN label is missing an emoji.
The [emoji-regex](https://www.npmjs.com/package/emoji-regex) utility carries out the check for us.
We must install it as a dependency inside the plug-in directory to get the rule running:

```sh
cd plugin
npm install emoji-regex
```

Then, we need to adjust our configuration to use the `emoji-label-required` rule.
Since is not a built-in rule, we prefix it with its plugin name (in this case `playground`):

```json
{
  "rules": {
    ...
    "playground/emoji-label-required": "error"
  }
}
```

Going back to the playground app the linter will now report an error for labels without emojis:

<div class="figure">
  <img src="{{ assets }}/attachments/blog/2018/012-bpmnlint-emoji.gif">
  <figcaption>
    Validating the presence of emojis in labels.
  </figcaption>
</div>

This completes our quick walk through bpmnlint's extensibility.

Check out the playgrounds [emoji-label-required branch](https://github.com/bpmn-io/bpmnlint-playground/tree/emoji-label-required) that contains the implementation described in this blog post.
To learn more about rule packaging and testing have look at the [example plug-in](https://github.com/bpmn-io/bpmn-js-bpmnlint).


## Wrapping Up

bpmnlint is a BPMN diagram validator that can be used as command line tool or integrated into [bpmn-js](https://github.com/bpmn-io/bpmn-js) using the [bpmn-js-bpmnlint extension](https://github.com/bpmn-io/bpmn-js-bpmnlint). In the future, we plan to also make it available as a [Camunda Modeler](https://github.com/camunda/camunda-modeler) plugin.

Try out the tool and help us to improve it by [reporting](https://github.com/bpmn-io/bpmnlint/issues/new?template=NEW_RULE.md) rules you'd like to see supported.

Go ahead and start validating your diagrams today <img class="emoji" src="https://twemoji.maxcdn.com/2/svg/1f916.svg" />!