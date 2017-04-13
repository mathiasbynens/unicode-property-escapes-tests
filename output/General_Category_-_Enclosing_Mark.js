// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `General_Category=Enclosing_Mark`
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
		0x001ABE
	],
	ranges: [
		[0x000488, 0x000489],
		[0x0020DD, 0x0020E0],
		[0x0020E2, 0x0020E4],
		[0x00A670, 0x00A672]
	]
});
assert(
	/^\p{General_Category=Enclosing_Mark}+$/u.test(matchSymbols),
	"`\\p{General_Category=Enclosing_Mark}` matches all proper symbols"
);
assert(
	/^\p{General_Category=Me}+$/u.test(matchSymbols),
	"`\\p{General_Category=Me}` matches all proper symbols"
);
assert(
	/^\p{gc=Enclosing_Mark}+$/u.test(matchSymbols),
	"`\\p{gc=Enclosing_Mark}` matches all proper symbols"
);
assert(
	/^\p{gc=Me}+$/u.test(matchSymbols),
	"`\\p{gc=Me}` matches all proper symbols"
);
assert(
	/^\p{Enclosing_Mark}+$/u.test(matchSymbols),
	"`\\p{Enclosing_Mark}` matches all proper symbols"
);
assert(
	/^\p{Me}+$/u.test(matchSymbols),
	"`\\p{Me}` matches all proper symbols"
);

const nonMatchSymbols = buildString({
	loneCodePoints: [
		0x0020E1
	],
	ranges: [
		[0x00DC00, 0x00DFFF],
		[0x000000, 0x000487],
		[0x00048A, 0x001ABD],
		[0x001ABF, 0x0020DC],
		[0x0020E5, 0x00A66F],
		[0x00A673, 0x00DBFF],
		[0x00E000, 0x10FFFF]
	]
});
assert(
	/^\P{General_Category=Enclosing_Mark}+$/u.test(nonMatchSymbols),
	"`\\P{General_Category=Enclosing_Mark}` matches all proper symbols"
);
assert(
	/^\P{General_Category=Me}+$/u.test(nonMatchSymbols),
	"`\\P{General_Category=Me}` matches all proper symbols"
);
assert(
	/^\P{gc=Enclosing_Mark}+$/u.test(nonMatchSymbols),
	"`\\P{gc=Enclosing_Mark}` matches all proper symbols"
);
assert(
	/^\P{gc=Me}+$/u.test(nonMatchSymbols),
	"`\\P{gc=Me}` matches all proper symbols"
);
assert(
	/^\P{Enclosing_Mark}+$/u.test(nonMatchSymbols),
	"`\\P{Enclosing_Mark}` matches all proper symbols"
);
assert(
	/^\P{Me}+$/u.test(nonMatchSymbols),
	"`\\P{Me}` matches all proper symbols"
);
