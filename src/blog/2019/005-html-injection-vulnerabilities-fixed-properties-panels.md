---

title: Updated Properties Panels Fix HTML Injection Vulnerabilities
layout: blogpost.hbs

slug: 2019-html-injection-vulnerabilities-properties-panels-fixed
author: Nico Rehwaldt<https://github.com/nikku>

published: 2019-07-08 17:00

releases:
  - 'bpmn-js-properties-panel@0.31.0'
  - 'cmmn-js-properties-panel@0.8.0'
  - 'dmn-js-properties-panel@0.3.0'

---

<p class="introduction">
  New releases of our properties panels for BPMN, CMMN and DMN address several HTML injection / <a href="https://www.owasp.org/index.php/Cross-site_Scripting_(XSS)">cross-site scripting</a> vulnerabilities. We recommend users to upgrade.
</p>

<!-- continue -->

Missing input saniation leads to several HTML injection / <a href="https://www.owasp.org/index.php/Cross-site_Scripting_(XSS)">cross-site scripting</a> vulnerabilities in our BPMN, CMMN and DMN properties panel libraries.

These issues affect all users that embed the properties panels along with the diagram editors. They allow an attacher to execute arbitary JavaScript in the context of the embedding website if properties for specially configured diagram elements are being viewed.


## Patched Versions

The following library releases fix the issues:

* `bpmn-js-properties-panel@0.31.0`
* `cmmn-js-properties-panel@0.8.0`
* `dmn-js-properties-panel@0.3.0`