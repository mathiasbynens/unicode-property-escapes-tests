// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Carian`
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
		[0x0102A0, 0x0102D0]
	]
});
assert(
	/^\p{Script=Carian}+$/u.test(matchSymbols),
	"`\\p{Script=Carian}` matches all proper symbols"
);
assert(
	/^\p{Script=Cari}+$/u.test(matchSymbols),
	"`\\p{Script=Cari}` matches all proper symbols"
);
assert(
	/^\p{sc=Carian}+$/u.test(matchSymbols),
	"`\\p{sc=Carian}` matches all proper symbols"
);
assert(
	/^\p{sc=Cari}+$/u.test(matchSymbols),
	"`\\p{sc=Cari}` matches all proper symbols"
);

const nonMatchSymbols = buildString({
	loneCodePoints: [],
	ranges: [
		[0x000000, 0x01029F],
		[0x0102D1, 0x10FFFF]
	]
});
assert(
	/^\P{Script=Carian}+$/u.test(nonMatchSymbols),
	"`\\P{Script=Carian}` matches all proper symbols"
);
assert(
	/^\P{Script=Cari}+$/u.test(nonMatchSymbols),
	"`\\P{Script=Cari}` matches all proper symbols"
);
assert(
	/^\P{sc=Carian}+$/u.test(nonMatchSymbols),
	"`\\P{sc=Carian}` matches all proper symbols"
);
assert(
	/^\P{sc=Cari}+$/u.test(nonMatchSymbols),
	"`\\P{sc=Cari}` matches all proper symbols"
);