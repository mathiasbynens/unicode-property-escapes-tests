// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Old_South_Arabian`
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
		[0x010A60, 0x010A7F]
	]
});
assert(
	/^\p{Script=Old_South_Arabian}+$/u.test(matchSymbols),
	"`\\p{Script=Old_South_Arabian}` matches all proper symbols"
);
assert(
	/^\p{Script=Sarb}+$/u.test(matchSymbols),
	"`\\p{Script=Sarb}` matches all proper symbols"
);
assert(
	/^\p{sc=Old_South_Arabian}+$/u.test(matchSymbols),
	"`\\p{sc=Old_South_Arabian}` matches all proper symbols"
);
assert(
	/^\p{sc=Sarb}+$/u.test(matchSymbols),
	"`\\p{sc=Sarb}` matches all proper symbols"
);

const nonMatchSymbols = buildString({
	loneCodePoints: [],
	ranges: [
		[0x00DC00, 0x00DFFF],
		[0x000000, 0x00DBFF],
		[0x00E000, 0x010A5F],
		[0x010A80, 0x10FFFF]
	]
});
assert(
	/^\P{Script=Old_South_Arabian}+$/u.test(nonMatchSymbols),
	"`\\P{Script=Old_South_Arabian}` matches all proper symbols"
);
assert(
	/^\P{Script=Sarb}+$/u.test(nonMatchSymbols),
	"`\\P{Script=Sarb}` matches all proper symbols"
);
assert(
	/^\P{sc=Old_South_Arabian}+$/u.test(nonMatchSymbols),
	"`\\P{sc=Old_South_Arabian}` matches all proper symbols"
);
assert(
	/^\P{sc=Sarb}+$/u.test(nonMatchSymbols),
	"`\\P{sc=Sarb}` matches all proper symbols"
);
