// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Tagalog`
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
	loneCodePoints: [],
	ranges: [
		[0x001700, 0x00170C],
		[0x00170E, 0x001714]
	]
});
assert(
	/^\p{Script=Tagalog}+$/u.test(matchSymbols),
	"`\\p{Script=Tagalog}` matches all proper symbols"
);
assert(
	/^\p{Script=Tglg}+$/u.test(matchSymbols),
	"`\\p{Script=Tglg}` matches all proper symbols"
);
assert(
	/^\p{sc=Tagalog}+$/u.test(matchSymbols),
	"`\\p{sc=Tagalog}` matches all proper symbols"
);
assert(
	/^\p{sc=Tglg}+$/u.test(matchSymbols),
	"`\\p{sc=Tglg}` matches all proper symbols"
);

const nonMatchSymbols = buildString({
	loneCodePoints: [
		0x00170D
	],
	ranges: [
		[0x00DC00, 0x00DFFF],
		[0x000000, 0x0016FF],
		[0x001715, 0x00DBFF],
		[0x00E000, 0x10FFFF]
	]
});
assert(
	/^\P{Script=Tagalog}+$/u.test(nonMatchSymbols),
	"`\\P{Script=Tagalog}` matches all proper symbols"
);
assert(
	/^\P{Script=Tglg}+$/u.test(nonMatchSymbols),
	"`\\P{Script=Tglg}` matches all proper symbols"
);
assert(
	/^\P{sc=Tagalog}+$/u.test(nonMatchSymbols),
	"`\\P{sc=Tagalog}` matches all proper symbols"
);
assert(
	/^\P{sc=Tglg}+$/u.test(nonMatchSymbols),
	"`\\P{sc=Tglg}` matches all proper symbols"
);
