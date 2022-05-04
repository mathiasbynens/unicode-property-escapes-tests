// Copyright 2022 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Toto`
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
    [0x01E290, 0x01E2AE]
  ]
});
testPropertyEscapes(
  /^\p{Script=Toto}+$/u,
  matchSymbols,
  "\\p{Script=Toto}"
);
testPropertyEscapes(
  /^\p{Script=Toto}+$/u,
  matchSymbols,
  "\\p{Script=Toto}"
);
testPropertyEscapes(
  /^\p{sc=Toto}+$/u,
  matchSymbols,
  "\\p{sc=Toto}"
);
testPropertyEscapes(
  /^\p{sc=Toto}+$/u,
  matchSymbols,
  "\\p{sc=Toto}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00DBFF],
    [0x00E000, 0x01E28F],
    [0x01E2AF, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script=Toto}+$/u,
  nonMatchSymbols,
  "\\P{Script=Toto}"
);
testPropertyEscapes(
  /^\P{Script=Toto}+$/u,
  nonMatchSymbols,
  "\\P{Script=Toto}"
);
testPropertyEscapes(
  /^\P{sc=Toto}+$/u,
  nonMatchSymbols,
  "\\P{sc=Toto}"
);
testPropertyEscapes(
  /^\P{sc=Toto}+$/u,
  nonMatchSymbols,
  "\\P{sc=Toto}"
);
