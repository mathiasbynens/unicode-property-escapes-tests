// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Khojki`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v9.0.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
---*/

const buildString = ({ loneCodePoints, ranges }) => {
	let result = String.fromCodePoint(...loneCodePoints);
	for (const [start, end] of ranges) {
		for (let codePoint = start; codePoint <= end; codePoint++) {
			result += String.fromCodePoint(codePoint);
		}
	}
	return result;
};

const matchSymbols = buildString({
	loneCodePoints: [],
	ranges: [
		[0x011200, 0x011211],
		[0x011213, 0x01123E]
	]
});
assert(
	/^\p{Script=Khojki}+$/u.test(matchSymbols),
	"`\\p{Script=Khojki}` matches all proper symbols"
);
assert(
	/^\p{Script=Khoj}+$/u.test(matchSymbols),
	"`\\p{Script=Khoj}` matches all proper symbols"
);
assert(
	/^\p{sc=Khojki}+$/u.test(matchSymbols),
	"`\\p{sc=Khojki}` matches all proper symbols"
);
assert(
	/^\p{sc=Khoj}+$/u.test(matchSymbols),
	"`\\p{sc=Khoj}` matches all proper symbols"
);

const nonMatchSymbols = buildString({
	loneCodePoints: [
		0x011212
	],
	ranges: [
		[0x000000, 0x0111FF],
		[0x01123F, 0x10FFFF]
	]
});
assert(
	/^\P{Script=Khojki}+$/u.test(nonMatchSymbols),
	"`\\P{Script=Khojki}` matches all proper symbols"
);
assert(
	/^\P{Script=Khoj}+$/u.test(nonMatchSymbols),
	"`\\P{Script=Khoj}` matches all proper symbols"
);
assert(
	/^\P{sc=Khojki}+$/u.test(nonMatchSymbols),
	"`\\P{sc=Khojki}` matches all proper symbols"
);
assert(
	/^\P{sc=Khoj}+$/u.test(nonMatchSymbols),
	"`\\P{sc=Khoj}` matches all proper symbols"
);