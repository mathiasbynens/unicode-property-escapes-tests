// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Cherokee`
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
  /^\p{Script_Extensions=Cherokee}+$/u.test(matchSymbols),
  "`\\p{Script_Extensions=Cherokee}` matches all proper symbols"
);
assert(
  /^\p{Script_Extensions=Cher}+$/u.test(matchSymbols),
  "`\\p{Script_Extensions=Cher}` matches all proper symbols"
);
assert(
  /^\p{scx=Cherokee}+$/u.test(matchSymbols),
  "`\\p{scx=Cherokee}` matches all proper symbols"
);
assert(
  /^\p{scx=Cher}+$/u.test(matchSymbols),
  "`\\p{scx=Cher}` matches all proper symbols"
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
  /^\P{Script_Extensions=Cherokee}+$/u.test(nonMatchSymbols),
  "`\\P{Script_Extensions=Cherokee}` matches all proper symbols"
);
assert(
  /^\P{Script_Extensions=Cher}+$/u.test(nonMatchSymbols),
  "`\\P{Script_Extensions=Cher}` matches all proper symbols"
);
assert(
  /^\P{scx=Cherokee}+$/u.test(nonMatchSymbols),
  "`\\P{scx=Cherokee}` matches all proper symbols"
);
assert(
  /^\P{scx=Cher}+$/u.test(nonMatchSymbols),
  "`\\P{scx=Cher}` matches all proper symbols"
);
