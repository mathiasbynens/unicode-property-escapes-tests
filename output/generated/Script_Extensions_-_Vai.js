// Copyright 2022 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Vai`
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
    [0x00A500, 0x00A62B]
  ]
});
testPropertyEscapes(
  /^\p{Script_Extensions=Vai}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Vai}"
);
testPropertyEscapes(
  /^\p{Script_Extensions=Vaii}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Vaii}"
);
testPropertyEscapes(
  /^\p{scx=Vai}+$/u,
  matchSymbols,
  "\\p{scx=Vai}"
);
testPropertyEscapes(
  /^\p{scx=Vaii}+$/u,
  matchSymbols,
  "\\p{scx=Vaii}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00A4FF],
    [0x00A62C, 0x00DBFF],
    [0x00E000, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script_Extensions=Vai}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Vai}"
);
testPropertyEscapes(
  /^\P{Script_Extensions=Vaii}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Vaii}"
);
testPropertyEscapes(
  /^\P{scx=Vai}+$/u,
  nonMatchSymbols,
  "\\P{scx=Vai}"
);
testPropertyEscapes(
  /^\P{scx=Vaii}+$/u,
  nonMatchSymbols,
  "\\P{scx=Vaii}"
);
