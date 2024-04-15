// Copyright 2024 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Meetei_Mayek`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v15.1.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00AAE0, 0x00AAF6],
    [0x00ABC0, 0x00ABED],
    [0x00ABF0, 0x00ABF9]
  ]
});
testPropertyEscapes(
  /^\p{Script=Meetei_Mayek}+$/u,
  matchSymbols,
  "\\p{Script=Meetei_Mayek}"
);
testPropertyEscapes(
  /^\p{Script=Mtei}+$/u,
  matchSymbols,
  "\\p{Script=Mtei}"
);
testPropertyEscapes(
  /^\p{sc=Meetei_Mayek}+$/u,
  matchSymbols,
  "\\p{sc=Meetei_Mayek}"
);
testPropertyEscapes(
  /^\p{sc=Mtei}+$/u,
  matchSymbols,
  "\\p{sc=Mtei}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00AADF],
    [0x00AAF7, 0x00ABBF],
    [0x00ABEE, 0x00ABEF],
    [0x00ABFA, 0x00DBFF],
    [0x00E000, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script=Meetei_Mayek}+$/u,
  nonMatchSymbols,
  "\\P{Script=Meetei_Mayek}"
);
testPropertyEscapes(
  /^\P{Script=Mtei}+$/u,
  nonMatchSymbols,
  "\\P{Script=Mtei}"
);
testPropertyEscapes(
  /^\P{sc=Meetei_Mayek}+$/u,
  nonMatchSymbols,
  "\\P{sc=Meetei_Mayek}"
);
testPropertyEscapes(
  /^\P{sc=Mtei}+$/u,
  nonMatchSymbols,
  "\\P{sc=Mtei}"
);
