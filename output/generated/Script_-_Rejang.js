// Copyright 2019 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Rejang`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v12.0.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [
    0x00A95F
  ],
  ranges: [
    [0x00A930, 0x00A953]
  ]
});
testPropertyEscapes(
  /^\p{Script=Rejang}+$/u,
  matchSymbols,
  "\\p{Script=Rejang}"
);
testPropertyEscapes(
  /^\p{Script=Rjng}+$/u,
  matchSymbols,
  "\\p{Script=Rjng}"
);
testPropertyEscapes(
  /^\p{sc=Rejang}+$/u,
  matchSymbols,
  "\\p{sc=Rejang}"
);
testPropertyEscapes(
  /^\p{sc=Rjng}+$/u,
  matchSymbols,
  "\\p{sc=Rjng}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00A92F],
    [0x00A954, 0x00A95E],
    [0x00A960, 0x00DBFF],
    [0x00E000, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script=Rejang}+$/u,
  nonMatchSymbols,
  "\\P{Script=Rejang}"
);
testPropertyEscapes(
  /^\P{Script=Rjng}+$/u,
  nonMatchSymbols,
  "\\P{Script=Rjng}"
);
testPropertyEscapes(
  /^\P{sc=Rejang}+$/u,
  nonMatchSymbols,
  "\\P{sc=Rejang}"
);
testPropertyEscapes(
  /^\P{sc=Rjng}+$/u,
  nonMatchSymbols,
  "\\P{sc=Rjng}"
);
