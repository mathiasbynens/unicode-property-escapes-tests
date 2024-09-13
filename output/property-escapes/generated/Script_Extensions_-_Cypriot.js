// Copyright 2024 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Cypriot`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v16.0.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [
    0x010808,
    0x01083C,
    0x01083F
  ],
  ranges: [
    [0x010100, 0x010102],
    [0x010107, 0x010133],
    [0x010137, 0x01013F],
    [0x010800, 0x010805],
    [0x01080A, 0x010835],
    [0x010837, 0x010838]
  ]
});
testPropertyEscapes(
  /^\p{Script_Extensions=Cypriot}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Cypriot}"
);
testPropertyEscapes(
  /^\p{Script_Extensions=Cprt}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Cprt}"
);
testPropertyEscapes(
  /^\p{scx=Cypriot}+$/u,
  matchSymbols,
  "\\p{scx=Cypriot}"
);
testPropertyEscapes(
  /^\p{scx=Cprt}+$/u,
  matchSymbols,
  "\\p{scx=Cprt}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [
    0x010809,
    0x010836
  ],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00DBFF],
    [0x00E000, 0x0100FF],
    [0x010103, 0x010106],
    [0x010134, 0x010136],
    [0x010140, 0x0107FF],
    [0x010806, 0x010807],
    [0x010839, 0x01083B],
    [0x01083D, 0x01083E],
    [0x010840, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script_Extensions=Cypriot}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Cypriot}"
);
testPropertyEscapes(
  /^\P{Script_Extensions=Cprt}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Cprt}"
);
testPropertyEscapes(
  /^\P{scx=Cypriot}+$/u,
  nonMatchSymbols,
  "\\P{scx=Cypriot}"
);
testPropertyEscapes(
  /^\P{scx=Cprt}+$/u,
  nonMatchSymbols,
  "\\P{scx=Cprt}"
);
