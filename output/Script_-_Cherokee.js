// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Cherokee`
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
    [0x0013A0, 0x0013F5],
    [0x0013F8, 0x0013FD],
    [0x00AB70, 0x00ABBF]
  ]
});
assert(
  /^\p{Script=Cherokee}+$/u.test(matchSymbols),
  "`\\p{Script=Cherokee}` matches all proper symbols"
);
assert(
  /^\p{Script=Cher}+$/u.test(matchSymbols),
  "`\\p{Script=Cher}` matches all proper symbols"
);
assert(
  /^\p{sc=Cherokee}+$/u.test(matchSymbols),
  "`\\p{sc=Cherokee}` matches all proper symbols"
);
assert(
  /^\p{sc=Cher}+$/u.test(matchSymbols),
  "`\\p{sc=Cher}` matches all proper symbols"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00139F],
    [0x0013F6, 0x0013F7],
    [0x0013FE, 0x00AB6F],
    [0x00ABC0, 0x00DBFF],
    [0x00E000, 0x10FFFF]
  ]
});
assert(
  /^\P{Script=Cherokee}+$/u.test(nonMatchSymbols),
  "`\\P{Script=Cherokee}` matches all proper symbols"
);
assert(
  /^\P{Script=Cher}+$/u.test(nonMatchSymbols),
  "`\\P{Script=Cher}` matches all proper symbols"
);
assert(
  /^\P{sc=Cherokee}+$/u.test(nonMatchSymbols),
  "`\\P{sc=Cherokee}` matches all proper symbols"
);
assert(
  /^\P{sc=Cher}+$/u.test(nonMatchSymbols),
  "`\\P{sc=Cher}` matches all proper symbols"
);
