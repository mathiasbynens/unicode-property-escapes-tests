// Copyright 2022 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Chorasmian`
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
    [0x010FB0, 0x010FCB]
  ]
});
testPropertyEscapes(
  /^\p{Script_Extensions=Chorasmian}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Chorasmian}"
);
testPropertyEscapes(
  /^\p{Script_Extensions=Chrs}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Chrs}"
);
testPropertyEscapes(
  /^\p{scx=Chorasmian}+$/u,
  matchSymbols,
  "\\p{scx=Chorasmian}"
);
testPropertyEscapes(
  /^\p{scx=Chrs}+$/u,
  matchSymbols,
  "\\p{scx=Chrs}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00DBFF],
    [0x00E000, 0x010FAF],
    [0x010FCC, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script_Extensions=Chorasmian}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Chorasmian}"
);
testPropertyEscapes(
  /^\P{Script_Extensions=Chrs}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Chrs}"
);
testPropertyEscapes(
  /^\P{scx=Chorasmian}+$/u,
  nonMatchSymbols,
  "\\P{scx=Chorasmian}"
);
testPropertyEscapes(
  /^\P{scx=Chrs}+$/u,
  nonMatchSymbols,
  "\\P{scx=Chrs}"
);
