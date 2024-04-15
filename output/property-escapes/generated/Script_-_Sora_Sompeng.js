// Copyright 2024 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Sora_Sompeng`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v15.1.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x0110D0, 0x0110E8],
    [0x0110F0, 0x0110F9]
  ]
});
testPropertyEscapes(
  /^\p{Script=Sora_Sompeng}+$/u,
  matchSymbols,
  "\\p{Script=Sora_Sompeng}"
);
testPropertyEscapes(
  /^\p{Script=Sora}+$/u,
  matchSymbols,
  "\\p{Script=Sora}"
);
testPropertyEscapes(
  /^\p{sc=Sora_Sompeng}+$/u,
  matchSymbols,
  "\\p{sc=Sora_Sompeng}"
);
testPropertyEscapes(
  /^\p{sc=Sora}+$/u,
  matchSymbols,
  "\\p{sc=Sora}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00DBFF],
    [0x00E000, 0x0110CF],
    [0x0110E9, 0x0110EF],
    [0x0110FA, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script=Sora_Sompeng}+$/u,
  nonMatchSymbols,
  "\\P{Script=Sora_Sompeng}"
);
testPropertyEscapes(
  /^\P{Script=Sora}+$/u,
  nonMatchSymbols,
  "\\P{Script=Sora}"
);
testPropertyEscapes(
  /^\P{sc=Sora_Sompeng}+$/u,
  nonMatchSymbols,
  "\\P{sc=Sora_Sompeng}"
);
testPropertyEscapes(
  /^\P{sc=Sora}+$/u,
  nonMatchSymbols,
  "\\P{sc=Sora}"
);
