// Copyright 2021 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Dives_Akuru`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v14.0.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [
    0x011909
  ],
  ranges: [
    [0x011900, 0x011906],
    [0x01190C, 0x011913],
    [0x011915, 0x011916],
    [0x011918, 0x011935],
    [0x011937, 0x011938],
    [0x01193B, 0x011946],
    [0x011950, 0x011959]
  ]
});
testPropertyEscapes(
  /^\p{Script=Dives_Akuru}+$/u,
  matchSymbols,
  "\\p{Script=Dives_Akuru}"
);
testPropertyEscapes(
  /^\p{Script=Diak}+$/u,
  matchSymbols,
  "\\p{Script=Diak}"
);
testPropertyEscapes(
  /^\p{sc=Dives_Akuru}+$/u,
  matchSymbols,
  "\\p{sc=Dives_Akuru}"
);
testPropertyEscapes(
  /^\p{sc=Diak}+$/u,
  matchSymbols,
  "\\p{sc=Diak}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [
    0x011914,
    0x011917,
    0x011936
  ],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00DBFF],
    [0x00E000, 0x0118FF],
    [0x011907, 0x011908],
    [0x01190A, 0x01190B],
    [0x011939, 0x01193A],
    [0x011947, 0x01194F],
    [0x01195A, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script=Dives_Akuru}+$/u,
  nonMatchSymbols,
  "\\P{Script=Dives_Akuru}"
);
testPropertyEscapes(
  /^\P{Script=Diak}+$/u,
  nonMatchSymbols,
  "\\P{Script=Diak}"
);
testPropertyEscapes(
  /^\P{sc=Dives_Akuru}+$/u,
  nonMatchSymbols,
  "\\P{sc=Dives_Akuru}"
);
testPropertyEscapes(
  /^\P{sc=Diak}+$/u,
  nonMatchSymbols,
  "\\P{sc=Diak}"
);
