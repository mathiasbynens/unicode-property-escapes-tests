// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Thaana`
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
		0x00060C,
		0x00061B,
		0x00061F,
		0x00FDF2,
		0x00FDFD
	],
	ranges: [
		[0x000660, 0x000669],
		[0x000780, 0x0007B1]
	]
});
assert(
	/^\p{Script_Extensions=Thaana}+$/u.test(matchSymbols),
	"`\\p{Script_Extensions=Thaana}` matches all proper symbols"
);
assert(
	/^\p{Script_Extensions=Thaa}+$/u.test(matchSymbols),
	"`\\p{Script_Extensions=Thaa}` matches all proper symbols"
);
assert(
	/^\p{scx=Thaana}+$/u.test(matchSymbols),
	"`\\p{scx=Thaana}` matches all proper symbols"
);
assert(
	/^\p{scx=Thaa}+$/u.test(matchSymbols),
	"`\\p{scx=Thaa}` matches all proper symbols"
);

const nonMatchSymbols = buildString({
	loneCodePoints: [],
	ranges: [
		[0x00DC00, 0x00DFFF],
		[0x000000, 0x00060B],
		[0x00060D, 0x00061A],
		[0x00061C, 0x00061E],
		[0x000620, 0x00065F],
		[0x00066A, 0x00077F],
		[0x0007B2, 0x00DBFF],
		[0x00E000, 0x00FDF1],
		[0x00FDF3, 0x00FDFC],
		[0x00FDFE, 0x10FFFF]
	]
});
assert(
	/^\P{Script_Extensions=Thaana}+$/u.test(nonMatchSymbols),
	"`\\P{Script_Extensions=Thaana}` matches all proper symbols"
);
assert(
	/^\P{Script_Extensions=Thaa}+$/u.test(nonMatchSymbols),
	"`\\P{Script_Extensions=Thaa}` matches all proper symbols"
);
assert(
	/^\P{scx=Thaana}+$/u.test(nonMatchSymbols),
	"`\\P{scx=Thaana}` matches all proper symbols"
);
assert(
	/^\P{scx=Thaa}+$/u.test(nonMatchSymbols),
	"`\\P{scx=Thaa}` matches all proper symbols"
);
