// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Syloti_Nagri`
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
		[0x00A800, 0x00A82B]
	]
});
assert(
	/^\p{Script=Syloti_Nagri}+$/u.test(matchSymbols),
	"`\\p{Script=Syloti_Nagri}` matches all proper symbols"
);
assert(
	/^\p{Script=Sylo}+$/u.test(matchSymbols),
	"`\\p{Script=Sylo}` matches all proper symbols"
);
assert(
	/^\p{sc=Syloti_Nagri}+$/u.test(matchSymbols),
	"`\\p{sc=Syloti_Nagri}` matches all proper symbols"
);
assert(
	/^\p{sc=Sylo}+$/u.test(matchSymbols),
	"`\\p{sc=Sylo}` matches all proper symbols"
);

const nonMatchSymbols = buildString({
	loneCodePoints: [],
	ranges: [
		[0x00DC00, 0x00DFFF],
		[0x000000, 0x00A7FF],
		[0x00A82C, 0x00DBFF],
		[0x00E000, 0x10FFFF]
	]
});
assert(
	/^\P{Script=Syloti_Nagri}+$/u.test(nonMatchSymbols),
	"`\\P{Script=Syloti_Nagri}` matches all proper symbols"
);
assert(
	/^\P{Script=Sylo}+$/u.test(nonMatchSymbols),
	"`\\P{Script=Sylo}` matches all proper symbols"
);
assert(
	/^\P{sc=Syloti_Nagri}+$/u.test(nonMatchSymbols),
	"`\\P{sc=Syloti_Nagri}` matches all proper symbols"
);
assert(
	/^\P{sc=Sylo}+$/u.test(nonMatchSymbols),
	"`\\P{sc=Sylo}` matches all proper symbols"
);
