// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `IDS_Trinary_Operator`
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
		[0x002FF2, 0x002FF3]
	]
});
assert(
	/^\p{IDS_Trinary_Operator}+$/u.test(matchSymbols),
	"`\\p{IDS_Trinary_Operator}` matches all proper symbols"
);
assert(
	/^\p{IDST}+$/u.test(matchSymbols),
	"`\\p{IDST}` matches all proper symbols"
);

const nonMatchSymbols = buildString({
	loneCodePoints: [],
	ranges: [
		[0x000000, 0x002FF1],
		[0x002FF4, 0x10FFFF]
	]
});
assert(
	/^\P{IDS_Trinary_Operator}+$/u.test(nonMatchSymbols),
	"`\\P{IDS_Trinary_Operator}` matches all proper symbols"
);
assert(
	/^\P{IDST}+$/u.test(nonMatchSymbols),
	"`\\P{IDST}` matches all proper symbols"
);