// Copyright 2021 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Devanagari`
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
    [0x000900, 0x000950],
    [0x000955, 0x000963],
    [0x000966, 0x00097F],
    [0x00A8E0, 0x00A8FF]
  ]
});
testPropertyEscapes(
  /^\p{Script=Devanagari}+$/u,
  matchSymbols,
  "\\p{Script=Devanagari}"
);
testPropertyEscapes(
  /^\p{Script=Deva}+$/u,
  matchSymbols,
  "\\p{Script=Deva}"
);
testPropertyEscapes(
  /^\p{sc=Devanagari}+$/u,
  matchSymbols,
  "\\p{sc=Devanagari}"
);
testPropertyEscapes(
  /^\p{sc=Deva}+$/u,
  matchSymbols,
  "\\p{sc=Deva}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x0008FF],
    [0x000951, 0x000954],
    [0x000964, 0x000965],
    [0x000980, 0x00A8DF],
    [0x00A900, 0x00DBFF],
    [0x00E000, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script=Devanagari}+$/u,
  nonMatchSymbols,
  "\\P{Script=Devanagari}"
);
testPropertyEscapes(
  /^\P{Script=Deva}+$/u,
  nonMatchSymbols,
  "\\P{Script=Deva}"
);
testPropertyEscapes(
  /^\P{sc=Devanagari}+$/u,
  nonMatchSymbols,
  "\\P{sc=Devanagari}"
);
testPropertyEscapes(
  /^\P{sc=Deva}+$/u,
  nonMatchSymbols,
  "\\P{sc=Deva}"
);
