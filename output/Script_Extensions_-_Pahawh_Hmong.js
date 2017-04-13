// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Pahawh_Hmong`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v9.0.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [buildString.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x016B00, 0x016B45],
    [0x016B50, 0x016B59],
    [0x016B5B, 0x016B61],
    [0x016B63, 0x016B77],
    [0x016B7D, 0x016B8F]
  ]
});
assert(
  /^\p{Script_Extensions=Pahawh_Hmong}+$/u.test(matchSymbols),
  "`\\p{Script_Extensions=Pahawh_Hmong}` matches all proper symbols"
);
assert(
  /^\p{Script_Extensions=Hmng}+$/u.test(matchSymbols),
  "`\\p{Script_Extensions=Hmng}` matches all proper symbols"
);
assert(
  /^\p{scx=Pahawh_Hmong}+$/u.test(matchSymbols),
  "`\\p{scx=Pahawh_Hmong}` matches all proper symbols"
);
assert(
  /^\p{scx=Hmng}+$/u.test(matchSymbols),
  "`\\p{scx=Hmng}` matches all proper symbols"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [
    0x016B5A,
    0x016B62
  ],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00DBFF],
    [0x00E000, 0x016AFF],
    [0x016B46, 0x016B4F],
    [0x016B78, 0x016B7C],
    [0x016B90, 0x10FFFF]
  ]
});
assert(
  /^\P{Script_Extensions=Pahawh_Hmong}+$/u.test(nonMatchSymbols),
  "`\\P{Script_Extensions=Pahawh_Hmong}` matches all proper symbols"
);
assert(
  /^\P{Script_Extensions=Hmng}+$/u.test(nonMatchSymbols),
  "`\\P{Script_Extensions=Hmng}` matches all proper symbols"
);
assert(
  /^\P{scx=Pahawh_Hmong}+$/u.test(nonMatchSymbols),
  "`\\P{scx=Pahawh_Hmong}` matches all proper symbols"
);
assert(
  /^\P{scx=Hmng}+$/u.test(nonMatchSymbols),
  "`\\P{scx=Hmng}` matches all proper symbols"
);
