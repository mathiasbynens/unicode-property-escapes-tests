// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Warang_Citi`
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
		0x0118FF
	],
	ranges: [
		[0x0118A0, 0x0118F2]
	]
});
assert(
	/^\p{Script=Warang_Citi}+$/u.test(matchSymbols),
	"`\\p{Script=Warang_Citi}` matches all proper symbols"
);
assert(
	/^\p{Script=Wara}+$/u.test(matchSymbols),
	"`\\p{Script=Wara}` matches all proper symbols"
);
assert(
	/^\p{sc=Warang_Citi}+$/u.test(matchSymbols),
	"`\\p{sc=Warang_Citi}` matches all proper symbols"
);
assert(
	/^\p{sc=Wara}+$/u.test(matchSymbols),
	"`\\p{sc=Wara}` matches all proper symbols"
);

const nonMatchSymbols = buildString({
	loneCodePoints: [],
	ranges: [
		[0x00DC00, 0x00DFFF],
		[0x000000, 0x00DBFF],
		[0x00E000, 0x01189F],
		[0x0118F3, 0x0118FE],
		[0x011900, 0x10FFFF]
	]
});
assert(
	/^\P{Script=Warang_Citi}+$/u.test(nonMatchSymbols),
	"`\\P{Script=Warang_Citi}` matches all proper symbols"
);
assert(
	/^\P{Script=Wara}+$/u.test(nonMatchSymbols),
	"`\\P{Script=Wara}` matches all proper symbols"
);
assert(
	/^\P{sc=Warang_Citi}+$/u.test(nonMatchSymbols),
	"`\\P{sc=Warang_Citi}` matches all proper symbols"
);
assert(
	/^\P{sc=Wara}+$/u.test(nonMatchSymbols),
	"`\\P{sc=Wara}` matches all proper symbols"
);
