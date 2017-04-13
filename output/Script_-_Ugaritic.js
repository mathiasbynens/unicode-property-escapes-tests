// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Ugaritic`
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
		0x01039F
	],
	ranges: [
		[0x010380, 0x01039D]
	]
});
assert(
	/^\p{Script=Ugaritic}+$/u.test(matchSymbols),
	"`\\p{Script=Ugaritic}` matches all proper symbols"
);
assert(
	/^\p{Script=Ugar}+$/u.test(matchSymbols),
	"`\\p{Script=Ugar}` matches all proper symbols"
);
assert(
	/^\p{sc=Ugaritic}+$/u.test(matchSymbols),
	"`\\p{sc=Ugaritic}` matches all proper symbols"
);
assert(
	/^\p{sc=Ugar}+$/u.test(matchSymbols),
	"`\\p{sc=Ugar}` matches all proper symbols"
);

const nonMatchSymbols = buildString({
	loneCodePoints: [
		0x01039E
	],
	ranges: [
		[0x00DC00, 0x00DFFF],
		[0x000000, 0x00DBFF],
		[0x00E000, 0x01037F],
		[0x0103A0, 0x10FFFF]
	]
});
assert(
	/^\P{Script=Ugaritic}+$/u.test(nonMatchSymbols),
	"`\\P{Script=Ugaritic}` matches all proper symbols"
);
assert(
	/^\P{Script=Ugar}+$/u.test(nonMatchSymbols),
	"`\\P{Script=Ugar}` matches all proper symbols"
);
assert(
	/^\P{sc=Ugaritic}+$/u.test(nonMatchSymbols),
	"`\\P{sc=Ugaritic}` matches all proper symbols"
);
assert(
	/^\P{sc=Ugar}+$/u.test(nonMatchSymbols),
	"`\\P{sc=Ugar}` matches all proper symbols"
);
