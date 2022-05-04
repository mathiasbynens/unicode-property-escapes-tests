// Copyright 2022 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Old_Hungarian`
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
    [0x010C80, 0x010CB2],
    [0x010CC0, 0x010CF2],
    [0x010CFA, 0x010CFF]
  ]
});
testPropertyEscapes(
  /^\p{Script=Old_Hungarian}+$/u,
  matchSymbols,
  "\\p{Script=Old_Hungarian}"
);
testPropertyEscapes(
  /^\p{Script=Hung}+$/u,
  matchSymbols,
  "\\p{Script=Hung}"
);
testPropertyEscapes(
  /^\p{sc=Old_Hungarian}+$/u,
  matchSymbols,
  "\\p{sc=Old_Hungarian}"
);
testPropertyEscapes(
  /^\p{sc=Hung}+$/u,
  matchSymbols,
  "\\p{sc=Hung}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00DBFF],
    [0x00E000, 0x010C7F],
    [0x010CB3, 0x010CBF],
    [0x010CF3, 0x010CF9],
    [0x010D00, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script=Old_Hungarian}+$/u,
  nonMatchSymbols,
  "\\P{Script=Old_Hungarian}"
);
testPropertyEscapes(
  /^\P{Script=Hung}+$/u,
  nonMatchSymbols,
  "\\P{Script=Hung}"
);
testPropertyEscapes(
  /^\P{sc=Old_Hungarian}+$/u,
  nonMatchSymbols,
  "\\P{sc=Old_Hungarian}"
);
testPropertyEscapes(
  /^\P{sc=Hung}+$/u,
  nonMatchSymbols,
  "\\P{sc=Hung}"
);
