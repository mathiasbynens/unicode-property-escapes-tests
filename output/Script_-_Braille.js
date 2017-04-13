// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Braille`
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
		[0x002800, 0x0028FF]
	]
});
assert(
	/^\p{Script=Braille}+$/u.test(matchSymbols),
	"`\\p{Script=Braille}` matches all proper symbols"
);
assert(
	/^\p{Script=Brai}+$/u.test(matchSymbols),
	"`\\p{Script=Brai}` matches all proper symbols"
);
assert(
	/^\p{sc=Braille}+$/u.test(matchSymbols),
	"`\\p{sc=Braille}` matches all proper symbols"
);
assert(
	/^\p{sc=Brai}+$/u.test(matchSymbols),
	"`\\p{sc=Brai}` matches all proper symbols"
);

const nonMatchSymbols = buildString({
	loneCodePoints: [],
	ranges: [
		[0x00DC00, 0x00DFFF],
		[0x000000, 0x0027FF],
		[0x002900, 0x00DBFF],
		[0x00E000, 0x10FFFF]
	]
});
assert(
	/^\P{Script=Braille}+$/u.test(nonMatchSymbols),
	"`\\P{Script=Braille}` matches all proper symbols"
);
assert(
	/^\P{Script=Brai}+$/u.test(nonMatchSymbols),
	"`\\P{Script=Brai}` matches all proper symbols"
);
assert(
	/^\P{sc=Braille}+$/u.test(nonMatchSymbols),
	"`\\P{sc=Braille}` matches all proper symbols"
);
assert(
	/^\P{sc=Brai}+$/u.test(nonMatchSymbols),
	"`\\P{sc=Brai}` matches all proper symbols"
);
