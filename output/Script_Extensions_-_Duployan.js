// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Duployan`
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
		[0x01BC00, 0x01BC6A],
		[0x01BC70, 0x01BC7C],
		[0x01BC80, 0x01BC88],
		[0x01BC90, 0x01BC99],
		[0x01BC9C, 0x01BCA3]
	]
});
assert(
	/^\p{Script_Extensions=Duployan}+$/u.test(matchSymbols),
	"`\\p{Script_Extensions=Duployan}` matches all proper symbols"
);
assert(
	/^\p{Script_Extensions=Dupl}+$/u.test(matchSymbols),
	"`\\p{Script_Extensions=Dupl}` matches all proper symbols"
);
assert(
	/^\p{scx=Duployan}+$/u.test(matchSymbols),
	"`\\p{scx=Duployan}` matches all proper symbols"
);
assert(
	/^\p{scx=Dupl}+$/u.test(matchSymbols),
	"`\\p{scx=Dupl}` matches all proper symbols"
);

const nonMatchSymbols = buildString({
	loneCodePoints: [],
	ranges: [
		[0x00DC00, 0x00DFFF],
		[0x000000, 0x00DBFF],
		[0x00E000, 0x01BBFF],
		[0x01BC6B, 0x01BC6F],
		[0x01BC7D, 0x01BC7F],
		[0x01BC89, 0x01BC8F],
		[0x01BC9A, 0x01BC9B],
		[0x01BCA4, 0x10FFFF]
	]
});
assert(
	/^\P{Script_Extensions=Duployan}+$/u.test(nonMatchSymbols),
	"`\\P{Script_Extensions=Duployan}` matches all proper symbols"
);
assert(
	/^\P{Script_Extensions=Dupl}+$/u.test(nonMatchSymbols),
	"`\\P{Script_Extensions=Dupl}` matches all proper symbols"
);
assert(
	/^\P{scx=Duployan}+$/u.test(nonMatchSymbols),
	"`\\P{scx=Duployan}` matches all proper symbols"
);
assert(
	/^\P{scx=Dupl}+$/u.test(nonMatchSymbols),
	"`\\P{scx=Dupl}` matches all proper symbols"
);
