---

title: The Future is Chat
description: "We are phasing out our graphical toolkits for BPMN, DMN, and Forms in favor of a chat-based, conversational AI solution. This post describes how we get there and the exciting times that lie ahead for our users."
layout: blogpost_fooled.hbs
slug: 2023-the-future-is-chat
preview_image: http://bpmn.io/assets/attachments/blog/2023/003-preview.png
url: https://bpmn.io/blog/posts/2023-the-future-is-chat.html
author:
- Philipp Fromme <https://github.com/philippfromme>
- Nico Rehwaldt <https://github.com/nikku>
published: 2023-04-01 8:00

releases: []

---

<p class="introduction">
  We always strive to innovate and find new ways to make process management more accessible and user-friendly. That is why we are excited to share one of the most significant updates in the [bpmn.io eco-system](https://bpmn.io/) to date: We are replacing our graphical toolkits with modern chat-based solutions. By being completely conversational, the new tools will revolutionize diagram modeling and embedding as we know it.
</p>


<!-- continue -->

Imagine a future where you don't have to know BPMN or some BPMN tool to be successful at process orchestration. Imagine a future where you don't need to know exclusive gateways, interrupting boundary events or conditional flows to define the crucial, not-so-happy path. Imagine a future where you create your critical processes as casually as texting or voicing your friends via WhatsApp. That future is here, and it is conversational, AI-powered chat brought to you by [bpmn.io](https://bpmn.io/).

<div class="figure full-size">
  <img src="{{ assets }}/attachments/blog/2023/003-initial-process-modeling.gif" alt="Create your process, conversational">

  <p class="caption">
    Designing your processes is going to be simple, and conversational.
  </p>
</div>

In the next version of [bpmn-js](https://github.com/bpmn-io/bpmn-js) you'll be prompted to create a new process by starting a conversation with our virtual assistant. You'll explain the steps involved in the process, and the assistant will guide you through process creation and optimization, suggesting improvements and adjustments based on your goals, context, and preferences.

All that works without knowing BPMN as a language, significantly lowering the entry barrier. The chat-based solution is user-friendly and accessible to everyone, regardless of their expertise or technical knowledge. It also provides a more collaborative and dynamic approach to process management, enabling people from vastly different backgrounds to work together in real time and iterate on the process as needed.


## Like BPMN 2.0, just different

To date, a BPMN 2.0 file is the source of truth for your BPMN process. It is an XML file used as [a standardized interchange](https://www.omg.org/spec/BPMN/) for your processes. Tools like [bpmn-js](https://bpmn.io/toolkit/bpmn-js/) make it accessible to humans.

Looking into our chat-based, conversational future, the source of your process will be its complete conversational history: A _read-only_ log, readable by any text editor, trivial to search, diff, and easy to version. Did you ever want to export detailed invoice process documentation? Print the complete file as a PDF and make it available to your co-workers. Do you want a four-page full-text executive summary of your order processing flow? Ask our conversational AI for it, and it will do its best to summarize what emerged over time.

<div class="figure full-size">
  <img src="{{ assets }}/attachments/blog/2023/003-conversation-summary.gif" alt="Create your process, conversational">

  <p class="caption">
    Access your process in a human-friendly manner.
  </p>
</div>

The AI tries to summarize collected knowledge in a simple, accessible manner; for most processes, that means a happy path plus a (longer) list of exceptions. The few of us interested in the nitty-gritty can ask follow-up questions.

With most real-world, grown-over-time processes, you're likely more interested in getting concrete, in-depth insights into specific parts of your design. Send your questions to our assistant, and it will do its best to answer you or help refine your query—another place where our new solution excels.

<div class="figure full-size">
  <img src="{{ assets }}/attachments/blog/2023/003-question.gif" alt="The assistant will respond to your answers or help you to ask the right questions">

  <p class="caption">
    Good to know.
  </p>
</div>


## Under the hood

Our [eco-system of graphical tools](https://github.com/bpmn-io) is enormous, counting over 150 projects and over 300.000 lines of code. Our conversational AI learns how to apply methods and tools we'd otherwise need to build. Hence it drastically reduces our eco-system complexity. The following graph shows rough estimations:

<div class="figure no-border">
  <img style="max-width: 80%" src="{{ assets }}/attachments/blog/2023/003-stats.png" alt="Impact of conversational AI in our eco-system complexity">

  <p class="caption">
    Estimated impacts on our eco-system complexity.
  </p>
</div>


## Is it still embeddable?

Today it is not feasible to execute large language models (LLM) such as [GPT](https://openai.com/blog/chatgpt) on regular computers or mobile devices, let alone client-side inside the browser. Conversational AIs rely on these language models. So the burning question is: Will future bpmn.io still be embeddable? The answer is **yes**.

We worked hard to provide optimized, pre-trained versions of our LLM plus conversational modeling helper. It is suitable for use in many different environments, including browsers. Building on top of [Alpaca](https://crfm.stanford.edu/2023/03/13/alpaca.html), [Rust](https://www.rust-lang.org/), and WASM, you only have to lazy load 90MB of binary blobs to get our new toolkits running on your web page. For comparison, that is barely more than what you'll load as you browse your favorite news site.


## Wrapping up

This post announced the deprecation of our graphical toolkits in favor of a new chat-based solution. We hope you are as excited as we are about the future of modeling at [bpmn.io](https://bpmn.io/)!

Of course, this is just the beginning of our conversation. In the future, we will explore paths to turn our chatbot into a process/decision engine (call it BPM center of excellence). If you can talk to our chatbot, so can your programs, and the bot can send instructions back.

Furthermore, we'll explore the ability to summarize/snapshot your processes in non-human languages, such as BPEL for processes and CSV/checklists for decisions.

We hope you join us as we evolve the future of modeling tooling. Reach out to us via [our forums](https://forum.bpmn.io/) or toot us on [Mastodon](https://fosstodon.org/@bpmn_io). Let's have a chat!

<p style="border-top: dotted 1px #CCC; margin-top: 40px; padding-top: 20px; margin-bottom: -20px">
_ChatGPT co-authored and approved this announcement._
</p>