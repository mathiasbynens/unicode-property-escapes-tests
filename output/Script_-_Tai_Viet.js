// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Tai_Viet`
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
    [0x00AA80, 0x00AAC2],
    [0x00AADB, 0x00AADF]
  ]
});
assert(
  /^\p{Script=Tai_Viet}+$/u.test(matchSymbols),
  "`\\p{Script=Tai_Viet}` matches all proper symbols"
);
assert(
  /^\p{Script=Tavt}+$/u.test(matchSymbols),
  "`\\p{Script=Tavt}` matches all proper symbols"
);
assert(
  /^\p{sc=Tai_Viet}+$/u.test(matchSymbols),
  "`\\p{sc=Tai_Viet}` matches all proper symbols"
);
assert(
  /^\p{sc=Tavt}+$/u.test(matchSymbols),
  "`\\p{sc=Tavt}` matches all proper symbols"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00AA7F],
    [0x00AAC3, 0x00AADA],
    [0x00AAE0, 0x00DBFF],
    [0x00E000, 0x10FFFF]
  ]
});
assert(
  /^\P{Script=Tai_Viet}+$/u.test(nonMatchSymbols),
  "`\\P{Script=Tai_Viet}` matches all proper symbols"
);
assert(
  /^\P{Script=Tavt}+$/u.test(nonMatchSymbols),
  "`\\P{Script=Tavt}` matches all proper symbols"
);
assert(
  /^\P{sc=Tai_Viet}+$/u.test(nonMatchSymbols),
  "`\\P{sc=Tai_Viet}` matches all proper symbols"
);
assert(
  /^\P{sc=Tavt}+$/u.test(nonMatchSymbols),
  "`\\P{sc=Tavt}` matches all proper symbols"
);
