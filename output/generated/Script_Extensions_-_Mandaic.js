// Copyright 2021 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Mandaic`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v13.0.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [
    0x000640,
    0x00085E
  ],
  ranges: [
    [0x000840, 0x00085B]
  ]
});
testPropertyEscapes(
  /^\p{Script_Extensions=Mandaic}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Mandaic}"
);
testPropertyEscapes(
  /^\p{Script_Extensions=Mand}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Mand}"
);
testPropertyEscapes(
  /^\p{scx=Mandaic}+$/u,
  matchSymbols,
  "\\p{scx=Mandaic}"
);
testPropertyEscapes(
  /^\p{scx=Mand}+$/u,
  matchSymbols,
  "\\p{scx=Mand}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00063F],
    [0x000641, 0x00083F],
    [0x00085C, 0x00085D],
    [0x00085F, 0x00DBFF],
    [0x00E000, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script_Extensions=Mandaic}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Mandaic}"
);
testPropertyEscapes(
  /^\P{Script_Extensions=Mand}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Mand}"
);
testPropertyEscapes(
  /^\P{scx=Mandaic}+$/u,
  nonMatchSymbols,
  "\\P{scx=Mandaic}"
);
testPropertyEscapes(
  /^\P{scx=Mand}+$/u,
  nonMatchSymbols,
  "\\P{scx=Mand}"
);
