// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Emoji`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v9.0.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [buildString.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [
    0x000023,
    0x00002A,
    0x0000A9,
    0x0000AE,
    0x00203C,
    0x002049,
    0x002122,
    0x002139,
    0x002328,
    0x0023CF,
    0x0024C2,
    0x0025B6,
    0x0025C0,
    0x00260E,
    0x002611,
    0x002618,
    0x00261D,
    0x002620,
    0x002626,
    0x00262A,
    0x002640,
    0x002642,
    0x002660,
    0x002663,
    0x002668,
    0x00267B,
    0x00267F,
    0x002699,
    0x0026C8,
    0x0026D1,
    0x0026FD,
    0x002702,
    0x002705,
    0x00270F,
    0x002712,
    0x002714,
    0x002716,
    0x00271D,
    0x002721,
    0x002728,
    0x002744,
    0x002747,
    0x00274C,
    0x00274E,
    0x002757,
    0x0027A1,
    0x0027B0,
    0x0027BF,
    0x002B50,
    0x002B55,
    0x003030,
    0x00303D,
    0x003297,
    0x003299,
    0x01F004,
    0x01F0CF,
    0x01F18E,
    0x01F21A,
    0x01F22F,
    0x01F587,
    0x01F590,
    0x01F5A8,
    0x01F5BC,
    0x01F5E1,
    0x01F5E3,
    0x01F5E8,
    0x01F5EF,
    0x01F5F3,
    0x01F6E9,
    0x01F6F0,
    0x01F9C0
  ],
  ranges: [
    [0x000030, 0x000039],
    [0x002194, 0x002199],
    [0x0021A9, 0x0021AA],
    [0x00231A, 0x00231B],
    [0x0023E9, 0x0023F3],
    [0x0023F8, 0x0023FA],
    [0x0025AA, 0x0025AB],
    [0x0025FB, 0x0025FE],
    [0x002600, 0x002604],
    [0x002614, 0x002615],
    [0x002622, 0x002623],
    [0x00262E, 0x00262F],
    [0x002638, 0x00263A],
    [0x002648, 0x002653],
    [0x002665, 0x002666],
    [0x002692, 0x002697],
    [0x00269B, 0x00269C],
    [0x0026A0, 0x0026A1],
    [0x0026AA, 0x0026AB],
    [0x0026B0, 0x0026B1],
    [0x0026BD, 0x0026BE],
    [0x0026C4, 0x0026C5],
    [0x0026CE, 0x0026CF],
    [0x0026D3, 0x0026D4],
    [0x0026E9, 0x0026EA],
    [0x0026F0, 0x0026F5],
    [0x0026F7, 0x0026FA],
    [0x002708, 0x00270D],
    [0x002733, 0x002734],
    [0x002753, 0x002755],
    [0x002763, 0x002764],
    [0x002795, 0x002797],
    [0x002934, 0x002935],
    [0x002B05, 0x002B07],
    [0x002B1B, 0x002B1C],
    [0x01F170, 0x01F171],
    [0x01F17E, 0x01F17F],
    [0x01F191, 0x01F19A],
    [0x01F1E6, 0x01F1FF],
    [0x01F201, 0x01F202],
    [0x01F232, 0x01F23A],
    [0x01F250, 0x01F251],
    [0x01F300, 0x01F321],
    [0x01F324, 0x01F393],
    [0x01F396, 0x01F397],
    [0x01F399, 0x01F39B],
    [0x01F39E, 0x01F3F0],
    [0x01F3F3, 0x01F3F5],
    [0x01F3F7, 0x01F4FD],
    [0x01F4FF, 0x01F53D],
    [0x01F549, 0x01F54E],
    [0x01F550, 0x01F567],
    [0x01F56F, 0x01F570],
    [0x01F573, 0x01F57A],
    [0x01F58A, 0x01F58D],
    [0x01F595, 0x01F596],
    [0x01F5A4, 0x01F5A5],
    [0x01F5B1, 0x01F5B2],
    [0x01F5C2, 0x01F5C4],
    [0x01F5D1, 0x01F5D3],
    [0x01F5DC, 0x01F5DE],
    [0x01F5FA, 0x01F64F],
    [0x01F680, 0x01F6C5],
    [0x01F6CB, 0x01F6D2],
    [0x01F6E0, 0x01F6E5],
    [0x01F6EB, 0x01F6EC],
    [0x01F6F3, 0x01F6F8],
    [0x01F910, 0x01F93A],
    [0x01F93C, 0x01F93E],
    [0x01F940, 0x01F945],
    [0x01F947, 0x01F94C],
    [0x01F950, 0x01F96B],
    [0x01F980, 0x01F997],
    [0x01F9D0, 0x01F9E6]
  ]
});
assert(
  /^\p{Emoji}+$/u.test(matchSymbols),
  "`\\p{Emoji}` matches all proper symbols"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [
    0x0025FF,
    0x002621,
    0x002641,
    0x002664,
    0x002667,
    0x002698,
    0x00269A,
    0x0026D0,
    0x0026D2,
    0x0026F6,
    0x00270E,
    0x002713,
    0x002715,
    0x00274D,
    0x002756,
    0x003298,
    0x01F200,
    0x01F398,
    0x01F3F6,
    0x01F4FE,
    0x01F54F,
    0x01F5E2,
    0x01F6EA,
    0x01F93B,
    0x01F93F,
    0x01F946
  ],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x000022],
    [0x000024, 0x000029],
    [0x00002B, 0x00002F],
    [0x00003A, 0x0000A8],
    [0x0000AA, 0x0000AD],
    [0x0000AF, 0x00203B],
    [0x00203D, 0x002048],
    [0x00204A, 0x002121],
    [0x002123, 0x002138],
    [0x00213A, 0x002193],
    [0x00219A, 0x0021A8],
    [0x0021AB, 0x002319],
    [0x00231C, 0x002327],
    [0x002329, 0x0023CE],
    [0x0023D0, 0x0023E8],
    [0x0023F4, 0x0023F7],
    [0x0023FB, 0x0024C1],
    [0x0024C3, 0x0025A9],
    [0x0025AC, 0x0025B5],
    [0x0025B7, 0x0025BF],
    [0x0025C1, 0x0025FA],
    [0x002605, 0x00260D],
    [0x00260F, 0x002610],
    [0x002612, 0x002613],
    [0x002616, 0x002617],
    [0x002619, 0x00261C],
    [0x00261E, 0x00261F],
    [0x002624, 0x002625],
    [0x002627, 0x002629],
    [0x00262B, 0x00262D],
    [0x002630, 0x002637],
    [0x00263B, 0x00263F],
    [0x002643, 0x002647],
    [0x002654, 0x00265F],
    [0x002661, 0x002662],
    [0x002669, 0x00267A],
    [0x00267C, 0x00267E],
    [0x002680, 0x002691],
    [0x00269D, 0x00269F],
    [0x0026A2, 0x0026A9],
    [0x0026AC, 0x0026AF],
    [0x0026B2, 0x0026BC],
    [0x0026BF, 0x0026C3],
    [0x0026C6, 0x0026C7],
    [0x0026C9, 0x0026CD],
    [0x0026D5, 0x0026E8],
    [0x0026EB, 0x0026EF],
    [0x0026FB, 0x0026FC],
    [0x0026FE, 0x002701],
    [0x002703, 0x002704],
    [0x002706, 0x002707],
    [0x002710, 0x002711],
    [0x002717, 0x00271C],
    [0x00271E, 0x002720],
    [0x002722, 0x002727],
    [0x002729, 0x002732],
    [0x002735, 0x002743],
    [0x002745, 0x002746],
    [0x002748, 0x00274B],
    [0x00274F, 0x002752],
    [0x002758, 0x002762],
    [0x002765, 0x002794],
    [0x002798, 0x0027A0],
    [0x0027A2, 0x0027AF],
    [0x0027B1, 0x0027BE],
    [0x0027C0, 0x002933],
    [0x002936, 0x002B04],
    [0x002B08, 0x002B1A],
    [0x002B1D, 0x002B4F],
    [0x002B51, 0x002B54],
    [0x002B56, 0x00302F],
    [0x003031, 0x00303C],
    [0x00303E, 0x003296],
    [0x00329A, 0x00DBFF],
    [0x00E000, 0x01F003],
    [0x01F005, 0x01F0CE],
    [0x01F0D0, 0x01F16F],
    [0x01F172, 0x01F17D],
    [0x01F180, 0x01F18D],
    [0x01F18F, 0x01F190],
    [0x01F19B, 0x01F1E5],
    [0x01F203, 0x01F219],
    [0x01F21B, 0x01F22E],
    [0x01F230, 0x01F231],
    [0x01F23B, 0x01F24F],
    [0x01F252, 0x01F2FF],
    [0x01F322, 0x01F323],
    [0x01F394, 0x01F395],
    [0x01F39C, 0x01F39D],
    [0x01F3F1, 0x01F3F2],
    [0x01F53E, 0x01F548],
    [0x01F568, 0x01F56E],
    [0x01F571, 0x01F572],
    [0x01F57B, 0x01F586],
    [0x01F588, 0x01F589],
    [0x01F58E, 0x01F58F],
    [0x01F591, 0x01F594],
    [0x01F597, 0x01F5A3],
    [0x01F5A6, 0x01F5A7],
    [0x01F5A9, 0x01F5B0],
    [0x01F5B3, 0x01F5BB],
    [0x01F5BD, 0x01F5C1],
    [0x01F5C5, 0x01F5D0],
    [0x01F5D4, 0x01F5DB],
    [0x01F5DF, 0x01F5E0],
    [0x01F5E4, 0x01F5E7],
    [0x01F5E9, 0x01F5EE],
    [0x01F5F0, 0x01F5F2],
    [0x01F5F4, 0x01F5F9],
    [0x01F650, 0x01F67F],
    [0x01F6C6, 0x01F6CA],
    [0x01F6D3, 0x01F6DF],
    [0x01F6E6, 0x01F6E8],
    [0x01F6ED, 0x01F6EF],
    [0x01F6F1, 0x01F6F2],
    [0x01F6F9, 0x01F90F],
    [0x01F94D, 0x01F94F],
    [0x01F96C, 0x01F97F],
    [0x01F998, 0x01F9BF],
    [0x01F9C1, 0x01F9CF],
    [0x01F9E7, 0x10FFFF]
  ]
});
assert(
  /^\P{Emoji}+$/u.test(nonMatchSymbols),
  "`\\P{Emoji}` matches all proper symbols"
);
