// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Vai`
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
		[0x00A500, 0x00A62B]
	]
});
assert(
	/^\p{Script=Vai}+$/u.test(matchSymbols),
	"`\\p{Script=Vai}` matches all proper symbols"
);
assert(
	/^\p{Script=Vaii}+$/u.test(matchSymbols),
	"`\\p{Script=Vaii}` matches all proper symbols"
);
assert(
	/^\p{sc=Vai}+$/u.test(matchSymbols),
	"`\\p{sc=Vai}` matches all proper symbols"
);
assert(
	/^\p{sc=Vaii}+$/u.test(matchSymbols),
	"`\\p{sc=Vaii}` matches all proper symbols"
);

const nonMatchSymbols = buildString({
	loneCodePoints: [],
	ranges: [
		[0x00DC00, 0x00DFFF],
		[0x000000, 0x00A4FF],
		[0x00A62C, 0x00DBFF],
		[0x00E000, 0x10FFFF]
	]
});
assert(
	/^\P{Script=Vai}+$/u.test(nonMatchSymbols),
	"`\\P{Script=Vai}` matches all proper symbols"
);
assert(
	/^\P{Script=Vaii}+$/u.test(nonMatchSymbols),
	"`\\P{Script=Vaii}` matches all proper symbols"
);
assert(
	/^\P{sc=Vai}+$/u.test(nonMatchSymbols),
	"`\\P{sc=Vai}` matches all proper symbols"
);
assert(
	/^\P{sc=Vaii}+$/u.test(nonMatchSymbols),
	"`\\P{sc=Vaii}` matches all proper symbols"
);
