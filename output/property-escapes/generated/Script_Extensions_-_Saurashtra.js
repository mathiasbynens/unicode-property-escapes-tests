// Copyright 2024 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Saurashtra`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v16.0.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00A880, 0x00A8C5],
    [0x00A8CE, 0x00A8D9]
  ]
});
testPropertyEscapes(
  /^\p{Script_Extensions=Saurashtra}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Saurashtra}"
);
testPropertyEscapes(
  /^\p{Script_Extensions=Saur}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Saur}"
);
testPropertyEscapes(
  /^\p{scx=Saurashtra}+$/u,
  matchSymbols,
  "\\p{scx=Saurashtra}"
);
testPropertyEscapes(
  /^\p{scx=Saur}+$/u,
  matchSymbols,
  "\\p{scx=Saur}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00A87F],
    [0x00A8C6, 0x00A8CD],
    [0x00A8DA, 0x00DBFF],
    [0x00E000, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script_Extensions=Saurashtra}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Saurashtra}"
);
testPropertyEscapes(
  /^\P{Script_Extensions=Saur}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Saur}"
);
testPropertyEscapes(
  /^\P{scx=Saurashtra}+$/u,
  nonMatchSymbols,
  "\\P{scx=Saurashtra}"
);
testPropertyEscapes(
  /^\P{scx=Saur}+$/u,
  nonMatchSymbols,
  "\\P{scx=Saur}"
);
