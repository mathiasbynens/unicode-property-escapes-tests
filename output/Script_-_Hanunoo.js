// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Hanunoo`
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
		[0x001720, 0x001734]
	]
});
assert(
	/^\p{Script=Hanunoo}+$/u.test(matchSymbols),
	"`\\p{Script=Hanunoo}` matches all proper symbols"
);
assert(
	/^\p{Script=Hano}+$/u.test(matchSymbols),
	"`\\p{Script=Hano}` matches all proper symbols"
);
assert(
	/^\p{sc=Hanunoo}+$/u.test(matchSymbols),
	"`\\p{sc=Hanunoo}` matches all proper symbols"
);
assert(
	/^\p{sc=Hano}+$/u.test(matchSymbols),
	"`\\p{sc=Hano}` matches all proper symbols"
);

const nonMatchSymbols = buildString({
	loneCodePoints: [],
	ranges: [
		[0x00DC00, 0x00DFFF],
		[0x000000, 0x00171F],
		[0x001735, 0x00DBFF],
		[0x00E000, 0x10FFFF]
	]
});
assert(
	/^\P{Script=Hanunoo}+$/u.test(nonMatchSymbols),
	"`\\P{Script=Hanunoo}` matches all proper symbols"
);
assert(
	/^\P{Script=Hano}+$/u.test(nonMatchSymbols),
	"`\\P{Script=Hano}` matches all proper symbols"
);
assert(
	/^\P{sc=Hanunoo}+$/u.test(nonMatchSymbols),
	"`\\P{sc=Hanunoo}` matches all proper symbols"
);
assert(
	/^\P{sc=Hano}+$/u.test(nonMatchSymbols),
	"`\\P{sc=Hano}` matches all proper symbols"
);
