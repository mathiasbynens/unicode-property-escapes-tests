// Copyright 2024 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Gurung_Khema`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v16.0.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [
    0x000965
  ],
  ranges: [
    [0x016100, 0x016139]
  ]
});
testPropertyEscapes(
  /^\p{Script_Extensions=Gurung_Khema}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Gurung_Khema}"
);
testPropertyEscapes(
  /^\p{Script_Extensions=Gukh}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Gukh}"
);
testPropertyEscapes(
  /^\p{scx=Gurung_Khema}+$/u,
  matchSymbols,
  "\\p{scx=Gurung_Khema}"
);
testPropertyEscapes(
  /^\p{scx=Gukh}+$/u,
  matchSymbols,
  "\\p{scx=Gukh}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x000964],
    [0x000966, 0x00DBFF],
    [0x00E000, 0x0160FF],
    [0x01613A, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script_Extensions=Gurung_Khema}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Gurung_Khema}"
);
testPropertyEscapes(
  /^\P{Script_Extensions=Gukh}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Gukh}"
);
testPropertyEscapes(
  /^\P{scx=Gurung_Khema}+$/u,
  nonMatchSymbols,
  "\\P{scx=Gurung_Khema}"
);
testPropertyEscapes(
  /^\P{scx=Gukh}+$/u,
  nonMatchSymbols,
  "\\P{scx=Gukh}"
);