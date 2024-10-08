// Copyright 2024 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Tai_Le`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v16.0.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [
    0x00030C
  ],
  ranges: [
    [0x000300, 0x000301],
    [0x000307, 0x000308],
    [0x001040, 0x001049],
    [0x001950, 0x00196D],
    [0x001970, 0x001974]
  ]
});
testPropertyEscapes(
  /^\p{Script_Extensions=Tai_Le}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Tai_Le}"
);
testPropertyEscapes(
  /^\p{Script_Extensions=Tale}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Tale}"
);
testPropertyEscapes(
  /^\p{scx=Tai_Le}+$/u,
  matchSymbols,
  "\\p{scx=Tai_Le}"
);
testPropertyEscapes(
  /^\p{scx=Tale}+$/u,
  matchSymbols,
  "\\p{scx=Tale}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x0002FF],
    [0x000302, 0x000306],
    [0x000309, 0x00030B],
    [0x00030D, 0x00103F],
    [0x00104A, 0x00194F],
    [0x00196E, 0x00196F],
    [0x001975, 0x00DBFF],
    [0x00E000, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script_Extensions=Tai_Le}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Tai_Le}"
);
testPropertyEscapes(
  /^\P{Script_Extensions=Tale}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Tale}"
);
testPropertyEscapes(
  /^\P{scx=Tai_Le}+$/u,
  nonMatchSymbols,
  "\\P{scx=Tai_Le}"
);
testPropertyEscapes(
  /^\P{scx=Tale}+$/u,
  nonMatchSymbols,
  "\\P{scx=Tale}"
);
