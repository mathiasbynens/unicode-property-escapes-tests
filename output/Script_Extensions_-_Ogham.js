// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Ogham`
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
    [0x001680, 0x00169C]
  ]
});
assert(
  /^\p{Script_Extensions=Ogham}+$/u.test(matchSymbols),
  "`\\p{Script_Extensions=Ogham}` matches all proper symbols"
);
assert(
  /^\p{Script_Extensions=Ogam}+$/u.test(matchSymbols),
  "`\\p{Script_Extensions=Ogam}` matches all proper symbols"
);
assert(
  /^\p{scx=Ogham}+$/u.test(matchSymbols),
  "`\\p{scx=Ogham}` matches all proper symbols"
);
assert(
  /^\p{scx=Ogam}+$/u.test(matchSymbols),
  "`\\p{scx=Ogam}` matches all proper symbols"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00167F],
    [0x00169D, 0x00DBFF],
    [0x00E000, 0x10FFFF]
  ]
});
assert(
  /^\P{Script_Extensions=Ogham}+$/u.test(nonMatchSymbols),
  "`\\P{Script_Extensions=Ogham}` matches all proper symbols"
);
assert(
  /^\P{Script_Extensions=Ogam}+$/u.test(nonMatchSymbols),
  "`\\P{Script_Extensions=Ogam}` matches all proper symbols"
);
assert(
  /^\P{scx=Ogham}+$/u.test(nonMatchSymbols),
  "`\\P{scx=Ogham}` matches all proper symbols"
);
assert(
  /^\P{scx=Ogam}+$/u.test(nonMatchSymbols),
  "`\\P{scx=Ogam}` matches all proper symbols"
);
