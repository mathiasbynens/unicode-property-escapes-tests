// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Samaritan`
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
		[0x000800, 0x00082D],
		[0x000830, 0x00083E]
	]
});
assert(
	/^\p{Script_Extensions=Samaritan}+$/u.test(matchSymbols),
	"`\\p{Script_Extensions=Samaritan}` matches all proper symbols"
);
assert(
	/^\p{Script_Extensions=Samr}+$/u.test(matchSymbols),
	"`\\p{Script_Extensions=Samr}` matches all proper symbols"
);
assert(
	/^\p{scx=Samaritan}+$/u.test(matchSymbols),
	"`\\p{scx=Samaritan}` matches all proper symbols"
);
assert(
	/^\p{scx=Samr}+$/u.test(matchSymbols),
	"`\\p{scx=Samr}` matches all proper symbols"
);

const nonMatchSymbols = buildString({
	loneCodePoints: [],
	ranges: [
		[0x00DC00, 0x00DFFF],
		[0x000000, 0x0007FF],
		[0x00082E, 0x00082F],
		[0x00083F, 0x00DBFF],
		[0x00E000, 0x10FFFF]
	]
});
assert(
	/^\P{Script_Extensions=Samaritan}+$/u.test(nonMatchSymbols),
	"`\\P{Script_Extensions=Samaritan}` matches all proper symbols"
);
assert(
	/^\P{Script_Extensions=Samr}+$/u.test(nonMatchSymbols),
	"`\\P{Script_Extensions=Samr}` matches all proper symbols"
);
assert(
	/^\P{scx=Samaritan}+$/u.test(nonMatchSymbols),
	"`\\P{scx=Samaritan}` matches all proper symbols"
);
assert(
	/^\P{scx=Samr}+$/u.test(nonMatchSymbols),
	"`\\P{scx=Samr}` matches all proper symbols"
);
