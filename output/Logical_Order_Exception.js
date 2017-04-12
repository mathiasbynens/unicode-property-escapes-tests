// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Logical_Order_Exception`
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
	loneCodePoints: [
		0x0019BA,
		0x00AAB9
	],
	ranges: [
		[0x000E40, 0x000E44],
		[0x000EC0, 0x000EC4],
		[0x0019B5, 0x0019B7],
		[0x00AAB5, 0x00AAB6],
		[0x00AABB, 0x00AABC]
	]
});
assert(
	/^\p{Logical_Order_Exception}+$/u.test(matchSymbols),
	"`\\p{Logical_Order_Exception}` matches all proper symbols"
);
assert(
	/^\p{LOE}+$/u.test(matchSymbols),
	"`\\p{LOE}` matches all proper symbols"
);

const nonMatchSymbols = buildString({
	loneCodePoints: [
		0x00AABA
	],
	ranges: [
		[0x000000, 0x000E3F],
		[0x000E45, 0x000EBF],
		[0x000EC5, 0x0019B4],
		[0x0019B8, 0x0019B9],
		[0x0019BB, 0x00AAB4],
		[0x00AAB7, 0x00AAB8],
		[0x00AABD, 0x10FFFF]
	]
});
assert(
	/^\P{Logical_Order_Exception}+$/u.test(nonMatchSymbols),
	"`\\P{Logical_Order_Exception}` matches all proper symbols"
);
assert(
	/^\P{LOE}+$/u.test(nonMatchSymbols),
	"`\\P{LOE}` matches all proper symbols"
);