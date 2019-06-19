---

title: HTML Injection Vulnerabilities Fixed Across our Toolkits
layout: blogpost.hbs

slug: 2019-html-injection-vulnerabilities-fixed
author: Nico Rehwaldt<https://github.com/nikku>

published: 2019-06-13 12:00

releases:
  - 'bpmn-js@3.4.2'
  - 'bpmn-js@2.5.3'
  - 'cmmn-js@0.18.1'
  - 'dmn-js@6.3.3'
  - 'diagram-js@3.3.1'
  - 'diagram-js@2.6.2'

---

<p class="introduction">
  Patched versions of our BPMN, CMMN and DMN editors address two HTML injection / <a href="https://www.owasp.org/index.php/Cross-site_Scripting_(XSS)">cross-site scripting</a> vulnerabilities. We recommend users to upgrade.
</p>

<!-- continue -->

Two issues in lower level components of our toolkits have been reported by the community:

* search does not properly escape user input ([diagram-js#362](https://github.com/bpmn-io/diagram-js/pull/362))
* direct editing allows pasting of HTML ([diagram-js-direct-editing#14](https://github.com/bpmn-io/diagram-js-direct-editing/pull/14))

These issues affect all editors for BPMN, CMMN and DMN. They allow an attacher to execute arbitary JavaScript in the context of a website embedding our modelers _if_ the victim is lured into pasting a crafted piece of HTML. Our viewer distributions are not affected by this issue.


## Patched Versions

The following library releases fix the issues:

* `bpmn-js@3.4.2`
* `bpmn-js@2.5.3`
* `cmmn-js@0.18.1`
* `dmn-js@6.3.3`
* `diagram-js@3.3.1`
* `diagram-js@2.6.2`

## Credits

Thanks to naoey for [reporting the initial bug](https://github.com/bpmn-io/bpmn-js/issues/1073).
