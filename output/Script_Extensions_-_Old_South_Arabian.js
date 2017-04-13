// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Old_South_Arabian`
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
    [0x010A60, 0x010A7F]
  ]
});
assert(
  /^\p{Script_Extensions=Old_South_Arabian}+$/u.test(matchSymbols),
  "`\\p{Script_Extensions=Old_South_Arabian}` matches all proper symbols"
);
assert(
  /^\p{Script_Extensions=Sarb}+$/u.test(matchSymbols),
  "`\\p{Script_Extensions=Sarb}` matches all proper symbols"
);
assert(
  /^\p{scx=Old_South_Arabian}+$/u.test(matchSymbols),
  "`\\p{scx=Old_South_Arabian}` matches all proper symbols"
);
assert(
  /^\p{scx=Sarb}+$/u.test(matchSymbols),
  "`\\p{scx=Sarb}` matches all proper symbols"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00DBFF],
    [0x00E000, 0x010A5F],
    [0x010A80, 0x10FFFF]
  ]
});
assert(
  /^\P{Script_Extensions=Old_South_Arabian}+$/u.test(nonMatchSymbols),
  "`\\P{Script_Extensions=Old_South_Arabian}` matches all proper symbols"
);
assert(
  /^\P{Script_Extensions=Sarb}+$/u.test(nonMatchSymbols),
  "`\\P{Script_Extensions=Sarb}` matches all proper symbols"
);
assert(
  /^\P{scx=Old_South_Arabian}+$/u.test(nonMatchSymbols),
  "`\\P{scx=Old_South_Arabian}` matches all proper symbols"
);
assert(
  /^\P{scx=Sarb}+$/u.test(nonMatchSymbols),
  "`\\P{scx=Sarb}` matches all proper symbols"
);
