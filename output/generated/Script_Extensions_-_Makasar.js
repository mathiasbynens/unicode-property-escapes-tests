// Copyright 2021 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Makasar`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v13.0.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x011EE0, 0x011EF8]
  ]
});
testPropertyEscapes(
  /^\p{Script_Extensions=Makasar}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Makasar}"
);
testPropertyEscapes(
  /^\p{Script_Extensions=Maka}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Maka}"
);
testPropertyEscapes(
  /^\p{scx=Makasar}+$/u,
  matchSymbols,
  "\\p{scx=Makasar}"
);
testPropertyEscapes(
  /^\p{scx=Maka}+$/u,
  matchSymbols,
  "\\p{scx=Maka}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00DBFF],
    [0x00E000, 0x011EDF],
    [0x011EF9, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script_Extensions=Makasar}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Makasar}"
);
testPropertyEscapes(
  /^\P{Script_Extensions=Maka}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Maka}"
);
testPropertyEscapes(
  /^\P{scx=Makasar}+$/u,
  nonMatchSymbols,
  "\\P{scx=Makasar}"
);
testPropertyEscapes(
  /^\P{scx=Maka}+$/u,
  nonMatchSymbols,
  "\\P{scx=Maka}"
);
