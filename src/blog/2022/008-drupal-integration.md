---
title: Powerful rules engine in Drupal integrates with BPMN.iO
description: This blog post explains how Drupal integrates BPMN.iO as a graphical UI for its rules engine to expose all its automation capabilities to site builders without coding requirements.
preview_image: https://www.drupal.org/files/project-images/bpmn_io_02.png
url: blog/posts/...
layout: blogpost.hbs
slug: ...
author:
  - Jürgen Haas<https://www.drupal.org/u/jurgenhaas>
published_time: "..."
modified_time: "..."
published: ...
releases:
  - 'bpmn-js'
---

<p class="introduction">
[Drupal](https://www.drupal.org) is a robust content management system, comes with sophisticated APIs for multichannel publishing, and a track record of continuous innovation. Drupal is the best digital experience platform (DXP) on the web, proudly open source.

Applications build with Drupal get customized and extended by an extensive eco-system of open source modules, or with custom modules developed in PHP. With ECA, one of those modules, all aspects of Drupal can be automated and will be processed in a black box following configured models.

BPMN.iO got integrated as a Drupal module to provide the UI to create, review and maintain the configured automation with BPMN models.
</p>

## ECA architecture in Drupal

The Drupal module [ECA](https://www.drupal.org/project/eca) is an automated processor built around the "Event - Condition - Action" paradigm, hence the name, and operates like a black box completely in the background. Like all Drupal configuration, ECA models are managed as config entities in Yaml format as well.

By design, ECA does not provide any UI to create or edit those config entities as it focusses on its role as a processor only. Instead, ECA comes with a number of APIs to allow UI tools receiving the lists of available events, conditions and actions that are available on the current Drupal site and to save back their models to ECA.

As ECA is brand new and only got released on June 22, 2022 as a Release Candidate, there isn't a huge number of UI modellers available. There are just 2: BPMN.IO and Camunda, the former is fully integrated in Drupal's admin UI, the latter can be used as a desktop application communicating with the Drupal site through file for templates and the XML files.

## Simple get going with BPMN.iO

Like ECA as well, the [BPMN.iO](https://www.drupal.org/project/bpmn_io) module can be installed and enabled on any existing Drupal site without further dependencies. Minimum supported Drupal version is 9.4.0 though.

Once enabled, site builders with appropriate permissions can start building their models without any configuration necessary:

<div class="figure">
  <img src="https://www.drupal.org/files/project-images/bpmn_io_02.png">

  <p class="caption">
    BPMN.iO integrated into Drupal's admin UI.
  </p>
</div>

The integration with ECA takes care of all the available templates - they are called plugins in the Drupal world - and makes them dynamically available to the BPMN.iO ui, also without any configuration or other pre-processing steps:

<div class="figure">
  <img src="https://www.drupal.org/files/project-images/bpmn_io_08.png">

  <p class="caption">
    Choosing from templates dynamically provided by the current Drupal site.
  </p>
</div>

This dynamic goes as far as making additional events, conditions (flow controls) and actions (tasks) available transparently when new Drupal modules get installed that bring any of those plugins with them. Or, if Drupal core or any module gets updated, new or changed plugins get recognized and changes will be accessible to BPMN.iO right away.

## Benefits

Using ECA has a huge number of benefits for all Drupal sites. As it exposes all of Drupal's APIs to the automated processor, that reduces the need for custom PHP code or many smaller and single-purpose contributed modules dramatically. The complexity and overhead in code and maintenance will be reduced while automation gets managed at a single place in revisionable config entities in Yaml, stored in Git repositories for most cases.

The huge extra benefits coming with BPMN.iO integration are obvious. First of all, having a UI tool is a requirement to give users (called site builders) access to the power of the ECA black-box. A UI tool based on an event, condition, action paradigm as well, makes it even more attractive and powerful, as there is no loss in data while converting between ECA and BPMN.iO configuration, which of course happens seemlessly in the background.

First experience with real Drupal site builders have shown, that BPMN.iO is really intuitive and comes with no barriers for new users. Even those users with no knowledge about BPMN get started and productive immediately.

For enterprise users, which is Drupal's main focus globally, the BPMN.iO integration comes with even more benfits. While Drupal and its APIs are powerful, scalable and performant, setting up web applications requires fairly deep knowledge about the Drupal framwork. With BPMN.iO integration, we managed to include other stakeholders in the business to collaborate with the Drupal developers in initial setup, review and maintenance of the automation configuration. Those stakeholders are key to the process: while they have often limited knowledge about Drupal, they know pretty much everything about their own business processes and having them on board makes all theses processes to much easier.

---

## About the Author

[Jürgen Haas](https://www.drupal.org/u/jurgenhaas) is a Drupal expert for over 15 years at [LakeDrops](https://www.lakedrops.com).
