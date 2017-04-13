// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Chakma`
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
		[0x011100, 0x011134],
		[0x011136, 0x011143]
	]
});
assert(
	/^\p{Script=Chakma}+$/u.test(matchSymbols),
	"`\\p{Script=Chakma}` matches all proper symbols"
);
assert(
	/^\p{Script=Cakm}+$/u.test(matchSymbols),
	"`\\p{Script=Cakm}` matches all proper symbols"
);
assert(
	/^\p{sc=Chakma}+$/u.test(matchSymbols),
	"`\\p{sc=Chakma}` matches all proper symbols"
);
assert(
	/^\p{sc=Cakm}+$/u.test(matchSymbols),
	"`\\p{sc=Cakm}` matches all proper symbols"
);

const nonMatchSymbols = buildString({
	loneCodePoints: [
		0x011135
	],
	ranges: [
		[0x00DC00, 0x00DFFF],
		[0x000000, 0x00DBFF],
		[0x00E000, 0x0110FF],
		[0x011144, 0x10FFFF]
	]
});
assert(
	/^\P{Script=Chakma}+$/u.test(nonMatchSymbols),
	"`\\P{Script=Chakma}` matches all proper symbols"
);
assert(
	/^\P{Script=Cakm}+$/u.test(nonMatchSymbols),
	"`\\P{Script=Cakm}` matches all proper symbols"
);
assert(
	/^\P{sc=Chakma}+$/u.test(nonMatchSymbols),
	"`\\P{sc=Chakma}` matches all proper symbols"
);
assert(
	/^\P{sc=Cakm}+$/u.test(nonMatchSymbols),
	"`\\P{sc=Cakm}` matches all proper symbols"
);
