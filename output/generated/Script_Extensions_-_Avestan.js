// Copyright 2021 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Avestan`
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
    [0x010B00, 0x010B35],
    [0x010B39, 0x010B3F]
  ]
});
testPropertyEscapes(
  /^\p{Script_Extensions=Avestan}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Avestan}"
);
testPropertyEscapes(
  /^\p{Script_Extensions=Avst}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Avst}"
);
testPropertyEscapes(
  /^\p{scx=Avestan}+$/u,
  matchSymbols,
  "\\p{scx=Avestan}"
);
testPropertyEscapes(
  /^\p{scx=Avst}+$/u,
  matchSymbols,
  "\\p{scx=Avst}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00DBFF],
    [0x00E000, 0x010AFF],
    [0x010B36, 0x010B38],
    [0x010B40, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script_Extensions=Avestan}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Avestan}"
);
testPropertyEscapes(
  /^\P{Script_Extensions=Avst}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Avst}"
);
testPropertyEscapes(
  /^\P{scx=Avestan}+$/u,
  nonMatchSymbols,
  "\\P{scx=Avestan}"
);
testPropertyEscapes(
  /^\P{scx=Avst}+$/u,
  nonMatchSymbols,
  "\\P{scx=Avst}"
);
