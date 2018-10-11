---

title: Announcing BPMNLint, a validator for BPMN diagrams
layout: blogpost.hbs

slug: 2018-bpmnlint
author: Seif Ghezala<https://github.com/siffogh>

published: 2018-10-11 16:00

---


<p class="introduction">
  Today we are very excited to finally reveal BPMNLint, an open source tool for validating BPMN diagrams. 
</p>

<!-- continue -->

<div class="figure">
  <img src="{{ assets }}/attachments/blog/2018/012-bpmnlint.gif">
</div>

BPMN provides a powerful language for modeling diagrams. Often, one process can be modeled in various ways. Unfortunately, one can easily end up making a BPMN diagram either syntactically incorrect, unreadable or simply over-complicated. In this context, BPMNLint comes in very handy. By providing a way to enforce validation rules, BPMNLint makes it fairly easy to report errors and warnings in the model.


## From 0 to BPMNLint
There is nothing better than an example to explore BPMNLint. To do so, let's clone [this](https://github.com/bpmn-io/bpmn-js-bpmnlint) demo.  Let's install the demo's dependencies, then navigate to the `/example` directory and run the following:
```sh
npm install
npm run dev
```

We should by now have a running application on [http://localhost:8080/index.html](http://localhost:8080/index.html).

We can then press the button on the top right corner of the page to start the linting experience.

## Configurable: turning on/off rules
`example/.bpmnlintrc` holds the current BPMNLint configuration:

```json
{
  "extends": [
    "bpmnlint:recommended",
    "plugin:camunda/recommended"
  ]
}
```

The current configuration is pretty straightforward and we can use it if we don't want to bother about configuration overhead. In fact, we are simply telling BPMNLint to extend two sets of rules: `bpmnlint:recommended` and `camunda/recommended`.   

However, you don't have to fully comply with these rules. BPMNLint makes it possible to make certain rules only report warnings or even turn them off. To illustrate this, let's pick two rules from the [list of built-in rules](https://github.com/bpmn-io/bpmnlint/tree/master/rules) and customize their reporting in the `rules` object of the `.bpmnlintrc` configuration file:

```json
{
  "extends": [
    "bpmnlint:recommended",
    "plugin:camunda/recommended"
  ],
  "rules": {
    "bpmnlint/no-implicit-split": "off",
    "bpmnlint/label-required": "warn"
  }
}
```

If we open the demo page again, we will see that BPMNLint only shows warnings now when there are missing labels. Moreover, the linter doesn't report anything when using an implicit split.

## Extensibility
Customizing the reporting of built-in rules is great, but it does not satisfy every use case. Sometimes, a user or an organization wants to have custom rules that are relevant to their issues or style of modeling. BPMNLint solves this issue by being extremely extensible and making it easy to build plugins holding custom rules. For instance, what if we want to have a rule that enforces having an emoji in the label of every flow node? To quickly bootstrap our plugin, we can simply clone [this](https://github.com/bpmn-io/bpmnlint-plugin-example) BPMNLint plugin template. Let's then create an `emoji-label-required` rule in the rules module. To do so, we can simply copy the [label-required](https://github.com/bpmn-io/bpmnlint/blob/master/rules/label-required.js) built-in rule and replace a part of it's `check` function:

```js
    // bpmnlint-plugin-example/rules/emoji-label-required

    const emojiRegex = require('emoji-regex');

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
```

The function simply reports whenever [this](https://www.npmjs.com/package/emoji-regex) emoji regular expressions does not match the flow node name.

To consume the plugin in our demo, we can either publish it or simply [link](https://docs.npmjs.com/cli/link) it to the demo project.  

Then, we need to adjust our configuration to use the emoji rule:

```json
{
  "rules": {
    "example/emoji-label-required": "error"
  }
}
```

> **Notice**: since `emoji-label-required` is not a built-in rule, we prefix it with it's plugin name (in this case `example`).

BPMNLint should then report an error whenever a flow node does not have an emoji in its label:

<div class="figure">
  <img src="{{ assets }}/attachments/blog/2018/012-bpmnlint-emoji.gif">
</div>

## What's Next?

BPMNLint can now be used in a browser or a as command line tool. Furthermore, you can integrate it into [bpmn-js](https://github.com/bpmn-io/bpmn-js) using the [bpmn-js-bpmnlint extension](https://github.com/bpmn-io/bpmn-js-bpmnlint).

In the future we are planning to also make it available as a [Camunda Modeler]() plugin.