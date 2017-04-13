// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Thai`
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
    [0x000E01, 0x000E3A],
    [0x000E40, 0x000E5B]
  ]
});
testPropertyEscapes(
  /^\p{Script=Thai}+$/u,
  matchSymbols,
  "\\p{Script=Thai}"
);
testPropertyEscapes(
  /^\p{Script=Thai}+$/u,
  matchSymbols,
  "\\p{Script=Thai}"
);
testPropertyEscapes(
  /^\p{sc=Thai}+$/u,
  matchSymbols,
  "\\p{sc=Thai}"
);
testPropertyEscapes(
  /^\p{sc=Thai}+$/u,
  matchSymbols,
  "\\p{sc=Thai}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x000E00],
    [0x000E3B, 0x000E3F],
    [0x000E5C, 0x00DBFF],
    [0x00E000, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script=Thai}+$/u,
  nonMatchSymbols,
  "\\P{Script=Thai}"
);
testPropertyEscapes(
  /^\P{Script=Thai}+$/u,
  nonMatchSymbols,
  "\\P{Script=Thai}"
);
testPropertyEscapes(
  /^\P{sc=Thai}+$/u,
  nonMatchSymbols,
  "\\P{sc=Thai}"
);
testPropertyEscapes(
  /^\P{sc=Thai}+$/u,
  nonMatchSymbols,
  "\\P{sc=Thai}"
);
