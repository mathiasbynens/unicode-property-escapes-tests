// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Mahajani`
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
    [0x000964, 0x00096F],
    [0x00A830, 0x00A839],
    [0x011150, 0x011176]
  ]
});
testPropertyEscapes(
  /^\p{Script_Extensions=Mahajani}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Mahajani}"
);
testPropertyEscapes(
  /^\p{Script_Extensions=Mahj}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Mahj}"
);
testPropertyEscapes(
  /^\p{scx=Mahajani}+$/u,
  matchSymbols,
  "\\p{scx=Mahajani}"
);
testPropertyEscapes(
  /^\p{scx=Mahj}+$/u,
  matchSymbols,
  "\\p{scx=Mahj}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x000963],
    [0x000970, 0x00A82F],
    [0x00A83A, 0x00DBFF],
    [0x00E000, 0x01114F],
    [0x011177, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script_Extensions=Mahajani}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Mahajani}"
);
testPropertyEscapes(
  /^\P{Script_Extensions=Mahj}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Mahj}"
);
testPropertyEscapes(
  /^\P{scx=Mahajani}+$/u,
  nonMatchSymbols,
  "\\P{scx=Mahajani}"
);
testPropertyEscapes(
  /^\P{scx=Mahj}+$/u,
  nonMatchSymbols,
  "\\P{scx=Mahj}"
);
