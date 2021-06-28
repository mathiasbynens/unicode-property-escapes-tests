// Copyright 2021 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Glagolitic`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v13.0.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x002C00, 0x002C2E],
    [0x002C30, 0x002C5E],
    [0x01E000, 0x01E006],
    [0x01E008, 0x01E018],
    [0x01E01B, 0x01E021],
    [0x01E023, 0x01E024],
    [0x01E026, 0x01E02A]
  ]
});
testPropertyEscapes(
  /^\p{Script=Glagolitic}+$/u,
  matchSymbols,
  "\\p{Script=Glagolitic}"
);
testPropertyEscapes(
  /^\p{Script=Glag}+$/u,
  matchSymbols,
  "\\p{Script=Glag}"
);
testPropertyEscapes(
  /^\p{sc=Glagolitic}+$/u,
  matchSymbols,
  "\\p{sc=Glagolitic}"
);
testPropertyEscapes(
  /^\p{sc=Glag}+$/u,
  matchSymbols,
  "\\p{sc=Glag}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [
    0x002C2F,
    0x01E007,
    0x01E022,
    0x01E025
  ],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x002BFF],
    [0x002C5F, 0x00DBFF],
    [0x00E000, 0x01DFFF],
    [0x01E019, 0x01E01A],
    [0x01E02B, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script=Glagolitic}+$/u,
  nonMatchSymbols,
  "\\P{Script=Glagolitic}"
);
testPropertyEscapes(
  /^\P{Script=Glag}+$/u,
  nonMatchSymbols,
  "\\P{Script=Glag}"
);
testPropertyEscapes(
  /^\P{sc=Glagolitic}+$/u,
  nonMatchSymbols,
  "\\P{sc=Glagolitic}"
);
testPropertyEscapes(
  /^\P{sc=Glag}+$/u,
  nonMatchSymbols,
  "\\P{sc=Glag}"
);
