// Copyright 2019 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Shavian`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v12.0.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x010450, 0x01047F]
  ]
});
testPropertyEscapes(
  /^\p{Script_Extensions=Shavian}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Shavian}"
);
testPropertyEscapes(
  /^\p{Script_Extensions=Shaw}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Shaw}"
);
testPropertyEscapes(
  /^\p{scx=Shavian}+$/u,
  matchSymbols,
  "\\p{scx=Shavian}"
);
testPropertyEscapes(
  /^\p{scx=Shaw}+$/u,
  matchSymbols,
  "\\p{scx=Shaw}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00DBFF],
    [0x00E000, 0x01044F],
    [0x010480, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script_Extensions=Shavian}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Shavian}"
);
testPropertyEscapes(
  /^\P{Script_Extensions=Shaw}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Shaw}"
);
testPropertyEscapes(
  /^\P{scx=Shavian}+$/u,
  nonMatchSymbols,
  "\\P{scx=Shavian}"
);
testPropertyEscapes(
  /^\P{scx=Shaw}+$/u,
  nonMatchSymbols,
  "\\P{scx=Shaw}"
);
