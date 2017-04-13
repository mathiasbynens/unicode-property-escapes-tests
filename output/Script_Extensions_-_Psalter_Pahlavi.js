// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Psalter_Pahlavi`
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
		0x000640
	],
	ranges: [
		[0x010B80, 0x010B91],
		[0x010B99, 0x010B9C],
		[0x010BA9, 0x010BAF]
	]
});
assert(
	/^\p{Script_Extensions=Psalter_Pahlavi}+$/u.test(matchSymbols),
	"`\\p{Script_Extensions=Psalter_Pahlavi}` matches all proper symbols"
);
assert(
	/^\p{Script_Extensions=Phlp}+$/u.test(matchSymbols),
	"`\\p{Script_Extensions=Phlp}` matches all proper symbols"
);
assert(
	/^\p{scx=Psalter_Pahlavi}+$/u.test(matchSymbols),
	"`\\p{scx=Psalter_Pahlavi}` matches all proper symbols"
);
assert(
	/^\p{scx=Phlp}+$/u.test(matchSymbols),
	"`\\p{scx=Phlp}` matches all proper symbols"
);

const nonMatchSymbols = buildString({
	loneCodePoints: [],
	ranges: [
		[0x00DC00, 0x00DFFF],
		[0x000000, 0x00063F],
		[0x000641, 0x00DBFF],
		[0x00E000, 0x010B7F],
		[0x010B92, 0x010B98],
		[0x010B9D, 0x010BA8],
		[0x010BB0, 0x10FFFF]
	]
});
assert(
	/^\P{Script_Extensions=Psalter_Pahlavi}+$/u.test(nonMatchSymbols),
	"`\\P{Script_Extensions=Psalter_Pahlavi}` matches all proper symbols"
);
assert(
	/^\P{Script_Extensions=Phlp}+$/u.test(nonMatchSymbols),
	"`\\P{Script_Extensions=Phlp}` matches all proper symbols"
);
assert(
	/^\P{scx=Psalter_Pahlavi}+$/u.test(nonMatchSymbols),
	"`\\P{scx=Psalter_Pahlavi}` matches all proper symbols"
);
assert(
	/^\P{scx=Phlp}+$/u.test(nonMatchSymbols),
	"`\\P{scx=Phlp}` matches all proper symbols"
);
