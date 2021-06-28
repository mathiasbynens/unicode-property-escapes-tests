// Copyright 2021 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Kharoshthi`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v13.0.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x010A00, 0x010A03],
    [0x010A05, 0x010A06],
    [0x010A0C, 0x010A13],
    [0x010A15, 0x010A17],
    [0x010A19, 0x010A35],
    [0x010A38, 0x010A3A],
    [0x010A3F, 0x010A48],
    [0x010A50, 0x010A58]
  ]
});
testPropertyEscapes(
  /^\p{Script_Extensions=Kharoshthi}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Kharoshthi}"
);
testPropertyEscapes(
  /^\p{Script_Extensions=Khar}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Khar}"
);
testPropertyEscapes(
  /^\p{scx=Kharoshthi}+$/u,
  matchSymbols,
  "\\p{scx=Kharoshthi}"
);
testPropertyEscapes(
  /^\p{scx=Khar}+$/u,
  matchSymbols,
  "\\p{scx=Khar}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [
    0x010A04,
    0x010A14,
    0x010A18
  ],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00DBFF],
    [0x00E000, 0x0109FF],
    [0x010A07, 0x010A0B],
    [0x010A36, 0x010A37],
    [0x010A3B, 0x010A3E],
    [0x010A49, 0x010A4F],
    [0x010A59, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script_Extensions=Kharoshthi}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Kharoshthi}"
);
testPropertyEscapes(
  /^\P{Script_Extensions=Khar}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Khar}"
);
testPropertyEscapes(
  /^\P{scx=Kharoshthi}+$/u,
  nonMatchSymbols,
  "\\P{scx=Kharoshthi}"
);
testPropertyEscapes(
  /^\P{scx=Khar}+$/u,
  nonMatchSymbols,
  "\\P{scx=Khar}"
);
