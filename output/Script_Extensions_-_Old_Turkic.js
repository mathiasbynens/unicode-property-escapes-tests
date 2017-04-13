// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Old_Turkic`
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
    [0x010C00, 0x010C48]
  ]
});
assert(
  /^\p{Script_Extensions=Old_Turkic}+$/u.test(matchSymbols),
  "`\\p{Script_Extensions=Old_Turkic}` matches all proper symbols"
);
assert(
  /^\p{Script_Extensions=Orkh}+$/u.test(matchSymbols),
  "`\\p{Script_Extensions=Orkh}` matches all proper symbols"
);
assert(
  /^\p{scx=Old_Turkic}+$/u.test(matchSymbols),
  "`\\p{scx=Old_Turkic}` matches all proper symbols"
);
assert(
  /^\p{scx=Orkh}+$/u.test(matchSymbols),
  "`\\p{scx=Orkh}` matches all proper symbols"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00DBFF],
    [0x00E000, 0x010BFF],
    [0x010C49, 0x10FFFF]
  ]
});
assert(
  /^\P{Script_Extensions=Old_Turkic}+$/u.test(nonMatchSymbols),
  "`\\P{Script_Extensions=Old_Turkic}` matches all proper symbols"
);
assert(
  /^\P{Script_Extensions=Orkh}+$/u.test(nonMatchSymbols),
  "`\\P{Script_Extensions=Orkh}` matches all proper symbols"
);
assert(
  /^\P{scx=Old_Turkic}+$/u.test(nonMatchSymbols),
  "`\\P{scx=Old_Turkic}` matches all proper symbols"
);
assert(
  /^\P{scx=Orkh}+$/u.test(nonMatchSymbols),
  "`\\P{scx=Orkh}` matches all proper symbols"
);
