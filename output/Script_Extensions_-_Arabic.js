// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Arabic`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v9.0.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
---*/

const buildString = ({ loneCodePoints, ranges }) => {
	const CHUNK_SIZE = 10000;
	let result = String.fromCodePoint(...loneCodePoints);
	for (const [start, end] of ranges) {
		const codePoints = [];
		for (let length = 0, codePoint = start; codePoint <= end; codePoint++) {
			codePoints[length++] = codePoint;
			if (length === CHUNK_SIZE) {
				result += String.fromCodePoint(...codePoints);
				codePoints.length = length = 0;
			}
		}
		result += String.fromCodePoint(...codePoints);
	}
	return result;
};

const matchSymbols = buildString({
	loneCodePoints: [
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
		[0x000600, 0x000604],
		[0x000606, 0x00061B],
		[0x00061E, 0x0006DC],
		[0x0006DE, 0x0006FF],
		[0x000750, 0x00077F],
		[0x0008A0, 0x0008B4],
		[0x0008B6, 0x0008BD],
		[0x0008D4, 0x0008E1],
		[0x0008E3, 0x0008FF],
		[0x00FB50, 0x00FBC1],
		[0x00FBD3, 0x00FD3D],
		[0x00FD50, 0x00FD8F],
		[0x00FD92, 0x00FDC7],
		[0x00FDF0, 0x00FDFD],
		[0x00FE70, 0x00FE74],
		[0x00FE76, 0x00FEFC],
		[0x0102E0, 0x0102FB],
		[0x010E60, 0x010E7E],
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
		[0x01EEF0, 0x01EEF1]
	]
});
assert(
	/^\p{Script_Extensions=Arabic}+$/u.test(matchSymbols),
	"`\\p{Script_Extensions=Arabic}` matches all proper symbols"
);
assert(
	/^\p{Script_Extensions=Arab}+$/u.test(matchSymbols),
	"`\\p{Script_Extensions=Arab}` matches all proper symbols"
);
assert(
	/^\p{scx=Arabic}+$/u.test(matchSymbols),
	"`\\p{scx=Arabic}` matches all proper symbols"
);
assert(
	/^\p{scx=Arab}+$/u.test(matchSymbols),
	"`\\p{scx=Arab}` matches all proper symbols"
);

const nonMatchSymbols = buildString({
	loneCodePoints: [
		0x000605,
		0x0006DD,
		0x0008B5,
		0x0008E2,
		0x00FE75,
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
		0x01EEAA
	],
	ranges: [
		[0x00DC00, 0x00DFFF],
		[0x000000, 0x0005FF],
		[0x00061C, 0x00061D],
		[0x000700, 0x00074F],
		[0x000780, 0x00089F],
		[0x0008BE, 0x0008D3],
		[0x000900, 0x00DBFF],
		[0x00E000, 0x00FB4F],
		[0x00FBC2, 0x00FBD2],
		[0x00FD3E, 0x00FD4F],
		[0x00FD90, 0x00FD91],
		[0x00FDC8, 0x00FDEF],
		[0x00FDFE, 0x00FE6F],
		[0x00FEFD, 0x0102DF],
		[0x0102FC, 0x010E5F],
		[0x010E7F, 0x01EDFF],
		[0x01EE25, 0x01EE26],
		[0x01EE3C, 0x01EE41],
		[0x01EE43, 0x01EE46],
		[0x01EE55, 0x01EE56],
		[0x01EE65, 0x01EE66],
		[0x01EE9C, 0x01EEA0],
		[0x01EEBC, 0x01EEEF],
		[0x01EEF2, 0x10FFFF]
	]
});
assert(
	/^\P{Script_Extensions=Arabic}+$/u.test(nonMatchSymbols),
	"`\\P{Script_Extensions=Arabic}` matches all proper symbols"
);
assert(
	/^\P{Script_Extensions=Arab}+$/u.test(nonMatchSymbols),
	"`\\P{Script_Extensions=Arab}` matches all proper symbols"
);
assert(
	/^\P{scx=Arabic}+$/u.test(nonMatchSymbols),
	"`\\P{scx=Arabic}` matches all proper symbols"
);
assert(
	/^\P{scx=Arab}+$/u.test(nonMatchSymbols),
	"`\\P{scx=Arab}` matches all proper symbols"
);
