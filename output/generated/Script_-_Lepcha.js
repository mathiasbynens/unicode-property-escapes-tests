// Copyright 2022 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Lepcha`
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
    [0x001C00, 0x001C37],
    [0x001C3B, 0x001C49],
    [0x001C4D, 0x001C4F]
  ]
});
testPropertyEscapes(
  /^\p{Script=Lepcha}+$/u,
  matchSymbols,
  "\\p{Script=Lepcha}"
);
testPropertyEscapes(
  /^\p{Script=Lepc}+$/u,
  matchSymbols,
  "\\p{Script=Lepc}"
);
testPropertyEscapes(
  /^\p{sc=Lepcha}+$/u,
  matchSymbols,
  "\\p{sc=Lepcha}"
);
testPropertyEscapes(
  /^\p{sc=Lepc}+$/u,
  matchSymbols,
  "\\p{sc=Lepc}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x001BFF],
    [0x001C38, 0x001C3A],
    [0x001C4A, 0x001C4C],
    [0x001C50, 0x00DBFF],
    [0x00E000, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script=Lepcha}+$/u,
  nonMatchSymbols,
  "\\P{Script=Lepcha}"
);
testPropertyEscapes(
  /^\P{Script=Lepc}+$/u,
  nonMatchSymbols,
  "\\P{Script=Lepc}"
);
testPropertyEscapes(
  /^\P{sc=Lepcha}+$/u,
  nonMatchSymbols,
  "\\P{sc=Lepcha}"
);
testPropertyEscapes(
  /^\P{sc=Lepc}+$/u,
  nonMatchSymbols,
  "\\P{sc=Lepc}"
);
