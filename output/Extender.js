// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Extender`
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
		0x0000B7,
		0x000640,
		0x0007FA,
		0x000E46,
		0x000EC6,
		0x00180A,
		0x001843,
		0x001AA7,
		0x001C36,
		0x001C7B,
		0x003005,
		0x00A015,
		0x00A60C,
		0x00A9CF,
		0x00A9E6,
		0x00AA70,
		0x00AADD,
		0x00FF70,
		0x01135D,
		0x016FE0
	],
	ranges: [
		[0x0002D0, 0x0002D1],
		[0x003031, 0x003035],
		[0x00309D, 0x00309E],
		[0x0030FC, 0x0030FE],
		[0x00AAF3, 0x00AAF4],
		[0x0115C6, 0x0115C8],
		[0x016B42, 0x016B43],
		[0x01E944, 0x01E946]
	]
});
assert(
	/^\p{Extender}+$/u.test(matchSymbols),
	"`\\p{Extender}` matches all proper symbols"
);
assert(
	/^\p{Ext}+$/u.test(matchSymbols),
	"`\\p{Ext}` matches all proper symbols"
);

const nonMatchSymbols = buildString({
	loneCodePoints: [],
	ranges: [
		[0x00DC00, 0x00DFFF],
		[0x000000, 0x0000B6],
		[0x0000B8, 0x0002CF],
		[0x0002D2, 0x00063F],
		[0x000641, 0x0007F9],
		[0x0007FB, 0x000E45],
		[0x000E47, 0x000EC5],
		[0x000EC7, 0x001809],
		[0x00180B, 0x001842],
		[0x001844, 0x001AA6],
		[0x001AA8, 0x001C35],
		[0x001C37, 0x001C7A],
		[0x001C7C, 0x003004],
		[0x003006, 0x003030],
		[0x003036, 0x00309C],
		[0x00309F, 0x0030FB],
		[0x0030FF, 0x00A014],
		[0x00A016, 0x00A60B],
		[0x00A60D, 0x00A9CE],
		[0x00A9D0, 0x00A9E5],
		[0x00A9E7, 0x00AA6F],
		[0x00AA71, 0x00AADC],
		[0x00AADE, 0x00AAF2],
		[0x00AAF5, 0x00DBFF],
		[0x00E000, 0x00FF6F],
		[0x00FF71, 0x01135C],
		[0x01135E, 0x0115C5],
		[0x0115C9, 0x016B41],
		[0x016B44, 0x016FDF],
		[0x016FE1, 0x01E943],
		[0x01E947, 0x10FFFF]
	]
});
assert(
	/^\P{Extender}+$/u.test(nonMatchSymbols),
	"`\\P{Extender}` matches all proper symbols"
);
assert(
	/^\P{Ext}+$/u.test(nonMatchSymbols),
	"`\\P{Ext}` matches all proper symbols"
);
