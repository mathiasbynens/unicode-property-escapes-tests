// Copyright 2022 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Hanunoo`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v14.0.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x001720, 0x001734]
  ]
});
testPropertyEscapes(
  /^\p{Script=Hanunoo}+$/u,
  matchSymbols,
  "\\p{Script=Hanunoo}"
);
testPropertyEscapes(
  /^\p{Script=Hano}+$/u,
  matchSymbols,
  "\\p{Script=Hano}"
);
testPropertyEscapes(
  /^\p{sc=Hanunoo}+$/u,
  matchSymbols,
  "\\p{sc=Hanunoo}"
);
testPropertyEscapes(
  /^\p{sc=Hano}+$/u,
  matchSymbols,
  "\\p{sc=Hano}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00171F],
    [0x001735, 0x00DBFF],
    [0x00E000, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script=Hanunoo}+$/u,
  nonMatchSymbols,
  "\\P{Script=Hanunoo}"
);
testPropertyEscapes(
  /^\P{Script=Hano}+$/u,
  nonMatchSymbols,
  "\\P{Script=Hano}"
);
testPropertyEscapes(
  /^\P{sc=Hanunoo}+$/u,
  nonMatchSymbols,
  "\\P{sc=Hanunoo}"
);
testPropertyEscapes(
  /^\P{sc=Hano}+$/u,
  nonMatchSymbols,
  "\\P{sc=Hano}"
);
