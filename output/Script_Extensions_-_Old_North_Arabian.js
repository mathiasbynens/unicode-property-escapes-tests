// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Old_North_Arabian`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v9.0.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x010A80, 0x010A9F]
  ]
});
testPropertyEscapes(
  /^\p{Script_Extensions=Old_North_Arabian}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Old_North_Arabian}"
);
testPropertyEscapes(
  /^\p{Script_Extensions=Narb}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Narb}"
);
testPropertyEscapes(
  /^\p{scx=Old_North_Arabian}+$/u,
  matchSymbols,
  "\\p{scx=Old_North_Arabian}"
);
testPropertyEscapes(
  /^\p{scx=Narb}+$/u,
  matchSymbols,
  "\\p{scx=Narb}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00DBFF],
    [0x00E000, 0x010A7F],
    [0x010AA0, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script_Extensions=Old_North_Arabian}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Old_North_Arabian}"
);
testPropertyEscapes(
  /^\P{Script_Extensions=Narb}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Narb}"
);
testPropertyEscapes(
  /^\P{scx=Old_North_Arabian}+$/u,
  nonMatchSymbols,
  "\\P{scx=Old_North_Arabian}"
);
testPropertyEscapes(
  /^\P{scx=Narb}+$/u,
  nonMatchSymbols,
  "\\P{scx=Narb}"
);
