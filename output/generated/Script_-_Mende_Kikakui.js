// Copyright 2022 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Mende_Kikakui`
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
    [0x01E800, 0x01E8C4],
    [0x01E8C7, 0x01E8D6]
  ]
});
testPropertyEscapes(
  /^\p{Script=Mende_Kikakui}+$/u,
  matchSymbols,
  "\\p{Script=Mende_Kikakui}"
);
testPropertyEscapes(
  /^\p{Script=Mend}+$/u,
  matchSymbols,
  "\\p{Script=Mend}"
);
testPropertyEscapes(
  /^\p{sc=Mende_Kikakui}+$/u,
  matchSymbols,
  "\\p{sc=Mende_Kikakui}"
);
testPropertyEscapes(
  /^\p{sc=Mend}+$/u,
  matchSymbols,
  "\\p{sc=Mend}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00DBFF],
    [0x00E000, 0x01E7FF],
    [0x01E8C5, 0x01E8C6],
    [0x01E8D7, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script=Mende_Kikakui}+$/u,
  nonMatchSymbols,
  "\\P{Script=Mende_Kikakui}"
);
testPropertyEscapes(
  /^\P{Script=Mend}+$/u,
  nonMatchSymbols,
  "\\P{Script=Mend}"
);
testPropertyEscapes(
  /^\P{sc=Mende_Kikakui}+$/u,
  nonMatchSymbols,
  "\\P{sc=Mende_Kikakui}"
);
testPropertyEscapes(
  /^\P{sc=Mend}+$/u,
  nonMatchSymbols,
  "\\P{sc=Mend}"
);
