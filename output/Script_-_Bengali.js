// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Bengali`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v9.0.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [
    0x0009B2,
    0x0009D7
  ],
  ranges: [
    [0x000980, 0x000983],
    [0x000985, 0x00098C],
    [0x00098F, 0x000990],
    [0x000993, 0x0009A8],
    [0x0009AA, 0x0009B0],
    [0x0009B6, 0x0009B9],
    [0x0009BC, 0x0009C4],
    [0x0009C7, 0x0009C8],
    [0x0009CB, 0x0009CE],
    [0x0009DC, 0x0009DD],
    [0x0009DF, 0x0009E3],
    [0x0009E6, 0x0009FB]
  ]
});
testPropertyEscapes(
  /^\p{Script=Bengali}+$/u,
  matchSymbols,
  "\\p{Script=Bengali}"
);
testPropertyEscapes(
  /^\p{Script=Beng}+$/u,
  matchSymbols,
  "\\p{Script=Beng}"
);
testPropertyEscapes(
  /^\p{sc=Bengali}+$/u,
  matchSymbols,
  "\\p{sc=Bengali}"
);
testPropertyEscapes(
  /^\p{sc=Beng}+$/u,
  matchSymbols,
  "\\p{sc=Beng}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [
    0x000984,
    0x0009A9,
    0x0009B1,
    0x0009DE
  ],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00097F],
    [0x00098D, 0x00098E],
    [0x000991, 0x000992],
    [0x0009B3, 0x0009B5],
    [0x0009BA, 0x0009BB],
    [0x0009C5, 0x0009C6],
    [0x0009C9, 0x0009CA],
    [0x0009CF, 0x0009D6],
    [0x0009D8, 0x0009DB],
    [0x0009E4, 0x0009E5],
    [0x0009FC, 0x00DBFF],
    [0x00E000, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script=Bengali}+$/u,
  nonMatchSymbols,
  "\\P{Script=Bengali}"
);
testPropertyEscapes(
  /^\P{Script=Beng}+$/u,
  nonMatchSymbols,
  "\\P{Script=Beng}"
);
testPropertyEscapes(
  /^\P{sc=Bengali}+$/u,
  nonMatchSymbols,
  "\\P{sc=Bengali}"
);
testPropertyEscapes(
  /^\P{sc=Beng}+$/u,
  nonMatchSymbols,
  "\\P{sc=Beng}"
);
