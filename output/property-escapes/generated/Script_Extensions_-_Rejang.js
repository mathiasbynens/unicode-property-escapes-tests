// Copyright 2022 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Rejang`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v15.0.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [
    0x00A95F
  ],
  ranges: [
    [0x00A930, 0x00A953]
  ]
});
testPropertyEscapes(
  /^\p{Script_Extensions=Rejang}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Rejang}"
);
testPropertyEscapes(
  /^\p{Script_Extensions=Rjng}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Rjng}"
);
testPropertyEscapes(
  /^\p{scx=Rejang}+$/u,
  matchSymbols,
  "\\p{scx=Rejang}"
);
testPropertyEscapes(
  /^\p{scx=Rjng}+$/u,
  matchSymbols,
  "\\p{scx=Rjng}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00A92F],
    [0x00A954, 0x00A95E],
    [0x00A960, 0x00DBFF],
    [0x00E000, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script_Extensions=Rejang}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Rejang}"
);
testPropertyEscapes(
  /^\P{Script_Extensions=Rjng}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Rjng}"
);
testPropertyEscapes(
  /^\P{scx=Rejang}+$/u,
  nonMatchSymbols,
  "\\P{scx=Rejang}"
);
testPropertyEscapes(
  /^\P{scx=Rjng}+$/u,
  nonMatchSymbols,
  "\\P{scx=Rjng}"
);
