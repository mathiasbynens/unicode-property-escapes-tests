// Copyright 2022 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Cypro_Minoan`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v15.0.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x010100, 0x010101],
    [0x012F90, 0x012FF2]
  ]
});
testPropertyEscapes(
  /^\p{Script_Extensions=Cypro_Minoan}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Cypro_Minoan}"
);
testPropertyEscapes(
  /^\p{Script_Extensions=Cpmn}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Cpmn}"
);
testPropertyEscapes(
  /^\p{scx=Cypro_Minoan}+$/u,
  matchSymbols,
  "\\p{scx=Cypro_Minoan}"
);
testPropertyEscapes(
  /^\p{scx=Cpmn}+$/u,
  matchSymbols,
  "\\p{scx=Cpmn}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00DBFF],
    [0x00E000, 0x0100FF],
    [0x010102, 0x012F8F],
    [0x012FF3, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script_Extensions=Cypro_Minoan}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Cypro_Minoan}"
);
testPropertyEscapes(
  /^\P{Script_Extensions=Cpmn}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Cpmn}"
);
testPropertyEscapes(
  /^\P{scx=Cypro_Minoan}+$/u,
  nonMatchSymbols,
  "\\P{scx=Cypro_Minoan}"
);
testPropertyEscapes(
  /^\P{scx=Cpmn}+$/u,
  nonMatchSymbols,
  "\\P{scx=Cpmn}"
);
