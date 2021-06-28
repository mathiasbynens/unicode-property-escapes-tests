// Copyright 2021 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Gothic`
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
    [0x010330, 0x01034A]
  ]
});
testPropertyEscapes(
  /^\p{Script_Extensions=Gothic}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Gothic}"
);
testPropertyEscapes(
  /^\p{Script_Extensions=Goth}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Goth}"
);
testPropertyEscapes(
  /^\p{scx=Gothic}+$/u,
  matchSymbols,
  "\\p{scx=Gothic}"
);
testPropertyEscapes(
  /^\p{scx=Goth}+$/u,
  matchSymbols,
  "\\p{scx=Goth}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00DBFF],
    [0x00E000, 0x01032F],
    [0x01034B, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script_Extensions=Gothic}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Gothic}"
);
testPropertyEscapes(
  /^\P{Script_Extensions=Goth}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Goth}"
);
testPropertyEscapes(
  /^\P{scx=Gothic}+$/u,
  nonMatchSymbols,
  "\\P{scx=Gothic}"
);
testPropertyEscapes(
  /^\P{scx=Goth}+$/u,
  nonMatchSymbols,
  "\\P{scx=Goth}"
);
