// Copyright 2021 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Samaritan`
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
    [0x000800, 0x00082D],
    [0x000830, 0x00083E]
  ]
});
testPropertyEscapes(
  /^\p{Script=Samaritan}+$/u,
  matchSymbols,
  "\\p{Script=Samaritan}"
);
testPropertyEscapes(
  /^\p{Script=Samr}+$/u,
  matchSymbols,
  "\\p{Script=Samr}"
);
testPropertyEscapes(
  /^\p{sc=Samaritan}+$/u,
  matchSymbols,
  "\\p{sc=Samaritan}"
);
testPropertyEscapes(
  /^\p{sc=Samr}+$/u,
  matchSymbols,
  "\\p{sc=Samr}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x0007FF],
    [0x00082E, 0x00082F],
    [0x00083F, 0x00DBFF],
    [0x00E000, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script=Samaritan}+$/u,
  nonMatchSymbols,
  "\\P{Script=Samaritan}"
);
testPropertyEscapes(
  /^\P{Script=Samr}+$/u,
  nonMatchSymbols,
  "\\P{Script=Samr}"
);
testPropertyEscapes(
  /^\P{sc=Samaritan}+$/u,
  nonMatchSymbols,
  "\\P{sc=Samaritan}"
);
testPropertyEscapes(
  /^\P{sc=Samr}+$/u,
  nonMatchSymbols,
  "\\P{sc=Samr}"
);
