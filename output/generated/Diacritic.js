// Copyright 2022 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Diacritic`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v14.0.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [
    0x00005E,
    0x000060,
    0x0000A8,
    0x0000AF,
    0x0000B4,
    0x00037A,
    0x000559,
    0x0005BF,
    0x0005C4,
    0x00093C,
    0x00094D,
    0x000971,
    0x0009BC,
    0x0009CD,
    0x000A3C,
    0x000A4D,
    0x000ABC,
    0x000ACD,
    0x000B3C,
    0x000B4D,
    0x000B55,
    0x000BCD,
    0x000C3C,
    0x000C4D,
    0x000CBC,
    0x000CCD,
    0x000D4D,
    0x000DCA,
    0x000E4E,
    0x000EBA,
    0x000F35,
    0x000F37,
    0x000F39,
    0x000FC6,
    0x001037,
    0x00108F,
    0x0017DD,
    0x001A7F,
    0x001B34,
    0x001B44,
    0x001CED,
    0x001CF4,
    0x001FBD,
    0x002E2F,
    0x0030FC,
    0x00A66F,
    0x00A67F,
    0x00A8C4,
    0x00A953,
    0x00A9B3,
    0x00A9C0,
    0x00A9E5,
    0x00AAF6,
    0x00FB1E,
    0x00FF3E,
    0x00FF40,
    0x00FF70,
    0x00FFE3,
    0x0102E0,
    0x011046,
    0x011070,
    0x011173,
    0x0111C0,
    0x01133C,
    0x01134D,
    0x011442,
    0x011446,
    0x01163F,
    0x01172B,
    0x011943,
    0x0119E0,
    0x011A34,
    0x011A47,
    0x011A99,
    0x011C3F,
    0x011D42,
    0x011D97,
    0x01E2AE
  ],
  ranges: [
    [0x0000B7, 0x0000B8],
    [0x0002B0, 0x00034E],
    [0x000350, 0x000357],
    [0x00035D, 0x000362],
    [0x000374, 0x000375],
    [0x000384, 0x000385],
    [0x000483, 0x000487],
    [0x000591, 0x0005A1],
    [0x0005A3, 0x0005BD],
    [0x0005C1, 0x0005C2],
    [0x00064B, 0x000652],
    [0x000657, 0x000658],
    [0x0006DF, 0x0006E0],
    [0x0006E5, 0x0006E6],
    [0x0006EA, 0x0006EC],
    [0x000730, 0x00074A],
    [0x0007A6, 0x0007B0],
    [0x0007EB, 0x0007F5],
    [0x000818, 0x000819],
    [0x000898, 0x00089F],
    [0x0008C9, 0x0008D2],
    [0x0008E3, 0x0008FE],
    [0x000951, 0x000954],
    [0x000AFD, 0x000AFF],
    [0x000D3B, 0x000D3C],
    [0x000E47, 0x000E4C],
    [0x000EC8, 0x000ECC],
    [0x000F18, 0x000F19],
    [0x000F3E, 0x000F3F],
    [0x000F82, 0x000F84],
    [0x000F86, 0x000F87],
    [0x001039, 0x00103A],
    [0x001063, 0x001064],
    [0x001069, 0x00106D],
    [0x001087, 0x00108D],
    [0x00109A, 0x00109B],
    [0x00135D, 0x00135F],
    [0x001714, 0x001715],
    [0x0017C9, 0x0017D3],
    [0x001939, 0x00193B],
    [0x001A75, 0x001A7C],
    [0x001AB0, 0x001ABE],
    [0x001AC1, 0x001ACB],
    [0x001B6B, 0x001B73],
    [0x001BAA, 0x001BAB],
    [0x001C36, 0x001C37],
    [0x001C78, 0x001C7D],
    [0x001CD0, 0x001CE8],
    [0x001CF7, 0x001CF9],
    [0x001D2C, 0x001D6A],
    [0x001DC4, 0x001DCF],
    [0x001DF5, 0x001DFF],
    [0x001FBF, 0x001FC1],
    [0x001FCD, 0x001FCF],
    [0x001FDD, 0x001FDF],
    [0x001FED, 0x001FEF],
    [0x001FFD, 0x001FFE],
    [0x002CEF, 0x002CF1],
    [0x00302A, 0x00302F],
    [0x003099, 0x00309C],
    [0x00A67C, 0x00A67D],
    [0x00A69C, 0x00A69D],
    [0x00A6F0, 0x00A6F1],
    [0x00A700, 0x00A721],
    [0x00A788, 0x00A78A],
    [0x00A7F8, 0x00A7F9],
    [0x00A8E0, 0x00A8F1],
    [0x00A92B, 0x00A92E],
    [0x00AA7B, 0x00AA7D],
    [0x00AABF, 0x00AAC2],
    [0x00AB5B, 0x00AB5F],
    [0x00AB69, 0x00AB6B],
    [0x00ABEC, 0x00ABED],
    [0x00FE20, 0x00FE2F],
    [0x00FF9E, 0x00FF9F],
    [0x010780, 0x010785],
    [0x010787, 0x0107B0],
    [0x0107B2, 0x0107BA],
    [0x010AE5, 0x010AE6],
    [0x010D22, 0x010D27],
    [0x010F46, 0x010F50],
    [0x010F82, 0x010F85],
    [0x0110B9, 0x0110BA],
    [0x011133, 0x011134],
    [0x0111CA, 0x0111CC],
    [0x011235, 0x011236],
    [0x0112E9, 0x0112EA],
    [0x011366, 0x01136C],
    [0x011370, 0x011374],
    [0x0114C2, 0x0114C3],
    [0x0115BF, 0x0115C0],
    [0x0116B6, 0x0116B7],
    [0x011839, 0x01183A],
    [0x01193D, 0x01193E],
    [0x011D44, 0x011D45],
    [0x016AF0, 0x016AF4],
    [0x016B30, 0x016B36],
    [0x016F8F, 0x016F9F],
    [0x016FF0, 0x016FF1],
    [0x01AFF0, 0x01AFF3],
    [0x01AFF5, 0x01AFFB],
    [0x01AFFD, 0x01AFFE],
    [0x01CF00, 0x01CF2D],
    [0x01CF30, 0x01CF46],
    [0x01D167, 0x01D169],
    [0x01D16D, 0x01D172],
    [0x01D17B, 0x01D182],
    [0x01D185, 0x01D18B],
    [0x01D1AA, 0x01D1AD],
    [0x01E130, 0x01E136],
    [0x01E2EC, 0x01E2EF],
    [0x01E8D0, 0x01E8D6],
    [0x01E944, 0x01E946],
    [0x01E948, 0x01E94A]
  ]
});
testPropertyEscapes(
  /^\p{Diacritic}+$/u,
  matchSymbols,
  "\\p{Diacritic}"
);
testPropertyEscapes(
  /^\p{Dia}+$/u,
  matchSymbols,
  "\\p{Dia}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [
    0x00005F,
    0x00034F,
    0x0005A2,
    0x0005BE,
    0x0005C0,
    0x0005C3,
    0x000E4D,
    0x000F36,
    0x000F38,
    0x000F85,
    0x001038,
    0x00108E,
    0x001FBE,
    0x00A67E,
    0x00FF3F,
    0x010786,
    0x0107B1,
    0x011D43,
    0x01AFF4,
    0x01AFFC,
    0x01E947
  ],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00005D],
    [0x000061, 0x0000A7],
    [0x0000A9, 0x0000AE],
    [0x0000B0, 0x0000B3],
    [0x0000B5, 0x0000B6],
    [0x0000B9, 0x0002AF],
    [0x000358, 0x00035C],
    [0x000363, 0x000373],
    [0x000376, 0x000379],
    [0x00037B, 0x000383],
    [0x000386, 0x000482],
    [0x000488, 0x000558],
    [0x00055A, 0x000590],
    [0x0005C5, 0x00064A],
    [0x000653, 0x000656],
    [0x000659, 0x0006DE],
    [0x0006E1, 0x0006E4],
    [0x0006E7, 0x0006E9],
    [0x0006ED, 0x00072F],
    [0x00074B, 0x0007A5],
    [0x0007B1, 0x0007EA],
    [0x0007F6, 0x000817],
    [0x00081A, 0x000897],
    [0x0008A0, 0x0008C8],
    [0x0008D3, 0x0008E2],
    [0x0008FF, 0x00093B],
    [0x00093D, 0x00094C],
    [0x00094E, 0x000950],
    [0x000955, 0x000970],
    [0x000972, 0x0009BB],
    [0x0009BD, 0x0009CC],
    [0x0009CE, 0x000A3B],
    [0x000A3D, 0x000A4C],
    [0x000A4E, 0x000ABB],
    [0x000ABD, 0x000ACC],
    [0x000ACE, 0x000AFC],
    [0x000B00, 0x000B3B],
    [0x000B3D, 0x000B4C],
    [0x000B4E, 0x000B54],
    [0x000B56, 0x000BCC],
    [0x000BCE, 0x000C3B],
    [0x000C3D, 0x000C4C],
    [0x000C4E, 0x000CBB],
    [0x000CBD, 0x000CCC],
    [0x000CCE, 0x000D3A],
    [0x000D3D, 0x000D4C],
    [0x000D4E, 0x000DC9],
    [0x000DCB, 0x000E46],
    [0x000E4F, 0x000EB9],
    [0x000EBB, 0x000EC7],
    [0x000ECD, 0x000F17],
    [0x000F1A, 0x000F34],
    [0x000F3A, 0x000F3D],
    [0x000F40, 0x000F81],
    [0x000F88, 0x000FC5],
    [0x000FC7, 0x001036],
    [0x00103B, 0x001062],
    [0x001065, 0x001068],
    [0x00106E, 0x001086],
    [0x001090, 0x001099],
    [0x00109C, 0x00135C],
    [0x001360, 0x001713],
    [0x001716, 0x0017C8],
    [0x0017D4, 0x0017DC],
    [0x0017DE, 0x001938],
    [0x00193C, 0x001A74],
    [0x001A7D, 0x001A7E],
    [0x001A80, 0x001AAF],
    [0x001ABF, 0x001AC0],
    [0x001ACC, 0x001B33],
    [0x001B35, 0x001B43],
    [0x001B45, 0x001B6A],
    [0x001B74, 0x001BA9],
    [0x001BAC, 0x001C35],
    [0x001C38, 0x001C77],
    [0x001C7E, 0x001CCF],
    [0x001CE9, 0x001CEC],
    [0x001CEE, 0x001CF3],
    [0x001CF5, 0x001CF6],
    [0x001CFA, 0x001D2B],
    [0x001D6B, 0x001DC3],
    [0x001DD0, 0x001DF4],
    [0x001E00, 0x001FBC],
    [0x001FC2, 0x001FCC],
    [0x001FD0, 0x001FDC],
    [0x001FE0, 0x001FEC],
    [0x001FF0, 0x001FFC],
    [0x001FFF, 0x002CEE],
    [0x002CF2, 0x002E2E],
    [0x002E30, 0x003029],
    [0x003030, 0x003098],
    [0x00309D, 0x0030FB],
    [0x0030FD, 0x00A66E],
    [0x00A670, 0x00A67B],
    [0x00A680, 0x00A69B],
    [0x00A69E, 0x00A6EF],
    [0x00A6F2, 0x00A6FF],
    [0x00A722, 0x00A787],
    [0x00A78B, 0x00A7F7],
    [0x00A7FA, 0x00A8C3],
    [0x00A8C5, 0x00A8DF],
    [0x00A8F2, 0x00A92A],
    [0x00A92F, 0x00A952],
    [0x00A954, 0x00A9B2],
    [0x00A9B4, 0x00A9BF],
    [0x00A9C1, 0x00A9E4],
    [0x00A9E6, 0x00AA7A],
    [0x00AA7E, 0x00AABE],
    [0x00AAC3, 0x00AAF5],
    [0x00AAF7, 0x00AB5A],
    [0x00AB60, 0x00AB68],
    [0x00AB6C, 0x00ABEB],
    [0x00ABEE, 0x00DBFF],
    [0x00E000, 0x00FB1D],
    [0x00FB1F, 0x00FE1F],
    [0x00FE30, 0x00FF3D],
    [0x00FF41, 0x00FF6F],
    [0x00FF71, 0x00FF9D],
    [0x00FFA0, 0x00FFE2],
    [0x00FFE4, 0x0102DF],
    [0x0102E1, 0x01077F],
    [0x0107BB, 0x010AE4],
    [0x010AE7, 0x010D21],
    [0x010D28, 0x010F45],
    [0x010F51, 0x010F81],
    [0x010F86, 0x011045],
    [0x011047, 0x01106F],
    [0x011071, 0x0110B8],
    [0x0110BB, 0x011132],
    [0x011135, 0x011172],
    [0x011174, 0x0111BF],
    [0x0111C1, 0x0111C9],
    [0x0111CD, 0x011234],
    [0x011237, 0x0112E8],
    [0x0112EB, 0x01133B],
    [0x01133D, 0x01134C],
    [0x01134E, 0x011365],
    [0x01136D, 0x01136F],
    [0x011375, 0x011441],
    [0x011443, 0x011445],
    [0x011447, 0x0114C1],
    [0x0114C4, 0x0115BE],
    [0x0115C1, 0x01163E],
    [0x011640, 0x0116B5],
    [0x0116B8, 0x01172A],
    [0x01172C, 0x011838],
    [0x01183B, 0x01193C],
    [0x01193F, 0x011942],
    [0x011944, 0x0119DF],
    [0x0119E1, 0x011A33],
    [0x011A35, 0x011A46],
    [0x011A48, 0x011A98],
    [0x011A9A, 0x011C3E],
    [0x011C40, 0x011D41],
    [0x011D46, 0x011D96],
    [0x011D98, 0x016AEF],
    [0x016AF5, 0x016B2F],
    [0x016B37, 0x016F8E],
    [0x016FA0, 0x016FEF],
    [0x016FF2, 0x01AFEF],
    [0x01AFFF, 0x01CEFF],
    [0x01CF2E, 0x01CF2F],
    [0x01CF47, 0x01D166],
    [0x01D16A, 0x01D16C],
    [0x01D173, 0x01D17A],
    [0x01D183, 0x01D184],
    [0x01D18C, 0x01D1A9],
    [0x01D1AE, 0x01E12F],
    [0x01E137, 0x01E2AD],
    [0x01E2AF, 0x01E2EB],
    [0x01E2F0, 0x01E8CF],
    [0x01E8D7, 0x01E943],
    [0x01E94B, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Diacritic}+$/u,
  nonMatchSymbols,
  "\\P{Diacritic}"
);
testPropertyEscapes(
  /^\P{Dia}+$/u,
  nonMatchSymbols,
  "\\P{Dia}"
);
