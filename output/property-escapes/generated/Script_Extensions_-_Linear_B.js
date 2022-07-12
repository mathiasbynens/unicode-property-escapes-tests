// Copyright 2022 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Linear_B`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v14.0.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x010000, 0x01000B],
    [0x01000D, 0x010026],
    [0x010028, 0x01003A],
    [0x01003C, 0x01003D],
    [0x01003F, 0x01004D],
    [0x010050, 0x01005D],
    [0x010080, 0x0100FA],
    [0x010100, 0x010102],
    [0x010107, 0x010133],
    [0x010137, 0x01013F]
  ]
});
testPropertyEscapes(
  /^\p{Script_Extensions=Linear_B}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Linear_B}"
);
testPropertyEscapes(
  /^\p{Script_Extensions=Linb}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Linb}"
);
testPropertyEscapes(
  /^\p{scx=Linear_B}+$/u,
  matchSymbols,
  "\\p{scx=Linear_B}"
);
testPropertyEscapes(
  /^\p{scx=Linb}+$/u,
  matchSymbols,
  "\\p{scx=Linb}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [
    0x01000C,
    0x010027,
    0x01003B,
    0x01003E
  ],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00DBFF],
    [0x00E000, 0x00FFFF],
    [0x01004E, 0x01004F],
    [0x01005E, 0x01007F],
    [0x0100FB, 0x0100FF],
    [0x010103, 0x010106],
    [0x010134, 0x010136],
    [0x010140, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script_Extensions=Linear_B}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Linear_B}"
);
testPropertyEscapes(
  /^\P{Script_Extensions=Linb}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Linb}"
);
testPropertyEscapes(
  /^\P{scx=Linear_B}+$/u,
  nonMatchSymbols,
  "\\P{scx=Linear_B}"
);
testPropertyEscapes(
  /^\P{scx=Linb}+$/u,
  nonMatchSymbols,
  "\\P{scx=Linb}"
);