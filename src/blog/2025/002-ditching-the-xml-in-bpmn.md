---

title: Ditching the XML in BPMN 2.0
layout: blogpost.hbs

slug: 2025-ditching-the-xml-in-bpmn-2-0
author: Nico Rehwaldt <https://github.com/nikku>
description: "BPMN 2.0 diagrams are traditionally saved to XML, the file format that powers BPMN 2.0 interchange. This post discusses how we could rely on images for interchange instead, significantly improving the BPMN 2.0 UX."
url: blog/posts/2025-ditching-the-xml-in-bpmn-2-0.html
preview_image: http://bpmn.io/assets/attachments/blog/2025/002-multi-modal.png
published: 2025-04-01 12:01
published_time: "2025-04-01T12:01:16+01:00"
modified_time: "2025-04-01T12:01:16+01:00"

releases:
  - 'bpmn-js'

---


<p class="introduction">
  Observing the tooling market in recent months, we've seen more and more vendors adopt BPMN in low-code domains, places where less technical personas develop processes. It's time to reflect on whether our beloved standard's foundations fit such applications. How can we make BPMN 2.0 diagrams accessible to a broader range of audiences?
</p>

<!-- continue -->

For over 20 years, XML has been the backbone of [the BPMN 2.0 standard](https://www.omg.org/spec/BPMN). It defines how a diagram is structured, down to [the nitty gritty details](https://www.omg.org/spec/BPMN/20100501/Semantic.xsd). While doing wonders for interchange (tool vendors can open each other's diagrams), it left out those without a good BPMN editor.

Today, we'd like to rethink the foundations of BPMN 2.0 and make [the image](https://en.wikipedia.org/wiki/Image)—the only true interchangeable asset on the internet—BPMN 2.0's next interchange format. We propose **BPMN 2.0 on image** as the new iteration of the standard, freeing BPMN 2.0 from the requirements of good tooling and enabling everyone to speak the language of process.

## Embracing Multi-modality for Diagram Editing

In the world of images, all you need to do to view your BPMN diagram is any tool, any device. You can embed images everywhere, edit them  anywhere:

<div class="figure full-size">
  <img src="{{ assets }}/attachments/blog/2025/002-multi-modal.png">
  <p class="caption">
    Work across different user groups and tools as you design your processes.
  </p>
</div>

Sharing your BPMN 2.0 diagram in the imagined world is just one "share" button press away, embeds into your favorite tools, and super-powers your favorite workflows.

<div class="figure">
  <img src="{{ assets }}/attachments/blog/2025/002-whatsup-based-development.png">
  <p class="caption">
    Embed your BPMN 2.0 on image diagrams everywhere.
  </p>
</div>

In the world of images, advanced use cases such as pool extraction or duplication are powered by basic operating tools: your sniping/screenshot tool and your create new file tool.


## Safely Storing Details That Matter

BPMN 2.0 on image heavily relies on editors and engines to understand human intent and auto-correct human errors. Previously, we showed how such [intend-aware systems](/blog/posts/2021-wasdenn-ai-modeling-assistant.html#intent-aware-suggestions) can super-power our future selves.

Of course, there are always places where correctness matters. In such places, we can resort again to standard technologies to transport the details:

<div class="figure">
  <img src="{{ assets }}/attachments/blog/2025/002-qr-codes.png">
  <p class="caption">
    QR codes embed details that matter (tm).
  </p>
</div>


## Technical Foundations

Current developments in [large language models](https://en.wikipedia.org/wiki/Large_language_model) show how to carefully balance creativity and correctness when handling ambiguous human input and (own) knowledge gaps. BPMN 2.0 on image tooling must embrace similar techniques to handle human input in relevant ways.

For our project specifically, there is the question of embeddability: Can image recognition features and interpretation be efficiently packed within a client-side library? This should not be a blocking issue. In fact, [we already showed in the past](/blog/posts/2023-the-future-is-chat.html#is-it-still-embeddable-) how such tools can be efficiently packed for front-end applications. Today—supported by technological advances and industry trends—a 90 MB neural network hides just fine in applications and websites.

## Wrapping up

In this post, we shared BPMN 2.0 on image, the next evolution of the BPMN standard purposely built for true interchange. We showed how images, as the backbone of BPMN 2.0 interchange, will super-power anyone's work with BPMN diagrams in their context and workflows.

We'd like to hear your thoughts as we shape the future of BPMN! Contact us via [our forums](https://forum.bpmn.io/) or [follow us on Mastodon](https://fosstodon.org/@bpmn_io).