// Copyright 2024 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Tibetan`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v16.0.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x000F00, 0x000F47],
    [0x000F49, 0x000F6C],
    [0x000F71, 0x000F97],
    [0x000F99, 0x000FBC],
    [0x000FBE, 0x000FCC],
    [0x000FCE, 0x000FD4],
    [0x000FD9, 0x000FDA]
  ]
});
testPropertyEscapes(
  /^\p{Script=Tibetan}+$/u,
  matchSymbols,
  "\\p{Script=Tibetan}"
);
testPropertyEscapes(
  /^\p{Script=Tibt}+$/u,
  matchSymbols,
  "\\p{Script=Tibt}"
);
testPropertyEscapes(
  /^\p{sc=Tibetan}+$/u,
  matchSymbols,
  "\\p{sc=Tibetan}"
);
testPropertyEscapes(
  /^\p{sc=Tibt}+$/u,
  matchSymbols,
  "\\p{sc=Tibt}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [
    0x000F48,
    0x000F98,
    0x000FBD,
    0x000FCD
  ],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x000EFF],
    [0x000F6D, 0x000F70],
    [0x000FD5, 0x000FD8],
    [0x000FDB, 0x00DBFF],
    [0x00E000, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script=Tibetan}+$/u,
  nonMatchSymbols,
  "\\P{Script=Tibetan}"
);
testPropertyEscapes(
  /^\P{Script=Tibt}+$/u,
  nonMatchSymbols,
  "\\P{Script=Tibt}"
);
testPropertyEscapes(
  /^\P{sc=Tibetan}+$/u,
  nonMatchSymbols,
  "\\P{sc=Tibetan}"
);
testPropertyEscapes(
  /^\P{sc=Tibt}+$/u,
  nonMatchSymbols,
  "\\P{sc=Tibt}"
);
