// Copyright 2022 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Myanmar`
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
    [0x001000, 0x00109F],
    [0x00A9E0, 0x00A9FE],
    [0x00AA60, 0x00AA7F]
  ]
});
testPropertyEscapes(
  /^\p{Script=Myanmar}+$/u,
  matchSymbols,
  "\\p{Script=Myanmar}"
);
testPropertyEscapes(
  /^\p{Script=Mymr}+$/u,
  matchSymbols,
  "\\p{Script=Mymr}"
);
testPropertyEscapes(
  /^\p{sc=Myanmar}+$/u,
  matchSymbols,
  "\\p{sc=Myanmar}"
);
testPropertyEscapes(
  /^\p{sc=Mymr}+$/u,
  matchSymbols,
  "\\p{sc=Mymr}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x000FFF],
    [0x0010A0, 0x00A9DF],
    [0x00A9FF, 0x00AA5F],
    [0x00AA80, 0x00DBFF],
    [0x00E000, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script=Myanmar}+$/u,
  nonMatchSymbols,
  "\\P{Script=Myanmar}"
);
testPropertyEscapes(
  /^\P{Script=Mymr}+$/u,
  nonMatchSymbols,
  "\\P{Script=Mymr}"
);
testPropertyEscapes(
  /^\P{sc=Myanmar}+$/u,
  nonMatchSymbols,
  "\\P{sc=Myanmar}"
);
testPropertyEscapes(
  /^\P{sc=Mymr}+$/u,
  nonMatchSymbols,
  "\\P{sc=Mymr}"
);
