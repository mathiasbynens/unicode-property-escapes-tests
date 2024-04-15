// Copyright 2024 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `General_Category=Titlecase_Letter`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v15.1.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [
    0x0001C5,
    0x0001C8,
    0x0001CB,
    0x0001F2,
    0x001FBC,
    0x001FCC,
    0x001FFC
  ],
  ranges: [
    [0x001F88, 0x001F8F],
    [0x001F98, 0x001F9F],
    [0x001FA8, 0x001FAF]
  ]
});
testPropertyEscapes(
  /^\p{General_Category=Titlecase_Letter}+$/u,
  matchSymbols,
  "\\p{General_Category=Titlecase_Letter}"
);
testPropertyEscapes(
  /^\p{General_Category=Lt}+$/u,
  matchSymbols,
  "\\p{General_Category=Lt}"
);
testPropertyEscapes(
  /^\p{gc=Titlecase_Letter}+$/u,
  matchSymbols,
  "\\p{gc=Titlecase_Letter}"
);
testPropertyEscapes(
  /^\p{gc=Lt}+$/u,
  matchSymbols,
  "\\p{gc=Lt}"
);
testPropertyEscapes(
  /^\p{Titlecase_Letter}+$/u,
  matchSymbols,
  "\\p{Titlecase_Letter}"
);
testPropertyEscapes(
  /^\p{Lt}+$/u,
  matchSymbols,
  "\\p{Lt}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x0001C4],
    [0x0001C6, 0x0001C7],
    [0x0001C9, 0x0001CA],
    [0x0001CC, 0x0001F1],
    [0x0001F3, 0x001F87],
    [0x001F90, 0x001F97],
    [0x001FA0, 0x001FA7],
    [0x001FB0, 0x001FBB],
    [0x001FBD, 0x001FCB],
    [0x001FCD, 0x001FFB],
    [0x001FFD, 0x00DBFF],
    [0x00E000, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{General_Category=Titlecase_Letter}+$/u,
  nonMatchSymbols,
  "\\P{General_Category=Titlecase_Letter}"
);
testPropertyEscapes(
  /^\P{General_Category=Lt}+$/u,
  nonMatchSymbols,
  "\\P{General_Category=Lt}"
);
testPropertyEscapes(
  /^\P{gc=Titlecase_Letter}+$/u,
  nonMatchSymbols,
  "\\P{gc=Titlecase_Letter}"
);
testPropertyEscapes(
  /^\P{gc=Lt}+$/u,
  nonMatchSymbols,
  "\\P{gc=Lt}"
);
testPropertyEscapes(
  /^\P{Titlecase_Letter}+$/u,
  nonMatchSymbols,
  "\\P{Titlecase_Letter}"
);
testPropertyEscapes(
  /^\P{Lt}+$/u,
  nonMatchSymbols,
  "\\P{Lt}"
);
