// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Composition_Exclusion`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v9.0.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [
    0x0009DF,
    0x000A33,
    0x000A36,
    0x000A5E,
    0x000F43,
    0x000F4D,
    0x000F52,
    0x000F57,
    0x000F5C,
    0x000F69,
    0x000F76,
    0x000F78,
    0x000F93,
    0x000F9D,
    0x000FA2,
    0x000FA7,
    0x000FAC,
    0x000FB9,
    0x002ADC,
    0x00FB1D,
    0x00FB1F,
    0x00FB3E
  ],
  ranges: [
    [0x000958, 0x00095F],
    [0x0009DC, 0x0009DD],
    [0x000A59, 0x000A5B],
    [0x000B5C, 0x000B5D],
    [0x00FB2A, 0x00FB36],
    [0x00FB38, 0x00FB3C],
    [0x00FB40, 0x00FB41],
    [0x00FB43, 0x00FB44],
    [0x00FB46, 0x00FB4E],
    [0x01D15E, 0x01D164],
    [0x01D1BB, 0x01D1C0]
  ]
});
testPropertyEscapes(
  /^\p{Composition_Exclusion}+$/u,
  matchSymbols,
  "\\p{Composition_Exclusion}"
);
testPropertyEscapes(
  /^\p{CE}+$/u,
  matchSymbols,
  "\\p{CE}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [
    0x0009DE,
    0x000F77,
    0x00FB1E,
    0x00FB37,
    0x00FB3D,
    0x00FB3F,
    0x00FB42,
    0x00FB45
  ],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x000957],
    [0x000960, 0x0009DB],
    [0x0009E0, 0x000A32],
    [0x000A34, 0x000A35],
    [0x000A37, 0x000A58],
    [0x000A5C, 0x000A5D],
    [0x000A5F, 0x000B5B],
    [0x000B5E, 0x000F42],
    [0x000F44, 0x000F4C],
    [0x000F4E, 0x000F51],
    [0x000F53, 0x000F56],
    [0x000F58, 0x000F5B],
    [0x000F5D, 0x000F68],
    [0x000F6A, 0x000F75],
    [0x000F79, 0x000F92],
    [0x000F94, 0x000F9C],
    [0x000F9E, 0x000FA1],
    [0x000FA3, 0x000FA6],
    [0x000FA8, 0x000FAB],
    [0x000FAD, 0x000FB8],
    [0x000FBA, 0x002ADB],
    [0x002ADD, 0x00DBFF],
    [0x00E000, 0x00FB1C],
    [0x00FB20, 0x00FB29],
    [0x00FB4F, 0x01D15D],
    [0x01D165, 0x01D1BA],
    [0x01D1C1, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Composition_Exclusion}+$/u,
  nonMatchSymbols,
  "\\P{Composition_Exclusion}"
);
testPropertyEscapes(
  /^\P{CE}+$/u,
  nonMatchSymbols,
  "\\P{CE}"
);
