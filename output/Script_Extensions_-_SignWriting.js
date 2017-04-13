// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=SignWriting`
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
		[0x01D800, 0x01DA8B],
		[0x01DA9B, 0x01DA9F],
		[0x01DAA1, 0x01DAAF]
	]
});
assert(
	/^\p{Script_Extensions=SignWriting}+$/u.test(matchSymbols),
	"`\\p{Script_Extensions=SignWriting}` matches all proper symbols"
);
assert(
	/^\p{Script_Extensions=Sgnw}+$/u.test(matchSymbols),
	"`\\p{Script_Extensions=Sgnw}` matches all proper symbols"
);
assert(
	/^\p{scx=SignWriting}+$/u.test(matchSymbols),
	"`\\p{scx=SignWriting}` matches all proper symbols"
);
assert(
	/^\p{scx=Sgnw}+$/u.test(matchSymbols),
	"`\\p{scx=Sgnw}` matches all proper symbols"
);

const nonMatchSymbols = buildString({
	loneCodePoints: [
		0x01DAA0
	],
	ranges: [
		[0x00DC00, 0x00DFFF],
		[0x000000, 0x00DBFF],
		[0x00E000, 0x01D7FF],
		[0x01DA8C, 0x01DA9A],
		[0x01DAB0, 0x10FFFF]
	]
});
assert(
	/^\P{Script_Extensions=SignWriting}+$/u.test(nonMatchSymbols),
	"`\\P{Script_Extensions=SignWriting}` matches all proper symbols"
);
assert(
	/^\P{Script_Extensions=Sgnw}+$/u.test(nonMatchSymbols),
	"`\\P{Script_Extensions=Sgnw}` matches all proper symbols"
);
assert(
	/^\P{scx=SignWriting}+$/u.test(nonMatchSymbols),
	"`\\P{scx=SignWriting}` matches all proper symbols"
);
assert(
	/^\P{scx=Sgnw}+$/u.test(nonMatchSymbols),
	"`\\P{scx=Sgnw}` matches all proper symbols"
);
