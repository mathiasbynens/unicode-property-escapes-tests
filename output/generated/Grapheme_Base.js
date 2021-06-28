// Copyright 2021 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Grapheme_Base`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v13.0.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [
    0x00038C,
    0x0005BE,
    0x0005C0,
    0x0005C3,
    0x0005C6,
    0x00061B,
    0x0006DE,
    0x0006E9,
    0x000710,
    0x0007B1,
    0x00081A,
    0x000824,
    0x000828,
    0x00085E,
    0x00093B,
    0x0009B2,
    0x0009BD,
    0x0009CE,
    0x000A03,
    0x000A5E,
    0x000A76,
    0x000A83,
    0x000AC9,
    0x000AD0,
    0x000AF9,
    0x000B3D,
    0x000B40,
    0x000B83,
    0x000B9C,
    0x000BBF,
    0x000BD0,
    0x000C3D,
    0x000CDE,
    0x000D3D,
    0x000DBD,
    0x000E84,
    0x000EA5,
    0x000EBD,
    0x000EC6,
    0x000F36,
    0x000F38,
    0x000F7F,
    0x000F85,
    0x001031,
    0x001038,
    0x0010C7,
    0x0010CD,
    0x001258,
    0x0012C0,
    0x0017B6,
    0x0018AA,
    0x001940,
    0x001A57,
    0x001A61,
    0x001B3B,
    0x001BAA,
    0x001BE7,
    0x001BEE,
    0x001CD3,
    0x001CE1,
    0x001CFA,
    0x001F59,
    0x001F5B,
    0x001F5D,
    0x002D27,
    0x002D2D,
    0x00A673,
    0x00AA4D,
    0x00AAB1,
    0x00AAC0,
    0x00AAC2,
    0x00FB1D,
    0x00FB3E,
    0x0101A0,
    0x01056F,
    0x010808,
    0x01083C,
    0x01093F,
    0x010EAD,
    0x011000,
    0x01112C,
    0x011235,
    0x011288,
    0x01133D,
    0x01133F,
    0x011350,
    0x011445,
    0x01145D,
    0x0114B9,
    0x0114BE,
    0x0114C1,
    0x0115BE,
    0x01163E,
    0x0116AC,
    0x0116B6,
    0x0116B8,
    0x011726,
    0x011838,
    0x01183B,
    0x011909,
    0x01193D,
    0x011A00,
    0x011A50,
    0x011A97,
    0x011C3E,
    0x011CA9,
    0x011CB1,
    0x011CB4,
    0x011D46,
    0x011D96,
    0x011D98,
    0x011FB0,
    0x016AF5,
    0x01BC9C,
    0x01BC9F,
    0x01D166,
    0x01D245,
    0x01D4A2,
    0x01D4BB,
    0x01D546,
    0x01E2FF,
    0x01E94B,
    0x01EE24,
    0x01EE27,
    0x01EE39,
    0x01EE3B,
    0x01EE42,
    0x01EE47,
    0x01EE49,
    0x01EE4B,
    0x01EE54,
    0x01EE57,
    0x01EE59,
    0x01EE5B,
    0x01EE5D,
    0x01EE5F,
    0x01EE64,
    0x01EE7E
  ],
  ranges: [
    [0x000020, 0x00007E],
    [0x0000A0, 0x0000AC],
    [0x0000AE, 0x0002FF],
    [0x000370, 0x000377],
    [0x00037A, 0x00037F],
    [0x000384, 0x00038A],
    [0x00038E, 0x0003A1],
    [0x0003A3, 0x000482],
    [0x00048A, 0x00052F],
    [0x000531, 0x000556],
    [0x000559, 0x00058A],
    [0x00058D, 0x00058F],
    [0x0005D0, 0x0005EA],
    [0x0005EF, 0x0005F4],
    [0x000606, 0x00060F],
    [0x00061E, 0x00064A],
    [0x000660, 0x00066F],
    [0x000671, 0x0006D5],
    [0x0006E5, 0x0006E6],
    [0x0006EE, 0x00070D],
    [0x000712, 0x00072F],
    [0x00074D, 0x0007A5],
    [0x0007C0, 0x0007EA],
    [0x0007F4, 0x0007FA],
    [0x0007FE, 0x000815],
    [0x000830, 0x00083E],
    [0x000840, 0x000858],
    [0x000860, 0x00086A],
    [0x0008A0, 0x0008B4],
    [0x0008B6, 0x0008C7],
    [0x000903, 0x000939],
    [0x00093D, 0x000940],
    [0x000949, 0x00094C],
    [0x00094E, 0x000950],
    [0x000958, 0x000961],
    [0x000964, 0x000980],
    [0x000982, 0x000983],
    [0x000985, 0x00098C],
    [0x00098F, 0x000990],
    [0x000993, 0x0009A8],
    [0x0009AA, 0x0009B0],
    [0x0009B6, 0x0009B9],
    [0x0009BF, 0x0009C0],
    [0x0009C7, 0x0009C8],
    [0x0009CB, 0x0009CC],
    [0x0009DC, 0x0009DD],
    [0x0009DF, 0x0009E1],
    [0x0009E6, 0x0009FD],
    [0x000A05, 0x000A0A],
    [0x000A0F, 0x000A10],
    [0x000A13, 0x000A28],
    [0x000A2A, 0x000A30],
    [0x000A32, 0x000A33],
    [0x000A35, 0x000A36],
    [0x000A38, 0x000A39],
    [0x000A3E, 0x000A40],
    [0x000A59, 0x000A5C],
    [0x000A66, 0x000A6F],
    [0x000A72, 0x000A74],
    [0x000A85, 0x000A8D],
    [0x000A8F, 0x000A91],
    [0x000A93, 0x000AA8],
    [0x000AAA, 0x000AB0],
    [0x000AB2, 0x000AB3],
    [0x000AB5, 0x000AB9],
    [0x000ABD, 0x000AC0],
    [0x000ACB, 0x000ACC],
    [0x000AE0, 0x000AE1],
    [0x000AE6, 0x000AF1],
    [0x000B02, 0x000B03],
    [0x000B05, 0x000B0C],
    [0x000B0F, 0x000B10],
    [0x000B13, 0x000B28],
    [0x000B2A, 0x000B30],
    [0x000B32, 0x000B33],
    [0x000B35, 0x000B39],
    [0x000B47, 0x000B48],
    [0x000B4B, 0x000B4C],
    [0x000B5C, 0x000B5D],
    [0x000B5F, 0x000B61],
    [0x000B66, 0x000B77],
    [0x000B85, 0x000B8A],
    [0x000B8E, 0x000B90],
    [0x000B92, 0x000B95],
    [0x000B99, 0x000B9A],
    [0x000B9E, 0x000B9F],
    [0x000BA3, 0x000BA4],
    [0x000BA8, 0x000BAA],
    [0x000BAE, 0x000BB9],
    [0x000BC1, 0x000BC2],
    [0x000BC6, 0x000BC8],
    [0x000BCA, 0x000BCC],
    [0x000BE6, 0x000BFA],
    [0x000C01, 0x000C03],
    [0x000C05, 0x000C0C],
    [0x000C0E, 0x000C10],
    [0x000C12, 0x000C28],
    [0x000C2A, 0x000C39],
    [0x000C41, 0x000C44],
    [0x000C58, 0x000C5A],
    [0x000C60, 0x000C61],
    [0x000C66, 0x000C6F],
    [0x000C77, 0x000C80],
    [0x000C82, 0x000C8C],
    [0x000C8E, 0x000C90],
    [0x000C92, 0x000CA8],
    [0x000CAA, 0x000CB3],
    [0x000CB5, 0x000CB9],
    [0x000CBD, 0x000CBE],
    [0x000CC0, 0x000CC1],
    [0x000CC3, 0x000CC4],
    [0x000CC7, 0x000CC8],
    [0x000CCA, 0x000CCB],
    [0x000CE0, 0x000CE1],
    [0x000CE6, 0x000CEF],
    [0x000CF1, 0x000CF2],
    [0x000D02, 0x000D0C],
    [0x000D0E, 0x000D10],
    [0x000D12, 0x000D3A],
    [0x000D3F, 0x000D40],
    [0x000D46, 0x000D48],
    [0x000D4A, 0x000D4C],
    [0x000D4E, 0x000D4F],
    [0x000D54, 0x000D56],
    [0x000D58, 0x000D61],
    [0x000D66, 0x000D7F],
    [0x000D82, 0x000D83],
    [0x000D85, 0x000D96],
    [0x000D9A, 0x000DB1],
    [0x000DB3, 0x000DBB],
    [0x000DC0, 0x000DC6],
    [0x000DD0, 0x000DD1],
    [0x000DD8, 0x000DDE],
    [0x000DE6, 0x000DEF],
    [0x000DF2, 0x000DF4],
    [0x000E01, 0x000E30],
    [0x000E32, 0x000E33],
    [0x000E3F, 0x000E46],
    [0x000E4F, 0x000E5B],
    [0x000E81, 0x000E82],
    [0x000E86, 0x000E8A],
    [0x000E8C, 0x000EA3],
    [0x000EA7, 0x000EB0],
    [0x000EB2, 0x000EB3],
    [0x000EC0, 0x000EC4],
    [0x000ED0, 0x000ED9],
    [0x000EDC, 0x000EDF],
    [0x000F00, 0x000F17],
    [0x000F1A, 0x000F34],
    [0x000F3A, 0x000F47],
    [0x000F49, 0x000F6C],
    [0x000F88, 0x000F8C],
    [0x000FBE, 0x000FC5],
    [0x000FC7, 0x000FCC],
    [0x000FCE, 0x000FDA],
    [0x001000, 0x00102C],
    [0x00103B, 0x00103C],
    [0x00103F, 0x001057],
    [0x00105A, 0x00105D],
    [0x001061, 0x001070],
    [0x001075, 0x001081],
    [0x001083, 0x001084],
    [0x001087, 0x00108C],
    [0x00108E, 0x00109C],
    [0x00109E, 0x0010C5],
    [0x0010D0, 0x001248],
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
    [0x001360, 0x00137C],
    [0x001380, 0x001399],
    [0x0013A0, 0x0013F5],
    [0x0013F8, 0x0013FD],
    [0x001400, 0x00169C],
    [0x0016A0, 0x0016F8],
    [0x001700, 0x00170C],
    [0x00170E, 0x001711],
    [0x001720, 0x001731],
    [0x001735, 0x001736],
    [0x001740, 0x001751],
    [0x001760, 0x00176C],
    [0x00176E, 0x001770],
    [0x001780, 0x0017B3],
    [0x0017BE, 0x0017C5],
    [0x0017C7, 0x0017C8],
    [0x0017D4, 0x0017DC],
    [0x0017E0, 0x0017E9],
    [0x0017F0, 0x0017F9],
    [0x001800, 0x00180A],
    [0x001810, 0x001819],
    [0x001820, 0x001878],
    [0x001880, 0x001884],
    [0x001887, 0x0018A8],
    [0x0018B0, 0x0018F5],
    [0x001900, 0x00191E],
    [0x001923, 0x001926],
    [0x001929, 0x00192B],
    [0x001930, 0x001931],
    [0x001933, 0x001938],
    [0x001944, 0x00196D],
    [0x001970, 0x001974],
    [0x001980, 0x0019AB],
    [0x0019B0, 0x0019C9],
    [0x0019D0, 0x0019DA],
    [0x0019DE, 0x001A16],
    [0x001A19, 0x001A1A],
    [0x001A1E, 0x001A55],
    [0x001A63, 0x001A64],
    [0x001A6D, 0x001A72],
    [0x001A80, 0x001A89],
    [0x001A90, 0x001A99],
    [0x001AA0, 0x001AAD],
    [0x001B04, 0x001B33],
    [0x001B3D, 0x001B41],
    [0x001B43, 0x001B4B],
    [0x001B50, 0x001B6A],
    [0x001B74, 0x001B7C],
    [0x001B82, 0x001BA1],
    [0x001BA6, 0x001BA7],
    [0x001BAE, 0x001BE5],
    [0x001BEA, 0x001BEC],
    [0x001BF2, 0x001BF3],
    [0x001BFC, 0x001C2B],
    [0x001C34, 0x001C35],
    [0x001C3B, 0x001C49],
    [0x001C4D, 0x001C88],
    [0x001C90, 0x001CBA],
    [0x001CBD, 0x001CC7],
    [0x001CE9, 0x001CEC],
    [0x001CEE, 0x001CF3],
    [0x001CF5, 0x001CF7],
    [0x001D00, 0x001DBF],
    [0x001E00, 0x001F15],
    [0x001F18, 0x001F1D],
    [0x001F20, 0x001F45],
    [0x001F48, 0x001F4D],
    [0x001F50, 0x001F57],
    [0x001F5F, 0x001F7D],
    [0x001F80, 0x001FB4],
    [0x001FB6, 0x001FC4],
    [0x001FC6, 0x001FD3],
    [0x001FD6, 0x001FDB],
    [0x001FDD, 0x001FEF],
    [0x001FF2, 0x001FF4],
    [0x001FF6, 0x001FFE],
    [0x002000, 0x00200A],
    [0x002010, 0x002027],
    [0x00202F, 0x00205F],
    [0x002070, 0x002071],
    [0x002074, 0x00208E],
    [0x002090, 0x00209C],
    [0x0020A0, 0x0020BF],
    [0x002100, 0x00218B],
    [0x002190, 0x002426],
    [0x002440, 0x00244A],
    [0x002460, 0x002B73],
    [0x002B76, 0x002B95],
    [0x002B97, 0x002C2E],
    [0x002C30, 0x002C5E],
    [0x002C60, 0x002CEE],
    [0x002CF2, 0x002CF3],
    [0x002CF9, 0x002D25],
    [0x002D30, 0x002D67],
    [0x002D6F, 0x002D70],
    [0x002D80, 0x002D96],
    [0x002DA0, 0x002DA6],
    [0x002DA8, 0x002DAE],
    [0x002DB0, 0x002DB6],
    [0x002DB8, 0x002DBE],
    [0x002DC0, 0x002DC6],
    [0x002DC8, 0x002DCE],
    [0x002DD0, 0x002DD6],
    [0x002DD8, 0x002DDE],
    [0x002E00, 0x002E52],
    [0x002E80, 0x002E99],
    [0x002E9B, 0x002EF3],
    [0x002F00, 0x002FD5],
    [0x002FF0, 0x002FFB],
    [0x003000, 0x003029],
    [0x003030, 0x00303F],
    [0x003041, 0x003096],
    [0x00309B, 0x0030FF],
    [0x003105, 0x00312F],
    [0x003131, 0x00318E],
    [0x003190, 0x0031E3],
    [0x0031F0, 0x00321E],
    [0x003220, 0x009FFC],
    [0x00A000, 0x00A48C],
    [0x00A490, 0x00A4C6],
    [0x00A4D0, 0x00A62B],
    [0x00A640, 0x00A66E],
    [0x00A67E, 0x00A69D],
    [0x00A6A0, 0x00A6EF],
    [0x00A6F2, 0x00A6F7],
    [0x00A700, 0x00A7BF],
    [0x00A7C2, 0x00A7CA],
    [0x00A7F5, 0x00A801],
    [0x00A803, 0x00A805],
    [0x00A807, 0x00A80A],
    [0x00A80C, 0x00A824],
    [0x00A827, 0x00A82B],
    [0x00A830, 0x00A839],
    [0x00A840, 0x00A877],
    [0x00A880, 0x00A8C3],
    [0x00A8CE, 0x00A8D9],
    [0x00A8F2, 0x00A8FE],
    [0x00A900, 0x00A925],
    [0x00A92E, 0x00A946],
    [0x00A952, 0x00A953],
    [0x00A95F, 0x00A97C],
    [0x00A983, 0x00A9B2],
    [0x00A9B4, 0x00A9B5],
    [0x00A9BA, 0x00A9BB],
    [0x00A9BE, 0x00A9CD],
    [0x00A9CF, 0x00A9D9],
    [0x00A9DE, 0x00A9E4],
    [0x00A9E6, 0x00A9FE],
    [0x00AA00, 0x00AA28],
    [0x00AA2F, 0x00AA30],
    [0x00AA33, 0x00AA34],
    [0x00AA40, 0x00AA42],
    [0x00AA44, 0x00AA4B],
    [0x00AA50, 0x00AA59],
    [0x00AA5C, 0x00AA7B],
    [0x00AA7D, 0x00AAAF],
    [0x00AAB5, 0x00AAB6],
    [0x00AAB9, 0x00AABD],
    [0x00AADB, 0x00AAEB],
    [0x00AAEE, 0x00AAF5],
    [0x00AB01, 0x00AB06],
    [0x00AB09, 0x00AB0E],
    [0x00AB11, 0x00AB16],
    [0x00AB20, 0x00AB26],
    [0x00AB28, 0x00AB2E],
    [0x00AB30, 0x00AB6B],
    [0x00AB70, 0x00ABE4],
    [0x00ABE6, 0x00ABE7],
    [0x00ABE9, 0x00ABEC],
    [0x00ABF0, 0x00ABF9],
    [0x00AC00, 0x00D7A3],
    [0x00D7B0, 0x00D7C6],
    [0x00D7CB, 0x00D7FB],
    [0x00F900, 0x00FA6D],
    [0x00FA70, 0x00FAD9],
    [0x00FB00, 0x00FB06],
    [0x00FB13, 0x00FB17],
    [0x00FB1F, 0x00FB36],
    [0x00FB38, 0x00FB3C],
    [0x00FB40, 0x00FB41],
    [0x00FB43, 0x00FB44],
    [0x00FB46, 0x00FBC1],
    [0x00FBD3, 0x00FD3F],
    [0x00FD50, 0x00FD8F],
    [0x00FD92, 0x00FDC7],
    [0x00FDF0, 0x00FDFD],
    [0x00FE10, 0x00FE19],
    [0x00FE30, 0x00FE52],
    [0x00FE54, 0x00FE66],
    [0x00FE68, 0x00FE6B],
    [0x00FE70, 0x00FE74],
    [0x00FE76, 0x00FEFC],
    [0x00FF01, 0x00FF9D],
    [0x00FFA0, 0x00FFBE],
    [0x00FFC2, 0x00FFC7],
    [0x00FFCA, 0x00FFCF],
    [0x00FFD2, 0x00FFD7],
    [0x00FFDA, 0x00FFDC],
    [0x00FFE0, 0x00FFE6],
    [0x00FFE8, 0x00FFEE],
    [0x00FFFC, 0x00FFFD],
    [0x010000, 0x01000B],
    [0x01000D, 0x010026],
    [0x010028, 0x01003A],
    [0x01003C, 0x01003D],
    [0x01003F, 0x01004D],
    [0x010050, 0x01005D],
    [0x010080, 0x0100FA],
    [0x010100, 0x010102],
    [0x010107, 0x010133],
    [0x010137, 0x01018E],
    [0x010190, 0x01019C],
    [0x0101D0, 0x0101FC],
    [0x010280, 0x01029C],
    [0x0102A0, 0x0102D0],
    [0x0102E1, 0x0102FB],
    [0x010300, 0x010323],
    [0x01032D, 0x01034A],
    [0x010350, 0x010375],
    [0x010380, 0x01039D],
    [0x01039F, 0x0103C3],
    [0x0103C8, 0x0103D5],
    [0x010400, 0x01049D],
    [0x0104A0, 0x0104A9],
    [0x0104B0, 0x0104D3],
    [0x0104D8, 0x0104FB],
    [0x010500, 0x010527],
    [0x010530, 0x010563],
    [0x010600, 0x010736],
    [0x010740, 0x010755],
    [0x010760, 0x010767],
    [0x010800, 0x010805],
    [0x01080A, 0x010835],
    [0x010837, 0x010838],
    [0x01083F, 0x010855],
    [0x010857, 0x01089E],
    [0x0108A7, 0x0108AF],
    [0x0108E0, 0x0108F2],
    [0x0108F4, 0x0108F5],
    [0x0108FB, 0x01091B],
    [0x01091F, 0x010939],
    [0x010980, 0x0109B7],
    [0x0109BC, 0x0109CF],
    [0x0109D2, 0x010A00],
    [0x010A10, 0x010A13],
    [0x010A15, 0x010A17],
    [0x010A19, 0x010A35],
    [0x010A40, 0x010A48],
    [0x010A50, 0x010A58],
    [0x010A60, 0x010A9F],
    [0x010AC0, 0x010AE4],
    [0x010AEB, 0x010AF6],
    [0x010B00, 0x010B35],
    [0x010B39, 0x010B55],
    [0x010B58, 0x010B72],
    [0x010B78, 0x010B91],
    [0x010B99, 0x010B9C],
    [0x010BA9, 0x010BAF],
    [0x010C00, 0x010C48],
    [0x010C80, 0x010CB2],
    [0x010CC0, 0x010CF2],
    [0x010CFA, 0x010D23],
    [0x010D30, 0x010D39],
    [0x010E60, 0x010E7E],
    [0x010E80, 0x010EA9],
    [0x010EB0, 0x010EB1],
    [0x010F00, 0x010F27],
    [0x010F30, 0x010F45],
    [0x010F51, 0x010F59],
    [0x010FB0, 0x010FCB],
    [0x010FE0, 0x010FF6],
    [0x011002, 0x011037],
    [0x011047, 0x01104D],
    [0x011052, 0x01106F],
    [0x011082, 0x0110B2],
    [0x0110B7, 0x0110B8],
    [0x0110BB, 0x0110BC],
    [0x0110BE, 0x0110C1],
    [0x0110D0, 0x0110E8],
    [0x0110F0, 0x0110F9],
    [0x011103, 0x011126],
    [0x011136, 0x011147],
    [0x011150, 0x011172],
    [0x011174, 0x011176],
    [0x011182, 0x0111B5],
    [0x0111BF, 0x0111C8],
    [0x0111CD, 0x0111CE],
    [0x0111D0, 0x0111DF],
    [0x0111E1, 0x0111F4],
    [0x011200, 0x011211],
    [0x011213, 0x01122E],
    [0x011232, 0x011233],
    [0x011238, 0x01123D],
    [0x011280, 0x011286],
    [0x01128A, 0x01128D],
    [0x01128F, 0x01129D],
    [0x01129F, 0x0112A9],
    [0x0112B0, 0x0112DE],
    [0x0112E0, 0x0112E2],
    [0x0112F0, 0x0112F9],
    [0x011302, 0x011303],
    [0x011305, 0x01130C],
    [0x01130F, 0x011310],
    [0x011313, 0x011328],
    [0x01132A, 0x011330],
    [0x011332, 0x011333],
    [0x011335, 0x011339],
    [0x011341, 0x011344],
    [0x011347, 0x011348],
    [0x01134B, 0x01134D],
    [0x01135D, 0x011363],
    [0x011400, 0x011437],
    [0x011440, 0x011441],
    [0x011447, 0x01145B],
    [0x01145F, 0x011461],
    [0x011480, 0x0114AF],
    [0x0114B1, 0x0114B2],
    [0x0114BB, 0x0114BC],
    [0x0114C4, 0x0114C7],
    [0x0114D0, 0x0114D9],
    [0x011580, 0x0115AE],
    [0x0115B0, 0x0115B1],
    [0x0115B8, 0x0115BB],
    [0x0115C1, 0x0115DB],
    [0x011600, 0x011632],
    [0x01163B, 0x01163C],
    [0x011641, 0x011644],
    [0x011650, 0x011659],
    [0x011660, 0x01166C],
    [0x011680, 0x0116AA],
    [0x0116AE, 0x0116AF],
    [0x0116C0, 0x0116C9],
    [0x011700, 0x01171A],
    [0x011720, 0x011721],
    [0x011730, 0x01173F],
    [0x011800, 0x01182E],
    [0x0118A0, 0x0118F2],
    [0x0118FF, 0x011906],
    [0x01190C, 0x011913],
    [0x011915, 0x011916],
    [0x011918, 0x01192F],
    [0x011931, 0x011935],
    [0x011937, 0x011938],
    [0x01193F, 0x011942],
    [0x011944, 0x011946],
    [0x011950, 0x011959],
    [0x0119A0, 0x0119A7],
    [0x0119AA, 0x0119D3],
    [0x0119DC, 0x0119DF],
    [0x0119E1, 0x0119E4],
    [0x011A0B, 0x011A32],
    [0x011A39, 0x011A3A],
    [0x011A3F, 0x011A46],
    [0x011A57, 0x011A58],
    [0x011A5C, 0x011A89],
    [0x011A9A, 0x011AA2],
    [0x011AC0, 0x011AF8],
    [0x011C00, 0x011C08],
    [0x011C0A, 0x011C2F],
    [0x011C40, 0x011C45],
    [0x011C50, 0x011C6C],
    [0x011C70, 0x011C8F],
    [0x011D00, 0x011D06],
    [0x011D08, 0x011D09],
    [0x011D0B, 0x011D30],
    [0x011D50, 0x011D59],
    [0x011D60, 0x011D65],
    [0x011D67, 0x011D68],
    [0x011D6A, 0x011D8E],
    [0x011D93, 0x011D94],
    [0x011DA0, 0x011DA9],
    [0x011EE0, 0x011EF2],
    [0x011EF5, 0x011EF8],
    [0x011FC0, 0x011FF1],
    [0x011FFF, 0x012399],
    [0x012400, 0x01246E],
    [0x012470, 0x012474],
    [0x012480, 0x012543],
    [0x013000, 0x01342E],
    [0x014400, 0x014646],
    [0x016800, 0x016A38],
    [0x016A40, 0x016A5E],
    [0x016A60, 0x016A69],
    [0x016A6E, 0x016A6F],
    [0x016AD0, 0x016AED],
    [0x016B00, 0x016B2F],
    [0x016B37, 0x016B45],
    [0x016B50, 0x016B59],
    [0x016B5B, 0x016B61],
    [0x016B63, 0x016B77],
    [0x016B7D, 0x016B8F],
    [0x016E40, 0x016E9A],
    [0x016F00, 0x016F4A],
    [0x016F50, 0x016F87],
    [0x016F93, 0x016F9F],
    [0x016FE0, 0x016FE3],
    [0x016FF0, 0x016FF1],
    [0x017000, 0x0187F7],
    [0x018800, 0x018CD5],
    [0x018D00, 0x018D08],
    [0x01B000, 0x01B11E],
    [0x01B150, 0x01B152],
    [0x01B164, 0x01B167],
    [0x01B170, 0x01B2FB],
    [0x01BC00, 0x01BC6A],
    [0x01BC70, 0x01BC7C],
    [0x01BC80, 0x01BC88],
    [0x01BC90, 0x01BC99],
    [0x01D000, 0x01D0F5],
    [0x01D100, 0x01D126],
    [0x01D129, 0x01D164],
    [0x01D16A, 0x01D16D],
    [0x01D183, 0x01D184],
    [0x01D18C, 0x01D1A9],
    [0x01D1AE, 0x01D1E8],
    [0x01D200, 0x01D241],
    [0x01D2E0, 0x01D2F3],
    [0x01D300, 0x01D356],
    [0x01D360, 0x01D378],
    [0x01D400, 0x01D454],
    [0x01D456, 0x01D49C],
    [0x01D49E, 0x01D49F],
    [0x01D4A5, 0x01D4A6],
    [0x01D4A9, 0x01D4AC],
    [0x01D4AE, 0x01D4B9],
    [0x01D4BD, 0x01D4C3],
    [0x01D4C5, 0x01D505],
    [0x01D507, 0x01D50A],
    [0x01D50D, 0x01D514],
    [0x01D516, 0x01D51C],
    [0x01D51E, 0x01D539],
    [0x01D53B, 0x01D53E],
    [0x01D540, 0x01D544],
    [0x01D54A, 0x01D550],
    [0x01D552, 0x01D6A5],
    [0x01D6A8, 0x01D7CB],
    [0x01D7CE, 0x01D9FF],
    [0x01DA37, 0x01DA3A],
    [0x01DA6D, 0x01DA74],
    [0x01DA76, 0x01DA83],
    [0x01DA85, 0x01DA8B],
    [0x01E100, 0x01E12C],
    [0x01E137, 0x01E13D],
    [0x01E140, 0x01E149],
    [0x01E14E, 0x01E14F],
    [0x01E2C0, 0x01E2EB],
    [0x01E2F0, 0x01E2F9],
    [0x01E800, 0x01E8C4],
    [0x01E8C7, 0x01E8CF],
    [0x01E900, 0x01E943],
    [0x01E950, 0x01E959],
    [0x01E95E, 0x01E95F],
    [0x01EC71, 0x01ECB4],
    [0x01ED01, 0x01ED3D],
    [0x01EE00, 0x01EE03],
    [0x01EE05, 0x01EE1F],
    [0x01EE21, 0x01EE22],
    [0x01EE29, 0x01EE32],
    [0x01EE34, 0x01EE37],
    [0x01EE4D, 0x01EE4F],
    [0x01EE51, 0x01EE52],
    [0x01EE61, 0x01EE62],
    [0x01EE67, 0x01EE6A],
    [0x01EE6C, 0x01EE72],
    [0x01EE74, 0x01EE77],
    [0x01EE79, 0x01EE7C],
    [0x01EE80, 0x01EE89],
    [0x01EE8B, 0x01EE9B],
    [0x01EEA1, 0x01EEA3],
    [0x01EEA5, 0x01EEA9],
    [0x01EEAB, 0x01EEBB],
    [0x01EEF0, 0x01EEF1],
    [0x01F000, 0x01F02B],
    [0x01F030, 0x01F093],
    [0x01F0A0, 0x01F0AE],
    [0x01F0B1, 0x01F0BF],
    [0x01F0C1, 0x01F0CF],
    [0x01F0D1, 0x01F0F5],
    [0x01F100, 0x01F1AD],
    [0x01F1E6, 0x01F202],
    [0x01F210, 0x01F23B],
    [0x01F240, 0x01F248],
    [0x01F250, 0x01F251],
    [0x01F260, 0x01F265],
    [0x01F300, 0x01F6D7],
    [0x01F6E0, 0x01F6EC],
    [0x01F6F0, 0x01F6FC],
    [0x01F700, 0x01F773],
    [0x01F780, 0x01F7D8],
    [0x01F7E0, 0x01F7EB],
    [0x01F800, 0x01F80B],
    [0x01F810, 0x01F847],
    [0x01F850, 0x01F859],
    [0x01F860, 0x01F887],
    [0x01F890, 0x01F8AD],
    [0x01F8B0, 0x01F8B1],
    [0x01F900, 0x01F978],
    [0x01F97A, 0x01F9CB],
    [0x01F9CD, 0x01FA53],
    [0x01FA60, 0x01FA6D],
    [0x01FA70, 0x01FA74],
    [0x01FA78, 0x01FA7A],
    [0x01FA80, 0x01FA86],
    [0x01FA90, 0x01FAA8],
    [0x01FAB0, 0x01FAB6],
    [0x01FAC0, 0x01FAC2],
    [0x01FAD0, 0x01FAD6],
    [0x01FB00, 0x01FB92],
    [0x01FB94, 0x01FBCA],
    [0x01FBF0, 0x01FBF9],
    [0x020000, 0x02A6DD],
    [0x02A700, 0x02B734],
    [0x02B740, 0x02B81D],
    [0x02B820, 0x02CEA1],
    [0x02CEB0, 0x02EBE0],
    [0x02F800, 0x02FA1D],
    [0x030000, 0x03134A]
  ]
});
testPropertyEscapes(
  /^\p{Grapheme_Base}+$/u,
  matchSymbols,
  "\\p{Grapheme_Base}"
);
testPropertyEscapes(
  /^\p{Gr_Base}+$/u,
  matchSymbols,
  "\\p{Gr_Base}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [
    0x0000AD,
    0x00038B,
    0x00038D,
    0x0003A2,
    0x000530,
    0x0005BF,
    0x000670,
    0x000711,
    0x00083F,
    0x00085F,
    0x0008B5,
    0x00093A,
    0x00093C,
    0x00094D,
    0x000981,
    0x000984,
    0x0009A9,
    0x0009B1,
    0x0009BE,
    0x0009CD,
    0x0009DE,
    0x000A04,
    0x000A29,
    0x000A31,
    0x000A34,
    0x000A37,
    0x000A5D,
    0x000A75,
    0x000A84,
    0x000A8E,
    0x000A92,
    0x000AA9,
    0x000AB1,
    0x000AB4,
    0x000ACA,
    0x000B04,
    0x000B29,
    0x000B31,
    0x000B34,
    0x000B5E,
    0x000B84,
    0x000B91,
    0x000B9B,
    0x000B9D,
    0x000BC0,
    0x000BC9,
    0x000C04,
    0x000C0D,
    0x000C11,
    0x000C29,
    0x000C81,
    0x000C8D,
    0x000C91,
    0x000CA9,
    0x000CB4,
    0x000CBF,
    0x000CC2,
    0x000CC9,
    0x000CDF,
    0x000CF0,
    0x000D0D,
    0x000D11,
    0x000D3E,
    0x000D49,
    0x000D4D,
    0x000D57,
    0x000D84,
    0x000DB2,
    0x000DBC,
    0x000E31,
    0x000E83,
    0x000E85,
    0x000E8B,
    0x000EA4,
    0x000EA6,
    0x000EB1,
    0x000EC5,
    0x000F35,
    0x000F37,
    0x000F39,
    0x000F48,
    0x000FC6,
    0x000FCD,
    0x001082,
    0x00108D,
    0x00109D,
    0x0010C6,
    0x001249,
    0x001257,
    0x001259,
    0x001289,
    0x0012B1,
    0x0012BF,
    0x0012C1,
    0x0012D7,
    0x001311,
    0x00170D,
    0x00176D,
    0x0017C6,
    0x0018A9,
    0x001932,
    0x001A56,
    0x001A62,
    0x001B3C,
    0x001B42,
    0x001BE6,
    0x001BED,
    0x001CED,
    0x001CF4,
    0x001F58,
    0x001F5A,
    0x001F5C,
    0x001F5E,
    0x001FB5,
    0x001FC5,
    0x001FDC,
    0x001FF5,
    0x001FFF,
    0x00208F,
    0x002B96,
    0x002C2F,
    0x002C5F,
    0x002D26,
    0x002DA7,
    0x002DAF,
    0x002DB7,
    0x002DBF,
    0x002DC7,
    0x002DCF,
    0x002DD7,
    0x002E9A,
    0x003040,
    0x003130,
    0x00318F,
    0x00321F,
    0x00A802,
    0x00A806,
    0x00A80B,
    0x00A8FF,
    0x00A9B3,
    0x00A9CE,
    0x00A9E5,
    0x00A9FF,
    0x00AA43,
    0x00AA4C,
    0x00AA7C,
    0x00AAB0,
    0x00AAC1,
    0x00AB27,
    0x00AB2F,
    0x00ABE5,
    0x00ABE8,
    0x00FB1E,
    0x00FB37,
    0x00FB3D,
    0x00FB3F,
    0x00FB42,
    0x00FB45,
    0x00FE53,
    0x00FE67,
    0x00FE75,
    0x00FFE7,
    0x01000C,
    0x010027,
    0x01003B,
    0x01003E,
    0x01018F,
    0x01039E,
    0x010809,
    0x010836,
    0x010856,
    0x0108F3,
    0x010A14,
    0x010A18,
    0x010E7F,
    0x011001,
    0x0110BD,
    0x011173,
    0x0111CF,
    0x0111E0,
    0x011212,
    0x011234,
    0x011287,
    0x011289,
    0x01128E,
    0x01129E,
    0x0112DF,
    0x011304,
    0x011329,
    0x011331,
    0x011334,
    0x01133E,
    0x011340,
    0x011446,
    0x01145C,
    0x01145E,
    0x0114B0,
    0x0114BA,
    0x0114BD,
    0x0115AF,
    0x01163D,
    0x0116AB,
    0x0116AD,
    0x0116B7,
    0x011914,
    0x011917,
    0x011930,
    0x011936,
    0x01193E,
    0x011943,
    0x0119E0,
    0x011C09,
    0x011C3F,
    0x011D07,
    0x011D0A,
    0x011D66,
    0x011D69,
    0x011D95,
    0x011D97,
    0x01246F,
    0x016A5F,
    0x016B5A,
    0x016B62,
    0x01D165,
    0x01D455,
    0x01D49D,
    0x01D4AD,
    0x01D4BA,
    0x01D4BC,
    0x01D4C4,
    0x01D506,
    0x01D515,
    0x01D51D,
    0x01D53A,
    0x01D53F,
    0x01D545,
    0x01D551,
    0x01DA75,
    0x01DA84,
    0x01EE04,
    0x01EE20,
    0x01EE23,
    0x01EE28,
    0x01EE33,
    0x01EE38,
    0x01EE3A,
    0x01EE48,
    0x01EE4A,
    0x01EE4C,
    0x01EE50,
    0x01EE53,
    0x01EE58,
    0x01EE5A,
    0x01EE5C,
    0x01EE5E,
    0x01EE60,
    0x01EE63,
    0x01EE6B,
    0x01EE73,
    0x01EE78,
    0x01EE7D,
    0x01EE7F,
    0x01EE8A,
    0x01EEA4,
    0x01EEAA,
    0x01F0C0,
    0x01F0D0,
    0x01F979,
    0x01F9CC,
    0x01FB93
  ],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00001F],
    [0x00007F, 0x00009F],
    [0x000300, 0x00036F],
    [0x000378, 0x000379],
    [0x000380, 0x000383],
    [0x000483, 0x000489],
    [0x000557, 0x000558],
    [0x00058B, 0x00058C],
    [0x000590, 0x0005BD],
    [0x0005C1, 0x0005C2],
    [0x0005C4, 0x0005C5],
    [0x0005C7, 0x0005CF],
    [0x0005EB, 0x0005EE],
    [0x0005F5, 0x000605],
    [0x000610, 0x00061A],
    [0x00061C, 0x00061D],
    [0x00064B, 0x00065F],
    [0x0006D6, 0x0006DD],
    [0x0006DF, 0x0006E4],
    [0x0006E7, 0x0006E8],
    [0x0006EA, 0x0006ED],
    [0x00070E, 0x00070F],
    [0x000730, 0x00074C],
    [0x0007A6, 0x0007B0],
    [0x0007B2, 0x0007BF],
    [0x0007EB, 0x0007F3],
    [0x0007FB, 0x0007FD],
    [0x000816, 0x000819],
    [0x00081B, 0x000823],
    [0x000825, 0x000827],
    [0x000829, 0x00082F],
    [0x000859, 0x00085D],
    [0x00086B, 0x00089F],
    [0x0008C8, 0x000902],
    [0x000941, 0x000948],
    [0x000951, 0x000957],
    [0x000962, 0x000963],
    [0x00098D, 0x00098E],
    [0x000991, 0x000992],
    [0x0009B3, 0x0009B5],
    [0x0009BA, 0x0009BC],
    [0x0009C1, 0x0009C6],
    [0x0009C9, 0x0009CA],
    [0x0009CF, 0x0009DB],
    [0x0009E2, 0x0009E5],
    [0x0009FE, 0x000A02],
    [0x000A0B, 0x000A0E],
    [0x000A11, 0x000A12],
    [0x000A3A, 0x000A3D],
    [0x000A41, 0x000A58],
    [0x000A5F, 0x000A65],
    [0x000A70, 0x000A71],
    [0x000A77, 0x000A82],
    [0x000ABA, 0x000ABC],
    [0x000AC1, 0x000AC8],
    [0x000ACD, 0x000ACF],
    [0x000AD1, 0x000ADF],
    [0x000AE2, 0x000AE5],
    [0x000AF2, 0x000AF8],
    [0x000AFA, 0x000B01],
    [0x000B0D, 0x000B0E],
    [0x000B11, 0x000B12],
    [0x000B3A, 0x000B3C],
    [0x000B3E, 0x000B3F],
    [0x000B41, 0x000B46],
    [0x000B49, 0x000B4A],
    [0x000B4D, 0x000B5B],
    [0x000B62, 0x000B65],
    [0x000B78, 0x000B82],
    [0x000B8B, 0x000B8D],
    [0x000B96, 0x000B98],
    [0x000BA0, 0x000BA2],
    [0x000BA5, 0x000BA7],
    [0x000BAB, 0x000BAD],
    [0x000BBA, 0x000BBE],
    [0x000BC3, 0x000BC5],
    [0x000BCD, 0x000BCF],
    [0x000BD1, 0x000BE5],
    [0x000BFB, 0x000C00],
    [0x000C3A, 0x000C3C],
    [0x000C3E, 0x000C40],
    [0x000C45, 0x000C57],
    [0x000C5B, 0x000C5F],
    [0x000C62, 0x000C65],
    [0x000C70, 0x000C76],
    [0x000CBA, 0x000CBC],
    [0x000CC5, 0x000CC6],
    [0x000CCC, 0x000CDD],
    [0x000CE2, 0x000CE5],
    [0x000CF3, 0x000D01],
    [0x000D3B, 0x000D3C],
    [0x000D41, 0x000D45],
    [0x000D50, 0x000D53],
    [0x000D62, 0x000D65],
    [0x000D80, 0x000D81],
    [0x000D97, 0x000D99],
    [0x000DBE, 0x000DBF],
    [0x000DC7, 0x000DCF],
    [0x000DD2, 0x000DD7],
    [0x000DDF, 0x000DE5],
    [0x000DF0, 0x000DF1],
    [0x000DF5, 0x000E00],
    [0x000E34, 0x000E3E],
    [0x000E47, 0x000E4E],
    [0x000E5C, 0x000E80],
    [0x000EB4, 0x000EBC],
    [0x000EBE, 0x000EBF],
    [0x000EC7, 0x000ECF],
    [0x000EDA, 0x000EDB],
    [0x000EE0, 0x000EFF],
    [0x000F18, 0x000F19],
    [0x000F6D, 0x000F7E],
    [0x000F80, 0x000F84],
    [0x000F86, 0x000F87],
    [0x000F8D, 0x000FBD],
    [0x000FDB, 0x000FFF],
    [0x00102D, 0x001030],
    [0x001032, 0x001037],
    [0x001039, 0x00103A],
    [0x00103D, 0x00103E],
    [0x001058, 0x001059],
    [0x00105E, 0x001060],
    [0x001071, 0x001074],
    [0x001085, 0x001086],
    [0x0010C8, 0x0010CC],
    [0x0010CE, 0x0010CF],
    [0x00124E, 0x00124F],
    [0x00125E, 0x00125F],
    [0x00128E, 0x00128F],
    [0x0012B6, 0x0012B7],
    [0x0012C6, 0x0012C7],
    [0x001316, 0x001317],
    [0x00135B, 0x00135F],
    [0x00137D, 0x00137F],
    [0x00139A, 0x00139F],
    [0x0013F6, 0x0013F7],
    [0x0013FE, 0x0013FF],
    [0x00169D, 0x00169F],
    [0x0016F9, 0x0016FF],
    [0x001712, 0x00171F],
    [0x001732, 0x001734],
    [0x001737, 0x00173F],
    [0x001752, 0x00175F],
    [0x001771, 0x00177F],
    [0x0017B4, 0x0017B5],
    [0x0017B7, 0x0017BD],
    [0x0017C9, 0x0017D3],
    [0x0017DD, 0x0017DF],
    [0x0017EA, 0x0017EF],
    [0x0017FA, 0x0017FF],
    [0x00180B, 0x00180F],
    [0x00181A, 0x00181F],
    [0x001879, 0x00187F],
    [0x001885, 0x001886],
    [0x0018AB, 0x0018AF],
    [0x0018F6, 0x0018FF],
    [0x00191F, 0x001922],
    [0x001927, 0x001928],
    [0x00192C, 0x00192F],
    [0x001939, 0x00193F],
    [0x001941, 0x001943],
    [0x00196E, 0x00196F],
    [0x001975, 0x00197F],
    [0x0019AC, 0x0019AF],
    [0x0019CA, 0x0019CF],
    [0x0019DB, 0x0019DD],
    [0x001A17, 0x001A18],
    [0x001A1B, 0x001A1D],
    [0x001A58, 0x001A60],
    [0x001A65, 0x001A6C],
    [0x001A73, 0x001A7F],
    [0x001A8A, 0x001A8F],
    [0x001A9A, 0x001A9F],
    [0x001AAE, 0x001B03],
    [0x001B34, 0x001B3A],
    [0x001B4C, 0x001B4F],
    [0x001B6B, 0x001B73],
    [0x001B7D, 0x001B81],
    [0x001BA2, 0x001BA5],
    [0x001BA8, 0x001BA9],
    [0x001BAB, 0x001BAD],
    [0x001BE8, 0x001BE9],
    [0x001BEF, 0x001BF1],
    [0x001BF4, 0x001BFB],
    [0x001C2C, 0x001C33],
    [0x001C36, 0x001C3A],
    [0x001C4A, 0x001C4C],
    [0x001C89, 0x001C8F],
    [0x001CBB, 0x001CBC],
    [0x001CC8, 0x001CD2],
    [0x001CD4, 0x001CE0],
    [0x001CE2, 0x001CE8],
    [0x001CF8, 0x001CF9],
    [0x001CFB, 0x001CFF],
    [0x001DC0, 0x001DFF],
    [0x001F16, 0x001F17],
    [0x001F1E, 0x001F1F],
    [0x001F46, 0x001F47],
    [0x001F4E, 0x001F4F],
    [0x001F7E, 0x001F7F],
    [0x001FD4, 0x001FD5],
    [0x001FF0, 0x001FF1],
    [0x00200B, 0x00200F],
    [0x002028, 0x00202E],
    [0x002060, 0x00206F],
    [0x002072, 0x002073],
    [0x00209D, 0x00209F],
    [0x0020C0, 0x0020FF],
    [0x00218C, 0x00218F],
    [0x002427, 0x00243F],
    [0x00244B, 0x00245F],
    [0x002B74, 0x002B75],
    [0x002CEF, 0x002CF1],
    [0x002CF4, 0x002CF8],
    [0x002D28, 0x002D2C],
    [0x002D2E, 0x002D2F],
    [0x002D68, 0x002D6E],
    [0x002D71, 0x002D7F],
    [0x002D97, 0x002D9F],
    [0x002DDF, 0x002DFF],
    [0x002E53, 0x002E7F],
    [0x002EF4, 0x002EFF],
    [0x002FD6, 0x002FEF],
    [0x002FFC, 0x002FFF],
    [0x00302A, 0x00302F],
    [0x003097, 0x00309A],
    [0x003100, 0x003104],
    [0x0031E4, 0x0031EF],
    [0x009FFD, 0x009FFF],
    [0x00A48D, 0x00A48F],
    [0x00A4C7, 0x00A4CF],
    [0x00A62C, 0x00A63F],
    [0x00A66F, 0x00A672],
    [0x00A674, 0x00A67D],
    [0x00A69E, 0x00A69F],
    [0x00A6F0, 0x00A6F1],
    [0x00A6F8, 0x00A6FF],
    [0x00A7C0, 0x00A7C1],
    [0x00A7CB, 0x00A7F4],
    [0x00A825, 0x00A826],
    [0x00A82C, 0x00A82F],
    [0x00A83A, 0x00A83F],
    [0x00A878, 0x00A87F],
    [0x00A8C4, 0x00A8CD],
    [0x00A8DA, 0x00A8F1],
    [0x00A926, 0x00A92D],
    [0x00A947, 0x00A951],
    [0x00A954, 0x00A95E],
    [0x00A97D, 0x00A982],
    [0x00A9B6, 0x00A9B9],
    [0x00A9BC, 0x00A9BD],
    [0x00A9DA, 0x00A9DD],
    [0x00AA29, 0x00AA2E],
    [0x00AA31, 0x00AA32],
    [0x00AA35, 0x00AA3F],
    [0x00AA4E, 0x00AA4F],
    [0x00AA5A, 0x00AA5B],
    [0x00AAB2, 0x00AAB4],
    [0x00AAB7, 0x00AAB8],
    [0x00AABE, 0x00AABF],
    [0x00AAC3, 0x00AADA],
    [0x00AAEC, 0x00AAED],
    [0x00AAF6, 0x00AB00],
    [0x00AB07, 0x00AB08],
    [0x00AB0F, 0x00AB10],
    [0x00AB17, 0x00AB1F],
    [0x00AB6C, 0x00AB6F],
    [0x00ABED, 0x00ABEF],
    [0x00ABFA, 0x00ABFF],
    [0x00D7A4, 0x00D7AF],
    [0x00D7C7, 0x00D7CA],
    [0x00D7FC, 0x00DBFF],
    [0x00E000, 0x00F8FF],
    [0x00FA6E, 0x00FA6F],
    [0x00FADA, 0x00FAFF],
    [0x00FB07, 0x00FB12],
    [0x00FB18, 0x00FB1C],
    [0x00FBC2, 0x00FBD2],
    [0x00FD40, 0x00FD4F],
    [0x00FD90, 0x00FD91],
    [0x00FDC8, 0x00FDEF],
    [0x00FDFE, 0x00FE0F],
    [0x00FE1A, 0x00FE2F],
    [0x00FE6C, 0x00FE6F],
    [0x00FEFD, 0x00FF00],
    [0x00FF9E, 0x00FF9F],
    [0x00FFBF, 0x00FFC1],
    [0x00FFC8, 0x00FFC9],
    [0x00FFD0, 0x00FFD1],
    [0x00FFD8, 0x00FFD9],
    [0x00FFDD, 0x00FFDF],
    [0x00FFEF, 0x00FFFB],
    [0x00FFFE, 0x00FFFF],
    [0x01004E, 0x01004F],
    [0x01005E, 0x01007F],
    [0x0100FB, 0x0100FF],
    [0x010103, 0x010106],
    [0x010134, 0x010136],
    [0x01019D, 0x01019F],
    [0x0101A1, 0x0101CF],
    [0x0101FD, 0x01027F],
    [0x01029D, 0x01029F],
    [0x0102D1, 0x0102E0],
    [0x0102FC, 0x0102FF],
    [0x010324, 0x01032C],
    [0x01034B, 0x01034F],
    [0x010376, 0x01037F],
    [0x0103C4, 0x0103C7],
    [0x0103D6, 0x0103FF],
    [0x01049E, 0x01049F],
    [0x0104AA, 0x0104AF],
    [0x0104D4, 0x0104D7],
    [0x0104FC, 0x0104FF],
    [0x010528, 0x01052F],
    [0x010564, 0x01056E],
    [0x010570, 0x0105FF],
    [0x010737, 0x01073F],
    [0x010756, 0x01075F],
    [0x010768, 0x0107FF],
    [0x010806, 0x010807],
    [0x010839, 0x01083B],
    [0x01083D, 0x01083E],
    [0x01089F, 0x0108A6],
    [0x0108B0, 0x0108DF],
    [0x0108F6, 0x0108FA],
    [0x01091C, 0x01091E],
    [0x01093A, 0x01093E],
    [0x010940, 0x01097F],
    [0x0109B8, 0x0109BB],
    [0x0109D0, 0x0109D1],
    [0x010A01, 0x010A0F],
    [0x010A36, 0x010A3F],
    [0x010A49, 0x010A4F],
    [0x010A59, 0x010A5F],
    [0x010AA0, 0x010ABF],
    [0x010AE5, 0x010AEA],
    [0x010AF7, 0x010AFF],
    [0x010B36, 0x010B38],
    [0x010B56, 0x010B57],
    [0x010B73, 0x010B77],
    [0x010B92, 0x010B98],
    [0x010B9D, 0x010BA8],
    [0x010BB0, 0x010BFF],
    [0x010C49, 0x010C7F],
    [0x010CB3, 0x010CBF],
    [0x010CF3, 0x010CF9],
    [0x010D24, 0x010D2F],
    [0x010D3A, 0x010E5F],
    [0x010EAA, 0x010EAC],
    [0x010EAE, 0x010EAF],
    [0x010EB2, 0x010EFF],
    [0x010F28, 0x010F2F],
    [0x010F46, 0x010F50],
    [0x010F5A, 0x010FAF],
    [0x010FCC, 0x010FDF],
    [0x010FF7, 0x010FFF],
    [0x011038, 0x011046],
    [0x01104E, 0x011051],
    [0x011070, 0x011081],
    [0x0110B3, 0x0110B6],
    [0x0110B9, 0x0110BA],
    [0x0110C2, 0x0110CF],
    [0x0110E9, 0x0110EF],
    [0x0110FA, 0x011102],
    [0x011127, 0x01112B],
    [0x01112D, 0x011135],
    [0x011148, 0x01114F],
    [0x011177, 0x011181],
    [0x0111B6, 0x0111BE],
    [0x0111C9, 0x0111CC],
    [0x0111F5, 0x0111FF],
    [0x01122F, 0x011231],
    [0x011236, 0x011237],
    [0x01123E, 0x01127F],
    [0x0112AA, 0x0112AF],
    [0x0112E3, 0x0112EF],
    [0x0112FA, 0x011301],
    [0x01130D, 0x01130E],
    [0x011311, 0x011312],
    [0x01133A, 0x01133C],
    [0x011345, 0x011346],
    [0x011349, 0x01134A],
    [0x01134E, 0x01134F],
    [0x011351, 0x01135C],
    [0x011364, 0x0113FF],
    [0x011438, 0x01143F],
    [0x011442, 0x011444],
    [0x011462, 0x01147F],
    [0x0114B3, 0x0114B8],
    [0x0114BF, 0x0114C0],
    [0x0114C2, 0x0114C3],
    [0x0114C8, 0x0114CF],
    [0x0114DA, 0x01157F],
    [0x0115B2, 0x0115B7],
    [0x0115BC, 0x0115BD],
    [0x0115BF, 0x0115C0],
    [0x0115DC, 0x0115FF],
    [0x011633, 0x01163A],
    [0x01163F, 0x011640],
    [0x011645, 0x01164F],
    [0x01165A, 0x01165F],
    [0x01166D, 0x01167F],
    [0x0116B0, 0x0116B5],
    [0x0116B9, 0x0116BF],
    [0x0116CA, 0x0116FF],
    [0x01171B, 0x01171F],
    [0x011722, 0x011725],
    [0x011727, 0x01172F],
    [0x011740, 0x0117FF],
    [0x01182F, 0x011837],
    [0x011839, 0x01183A],
    [0x01183C, 0x01189F],
    [0x0118F3, 0x0118FE],
    [0x011907, 0x011908],
    [0x01190A, 0x01190B],
    [0x011939, 0x01193C],
    [0x011947, 0x01194F],
    [0x01195A, 0x01199F],
    [0x0119A8, 0x0119A9],
    [0x0119D4, 0x0119DB],
    [0x0119E5, 0x0119FF],
    [0x011A01, 0x011A0A],
    [0x011A33, 0x011A38],
    [0x011A3B, 0x011A3E],
    [0x011A47, 0x011A4F],
    [0x011A51, 0x011A56],
    [0x011A59, 0x011A5B],
    [0x011A8A, 0x011A96],
    [0x011A98, 0x011A99],
    [0x011AA3, 0x011ABF],
    [0x011AF9, 0x011BFF],
    [0x011C30, 0x011C3D],
    [0x011C46, 0x011C4F],
    [0x011C6D, 0x011C6F],
    [0x011C90, 0x011CA8],
    [0x011CAA, 0x011CB0],
    [0x011CB2, 0x011CB3],
    [0x011CB5, 0x011CFF],
    [0x011D31, 0x011D45],
    [0x011D47, 0x011D4F],
    [0x011D5A, 0x011D5F],
    [0x011D8F, 0x011D92],
    [0x011D99, 0x011D9F],
    [0x011DAA, 0x011EDF],
    [0x011EF3, 0x011EF4],
    [0x011EF9, 0x011FAF],
    [0x011FB1, 0x011FBF],
    [0x011FF2, 0x011FFE],
    [0x01239A, 0x0123FF],
    [0x012475, 0x01247F],
    [0x012544, 0x012FFF],
    [0x01342F, 0x0143FF],
    [0x014647, 0x0167FF],
    [0x016A39, 0x016A3F],
    [0x016A6A, 0x016A6D],
    [0x016A70, 0x016ACF],
    [0x016AEE, 0x016AF4],
    [0x016AF6, 0x016AFF],
    [0x016B30, 0x016B36],
    [0x016B46, 0x016B4F],
    [0x016B78, 0x016B7C],
    [0x016B90, 0x016E3F],
    [0x016E9B, 0x016EFF],
    [0x016F4B, 0x016F4F],
    [0x016F88, 0x016F92],
    [0x016FA0, 0x016FDF],
    [0x016FE4, 0x016FEF],
    [0x016FF2, 0x016FFF],
    [0x0187F8, 0x0187FF],
    [0x018CD6, 0x018CFF],
    [0x018D09, 0x01AFFF],
    [0x01B11F, 0x01B14F],
    [0x01B153, 0x01B163],
    [0x01B168, 0x01B16F],
    [0x01B2FC, 0x01BBFF],
    [0x01BC6B, 0x01BC6F],
    [0x01BC7D, 0x01BC7F],
    [0x01BC89, 0x01BC8F],
    [0x01BC9A, 0x01BC9B],
    [0x01BC9D, 0x01BC9E],
    [0x01BCA0, 0x01CFFF],
    [0x01D0F6, 0x01D0FF],
    [0x01D127, 0x01D128],
    [0x01D167, 0x01D169],
    [0x01D16E, 0x01D182],
    [0x01D185, 0x01D18B],
    [0x01D1AA, 0x01D1AD],
    [0x01D1E9, 0x01D1FF],
    [0x01D242, 0x01D244],
    [0x01D246, 0x01D2DF],
    [0x01D2F4, 0x01D2FF],
    [0x01D357, 0x01D35F],
    [0x01D379, 0x01D3FF],
    [0x01D4A0, 0x01D4A1],
    [0x01D4A3, 0x01D4A4],
    [0x01D4A7, 0x01D4A8],
    [0x01D50B, 0x01D50C],
    [0x01D547, 0x01D549],
    [0x01D6A6, 0x01D6A7],
    [0x01D7CC, 0x01D7CD],
    [0x01DA00, 0x01DA36],
    [0x01DA3B, 0x01DA6C],
    [0x01DA8C, 0x01E0FF],
    [0x01E12D, 0x01E136],
    [0x01E13E, 0x01E13F],
    [0x01E14A, 0x01E14D],
    [0x01E150, 0x01E2BF],
    [0x01E2EC, 0x01E2EF],
    [0x01E2FA, 0x01E2FE],
    [0x01E300, 0x01E7FF],
    [0x01E8C5, 0x01E8C6],
    [0x01E8D0, 0x01E8FF],
    [0x01E944, 0x01E94A],
    [0x01E94C, 0x01E94F],
    [0x01E95A, 0x01E95D],
    [0x01E960, 0x01EC70],
    [0x01ECB5, 0x01ED00],
    [0x01ED3E, 0x01EDFF],
    [0x01EE25, 0x01EE26],
    [0x01EE3C, 0x01EE41],
    [0x01EE43, 0x01EE46],
    [0x01EE55, 0x01EE56],
    [0x01EE65, 0x01EE66],
    [0x01EE9C, 0x01EEA0],
    [0x01EEBC, 0x01EEEF],
    [0x01EEF2, 0x01EFFF],
    [0x01F02C, 0x01F02F],
    [0x01F094, 0x01F09F],
    [0x01F0AF, 0x01F0B0],
    [0x01F0F6, 0x01F0FF],
    [0x01F1AE, 0x01F1E5],
    [0x01F203, 0x01F20F],
    [0x01F23C, 0x01F23F],
    [0x01F249, 0x01F24F],
    [0x01F252, 0x01F25F],
    [0x01F266, 0x01F2FF],
    [0x01F6D8, 0x01F6DF],
    [0x01F6ED, 0x01F6EF],
    [0x01F6FD, 0x01F6FF],
    [0x01F774, 0x01F77F],
    [0x01F7D9, 0x01F7DF],
    [0x01F7EC, 0x01F7FF],
    [0x01F80C, 0x01F80F],
    [0x01F848, 0x01F84F],
    [0x01F85A, 0x01F85F],
    [0x01F888, 0x01F88F],
    [0x01F8AE, 0x01F8AF],
    [0x01F8B2, 0x01F8FF],
    [0x01FA54, 0x01FA5F],
    [0x01FA6E, 0x01FA6F],
    [0x01FA75, 0x01FA77],
    [0x01FA7B, 0x01FA7F],
    [0x01FA87, 0x01FA8F],
    [0x01FAA9, 0x01FAAF],
    [0x01FAB7, 0x01FABF],
    [0x01FAC3, 0x01FACF],
    [0x01FAD7, 0x01FAFF],
    [0x01FBCB, 0x01FBEF],
    [0x01FBFA, 0x01FFFF],
    [0x02A6DE, 0x02A6FF],
    [0x02B735, 0x02B73F],
    [0x02B81E, 0x02B81F],
    [0x02CEA2, 0x02CEAF],
    [0x02EBE1, 0x02F7FF],
    [0x02FA1E, 0x02FFFF],
    [0x03134B, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Grapheme_Base}+$/u,
  nonMatchSymbols,
  "\\P{Grapheme_Base}"
);
testPropertyEscapes(
  /^\P{Gr_Base}+$/u,
  nonMatchSymbols,
  "\\P{Gr_Base}"
);
