// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Mahajani`
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
		[0x011150, 0x011176]
	]
});
assert(
	/^\p{Script=Mahajani}+$/u.test(matchSymbols),
	"`\\p{Script=Mahajani}` matches all proper symbols"
);
assert(
	/^\p{Script=Mahj}+$/u.test(matchSymbols),
	"`\\p{Script=Mahj}` matches all proper symbols"
);
assert(
	/^\p{sc=Mahajani}+$/u.test(matchSymbols),
	"`\\p{sc=Mahajani}` matches all proper symbols"
);
assert(
	/^\p{sc=Mahj}+$/u.test(matchSymbols),
	"`\\p{sc=Mahj}` matches all proper symbols"
);

const nonMatchSymbols = buildString({
	loneCodePoints: [],
	ranges: [
		[0x000000, 0x01114F],
		[0x011177, 0x10FFFF]
	]
});
assert(
	/^\P{Script=Mahajani}+$/u.test(nonMatchSymbols),
	"`\\P{Script=Mahajani}` matches all proper symbols"
);
assert(
	/^\P{Script=Mahj}+$/u.test(nonMatchSymbols),
	"`\\P{Script=Mahj}` matches all proper symbols"
);
assert(
	/^\P{sc=Mahajani}+$/u.test(nonMatchSymbols),
	"`\\P{sc=Mahajani}` matches all proper symbols"
);
assert(
	/^\P{sc=Mahj}+$/u.test(nonMatchSymbols),
	"`\\P{sc=Mahj}` matches all proper symbols"
);