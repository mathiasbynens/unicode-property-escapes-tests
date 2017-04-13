// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Lydian`
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
		0x01093F
	],
	ranges: [
		[0x010920, 0x010939]
	]
});
assert(
	/^\p{Script_Extensions=Lydian}+$/u.test(matchSymbols),
	"`\\p{Script_Extensions=Lydian}` matches all proper symbols"
);
assert(
	/^\p{Script_Extensions=Lydi}+$/u.test(matchSymbols),
	"`\\p{Script_Extensions=Lydi}` matches all proper symbols"
);
assert(
	/^\p{scx=Lydian}+$/u.test(matchSymbols),
	"`\\p{scx=Lydian}` matches all proper symbols"
);
assert(
	/^\p{scx=Lydi}+$/u.test(matchSymbols),
	"`\\p{scx=Lydi}` matches all proper symbols"
);

const nonMatchSymbols = buildString({
	loneCodePoints: [],
	ranges: [
		[0x00DC00, 0x00DFFF],
		[0x000000, 0x00DBFF],
		[0x00E000, 0x01091F],
		[0x01093A, 0x01093E],
		[0x010940, 0x10FFFF]
	]
});
assert(
	/^\P{Script_Extensions=Lydian}+$/u.test(nonMatchSymbols),
	"`\\P{Script_Extensions=Lydian}` matches all proper symbols"
);
assert(
	/^\P{Script_Extensions=Lydi}+$/u.test(nonMatchSymbols),
	"`\\P{Script_Extensions=Lydi}` matches all proper symbols"
);
assert(
	/^\P{scx=Lydian}+$/u.test(nonMatchSymbols),
	"`\\P{scx=Lydian}` matches all proper symbols"
);
assert(
	/^\P{scx=Lydi}+$/u.test(nonMatchSymbols),
	"`\\P{scx=Lydi}` matches all proper symbols"
);
