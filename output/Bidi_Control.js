// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Bidi_Control`
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
		0x00061C
	],
	ranges: [
		[0x00200E, 0x00200F],
		[0x00202A, 0x00202E],
		[0x002066, 0x002069]
	]
});
assert(
	/^\p{Bidi_Control}+$/u.test(matchSymbols),
	"`\\p{Bidi_Control}` matches all proper symbols"
);
assert(
	/^\p{Bidi_C}+$/u.test(matchSymbols),
	"`\\p{Bidi_C}` matches all proper symbols"
);

const nonMatchSymbols = buildString({
	loneCodePoints: [],
	ranges: [
		[0x00DC00, 0x00DFFF],
		[0x000000, 0x00061B],
		[0x00061D, 0x00200D],
		[0x002010, 0x002029],
		[0x00202F, 0x002065],
		[0x00206A, 0x00DBFF],
		[0x00E000, 0x10FFFF]
	]
});
assert(
	/^\P{Bidi_Control}+$/u.test(nonMatchSymbols),
	"`\\P{Bidi_Control}` matches all proper symbols"
);
assert(
	/^\P{Bidi_C}+$/u.test(nonMatchSymbols),
	"`\\P{Bidi_C}` matches all proper symbols"
);
