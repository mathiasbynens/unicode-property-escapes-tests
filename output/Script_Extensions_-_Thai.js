// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Thai`
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
		[0x000E01, 0x000E3A],
		[0x000E40, 0x000E5B]
	]
});
assert(
	/^\p{Script_Extensions=Thai}+$/u.test(matchSymbols),
	"`\\p{Script_Extensions=Thai}` matches all proper symbols"
);
assert(
	/^\p{Script_Extensions=Thai}+$/u.test(matchSymbols),
	"`\\p{Script_Extensions=Thai}` matches all proper symbols"
);
assert(
	/^\p{scx=Thai}+$/u.test(matchSymbols),
	"`\\p{scx=Thai}` matches all proper symbols"
);
assert(
	/^\p{scx=Thai}+$/u.test(matchSymbols),
	"`\\p{scx=Thai}` matches all proper symbols"
);

const nonMatchSymbols = buildString({
	loneCodePoints: [],
	ranges: [
		[0x00DC00, 0x00DFFF],
		[0x000000, 0x000E00],
		[0x000E3B, 0x000E3F],
		[0x000E5C, 0x00DBFF],
		[0x00E000, 0x10FFFF]
	]
});
assert(
	/^\P{Script_Extensions=Thai}+$/u.test(nonMatchSymbols),
	"`\\P{Script_Extensions=Thai}` matches all proper symbols"
);
assert(
	/^\P{Script_Extensions=Thai}+$/u.test(nonMatchSymbols),
	"`\\P{Script_Extensions=Thai}` matches all proper symbols"
);
assert(
	/^\P{scx=Thai}+$/u.test(nonMatchSymbols),
	"`\\P{scx=Thai}` matches all proper symbols"
);
assert(
	/^\P{scx=Thai}+$/u.test(nonMatchSymbols),
	"`\\P{scx=Thai}` matches all proper symbols"
);
