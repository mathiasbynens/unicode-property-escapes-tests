// Copyright 2021 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Hiragana`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v13.0.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [
    0x003037,
    0x00FF70,
    0x01F200
  ],
  ranges: [
    [0x003001, 0x003003],
    [0x003008, 0x003011],
    [0x003013, 0x00301F],
    [0x003030, 0x003035],
    [0x00303C, 0x00303D],
    [0x003041, 0x003096],
    [0x003099, 0x0030A0],
    [0x0030FB, 0x0030FC],
    [0x00FE45, 0x00FE46],
    [0x00FF61, 0x00FF65],
    [0x00FF9E, 0x00FF9F],
    [0x01B001, 0x01B11E],
    [0x01B150, 0x01B152]
  ]
});
testPropertyEscapes(
  /^\p{Script_Extensions=Hiragana}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Hiragana}"
);
testPropertyEscapes(
  /^\p{Script_Extensions=Hira}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Hira}"
);
testPropertyEscapes(
  /^\p{scx=Hiragana}+$/u,
  matchSymbols,
  "\\p{scx=Hiragana}"
);
testPropertyEscapes(
  /^\p{scx=Hira}+$/u,
  matchSymbols,
  "\\p{scx=Hira}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [
    0x003012,
    0x003036
  ],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x003000],
    [0x003004, 0x003007],
    [0x003020, 0x00302F],
    [0x003038, 0x00303B],
    [0x00303E, 0x003040],
    [0x003097, 0x003098],
    [0x0030A1, 0x0030FA],
    [0x0030FD, 0x00DBFF],
    [0x00E000, 0x00FE44],
    [0x00FE47, 0x00FF60],
    [0x00FF66, 0x00FF6F],
    [0x00FF71, 0x00FF9D],
    [0x00FFA0, 0x01B000],
    [0x01B11F, 0x01B14F],
    [0x01B153, 0x01F1FF],
    [0x01F201, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script_Extensions=Hiragana}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Hiragana}"
);
testPropertyEscapes(
  /^\P{Script_Extensions=Hira}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Hira}"
);
testPropertyEscapes(
  /^\P{scx=Hiragana}+$/u,
  nonMatchSymbols,
  "\\P{scx=Hiragana}"
);
testPropertyEscapes(
  /^\P{scx=Hira}+$/u,
  nonMatchSymbols,
  "\\P{scx=Hira}"
);
