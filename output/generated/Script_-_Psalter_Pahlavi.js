// Copyright 2018 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Psalter_Pahlavi`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v11.0.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x010B80, 0x010B91],
    [0x010B99, 0x010B9C],
    [0x010BA9, 0x010BAF]
  ]
});
testPropertyEscapes(
  /^\p{Script=Psalter_Pahlavi}+$/u,
  matchSymbols,
  "\\p{Script=Psalter_Pahlavi}"
);
testPropertyEscapes(
  /^\p{Script=Phlp}+$/u,
  matchSymbols,
  "\\p{Script=Phlp}"
);
testPropertyEscapes(
  /^\p{sc=Psalter_Pahlavi}+$/u,
  matchSymbols,
  "\\p{sc=Psalter_Pahlavi}"
);
testPropertyEscapes(
  /^\p{sc=Phlp}+$/u,
  matchSymbols,
  "\\p{sc=Phlp}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00DBFF],
    [0x00E000, 0x010B7F],
    [0x010B92, 0x010B98],
    [0x010B9D, 0x010BA8],
    [0x010BB0, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script=Psalter_Pahlavi}+$/u,
  nonMatchSymbols,
  "\\P{Script=Psalter_Pahlavi}"
);
testPropertyEscapes(
  /^\P{Script=Phlp}+$/u,
  nonMatchSymbols,
  "\\P{Script=Phlp}"
);
testPropertyEscapes(
  /^\P{sc=Psalter_Pahlavi}+$/u,
  nonMatchSymbols,
  "\\P{sc=Psalter_Pahlavi}"
);
testPropertyEscapes(
  /^\P{sc=Phlp}+$/u,
  nonMatchSymbols,
  "\\P{sc=Phlp}"
);
