// Copyright 2021 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `General_Category=Math_Symbol`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v13.0.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [
    0x00002B,
    0x00007C,
    0x00007E,
    0x0000AC,
    0x0000B1,
    0x0000D7,
    0x0000F7,
    0x0003F6,
    0x002044,
    0x002052,
    0x002118,
    0x00214B,
    0x0021A0,
    0x0021A3,
    0x0021A6,
    0x0021AE,
    0x0021D2,
    0x0021D4,
    0x00237C,
    0x0025B7,
    0x0025C1,
    0x00266F,
    0x00FB29,
    0x00FE62,
    0x00FF0B,
    0x00FF5C,
    0x00FF5E,
    0x00FFE2,
    0x01D6C1,
    0x01D6DB,
    0x01D6FB,
    0x01D715,
    0x01D735,
    0x01D74F,
    0x01D76F,
    0x01D789,
    0x01D7A9,
    0x01D7C3
  ],
  ranges: [
    [0x00003C, 0x00003E],
    [0x000606, 0x000608],
    [0x00207A, 0x00207C],
    [0x00208A, 0x00208C],
    [0x002140, 0x002144],
    [0x002190, 0x002194],
    [0x00219A, 0x00219B],
    [0x0021CE, 0x0021CF],
    [0x0021F4, 0x0022FF],
    [0x002320, 0x002321],
    [0x00239B, 0x0023B3],
    [0x0023DC, 0x0023E1],
    [0x0025F8, 0x0025FF],
    [0x0027C0, 0x0027C4],
    [0x0027C7, 0x0027E5],
    [0x0027F0, 0x0027FF],
    [0x002900, 0x002982],
    [0x002999, 0x0029D7],
    [0x0029DC, 0x0029FB],
    [0x0029FE, 0x002AFF],
    [0x002B30, 0x002B44],
    [0x002B47, 0x002B4C],
    [0x00FE64, 0x00FE66],
    [0x00FF1C, 0x00FF1E],
    [0x00FFE9, 0x00FFEC],
    [0x01EEF0, 0x01EEF1]
  ]
});
testPropertyEscapes(
  /^\p{General_Category=Math_Symbol}+$/u,
  matchSymbols,
  "\\p{General_Category=Math_Symbol}"
);
testPropertyEscapes(
  /^\p{General_Category=Sm}+$/u,
  matchSymbols,
  "\\p{General_Category=Sm}"
);
testPropertyEscapes(
  /^\p{gc=Math_Symbol}+$/u,
  matchSymbols,
  "\\p{gc=Math_Symbol}"
);
testPropertyEscapes(
  /^\p{gc=Sm}+$/u,
  matchSymbols,
  "\\p{gc=Sm}"
);
testPropertyEscapes(
  /^\p{Math_Symbol}+$/u,
  matchSymbols,
  "\\p{Math_Symbol}"
);
testPropertyEscapes(
  /^\p{Sm}+$/u,
  matchSymbols,
  "\\p{Sm}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [
    0x00007D,
    0x0021D3,
    0x00FE63,
    0x00FF5D
  ],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00002A],
    [0x00002C, 0x00003B],
    [0x00003F, 0x00007B],
    [0x00007F, 0x0000AB],
    [0x0000AD, 0x0000B0],
    [0x0000B2, 0x0000D6],
    [0x0000D8, 0x0000F6],
    [0x0000F8, 0x0003F5],
    [0x0003F7, 0x000605],
    [0x000609, 0x002043],
    [0x002045, 0x002051],
    [0x002053, 0x002079],
    [0x00207D, 0x002089],
    [0x00208D, 0x002117],
    [0x002119, 0x00213F],
    [0x002145, 0x00214A],
    [0x00214C, 0x00218F],
    [0x002195, 0x002199],
    [0x00219C, 0x00219F],
    [0x0021A1, 0x0021A2],
    [0x0021A4, 0x0021A5],
    [0x0021A7, 0x0021AD],
    [0x0021AF, 0x0021CD],
    [0x0021D0, 0x0021D1],
    [0x0021D5, 0x0021F3],
    [0x002300, 0x00231F],
    [0x002322, 0x00237B],
    [0x00237D, 0x00239A],
    [0x0023B4, 0x0023DB],
    [0x0023E2, 0x0025B6],
    [0x0025B8, 0x0025C0],
    [0x0025C2, 0x0025F7],
    [0x002600, 0x00266E],
    [0x002670, 0x0027BF],
    [0x0027C5, 0x0027C6],
    [0x0027E6, 0x0027EF],
    [0x002800, 0x0028FF],
    [0x002983, 0x002998],
    [0x0029D8, 0x0029DB],
    [0x0029FC, 0x0029FD],
    [0x002B00, 0x002B2F],
    [0x002B45, 0x002B46],
    [0x002B4D, 0x00DBFF],
    [0x00E000, 0x00FB28],
    [0x00FB2A, 0x00FE61],
    [0x00FE67, 0x00FF0A],
    [0x00FF0C, 0x00FF1B],
    [0x00FF1F, 0x00FF5B],
    [0x00FF5F, 0x00FFE1],
    [0x00FFE3, 0x00FFE8],
    [0x00FFED, 0x01D6C0],
    [0x01D6C2, 0x01D6DA],
    [0x01D6DC, 0x01D6FA],
    [0x01D6FC, 0x01D714],
    [0x01D716, 0x01D734],
    [0x01D736, 0x01D74E],
    [0x01D750, 0x01D76E],
    [0x01D770, 0x01D788],
    [0x01D78A, 0x01D7A8],
    [0x01D7AA, 0x01D7C2],
    [0x01D7C4, 0x01EEEF],
    [0x01EEF2, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{General_Category=Math_Symbol}+$/u,
  nonMatchSymbols,
  "\\P{General_Category=Math_Symbol}"
);
testPropertyEscapes(
  /^\P{General_Category=Sm}+$/u,
  nonMatchSymbols,
  "\\P{General_Category=Sm}"
);
testPropertyEscapes(
  /^\P{gc=Math_Symbol}+$/u,
  nonMatchSymbols,
  "\\P{gc=Math_Symbol}"
);
testPropertyEscapes(
  /^\P{gc=Sm}+$/u,
  nonMatchSymbols,
  "\\P{gc=Sm}"
);
testPropertyEscapes(
  /^\P{Math_Symbol}+$/u,
  nonMatchSymbols,
  "\\P{Math_Symbol}"
);
testPropertyEscapes(
  /^\P{Sm}+$/u,
  nonMatchSymbols,
  "\\P{Sm}"
);
