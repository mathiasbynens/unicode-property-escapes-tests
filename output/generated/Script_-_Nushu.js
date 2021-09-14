// Copyright 2021 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Nushu`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v14.0.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [
    0x016FE1
  ],
  ranges: [
    [0x01B170, 0x01B2FB]
  ]
});
testPropertyEscapes(
  /^\p{Script=Nushu}+$/u,
  matchSymbols,
  "\\p{Script=Nushu}"
);
testPropertyEscapes(
  /^\p{Script=Nshu}+$/u,
  matchSymbols,
  "\\p{Script=Nshu}"
);
testPropertyEscapes(
  /^\p{sc=Nushu}+$/u,
  matchSymbols,
  "\\p{sc=Nushu}"
);
testPropertyEscapes(
  /^\p{sc=Nshu}+$/u,
  matchSymbols,
  "\\p{sc=Nshu}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00DBFF],
    [0x00E000, 0x016FE0],
    [0x016FE2, 0x01B16F],
    [0x01B2FC, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script=Nushu}+$/u,
  nonMatchSymbols,
  "\\P{Script=Nushu}"
);
testPropertyEscapes(
  /^\P{Script=Nshu}+$/u,
  nonMatchSymbols,
  "\\P{Script=Nshu}"
);
testPropertyEscapes(
  /^\P{sc=Nushu}+$/u,
  nonMatchSymbols,
  "\\P{sc=Nushu}"
);
testPropertyEscapes(
  /^\P{sc=Nshu}+$/u,
  nonMatchSymbols,
  "\\P{sc=Nshu}"
);
