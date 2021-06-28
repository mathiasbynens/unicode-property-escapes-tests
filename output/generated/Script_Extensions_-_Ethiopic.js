// Copyright 2021 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Ethiopic`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v13.0.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [
    0x001258,
    0x0012C0
  ],
  ranges: [
    [0x001200, 0x001248],
    [0x00124A, 0x00124D],
    [0x001250, 0x001256],
    [0x00125A, 0x00125D],
    [0x001260, 0x001288],
    [0x00128A, 0x00128D],
    [0x001290, 0x0012B0],
    [0x0012B2, 0x0012B5],
    [0x0012B8, 0x0012BE],
    [0x0012C2, 0x0012C5],
    [0x0012C8, 0x0012D6],
    [0x0012D8, 0x001310],
    [0x001312, 0x001315],
    [0x001318, 0x00135A],
    [0x00135D, 0x00137C],
    [0x001380, 0x001399],
    [0x002D80, 0x002D96],
    [0x002DA0, 0x002DA6],
    [0x002DA8, 0x002DAE],
    [0x002DB0, 0x002DB6],
    [0x002DB8, 0x002DBE],
    [0x002DC0, 0x002DC6],
    [0x002DC8, 0x002DCE],
    [0x002DD0, 0x002DD6],
    [0x002DD8, 0x002DDE],
    [0x00AB01, 0x00AB06],
    [0x00AB09, 0x00AB0E],
    [0x00AB11, 0x00AB16],
    [0x00AB20, 0x00AB26],
    [0x00AB28, 0x00AB2E]
  ]
});
testPropertyEscapes(
  /^\p{Script_Extensions=Ethiopic}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Ethiopic}"
);
testPropertyEscapes(
  /^\p{Script_Extensions=Ethi}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Ethi}"
);
testPropertyEscapes(
  /^\p{scx=Ethiopic}+$/u,
  matchSymbols,
  "\\p{scx=Ethiopic}"
);
testPropertyEscapes(
  /^\p{scx=Ethi}+$/u,
  matchSymbols,
  "\\p{scx=Ethi}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [
    0x001249,
    0x001257,
    0x001259,
    0x001289,
    0x0012B1,
    0x0012BF,
    0x0012C1,
    0x0012D7,
    0x001311,
    0x002DA7,
    0x002DAF,
    0x002DB7,
    0x002DBF,
    0x002DC7,
    0x002DCF,
    0x002DD7,
    0x00AB27
  ],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x0011FF],
    [0x00124E, 0x00124F],
    [0x00125E, 0x00125F],
    [0x00128E, 0x00128F],
    [0x0012B6, 0x0012B7],
    [0x0012C6, 0x0012C7],
    [0x001316, 0x001317],
    [0x00135B, 0x00135C],
    [0x00137D, 0x00137F],
    [0x00139A, 0x002D7F],
    [0x002D97, 0x002D9F],
    [0x002DDF, 0x00AB00],
    [0x00AB07, 0x00AB08],
    [0x00AB0F, 0x00AB10],
    [0x00AB17, 0x00AB1F],
    [0x00AB2F, 0x00DBFF],
    [0x00E000, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script_Extensions=Ethiopic}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Ethiopic}"
);
testPropertyEscapes(
  /^\P{Script_Extensions=Ethi}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Ethi}"
);
testPropertyEscapes(
  /^\P{scx=Ethiopic}+$/u,
  nonMatchSymbols,
  "\\P{scx=Ethiopic}"
);
testPropertyEscapes(
  /^\P{scx=Ethi}+$/u,
  nonMatchSymbols,
  "\\P{scx=Ethi}"
);
