// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `General_Category=Other`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v9.0.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [
    0x0000AD,
    0x00038B,
    0x00038D,
    0x0003A2,
    0x000530,
    0x000560,
    0x000588,
    0x000590,
    0x0006DD,
    0x00083F,
    0x0008B5,
    0x0008E2,
    0x000984,
    0x0009A9,
    0x0009B1,
    0x0009DE,
    0x000A04,
    0x000A29,
    0x000A31,
    0x000A34,
    0x000A37,
    0x000A3D,
    0x000A5D,
    0x000A84,
    0x000A8E,
    0x000A92,
    0x000AA9,
    0x000AB1,
    0x000AB4,
    0x000AC6,
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
    0x000BC9,
    0x000C04,
    0x000C0D,
    0x000C11,
    0x000C29,
    0x000C45,
    0x000C49,
    0x000C57,
    0x000C84,
    0x000C8D,
    0x000C91,
    0x000CA9,
    0x000CB4,
    0x000CC5,
    0x000CC9,
    0x000CDF,
    0x000CF0,
    0x000D04,
    0x000D0D,
    0x000D11,
    0x000D45,
    0x000D49,
    0x000D84,
    0x000DB2,
    0x000DBC,
    0x000DD5,
    0x000DD7,
    0x000E83,
    0x000E89,
    0x000E98,
    0x000EA0,
    0x000EA4,
    0x000EA6,
    0x000EAC,
    0x000EBA,
    0x000EC5,
    0x000EC7,
    0x000F48,
    0x000F98,
    0x000FBD,
    0x000FCD,
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
    0x001771,
    0x00191F,
    0x001A5F,
    0x001CF7,
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
    0x0023FF,
    0x002BC9,
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
    0x002DDF,
    0x002E9A,
    0x003040,
    0x00318F,
    0x00321F,
    0x0032FF,
    0x00A7AF,
    0x00A9CE,
    0x00A9FF,
    0x00AB27,
    0x00AB2F,
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
    0x010A04,
    0x010A14,
    0x010A18,
    0x0110BD,
    0x011135,
    0x0111E0,
    0x011212,
    0x011287,
    0x011289,
    0x01128E,
    0x01129E,
    0x011304,
    0x011329,
    0x011331,
    0x011334,
    0x01145A,
    0x01145C,
    0x011C09,
    0x011C37,
    0x011CA8,
    0x01246F,
    0x016A5F,
    0x016B5A,
    0x016B62,
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
    0x01DAA0,
    0x01E007,
    0x01E022,
    0x01E025,
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
    0x01F12F,
    0x01F91F,
    0x01F93F
  ],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00001F],
    [0x00007F, 0x00009F],
    [0x000378, 0x000379],
    [0x000380, 0x000383],
    [0x000557, 0x000558],
    [0x00058B, 0x00058C],
    [0x0005C8, 0x0005CF],
    [0x0005EB, 0x0005EF],
    [0x0005F5, 0x000605],
    [0x00061C, 0x00061D],
    [0x00070E, 0x00070F],
    [0x00074B, 0x00074C],
    [0x0007B2, 0x0007BF],
    [0x0007FB, 0x0007FF],
    [0x00082E, 0x00082F],
    [0x00085C, 0x00085D],
    [0x00085F, 0x00089F],
    [0x0008BE, 0x0008D3],
    [0x00098D, 0x00098E],
    [0x000991, 0x000992],
    [0x0009B3, 0x0009B5],
    [0x0009BA, 0x0009BB],
    [0x0009C5, 0x0009C6],
    [0x0009C9, 0x0009CA],
    [0x0009CF, 0x0009D6],
    [0x0009D8, 0x0009DB],
    [0x0009E4, 0x0009E5],
    [0x0009FC, 0x000A00],
    [0x000A0B, 0x000A0E],
    [0x000A11, 0x000A12],
    [0x000A3A, 0x000A3B],
    [0x000A43, 0x000A46],
    [0x000A49, 0x000A4A],
    [0x000A4E, 0x000A50],
    [0x000A52, 0x000A58],
    [0x000A5F, 0x000A65],
    [0x000A76, 0x000A80],
    [0x000ABA, 0x000ABB],
    [0x000ACE, 0x000ACF],
    [0x000AD1, 0x000ADF],
    [0x000AE4, 0x000AE5],
    [0x000AF2, 0x000AF8],
    [0x000AFA, 0x000B00],
    [0x000B0D, 0x000B0E],
    [0x000B11, 0x000B12],
    [0x000B3A, 0x000B3B],
    [0x000B45, 0x000B46],
    [0x000B49, 0x000B4A],
    [0x000B4E, 0x000B55],
    [0x000B58, 0x000B5B],
    [0x000B64, 0x000B65],
    [0x000B78, 0x000B81],
    [0x000B8B, 0x000B8D],
    [0x000B96, 0x000B98],
    [0x000BA0, 0x000BA2],
    [0x000BA5, 0x000BA7],
    [0x000BAB, 0x000BAD],
    [0x000BBA, 0x000BBD],
    [0x000BC3, 0x000BC5],
    [0x000BCE, 0x000BCF],
    [0x000BD1, 0x000BD6],
    [0x000BD8, 0x000BE5],
    [0x000BFB, 0x000BFF],
    [0x000C3A, 0x000C3C],
    [0x000C4E, 0x000C54],
    [0x000C5B, 0x000C5F],
    [0x000C64, 0x000C65],
    [0x000C70, 0x000C77],
    [0x000CBA, 0x000CBB],
    [0x000CCE, 0x000CD4],
    [0x000CD7, 0x000CDD],
    [0x000CE4, 0x000CE5],
    [0x000CF3, 0x000D00],
    [0x000D3B, 0x000D3C],
    [0x000D50, 0x000D53],
    [0x000D64, 0x000D65],
    [0x000D80, 0x000D81],
    [0x000D97, 0x000D99],
    [0x000DBE, 0x000DBF],
    [0x000DC7, 0x000DC9],
    [0x000DCB, 0x000DCE],
    [0x000DE0, 0x000DE5],
    [0x000DF0, 0x000DF1],
    [0x000DF5, 0x000E00],
    [0x000E3B, 0x000E3E],
    [0x000E5C, 0x000E80],
    [0x000E85, 0x000E86],
    [0x000E8B, 0x000E8C],
    [0x000E8E, 0x000E93],
    [0x000EA8, 0x000EA9],
    [0x000EBE, 0x000EBF],
    [0x000ECE, 0x000ECF],
    [0x000EDA, 0x000EDB],
    [0x000EE0, 0x000EFF],
    [0x000F6D, 0x000F70],
    [0x000FDB, 0x000FFF],
    [0x0010C8, 0x0010CC],
    [0x0010CE, 0x0010CF],
    [0x00124E, 0x00124F],
    [0x00125E, 0x00125F],
    [0x00128E, 0x00128F],
    [0x0012B6, 0x0012B7],
    [0x0012C6, 0x0012C7],
    [0x001316, 0x001317],
    [0x00135B, 0x00135C],
    [0x00137D, 0x00137F],
    [0x00139A, 0x00139F],
    [0x0013F6, 0x0013F7],
    [0x0013FE, 0x0013FF],
    [0x00169D, 0x00169F],
    [0x0016F9, 0x0016FF],
    [0x001715, 0x00171F],
    [0x001737, 0x00173F],
    [0x001754, 0x00175F],
    [0x001774, 0x00177F],
    [0x0017DE, 0x0017DF],
    [0x0017EA, 0x0017EF],
    [0x0017FA, 0x0017FF],
    [0x00180E, 0x00180F],
    [0x00181A, 0x00181F],
    [0x001878, 0x00187F],
    [0x0018AB, 0x0018AF],
    [0x0018F6, 0x0018FF],
    [0x00192C, 0x00192F],
    [0x00193C, 0x00193F],
    [0x001941, 0x001943],
    [0x00196E, 0x00196F],
    [0x001975, 0x00197F],
    [0x0019AC, 0x0019AF],
    [0x0019CA, 0x0019CF],
    [0x0019DB, 0x0019DD],
    [0x001A1C, 0x001A1D],
    [0x001A7D, 0x001A7E],
    [0x001A8A, 0x001A8F],
    [0x001A9A, 0x001A9F],
    [0x001AAE, 0x001AAF],
    [0x001ABF, 0x001AFF],
    [0x001B4C, 0x001B4F],
    [0x001B7D, 0x001B7F],
    [0x001BF4, 0x001BFB],
    [0x001C38, 0x001C3A],
    [0x001C4A, 0x001C4C],
    [0x001C89, 0x001CBF],
    [0x001CC8, 0x001CCF],
    [0x001CFA, 0x001CFF],
    [0x001DF6, 0x001DFA],
    [0x001F16, 0x001F17],
    [0x001F1E, 0x001F1F],
    [0x001F46, 0x001F47],
    [0x001F4E, 0x001F4F],
    [0x001F7E, 0x001F7F],
    [0x001FD4, 0x001FD5],
    [0x001FF0, 0x001FF1],
    [0x00200B, 0x00200F],
    [0x00202A, 0x00202E],
    [0x002060, 0x00206F],
    [0x002072, 0x002073],
    [0x00209D, 0x00209F],
    [0x0020BF, 0x0020CF],
    [0x0020F1, 0x0020FF],
    [0x00218C, 0x00218F],
    [0x002427, 0x00243F],
    [0x00244B, 0x00245F],
    [0x002B74, 0x002B75],
    [0x002B96, 0x002B97],
    [0x002BBA, 0x002BBC],
    [0x002BD2, 0x002BEB],
    [0x002BF0, 0x002BFF],
    [0x002CF4, 0x002CF8],
    [0x002D28, 0x002D2C],
    [0x002D2E, 0x002D2F],
    [0x002D68, 0x002D6E],
    [0x002D71, 0x002D7E],
    [0x002D97, 0x002D9F],
    [0x002E45, 0x002E7F],
    [0x002EF4, 0x002EFF],
    [0x002FD6, 0x002FEF],
    [0x002FFC, 0x002FFF],
    [0x003097, 0x003098],
    [0x003100, 0x003104],
    [0x00312E, 0x003130],
    [0x0031BB, 0x0031BF],
    [0x0031E4, 0x0031EF],
    [0x004DB6, 0x004DBF],
    [0x009FD6, 0x009FFF],
    [0x00A48D, 0x00A48F],
    [0x00A4C7, 0x00A4CF],
    [0x00A62C, 0x00A63F],
    [0x00A6F8, 0x00A6FF],
    [0x00A7B8, 0x00A7F6],
    [0x00A82C, 0x00A82F],
    [0x00A83A, 0x00A83F],
    [0x00A878, 0x00A87F],
    [0x00A8C6, 0x00A8CD],
    [0x00A8DA, 0x00A8DF],
    [0x00A8FE, 0x00A8FF],
    [0x00A954, 0x00A95E],
    [0x00A97D, 0x00A97F],
    [0x00A9DA, 0x00A9DD],
    [0x00AA37, 0x00AA3F],
    [0x00AA4E, 0x00AA4F],
    [0x00AA5A, 0x00AA5B],
    [0x00AAC3, 0x00AADA],
    [0x00AAF7, 0x00AB00],
    [0x00AB07, 0x00AB08],
    [0x00AB0F, 0x00AB10],
    [0x00AB17, 0x00AB1F],
    [0x00AB66, 0x00AB6F],
    [0x00ABEE, 0x00ABEF],
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
    [0x00FDFE, 0x00FDFF],
    [0x00FE1A, 0x00FE1F],
    [0x00FE6C, 0x00FE6F],
    [0x00FEFD, 0x00FF00],
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
    [0x01019C, 0x01019F],
    [0x0101A1, 0x0101CF],
    [0x0101FE, 0x01027F],
    [0x01029D, 0x01029F],
    [0x0102D1, 0x0102DF],
    [0x0102FC, 0x0102FF],
    [0x010324, 0x01032F],
    [0x01034B, 0x01034F],
    [0x01037B, 0x01037F],
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
    [0x010A07, 0x010A0B],
    [0x010A34, 0x010A37],
    [0x010A3B, 0x010A3E],
    [0x010A48, 0x010A4F],
    [0x010A59, 0x010A5F],
    [0x010AA0, 0x010ABF],
    [0x010AE7, 0x010AEA],
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
    [0x010D00, 0x010E5F],
    [0x010E7F, 0x010FFF],
    [0x01104E, 0x011051],
    [0x011070, 0x01107E],
    [0x0110C2, 0x0110CF],
    [0x0110E9, 0x0110EF],
    [0x0110FA, 0x0110FF],
    [0x011144, 0x01114F],
    [0x011177, 0x01117F],
    [0x0111CE, 0x0111CF],
    [0x0111F5, 0x0111FF],
    [0x01123F, 0x01127F],
    [0x0112AA, 0x0112AF],
    [0x0112EB, 0x0112EF],
    [0x0112FA, 0x0112FF],
    [0x01130D, 0x01130E],
    [0x011311, 0x011312],
    [0x01133A, 0x01133B],
    [0x011345, 0x011346],
    [0x011349, 0x01134A],
    [0x01134E, 0x01134F],
    [0x011351, 0x011356],
    [0x011358, 0x01135C],
    [0x011364, 0x011365],
    [0x01136D, 0x01136F],
    [0x011375, 0x0113FF],
    [0x01145E, 0x01147F],
    [0x0114C8, 0x0114CF],
    [0x0114DA, 0x01157F],
    [0x0115B6, 0x0115B7],
    [0x0115DE, 0x0115FF],
    [0x011645, 0x01164F],
    [0x01165A, 0x01165F],
    [0x01166D, 0x01167F],
    [0x0116B8, 0x0116BF],
    [0x0116CA, 0x0116FF],
    [0x01171A, 0x01171C],
    [0x01172C, 0x01172F],
    [0x011740, 0x01189F],
    [0x0118F3, 0x0118FE],
    [0x011900, 0x011ABF],
    [0x011AF9, 0x011BFF],
    [0x011C46, 0x011C4F],
    [0x011C6D, 0x011C6F],
    [0x011C90, 0x011C91],
    [0x011CB7, 0x011FFF],
    [0x01239A, 0x0123FF],
    [0x012475, 0x01247F],
    [0x012544, 0x012FFF],
    [0x01342F, 0x0143FF],
    [0x014647, 0x0167FF],
    [0x016A39, 0x016A3F],
    [0x016A6A, 0x016A6D],
    [0x016A70, 0x016ACF],
    [0x016AEE, 0x016AEF],
    [0x016AF6, 0x016AFF],
    [0x016B46, 0x016B4F],
    [0x016B78, 0x016B7C],
    [0x016B90, 0x016EFF],
    [0x016F45, 0x016F4F],
    [0x016F7F, 0x016F8E],
    [0x016FA0, 0x016FDF],
    [0x016FE1, 0x016FFF],
    [0x0187ED, 0x0187FF],
    [0x018AF3, 0x01AFFF],
    [0x01B002, 0x01BBFF],
    [0x01BC6B, 0x01BC6F],
    [0x01BC7D, 0x01BC7F],
    [0x01BC89, 0x01BC8F],
    [0x01BC9A, 0x01BC9B],
    [0x01BCA0, 0x01CFFF],
    [0x01D0F6, 0x01D0FF],
    [0x01D127, 0x01D128],
    [0x01D173, 0x01D17A],
    [0x01D1E9, 0x01D1FF],
    [0x01D246, 0x01D2FF],
    [0x01D357, 0x01D35F],
    [0x01D372, 0x01D3FF],
    [0x01D4A0, 0x01D4A1],
    [0x01D4A3, 0x01D4A4],
    [0x01D4A7, 0x01D4A8],
    [0x01D50B, 0x01D50C],
    [0x01D547, 0x01D549],
    [0x01D6A6, 0x01D6A7],
    [0x01D7CC, 0x01D7CD],
    [0x01DA8C, 0x01DA9A],
    [0x01DAB0, 0x01DFFF],
    [0x01E019, 0x01E01A],
    [0x01E02B, 0x01E7FF],
    [0x01E8C5, 0x01E8C6],
    [0x01E8D7, 0x01E8FF],
    [0x01E94B, 0x01E94F],
    [0x01E95A, 0x01E95D],
    [0x01E960, 0x01EDFF],
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
    [0x01F10D, 0x01F10F],
    [0x01F16C, 0x01F16F],
    [0x01F1AD, 0x01F1E5],
    [0x01F203, 0x01F20F],
    [0x01F23C, 0x01F23F],
    [0x01F249, 0x01F24F],
    [0x01F252, 0x01F2FF],
    [0x01F6D3, 0x01F6DF],
    [0x01F6ED, 0x01F6EF],
    [0x01F6F7, 0x01F6FF],
    [0x01F774, 0x01F77F],
    [0x01F7D5, 0x01F7FF],
    [0x01F80C, 0x01F80F],
    [0x01F848, 0x01F84F],
    [0x01F85A, 0x01F85F],
    [0x01F888, 0x01F88F],
    [0x01F8AE, 0x01F90F],
    [0x01F928, 0x01F92F],
    [0x01F931, 0x01F932],
    [0x01F94C, 0x01F94F],
    [0x01F95F, 0x01F97F],
    [0x01F992, 0x01F9BF],
    [0x01F9C1, 0x01FFFF],
    [0x02A6D7, 0x02A6FF],
    [0x02B735, 0x02B73F],
    [0x02B81E, 0x02B81F],
    [0x02CEA2, 0x02F7FF],
    [0x02FA1E, 0x0E00FF],
    [0x0E01F0, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\p{General_Category=Other}+$/u,
  matchSymbols,
  "\\p{General_Category=Other}"
);
testPropertyEscapes(
  /^\p{General_Category=C}+$/u,
  matchSymbols,
  "\\p{General_Category=C}"
);
testPropertyEscapes(
  /^\p{gc=Other}+$/u,
  matchSymbols,
  "\\p{gc=Other}"
);
testPropertyEscapes(
  /^\p{gc=C}+$/u,
  matchSymbols,
  "\\p{gc=C}"
);
testPropertyEscapes(
  /^\p{Other}+$/u,
  matchSymbols,
  "\\p{Other}"
);
testPropertyEscapes(
  /^\p{C}+$/u,
  matchSymbols,
  "\\p{C}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [
    0x00038C,
    0x00085E,
    0x0009B2,
    0x0009D7,
    0x000A3C,
    0x000A51,
    0x000A5E,
    0x000AD0,
    0x000AF9,
    0x000B9C,
    0x000BD0,
    0x000BD7,
    0x000CDE,
    0x000DBD,
    0x000DCA,
    0x000DD6,
    0x000E84,
    0x000E8A,
    0x000E8D,
    0x000EA5,
    0x000EA7,
    0x000EC6,
    0x0010C7,
    0x0010CD,
    0x001258,
    0x0012C0,
    0x001940,
    0x001F59,
    0x001F5B,
    0x001F5D,
    0x002D27,
    0x002D2D,
    0x00FB3E,
    0x0101A0,
    0x01056F,
    0x010808,
    0x01083C,
    0x01093F,
    0x011288,
    0x011350,
    0x011357,
    0x01145B,
    0x01145D,
    0x0118FF,
    0x016FE0,
    0x01D4A2,
    0x01D4BB,
    0x01D546,
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
    0x01EE7E,
    0x01F930,
    0x01F9C0
  ],
  ranges: [
    [0x000020, 0x00007E],
    [0x0000A0, 0x0000AC],
    [0x0000AE, 0x000377],
    [0x00037A, 0x00037F],
    [0x000384, 0x00038A],
    [0x00038E, 0x0003A1],
    [0x0003A3, 0x00052F],
    [0x000531, 0x000556],
    [0x000559, 0x00055F],
    [0x000561, 0x000587],
    [0x000589, 0x00058A],
    [0x00058D, 0x00058F],
    [0x000591, 0x0005C7],
    [0x0005D0, 0x0005EA],
    [0x0005F0, 0x0005F4],
    [0x000606, 0x00061B],
    [0x00061E, 0x0006DC],
    [0x0006DE, 0x00070D],
    [0x000710, 0x00074A],
    [0x00074D, 0x0007B1],
    [0x0007C0, 0x0007FA],
    [0x000800, 0x00082D],
    [0x000830, 0x00083E],
    [0x000840, 0x00085B],
    [0x0008A0, 0x0008B4],
    [0x0008B6, 0x0008BD],
    [0x0008D4, 0x0008E1],
    [0x0008E3, 0x000983],
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
    [0x0009E6, 0x0009FB],
    [0x000A01, 0x000A03],
    [0x000A05, 0x000A0A],
    [0x000A0F, 0x000A10],
    [0x000A13, 0x000A28],
    [0x000A2A, 0x000A30],
    [0x000A32, 0x000A33],
    [0x000A35, 0x000A36],
    [0x000A38, 0x000A39],
    [0x000A3E, 0x000A42],
    [0x000A47, 0x000A48],
    [0x000A4B, 0x000A4D],
    [0x000A59, 0x000A5C],
    [0x000A66, 0x000A75],
    [0x000A81, 0x000A83],
    [0x000A85, 0x000A8D],
    [0x000A8F, 0x000A91],
    [0x000A93, 0x000AA8],
    [0x000AAA, 0x000AB0],
    [0x000AB2, 0x000AB3],
    [0x000AB5, 0x000AB9],
    [0x000ABC, 0x000AC5],
    [0x000AC7, 0x000AC9],
    [0x000ACB, 0x000ACD],
    [0x000AE0, 0x000AE3],
    [0x000AE6, 0x000AF1],
    [0x000B01, 0x000B03],
    [0x000B05, 0x000B0C],
    [0x000B0F, 0x000B10],
    [0x000B13, 0x000B28],
    [0x000B2A, 0x000B30],
    [0x000B32, 0x000B33],
    [0x000B35, 0x000B39],
    [0x000B3C, 0x000B44],
    [0x000B47, 0x000B48],
    [0x000B4B, 0x000B4D],
    [0x000B56, 0x000B57],
    [0x000B5C, 0x000B5D],
    [0x000B5F, 0x000B63],
    [0x000B66, 0x000B77],
    [0x000B82, 0x000B83],
    [0x000B85, 0x000B8A],
    [0x000B8E, 0x000B90],
    [0x000B92, 0x000B95],
    [0x000B99, 0x000B9A],
    [0x000B9E, 0x000B9F],
    [0x000BA3, 0x000BA4],
    [0x000BA8, 0x000BAA],
    [0x000BAE, 0x000BB9],
    [0x000BBE, 0x000BC2],
    [0x000BC6, 0x000BC8],
    [0x000BCA, 0x000BCD],
    [0x000BE6, 0x000BFA],
    [0x000C00, 0x000C03],
    [0x000C05, 0x000C0C],
    [0x000C0E, 0x000C10],
    [0x000C12, 0x000C28],
    [0x000C2A, 0x000C39],
    [0x000C3D, 0x000C44],
    [0x000C46, 0x000C48],
    [0x000C4A, 0x000C4D],
    [0x000C55, 0x000C56],
    [0x000C58, 0x000C5A],
    [0x000C60, 0x000C63],
    [0x000C66, 0x000C6F],
    [0x000C78, 0x000C83],
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
    [0x000CF1, 0x000CF2],
    [0x000D01, 0x000D03],
    [0x000D05, 0x000D0C],
    [0x000D0E, 0x000D10],
    [0x000D12, 0x000D3A],
    [0x000D3D, 0x000D44],
    [0x000D46, 0x000D48],
    [0x000D4A, 0x000D4F],
    [0x000D54, 0x000D63],
    [0x000D66, 0x000D7F],
    [0x000D82, 0x000D83],
    [0x000D85, 0x000D96],
    [0x000D9A, 0x000DB1],
    [0x000DB3, 0x000DBB],
    [0x000DC0, 0x000DC6],
    [0x000DCF, 0x000DD4],
    [0x000DD8, 0x000DDF],
    [0x000DE6, 0x000DEF],
    [0x000DF2, 0x000DF4],
    [0x000E01, 0x000E3A],
    [0x000E3F, 0x000E5B],
    [0x000E81, 0x000E82],
    [0x000E87, 0x000E88],
    [0x000E94, 0x000E97],
    [0x000E99, 0x000E9F],
    [0x000EA1, 0x000EA3],
    [0x000EAA, 0x000EAB],
    [0x000EAD, 0x000EB9],
    [0x000EBB, 0x000EBD],
    [0x000EC0, 0x000EC4],
    [0x000EC8, 0x000ECD],
    [0x000ED0, 0x000ED9],
    [0x000EDC, 0x000EDF],
    [0x000F00, 0x000F47],
    [0x000F49, 0x000F6C],
    [0x000F71, 0x000F97],
    [0x000F99, 0x000FBC],
    [0x000FBE, 0x000FCC],
    [0x000FCE, 0x000FDA],
    [0x001000, 0x0010C5],
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
    [0x00135D, 0x00137C],
    [0x001380, 0x001399],
    [0x0013A0, 0x0013F5],
    [0x0013F8, 0x0013FD],
    [0x001400, 0x00169C],
    [0x0016A0, 0x0016F8],
    [0x001700, 0x00170C],
    [0x00170E, 0x001714],
    [0x001720, 0x001736],
    [0x001740, 0x001753],
    [0x001760, 0x00176C],
    [0x00176E, 0x001770],
    [0x001772, 0x001773],
    [0x001780, 0x0017DD],
    [0x0017E0, 0x0017E9],
    [0x0017F0, 0x0017F9],
    [0x001800, 0x00180D],
    [0x001810, 0x001819],
    [0x001820, 0x001877],
    [0x001880, 0x0018AA],
    [0x0018B0, 0x0018F5],
    [0x001900, 0x00191E],
    [0x001920, 0x00192B],
    [0x001930, 0x00193B],
    [0x001944, 0x00196D],
    [0x001970, 0x001974],
    [0x001980, 0x0019AB],
    [0x0019B0, 0x0019C9],
    [0x0019D0, 0x0019DA],
    [0x0019DE, 0x001A1B],
    [0x001A1E, 0x001A5E],
    [0x001A60, 0x001A7C],
    [0x001A7F, 0x001A89],
    [0x001A90, 0x001A99],
    [0x001AA0, 0x001AAD],
    [0x001AB0, 0x001ABE],
    [0x001B00, 0x001B4B],
    [0x001B50, 0x001B7C],
    [0x001B80, 0x001BF3],
    [0x001BFC, 0x001C37],
    [0x001C3B, 0x001C49],
    [0x001C4D, 0x001C88],
    [0x001CC0, 0x001CC7],
    [0x001CD0, 0x001CF6],
    [0x001CF8, 0x001CF9],
    [0x001D00, 0x001DF5],
    [0x001DFB, 0x001F15],
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
    [0x002010, 0x002029],
    [0x00202F, 0x00205F],
    [0x002070, 0x002071],
    [0x002074, 0x00208E],
    [0x002090, 0x00209C],
    [0x0020A0, 0x0020BE],
    [0x0020D0, 0x0020F0],
    [0x002100, 0x00218B],
    [0x002190, 0x0023FE],
    [0x002400, 0x002426],
    [0x002440, 0x00244A],
    [0x002460, 0x002B73],
    [0x002B76, 0x002B95],
    [0x002B98, 0x002BB9],
    [0x002BBD, 0x002BC8],
    [0x002BCA, 0x002BD1],
    [0x002BEC, 0x002BEF],
    [0x002C00, 0x002C2E],
    [0x002C30, 0x002C5E],
    [0x002C60, 0x002CF3],
    [0x002CF9, 0x002D25],
    [0x002D30, 0x002D67],
    [0x002D6F, 0x002D70],
    [0x002D7F, 0x002D96],
    [0x002DA0, 0x002DA6],
    [0x002DA8, 0x002DAE],
    [0x002DB0, 0x002DB6],
    [0x002DB8, 0x002DBE],
    [0x002DC0, 0x002DC6],
    [0x002DC8, 0x002DCE],
    [0x002DD0, 0x002DD6],
    [0x002DD8, 0x002DDE],
    [0x002DE0, 0x002E44],
    [0x002E80, 0x002E99],
    [0x002E9B, 0x002EF3],
    [0x002F00, 0x002FD5],
    [0x002FF0, 0x002FFB],
    [0x003000, 0x00303F],
    [0x003041, 0x003096],
    [0x003099, 0x0030FF],
    [0x003105, 0x00312D],
    [0x003131, 0x00318E],
    [0x003190, 0x0031BA],
    [0x0031C0, 0x0031E3],
    [0x0031F0, 0x00321E],
    [0x003220, 0x0032FE],
    [0x003300, 0x004DB5],
    [0x004DC0, 0x009FD5],
    [0x00A000, 0x00A48C],
    [0x00A490, 0x00A4C6],
    [0x00A4D0, 0x00A62B],
    [0x00A640, 0x00A6F7],
    [0x00A700, 0x00A7AE],
    [0x00A7B0, 0x00A7B7],
    [0x00A7F7, 0x00A82B],
    [0x00A830, 0x00A839],
    [0x00A840, 0x00A877],
    [0x00A880, 0x00A8C5],
    [0x00A8CE, 0x00A8D9],
    [0x00A8E0, 0x00A8FD],
    [0x00A900, 0x00A953],
    [0x00A95F, 0x00A97C],
    [0x00A980, 0x00A9CD],
    [0x00A9CF, 0x00A9D9],
    [0x00A9DE, 0x00A9FE],
    [0x00AA00, 0x00AA36],
    [0x00AA40, 0x00AA4D],
    [0x00AA50, 0x00AA59],
    [0x00AA5C, 0x00AAC2],
    [0x00AADB, 0x00AAF6],
    [0x00AB01, 0x00AB06],
    [0x00AB09, 0x00AB0E],
    [0x00AB11, 0x00AB16],
    [0x00AB20, 0x00AB26],
    [0x00AB28, 0x00AB2E],
    [0x00AB30, 0x00AB65],
    [0x00AB70, 0x00ABED],
    [0x00ABF0, 0x00ABF9],
    [0x00AC00, 0x00D7A3],
    [0x00D7B0, 0x00D7C6],
    [0x00D7CB, 0x00D7FB],
    [0x00F900, 0x00FA6D],
    [0x00FA70, 0x00FAD9],
    [0x00FB00, 0x00FB06],
    [0x00FB13, 0x00FB17],
    [0x00FB1D, 0x00FB36],
    [0x00FB38, 0x00FB3C],
    [0x00FB40, 0x00FB41],
    [0x00FB43, 0x00FB44],
    [0x00FB46, 0x00FBC1],
    [0x00FBD3, 0x00FD3F],
    [0x00FD50, 0x00FD8F],
    [0x00FD92, 0x00FDC7],
    [0x00FDF0, 0x00FDFD],
    [0x00FE00, 0x00FE19],
    [0x00FE20, 0x00FE52],
    [0x00FE54, 0x00FE66],
    [0x00FE68, 0x00FE6B],
    [0x00FE70, 0x00FE74],
    [0x00FE76, 0x00FEFC],
    [0x00FF01, 0x00FFBE],
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
    [0x010190, 0x01019B],
    [0x0101D0, 0x0101FD],
    [0x010280, 0x01029C],
    [0x0102A0, 0x0102D0],
    [0x0102E0, 0x0102FB],
    [0x010300, 0x010323],
    [0x010330, 0x01034A],
    [0x010350, 0x01037A],
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
    [0x0109D2, 0x010A03],
    [0x010A05, 0x010A06],
    [0x010A0C, 0x010A13],
    [0x010A15, 0x010A17],
    [0x010A19, 0x010A33],
    [0x010A38, 0x010A3A],
    [0x010A3F, 0x010A47],
    [0x010A50, 0x010A58],
    [0x010A60, 0x010A9F],
    [0x010AC0, 0x010AE6],
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
    [0x010CFA, 0x010CFF],
    [0x010E60, 0x010E7E],
    [0x011000, 0x01104D],
    [0x011052, 0x01106F],
    [0x01107F, 0x0110BC],
    [0x0110BE, 0x0110C1],
    [0x0110D0, 0x0110E8],
    [0x0110F0, 0x0110F9],
    [0x011100, 0x011134],
    [0x011136, 0x011143],
    [0x011150, 0x011176],
    [0x011180, 0x0111CD],
    [0x0111D0, 0x0111DF],
    [0x0111E1, 0x0111F4],
    [0x011200, 0x011211],
    [0x011213, 0x01123E],
    [0x011280, 0x011286],
    [0x01128A, 0x01128D],
    [0x01128F, 0x01129D],
    [0x01129F, 0x0112A9],
    [0x0112B0, 0x0112EA],
    [0x0112F0, 0x0112F9],
    [0x011300, 0x011303],
    [0x011305, 0x01130C],
    [0x01130F, 0x011310],
    [0x011313, 0x011328],
    [0x01132A, 0x011330],
    [0x011332, 0x011333],
    [0x011335, 0x011339],
    [0x01133C, 0x011344],
    [0x011347, 0x011348],
    [0x01134B, 0x01134D],
    [0x01135D, 0x011363],
    [0x011366, 0x01136C],
    [0x011370, 0x011374],
    [0x011400, 0x011459],
    [0x011480, 0x0114C7],
    [0x0114D0, 0x0114D9],
    [0x011580, 0x0115B5],
    [0x0115B8, 0x0115DD],
    [0x011600, 0x011644],
    [0x011650, 0x011659],
    [0x011660, 0x01166C],
    [0x011680, 0x0116B7],
    [0x0116C0, 0x0116C9],
    [0x011700, 0x011719],
    [0x01171D, 0x01172B],
    [0x011730, 0x01173F],
    [0x0118A0, 0x0118F2],
    [0x011AC0, 0x011AF8],
    [0x011C00, 0x011C08],
    [0x011C0A, 0x011C36],
    [0x011C38, 0x011C45],
    [0x011C50, 0x011C6C],
    [0x011C70, 0x011C8F],
    [0x011C92, 0x011CA7],
    [0x011CA9, 0x011CB6],
    [0x012000, 0x012399],
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
    [0x016AF0, 0x016AF5],
    [0x016B00, 0x016B45],
    [0x016B50, 0x016B59],
    [0x016B5B, 0x016B61],
    [0x016B63, 0x016B77],
    [0x016B7D, 0x016B8F],
    [0x016F00, 0x016F44],
    [0x016F50, 0x016F7E],
    [0x016F8F, 0x016F9F],
    [0x017000, 0x0187EC],
    [0x018800, 0x018AF2],
    [0x01B000, 0x01B001],
    [0x01BC00, 0x01BC6A],
    [0x01BC70, 0x01BC7C],
    [0x01BC80, 0x01BC88],
    [0x01BC90, 0x01BC99],
    [0x01BC9C, 0x01BC9F],
    [0x01D000, 0x01D0F5],
    [0x01D100, 0x01D126],
    [0x01D129, 0x01D172],
    [0x01D17B, 0x01D1E8],
    [0x01D200, 0x01D245],
    [0x01D300, 0x01D356],
    [0x01D360, 0x01D371],
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
    [0x01D7CE, 0x01DA8B],
    [0x01DA9B, 0x01DA9F],
    [0x01DAA1, 0x01DAAF],
    [0x01E000, 0x01E006],
    [0x01E008, 0x01E018],
    [0x01E01B, 0x01E021],
    [0x01E023, 0x01E024],
    [0x01E026, 0x01E02A],
    [0x01E800, 0x01E8C4],
    [0x01E8C7, 0x01E8D6],
    [0x01E900, 0x01E94A],
    [0x01E950, 0x01E959],
    [0x01E95E, 0x01E95F],
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
    [0x01F100, 0x01F10C],
    [0x01F110, 0x01F12E],
    [0x01F130, 0x01F16B],
    [0x01F170, 0x01F1AC],
    [0x01F1E6, 0x01F202],
    [0x01F210, 0x01F23B],
    [0x01F240, 0x01F248],
    [0x01F250, 0x01F251],
    [0x01F300, 0x01F6D2],
    [0x01F6E0, 0x01F6EC],
    [0x01F6F0, 0x01F6F6],
    [0x01F700, 0x01F773],
    [0x01F780, 0x01F7D4],
    [0x01F800, 0x01F80B],
    [0x01F810, 0x01F847],
    [0x01F850, 0x01F859],
    [0x01F860, 0x01F887],
    [0x01F890, 0x01F8AD],
    [0x01F910, 0x01F91E],
    [0x01F920, 0x01F927],
    [0x01F933, 0x01F93E],
    [0x01F940, 0x01F94B],
    [0x01F950, 0x01F95E],
    [0x01F980, 0x01F991],
    [0x020000, 0x02A6D6],
    [0x02A700, 0x02B734],
    [0x02B740, 0x02B81D],
    [0x02B820, 0x02CEA1],
    [0x02F800, 0x02FA1D],
    [0x0E0100, 0x0E01EF]
  ]
});
testPropertyEscapes(
  /^\P{General_Category=Other}+$/u,
  nonMatchSymbols,
  "\\P{General_Category=Other}"
);
testPropertyEscapes(
  /^\P{General_Category=C}+$/u,
  nonMatchSymbols,
  "\\P{General_Category=C}"
);
testPropertyEscapes(
  /^\P{gc=Other}+$/u,
  nonMatchSymbols,
  "\\P{gc=Other}"
);
testPropertyEscapes(
  /^\P{gc=C}+$/u,
  nonMatchSymbols,
  "\\P{gc=C}"
);
testPropertyEscapes(
  /^\P{Other}+$/u,
  nonMatchSymbols,
  "\\P{Other}"
);
testPropertyEscapes(
  /^\P{C}+$/u,
  nonMatchSymbols,
  "\\P{C}"
);
