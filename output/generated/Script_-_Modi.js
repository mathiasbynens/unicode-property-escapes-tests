// Copyright 2022 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Modi`
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
    [0x011600, 0x011644],
    [0x011650, 0x011659]
  ]
});
testPropertyEscapes(
  /^\p{Script=Modi}+$/u,
  matchSymbols,
  "\\p{Script=Modi}"
);
testPropertyEscapes(
  /^\p{Script=Modi}+$/u,
  matchSymbols,
  "\\p{Script=Modi}"
);
testPropertyEscapes(
  /^\p{sc=Modi}+$/u,
  matchSymbols,
  "\\p{sc=Modi}"
);
testPropertyEscapes(
  /^\p{sc=Modi}+$/u,
  matchSymbols,
  "\\p{sc=Modi}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00DBFF],
    [0x00E000, 0x0115FF],
    [0x011645, 0x01164F],
    [0x01165A, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script=Modi}+$/u,
  nonMatchSymbols,
  "\\P{Script=Modi}"
);
testPropertyEscapes(
  /^\P{Script=Modi}+$/u,
  nonMatchSymbols,
  "\\P{Script=Modi}"
);
testPropertyEscapes(
  /^\P{sc=Modi}+$/u,
  nonMatchSymbols,
  "\\P{sc=Modi}"
);
testPropertyEscapes(
  /^\P{sc=Modi}+$/u,
  nonMatchSymbols,
  "\\P{sc=Modi}"
);
