// Copyright 2022 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Meroitic_Hieroglyphs`
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
    [0x010980, 0x01099F]
  ]
});
testPropertyEscapes(
  /^\p{Script_Extensions=Meroitic_Hieroglyphs}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Meroitic_Hieroglyphs}"
);
testPropertyEscapes(
  /^\p{Script_Extensions=Mero}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Mero}"
);
testPropertyEscapes(
  /^\p{scx=Meroitic_Hieroglyphs}+$/u,
  matchSymbols,
  "\\p{scx=Meroitic_Hieroglyphs}"
);
testPropertyEscapes(
  /^\p{scx=Mero}+$/u,
  matchSymbols,
  "\\p{scx=Mero}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00DBFF],
    [0x00E000, 0x01097F],
    [0x0109A0, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script_Extensions=Meroitic_Hieroglyphs}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Meroitic_Hieroglyphs}"
);
testPropertyEscapes(
  /^\P{Script_Extensions=Mero}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Mero}"
);
testPropertyEscapes(
  /^\P{scx=Meroitic_Hieroglyphs}+$/u,
  nonMatchSymbols,
  "\\P{scx=Meroitic_Hieroglyphs}"
);
testPropertyEscapes(
  /^\P{scx=Mero}+$/u,
  nonMatchSymbols,
  "\\P{scx=Mero}"
);
