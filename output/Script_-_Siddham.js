// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Siddham`
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
		[0x011580, 0x0115B5],
		[0x0115B8, 0x0115DD]
	]
});
assert(
	/^\p{Script=Siddham}+$/u.test(matchSymbols),
	"`\\p{Script=Siddham}` matches all proper symbols"
);
assert(
	/^\p{Script=Sidd}+$/u.test(matchSymbols),
	"`\\p{Script=Sidd}` matches all proper symbols"
);
assert(
	/^\p{sc=Siddham}+$/u.test(matchSymbols),
	"`\\p{sc=Siddham}` matches all proper symbols"
);
assert(
	/^\p{sc=Sidd}+$/u.test(matchSymbols),
	"`\\p{sc=Sidd}` matches all proper symbols"
);

const nonMatchSymbols = buildString({
	loneCodePoints: [],
	ranges: [
		[0x000000, 0x01157F],
		[0x0115B6, 0x0115B7],
		[0x0115DE, 0x10FFFF]
	]
});
assert(
	/^\P{Script=Siddham}+$/u.test(nonMatchSymbols),
	"`\\P{Script=Siddham}` matches all proper symbols"
);
assert(
	/^\P{Script=Sidd}+$/u.test(nonMatchSymbols),
	"`\\P{Script=Sidd}` matches all proper symbols"
);
assert(
	/^\P{sc=Siddham}+$/u.test(nonMatchSymbols),
	"`\\P{sc=Siddham}` matches all proper symbols"
);
assert(
	/^\P{sc=Sidd}+$/u.test(nonMatchSymbols),
	"`\\P{sc=Sidd}` matches all proper symbols"
);