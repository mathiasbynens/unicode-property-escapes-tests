// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Khmer`
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
    [0x001780, 0x0017DD],
    [0x0017E0, 0x0017E9],
    [0x0017F0, 0x0017F9],
    [0x0019E0, 0x0019FF]
  ]
});
assert(
  /^\p{Script=Khmer}+$/u.test(matchSymbols),
  "`\\p{Script=Khmer}` matches all proper symbols"
);
assert(
  /^\p{Script=Khmr}+$/u.test(matchSymbols),
  "`\\p{Script=Khmr}` matches all proper symbols"
);
assert(
  /^\p{sc=Khmer}+$/u.test(matchSymbols),
  "`\\p{sc=Khmer}` matches all proper symbols"
);
assert(
  /^\p{sc=Khmr}+$/u.test(matchSymbols),
  "`\\p{sc=Khmr}` matches all proper symbols"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00177F],
    [0x0017DE, 0x0017DF],
    [0x0017EA, 0x0017EF],
    [0x0017FA, 0x0019DF],
    [0x001A00, 0x00DBFF],
    [0x00E000, 0x10FFFF]
  ]
});
assert(
  /^\P{Script=Khmer}+$/u.test(nonMatchSymbols),
  "`\\P{Script=Khmer}` matches all proper symbols"
);
assert(
  /^\P{Script=Khmr}+$/u.test(nonMatchSymbols),
  "`\\P{Script=Khmr}` matches all proper symbols"
);
assert(
  /^\P{sc=Khmer}+$/u.test(nonMatchSymbols),
  "`\\P{sc=Khmer}` matches all proper symbols"
);
assert(
  /^\P{sc=Khmr}+$/u.test(nonMatchSymbols),
  "`\\P{sc=Khmr}` matches all proper symbols"
);
