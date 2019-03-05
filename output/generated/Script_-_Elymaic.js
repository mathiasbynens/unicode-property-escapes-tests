// Copyright 2019 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Elymaic`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v12.0.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x010FE0, 0x010FF6]
  ]
});
testPropertyEscapes(
  /^\p{Script=Elymaic}+$/u,
  matchSymbols,
  "\\p{Script=Elymaic}"
);
testPropertyEscapes(
  /^\p{Script=Elym}+$/u,
  matchSymbols,
  "\\p{Script=Elym}"
);
testPropertyEscapes(
  /^\p{sc=Elymaic}+$/u,
  matchSymbols,
  "\\p{sc=Elymaic}"
);
testPropertyEscapes(
  /^\p{sc=Elym}+$/u,
  matchSymbols,
  "\\p{sc=Elym}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00DBFF],
    [0x00E000, 0x010FDF],
    [0x010FF7, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script=Elymaic}+$/u,
  nonMatchSymbols,
  "\\P{Script=Elymaic}"
);
testPropertyEscapes(
  /^\P{Script=Elym}+$/u,
  nonMatchSymbols,
  "\\P{Script=Elym}"
);
testPropertyEscapes(
  /^\P{sc=Elymaic}+$/u,
  nonMatchSymbols,
  "\\P{sc=Elymaic}"
);
testPropertyEscapes(
  /^\P{sc=Elym}+$/u,
  nonMatchSymbols,
  "\\P{sc=Elym}"
);
