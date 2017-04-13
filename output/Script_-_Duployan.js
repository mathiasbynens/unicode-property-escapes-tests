// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Duployan`
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
		[0x01BC00, 0x01BC6A],
		[0x01BC70, 0x01BC7C],
		[0x01BC80, 0x01BC88],
		[0x01BC90, 0x01BC99],
		[0x01BC9C, 0x01BC9F]
	]
});
assert(
	/^\p{Script=Duployan}+$/u.test(matchSymbols),
	"`\\p{Script=Duployan}` matches all proper symbols"
);
assert(
	/^\p{Script=Dupl}+$/u.test(matchSymbols),
	"`\\p{Script=Dupl}` matches all proper symbols"
);
assert(
	/^\p{sc=Duployan}+$/u.test(matchSymbols),
	"`\\p{sc=Duployan}` matches all proper symbols"
);
assert(
	/^\p{sc=Dupl}+$/u.test(matchSymbols),
	"`\\p{sc=Dupl}` matches all proper symbols"
);

const nonMatchSymbols = buildString({
	loneCodePoints: [],
	ranges: [
		[0x00DC00, 0x00DFFF],
		[0x000000, 0x00DBFF],
		[0x00E000, 0x01BBFF],
		[0x01BC6B, 0x01BC6F],
		[0x01BC7D, 0x01BC7F],
		[0x01BC89, 0x01BC8F],
		[0x01BC9A, 0x01BC9B],
		[0x01BCA0, 0x10FFFF]
	]
});
assert(
	/^\P{Script=Duployan}+$/u.test(nonMatchSymbols),
	"`\\P{Script=Duployan}` matches all proper symbols"
);
assert(
	/^\P{Script=Dupl}+$/u.test(nonMatchSymbols),
	"`\\P{Script=Dupl}` matches all proper symbols"
);
assert(
	/^\P{sc=Duployan}+$/u.test(nonMatchSymbols),
	"`\\P{sc=Duployan}` matches all proper symbols"
);
assert(
	/^\P{sc=Dupl}+$/u.test(nonMatchSymbols),
	"`\\P{sc=Dupl}` matches all proper symbols"
);
