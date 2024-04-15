// Copyright 2024 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Nyiakeng_Puachue_Hmong`
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
    [0x01E100, 0x01E12C],
    [0x01E130, 0x01E13D],
    [0x01E140, 0x01E149],
    [0x01E14E, 0x01E14F]
  ]
});
testPropertyEscapes(
  /^\p{Script_Extensions=Nyiakeng_Puachue_Hmong}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Nyiakeng_Puachue_Hmong}"
);
testPropertyEscapes(
  /^\p{Script_Extensions=Hmnp}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Hmnp}"
);
testPropertyEscapes(
  /^\p{scx=Nyiakeng_Puachue_Hmong}+$/u,
  matchSymbols,
  "\\p{scx=Nyiakeng_Puachue_Hmong}"
);
testPropertyEscapes(
  /^\p{scx=Hmnp}+$/u,
  matchSymbols,
  "\\p{scx=Hmnp}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00DBFF],
    [0x00E000, 0x01E0FF],
    [0x01E12D, 0x01E12F],
    [0x01E13E, 0x01E13F],
    [0x01E14A, 0x01E14D],
    [0x01E150, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script_Extensions=Nyiakeng_Puachue_Hmong}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Nyiakeng_Puachue_Hmong}"
);
testPropertyEscapes(
  /^\P{Script_Extensions=Hmnp}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Hmnp}"
);
testPropertyEscapes(
  /^\P{scx=Nyiakeng_Puachue_Hmong}+$/u,
  nonMatchSymbols,
  "\\P{scx=Nyiakeng_Puachue_Hmong}"
);
testPropertyEscapes(
  /^\P{scx=Hmnp}+$/u,
  nonMatchSymbols,
  "\\P{scx=Hmnp}"
);
