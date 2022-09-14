// Copyright 2022 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Phags_Pa`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v15.0.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00A840, 0x00A877]
  ]
});
testPropertyEscapes(
  /^\p{Script=Phags_Pa}+$/u,
  matchSymbols,
  "\\p{Script=Phags_Pa}"
);
testPropertyEscapes(
  /^\p{Script=Phag}+$/u,
  matchSymbols,
  "\\p{Script=Phag}"
);
testPropertyEscapes(
  /^\p{sc=Phags_Pa}+$/u,
  matchSymbols,
  "\\p{sc=Phags_Pa}"
);
testPropertyEscapes(
  /^\p{sc=Phag}+$/u,
  matchSymbols,
  "\\p{sc=Phag}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00A83F],
    [0x00A878, 0x00DBFF],
    [0x00E000, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script=Phags_Pa}+$/u,
  nonMatchSymbols,
  "\\P{Script=Phags_Pa}"
);
testPropertyEscapes(
  /^\P{Script=Phag}+$/u,
  nonMatchSymbols,
  "\\P{Script=Phag}"
);
testPropertyEscapes(
  /^\P{sc=Phags_Pa}+$/u,
  nonMatchSymbols,
  "\\P{sc=Phags_Pa}"
);
testPropertyEscapes(
  /^\P{sc=Phag}+$/u,
  nonMatchSymbols,
  "\\P{sc=Phag}"
);
