// Copyright 2021 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Old_Sogdian`
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
    [0x010F00, 0x010F27]
  ]
});
testPropertyEscapes(
  /^\p{Script=Old_Sogdian}+$/u,
  matchSymbols,
  "\\p{Script=Old_Sogdian}"
);
testPropertyEscapes(
  /^\p{Script=Sogo}+$/u,
  matchSymbols,
  "\\p{Script=Sogo}"
);
testPropertyEscapes(
  /^\p{sc=Old_Sogdian}+$/u,
  matchSymbols,
  "\\p{sc=Old_Sogdian}"
);
testPropertyEscapes(
  /^\p{sc=Sogo}+$/u,
  matchSymbols,
  "\\p{sc=Sogo}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00DBFF],
    [0x00E000, 0x010EFF],
    [0x010F28, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script=Old_Sogdian}+$/u,
  nonMatchSymbols,
  "\\P{Script=Old_Sogdian}"
);
testPropertyEscapes(
  /^\P{Script=Sogo}+$/u,
  nonMatchSymbols,
  "\\P{Script=Sogo}"
);
testPropertyEscapes(
  /^\P{sc=Old_Sogdian}+$/u,
  nonMatchSymbols,
  "\\P{sc=Old_Sogdian}"
);
testPropertyEscapes(
  /^\P{sc=Sogo}+$/u,
  nonMatchSymbols,
  "\\P{sc=Sogo}"
);
