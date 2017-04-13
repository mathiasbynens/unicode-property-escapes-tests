// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Mende_Kikakui`
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
		[0x01E800, 0x01E8C4],
		[0x01E8C7, 0x01E8D6]
	]
});
assert(
	/^\p{Script=Mende_Kikakui}+$/u.test(matchSymbols),
	"`\\p{Script=Mende_Kikakui}` matches all proper symbols"
);
assert(
	/^\p{Script=Mend}+$/u.test(matchSymbols),
	"`\\p{Script=Mend}` matches all proper symbols"
);
assert(
	/^\p{sc=Mende_Kikakui}+$/u.test(matchSymbols),
	"`\\p{sc=Mende_Kikakui}` matches all proper symbols"
);
assert(
	/^\p{sc=Mend}+$/u.test(matchSymbols),
	"`\\p{sc=Mend}` matches all proper symbols"
);

const nonMatchSymbols = buildString({
	loneCodePoints: [],
	ranges: [
		[0x00DC00, 0x00DFFF],
		[0x000000, 0x00DBFF],
		[0x00E000, 0x01E7FF],
		[0x01E8C5, 0x01E8C6],
		[0x01E8D7, 0x10FFFF]
	]
});
assert(
	/^\P{Script=Mende_Kikakui}+$/u.test(nonMatchSymbols),
	"`\\P{Script=Mende_Kikakui}` matches all proper symbols"
);
assert(
	/^\P{Script=Mend}+$/u.test(nonMatchSymbols),
	"`\\P{Script=Mend}` matches all proper symbols"
);
assert(
	/^\P{sc=Mende_Kikakui}+$/u.test(nonMatchSymbols),
	"`\\P{sc=Mende_Kikakui}` matches all proper symbols"
);
assert(
	/^\P{sc=Mend}+$/u.test(nonMatchSymbols),
	"`\\P{sc=Mend}` matches all proper symbols"
);
