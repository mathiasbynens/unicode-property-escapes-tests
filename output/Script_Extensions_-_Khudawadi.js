// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Khudawadi`
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
    [0x000964, 0x000965],
    [0x00A830, 0x00A839],
    [0x0112B0, 0x0112EA],
    [0x0112F0, 0x0112F9]
  ]
});
assert(
  /^\p{Script_Extensions=Khudawadi}+$/u.test(matchSymbols),
  "`\\p{Script_Extensions=Khudawadi}` matches all proper symbols"
);
assert(
  /^\p{Script_Extensions=Sind}+$/u.test(matchSymbols),
  "`\\p{Script_Extensions=Sind}` matches all proper symbols"
);
assert(
  /^\p{scx=Khudawadi}+$/u.test(matchSymbols),
  "`\\p{scx=Khudawadi}` matches all proper symbols"
);
assert(
  /^\p{scx=Sind}+$/u.test(matchSymbols),
  "`\\p{scx=Sind}` matches all proper symbols"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x000963],
    [0x000966, 0x00A82F],
    [0x00A83A, 0x00DBFF],
    [0x00E000, 0x0112AF],
    [0x0112EB, 0x0112EF],
    [0x0112FA, 0x10FFFF]
  ]
});
assert(
  /^\P{Script_Extensions=Khudawadi}+$/u.test(nonMatchSymbols),
  "`\\P{Script_Extensions=Khudawadi}` matches all proper symbols"
);
assert(
  /^\P{Script_Extensions=Sind}+$/u.test(nonMatchSymbols),
  "`\\P{Script_Extensions=Sind}` matches all proper symbols"
);
assert(
  /^\P{scx=Khudawadi}+$/u.test(nonMatchSymbols),
  "`\\P{scx=Khudawadi}` matches all proper symbols"
);
assert(
  /^\P{scx=Sind}+$/u.test(nonMatchSymbols),
  "`\\P{scx=Sind}` matches all proper symbols"
);
