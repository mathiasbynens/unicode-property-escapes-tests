// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Runic`
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
		[0x0016A0, 0x0016EA],
		[0x0016EE, 0x0016F8]
	]
});
assert(
	/^\p{Script=Runic}+$/u.test(matchSymbols),
	"`\\p{Script=Runic}` matches all proper symbols"
);
assert(
	/^\p{Script=Runr}+$/u.test(matchSymbols),
	"`\\p{Script=Runr}` matches all proper symbols"
);
assert(
	/^\p{sc=Runic}+$/u.test(matchSymbols),
	"`\\p{sc=Runic}` matches all proper symbols"
);
assert(
	/^\p{sc=Runr}+$/u.test(matchSymbols),
	"`\\p{sc=Runr}` matches all proper symbols"
);

const nonMatchSymbols = buildString({
	loneCodePoints: [],
	ranges: [
		[0x00DC00, 0x00DFFF],
		[0x000000, 0x00169F],
		[0x0016EB, 0x0016ED],
		[0x0016F9, 0x00DBFF],
		[0x00E000, 0x10FFFF]
	]
});
assert(
	/^\P{Script=Runic}+$/u.test(nonMatchSymbols),
	"`\\P{Script=Runic}` matches all proper symbols"
);
assert(
	/^\P{Script=Runr}+$/u.test(nonMatchSymbols),
	"`\\P{Script=Runr}` matches all proper symbols"
);
assert(
	/^\P{sc=Runic}+$/u.test(nonMatchSymbols),
	"`\\P{sc=Runic}` matches all proper symbols"
);
assert(
	/^\P{sc=Runr}+$/u.test(nonMatchSymbols),
	"`\\P{sc=Runr}` matches all proper symbols"
);
