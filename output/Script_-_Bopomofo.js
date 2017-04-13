// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Bopomofo`
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
    [0x0002EA, 0x0002EB],
    [0x003105, 0x00312D],
    [0x0031A0, 0x0031BA]
  ]
});
assert(
  /^\p{Script=Bopomofo}+$/u.test(matchSymbols),
  "`\\p{Script=Bopomofo}` matches all proper symbols"
);
assert(
  /^\p{Script=Bopo}+$/u.test(matchSymbols),
  "`\\p{Script=Bopo}` matches all proper symbols"
);
assert(
  /^\p{sc=Bopomofo}+$/u.test(matchSymbols),
  "`\\p{sc=Bopomofo}` matches all proper symbols"
);
assert(
  /^\p{sc=Bopo}+$/u.test(matchSymbols),
  "`\\p{sc=Bopo}` matches all proper symbols"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x0002E9],
    [0x0002EC, 0x003104],
    [0x00312E, 0x00319F],
    [0x0031BB, 0x00DBFF],
    [0x00E000, 0x10FFFF]
  ]
});
assert(
  /^\P{Script=Bopomofo}+$/u.test(nonMatchSymbols),
  "`\\P{Script=Bopomofo}` matches all proper symbols"
);
assert(
  /^\P{Script=Bopo}+$/u.test(nonMatchSymbols),
  "`\\P{Script=Bopo}` matches all proper symbols"
);
assert(
  /^\P{sc=Bopomofo}+$/u.test(nonMatchSymbols),
  "`\\P{sc=Bopomofo}` matches all proper symbols"
);
assert(
  /^\P{sc=Bopo}+$/u.test(nonMatchSymbols),
  "`\\P{sc=Bopo}` matches all proper symbols"
);
