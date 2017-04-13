// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Canadian_Aboriginal`
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
    [0x001400, 0x00167F],
    [0x0018B0, 0x0018F5]
  ]
});
assert(
  /^\p{Script=Canadian_Aboriginal}+$/u.test(matchSymbols),
  "`\\p{Script=Canadian_Aboriginal}` matches all proper symbols"
);
assert(
  /^\p{Script=Cans}+$/u.test(matchSymbols),
  "`\\p{Script=Cans}` matches all proper symbols"
);
assert(
  /^\p{sc=Canadian_Aboriginal}+$/u.test(matchSymbols),
  "`\\p{sc=Canadian_Aboriginal}` matches all proper symbols"
);
assert(
  /^\p{sc=Cans}+$/u.test(matchSymbols),
  "`\\p{sc=Cans}` matches all proper symbols"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x0013FF],
    [0x001680, 0x0018AF],
    [0x0018F6, 0x00DBFF],
    [0x00E000, 0x10FFFF]
  ]
});
assert(
  /^\P{Script=Canadian_Aboriginal}+$/u.test(nonMatchSymbols),
  "`\\P{Script=Canadian_Aboriginal}` matches all proper symbols"
);
assert(
  /^\P{Script=Cans}+$/u.test(nonMatchSymbols),
  "`\\P{Script=Cans}` matches all proper symbols"
);
assert(
  /^\P{sc=Canadian_Aboriginal}+$/u.test(nonMatchSymbols),
  "`\\P{sc=Canadian_Aboriginal}` matches all proper symbols"
);
assert(
  /^\P{sc=Cans}+$/u.test(nonMatchSymbols),
  "`\\P{sc=Cans}` matches all proper symbols"
);
