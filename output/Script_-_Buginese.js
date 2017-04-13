// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Buginese`
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
    [0x001A00, 0x001A1B],
    [0x001A1E, 0x001A1F]
  ]
});
assert(
  /^\p{Script=Buginese}+$/u.test(matchSymbols),
  "`\\p{Script=Buginese}` matches all proper symbols"
);
assert(
  /^\p{Script=Bugi}+$/u.test(matchSymbols),
  "`\\p{Script=Bugi}` matches all proper symbols"
);
assert(
  /^\p{sc=Buginese}+$/u.test(matchSymbols),
  "`\\p{sc=Buginese}` matches all proper symbols"
);
assert(
  /^\p{sc=Bugi}+$/u.test(matchSymbols),
  "`\\p{sc=Bugi}` matches all proper symbols"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x0019FF],
    [0x001A1C, 0x001A1D],
    [0x001A20, 0x00DBFF],
    [0x00E000, 0x10FFFF]
  ]
});
assert(
  /^\P{Script=Buginese}+$/u.test(nonMatchSymbols),
  "`\\P{Script=Buginese}` matches all proper symbols"
);
assert(
  /^\P{Script=Bugi}+$/u.test(nonMatchSymbols),
  "`\\P{Script=Bugi}` matches all proper symbols"
);
assert(
  /^\P{sc=Buginese}+$/u.test(nonMatchSymbols),
  "`\\P{sc=Buginese}` matches all proper symbols"
);
assert(
  /^\P{sc=Bugi}+$/u.test(nonMatchSymbols),
  "`\\P{sc=Bugi}` matches all proper symbols"
);
