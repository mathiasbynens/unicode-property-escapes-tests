// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Ol_Chiki`
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
		[0x001C50, 0x001C7F]
	]
});
assert(
	/^\p{Script_Extensions=Ol_Chiki}+$/u.test(matchSymbols),
	"`\\p{Script_Extensions=Ol_Chiki}` matches all proper symbols"
);
assert(
	/^\p{Script_Extensions=Olck}+$/u.test(matchSymbols),
	"`\\p{Script_Extensions=Olck}` matches all proper symbols"
);
assert(
	/^\p{scx=Ol_Chiki}+$/u.test(matchSymbols),
	"`\\p{scx=Ol_Chiki}` matches all proper symbols"
);
assert(
	/^\p{scx=Olck}+$/u.test(matchSymbols),
	"`\\p{scx=Olck}` matches all proper symbols"
);

const nonMatchSymbols = buildString({
	loneCodePoints: [],
	ranges: [
		[0x00DC00, 0x00DFFF],
		[0x000000, 0x001C4F],
		[0x001C80, 0x00DBFF],
		[0x00E000, 0x10FFFF]
	]
});
assert(
	/^\P{Script_Extensions=Ol_Chiki}+$/u.test(nonMatchSymbols),
	"`\\P{Script_Extensions=Ol_Chiki}` matches all proper symbols"
);
assert(
	/^\P{Script_Extensions=Olck}+$/u.test(nonMatchSymbols),
	"`\\P{Script_Extensions=Olck}` matches all proper symbols"
);
assert(
	/^\P{scx=Ol_Chiki}+$/u.test(nonMatchSymbols),
	"`\\P{scx=Ol_Chiki}` matches all proper symbols"
);
assert(
	/^\P{scx=Olck}+$/u.test(nonMatchSymbols),
	"`\\P{scx=Olck}` matches all proper symbols"
);
