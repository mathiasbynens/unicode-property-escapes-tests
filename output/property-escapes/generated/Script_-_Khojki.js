// Copyright 2022 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Khojki`
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
    [0x011200, 0x011211],
    [0x011213, 0x01123E]
  ]
});
testPropertyEscapes(
  /^\p{Script=Khojki}+$/u,
  matchSymbols,
  "\\p{Script=Khojki}"
);
testPropertyEscapes(
  /^\p{Script=Khoj}+$/u,
  matchSymbols,
  "\\p{Script=Khoj}"
);
testPropertyEscapes(
  /^\p{sc=Khojki}+$/u,
  matchSymbols,
  "\\p{sc=Khojki}"
);
testPropertyEscapes(
  /^\p{sc=Khoj}+$/u,
  matchSymbols,
  "\\p{sc=Khoj}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [
    0x011212
  ],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00DBFF],
    [0x00E000, 0x0111FF],
    [0x01123F, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script=Khojki}+$/u,
  nonMatchSymbols,
  "\\P{Script=Khojki}"
);
testPropertyEscapes(
  /^\P{Script=Khoj}+$/u,
  nonMatchSymbols,
  "\\P{Script=Khoj}"
);
testPropertyEscapes(
  /^\P{sc=Khojki}+$/u,
  nonMatchSymbols,
  "\\P{sc=Khojki}"
);
testPropertyEscapes(
  /^\P{sc=Khoj}+$/u,
  nonMatchSymbols,
  "\\P{sc=Khoj}"
);