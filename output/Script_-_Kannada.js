// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Kannada`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v9.0.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [buildString.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [
    0x000CDE
  ],
  ranges: [
    [0x000C80, 0x000C83],
    [0x000C85, 0x000C8C],
    [0x000C8E, 0x000C90],
    [0x000C92, 0x000CA8],
    [0x000CAA, 0x000CB3],
    [0x000CB5, 0x000CB9],
    [0x000CBC, 0x000CC4],
    [0x000CC6, 0x000CC8],
    [0x000CCA, 0x000CCD],
    [0x000CD5, 0x000CD6],
    [0x000CE0, 0x000CE3],
    [0x000CE6, 0x000CEF],
    [0x000CF1, 0x000CF2]
  ]
});
assert(
  /^\p{Script=Kannada}+$/u.test(matchSymbols),
  "`\\p{Script=Kannada}` matches all proper symbols"
);
assert(
  /^\p{Script=Knda}+$/u.test(matchSymbols),
  "`\\p{Script=Knda}` matches all proper symbols"
);
assert(
  /^\p{sc=Kannada}+$/u.test(matchSymbols),
  "`\\p{sc=Kannada}` matches all proper symbols"
);
assert(
  /^\p{sc=Knda}+$/u.test(matchSymbols),
  "`\\p{sc=Knda}` matches all proper symbols"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [
    0x000C84,
    0x000C8D,
    0x000C91,
    0x000CA9,
    0x000CB4,
    0x000CC5,
    0x000CC9,
    0x000CDF,
    0x000CF0
  ],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x000C7F],
    [0x000CBA, 0x000CBB],
    [0x000CCE, 0x000CD4],
    [0x000CD7, 0x000CDD],
    [0x000CE4, 0x000CE5],
    [0x000CF3, 0x00DBFF],
    [0x00E000, 0x10FFFF]
  ]
});
assert(
  /^\P{Script=Kannada}+$/u.test(nonMatchSymbols),
  "`\\P{Script=Kannada}` matches all proper symbols"
);
assert(
  /^\P{Script=Knda}+$/u.test(nonMatchSymbols),
  "`\\P{Script=Knda}` matches all proper symbols"
);
assert(
  /^\P{sc=Kannada}+$/u.test(nonMatchSymbols),
  "`\\P{sc=Kannada}` matches all proper symbols"
);
assert(
  /^\P{sc=Knda}+$/u.test(nonMatchSymbols),
  "`\\P{sc=Knda}` matches all proper symbols"
);
