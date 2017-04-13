// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Brahmi`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v9.0.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [buildString.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [
    0x01107F
  ],
  ranges: [
    [0x011000, 0x01104D],
    [0x011052, 0x01106F]
  ]
});
assert(
  /^\p{Script_Extensions=Brahmi}+$/u.test(matchSymbols),
  "`\\p{Script_Extensions=Brahmi}` matches all proper symbols"
);
assert(
  /^\p{Script_Extensions=Brah}+$/u.test(matchSymbols),
  "`\\p{Script_Extensions=Brah}` matches all proper symbols"
);
assert(
  /^\p{scx=Brahmi}+$/u.test(matchSymbols),
  "`\\p{scx=Brahmi}` matches all proper symbols"
);
assert(
  /^\p{scx=Brah}+$/u.test(matchSymbols),
  "`\\p{scx=Brah}` matches all proper symbols"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00DBFF],
    [0x00E000, 0x010FFF],
    [0x01104E, 0x011051],
    [0x011070, 0x01107E],
    [0x011080, 0x10FFFF]
  ]
});
assert(
  /^\P{Script_Extensions=Brahmi}+$/u.test(nonMatchSymbols),
  "`\\P{Script_Extensions=Brahmi}` matches all proper symbols"
);
assert(
  /^\P{Script_Extensions=Brah}+$/u.test(nonMatchSymbols),
  "`\\P{Script_Extensions=Brah}` matches all proper symbols"
);
assert(
  /^\P{scx=Brahmi}+$/u.test(nonMatchSymbols),
  "`\\P{scx=Brahmi}` matches all proper symbols"
);
assert(
  /^\P{scx=Brah}+$/u.test(nonMatchSymbols),
  "`\\P{scx=Brah}` matches all proper symbols"
);
