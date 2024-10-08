// Copyright 2024 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Soft_Dotted`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v16.0.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [
    0x00012F,
    0x000249,
    0x000268,
    0x00029D,
    0x0002B2,
    0x0003F3,
    0x000456,
    0x000458,
    0x001D62,
    0x001D96,
    0x001DA4,
    0x001DA8,
    0x001E2D,
    0x001ECB,
    0x002071,
    0x002C7C,
    0x01DF1A,
    0x01E068
  ],
  ranges: [
    [0x000069, 0x00006A],
    [0x002148, 0x002149],
    [0x01D422, 0x01D423],
    [0x01D456, 0x01D457],
    [0x01D48A, 0x01D48B],
    [0x01D4BE, 0x01D4BF],
    [0x01D4F2, 0x01D4F3],
    [0x01D526, 0x01D527],
    [0x01D55A, 0x01D55B],
    [0x01D58E, 0x01D58F],
    [0x01D5C2, 0x01D5C3],
    [0x01D5F6, 0x01D5F7],
    [0x01D62A, 0x01D62B],
    [0x01D65E, 0x01D65F],
    [0x01D692, 0x01D693],
    [0x01E04C, 0x01E04D]
  ]
});
testPropertyEscapes(
  /^\p{Soft_Dotted}+$/u,
  matchSymbols,
  "\\p{Soft_Dotted}"
);
testPropertyEscapes(
  /^\p{SD}+$/u,
  matchSymbols,
  "\\p{SD}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [
    0x000457
  ],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x000068],
    [0x00006B, 0x00012E],
    [0x000130, 0x000248],
    [0x00024A, 0x000267],
    [0x000269, 0x00029C],
    [0x00029E, 0x0002B1],
    [0x0002B3, 0x0003F2],
    [0x0003F4, 0x000455],
    [0x000459, 0x001D61],
    [0x001D63, 0x001D95],
    [0x001D97, 0x001DA3],
    [0x001DA5, 0x001DA7],
    [0x001DA9, 0x001E2C],
    [0x001E2E, 0x001ECA],
    [0x001ECC, 0x002070],
    [0x002072, 0x002147],
    [0x00214A, 0x002C7B],
    [0x002C7D, 0x00DBFF],
    [0x00E000, 0x01D421],
    [0x01D424, 0x01D455],
    [0x01D458, 0x01D489],
    [0x01D48C, 0x01D4BD],
    [0x01D4C0, 0x01D4F1],
    [0x01D4F4, 0x01D525],
    [0x01D528, 0x01D559],
    [0x01D55C, 0x01D58D],
    [0x01D590, 0x01D5C1],
    [0x01D5C4, 0x01D5F5],
    [0x01D5F8, 0x01D629],
    [0x01D62C, 0x01D65D],
    [0x01D660, 0x01D691],
    [0x01D694, 0x01DF19],
    [0x01DF1B, 0x01E04B],
    [0x01E04E, 0x01E067],
    [0x01E069, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Soft_Dotted}+$/u,
  nonMatchSymbols,
  "\\P{Soft_Dotted}"
);
testPropertyEscapes(
  /^\P{SD}+$/u,
  nonMatchSymbols,
  "\\P{SD}"
);
