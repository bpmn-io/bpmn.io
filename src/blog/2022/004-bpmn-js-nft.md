---

title: NFT Integration Lands in bpmn-js
description: This blog post unveils the bpmn-js NFT integration.
preview_image: https://bpmn.io/assets/attachments/blog/2022/004-preview-1.png
layout: blogpost.hbs
slug: 2022-bpmn-js-nft-integration
author:
- Nico Rehwaldt <https://github.com/nikku>
published: 2022-04-01 9:39

releases:
  - 'bpmn-js@9.0.3-nft'

---
<p class="introduction">
  We're excited to announce native NFT support in [bpmn-js](https://bpmn.io/toolkits/bpmn-js): Create NFTs from your BPMN diagrams, marvel at others' BPMN creations, and incorporate what works for you into your own BPM story. Integrating NFTs directly into our tooling will do wonders for the BPM ecosystem we envision.
</p>

<!-- continue -->

[Non-fungible tokens (NFTs)](https://www.forbes.com/advisor/investing/nft-non-fungible-token/) represent digital assets and get published and sold via online marketplaces. Own an NFT and claim that you own the underlying digital asset, own the NFT of your company's invoice process, and claim you own the process itself.

With the new version of [bpmn-js](https://bpmn.io/toolkits/bpmn-js) we ship a native integration of NTFs into the core modeling experience:

<div class="figure full-size">
  <a href="https://demo.bpmn.io/">
    <img src="{{ assets }}/attachments/blog/2022/004-marketplace.gif">
  </a>

  <p class="caption">
    Looks like someone already minted our <em>What if your hungry</em> process.
  </p>
</div>

Using the built-in NFT integration, you can:

* [Connect your wallet](#connect-wallet) (OpenSea currently supported)
* Browse published NFTs, remix the underlying BPMN diagrams in your processes
* Publish your own BPMN diagram as an NFT

Will you be the first one to mint your company's invoice process?


## But Why?

NFTs are doing _a lot_ for an open BPM ecosystem: They are publicly browseable, digital asset-backed tokens.

__NFTs are public:__ Their ownership needs to be documented in public so everyone can verify it.

__The underlying asset _shall_ be public:__ It makes little sense to brag about your ownership of your company's invoice process if you do not show it off.

These two properties make NFTs (and their exchanges, e.g., OpenSEA) the perfect foundations for BPMN diagram exchange. You can brag about your ownership of process `X` and trade it with your peers. At the same time, others can learn from it and improve the world with better BPMN diagrams.


## Connecting your Wallet<a name="connect-wallet"></a>

There are two ways to connect your wallet to our NFT integration, pre-configured or in the browser.

The simplest thing is connect it in browser. By doing so you can leverage existing Web3 browser extensions you already have installed:

<div class="figure full-size">
  <a href="https://demo.bpmn.io/form">
    <img src="{{ assets }}/attachments/blog/2022/004-connect.png">
  </a>

  <p class="caption">
    Connect your wallet via our UI. As simple as this.
  </p>
</div>

The advanced use-case is to configure the wallet globally, per modeler instance:

```javascript
import BpmnModeler from 'bpmn-js/lib/Modeler';

const modeler = new BpmnModeler({
  container: '#canvas',
  nft: {
    wallet: {
      provider: 'opensea',
      network: 'https://mainnet.infura.io',
      apiKey: 'YOUR_API_KEY'
    }
  }
});
```

We're sure you do this in trusted environments only!


## More to Come?

As we have shown, crypto can deliver real value.
Our first iteration focused on diagram exchange, built on top of NFTs.
But what else is possible once you connect your wallet?

Two exciting things immediately come to mind:

* __You build it, you profit:__ Next-generation monetization of your processes (usage-based and enforced via smart contracts).
* __The classic:__ Mine Bitcoins as you model BPMN and see who finished first.

We hope you'll follow along on our crypto journey.

Did we miss anything? Did you spot a bug, or would you like to suggest an improvement? Reach out to us via [our forums](https://forum.bpmn.io/), tweet us [@bpmn_io](https://twitter.com/bpmn_io) or file an issue you found in [the bpmn-js issue tracker](https://github.com/bpmn-io/bpmn-js/issues).

Get the latest BPMN modeling toolkit pre-packaged or as source code via [npm](https://www.npmjs.com/package/bpmn-js) or [unpkg](https://unpkg.com/bpmn-js).