// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Pattern_White_Space`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v9.0.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [
    0x000020,
    0x000085
  ],
  ranges: [
    [0x000009, 0x00000D],
    [0x00200E, 0x00200F],
    [0x002028, 0x002029]
  ]
});
testPropertyEscapes(
  /^\p{Pattern_White_Space}+$/u,
  matchSymbols,
  "\\p{Pattern_White_Space}"
);
testPropertyEscapes(
  /^\p{Pat_WS}+$/u,
  matchSymbols,
  "\\p{Pat_WS}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x000008],
    [0x00000E, 0x00001F],
    [0x000021, 0x000084],
    [0x000086, 0x00200D],
    [0x002010, 0x002027],
    [0x00202A, 0x00DBFF],
    [0x00E000, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Pattern_White_Space}+$/u,
  nonMatchSymbols,
  "\\P{Pattern_White_Space}"
);
testPropertyEscapes(
  /^\P{Pat_WS}+$/u,
  nonMatchSymbols,
  "\\P{Pat_WS}"
);
