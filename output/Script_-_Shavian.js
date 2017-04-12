// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Shavian`
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
		[0x010450, 0x01047F]
	]
});
assert(
	/^\p{Script=Shavian}+$/u.test(matchSymbols),
	"`\\p{Script=Shavian}` matches all proper symbols"
);
assert(
	/^\p{Script=Shaw}+$/u.test(matchSymbols),
	"`\\p{Script=Shaw}` matches all proper symbols"
);
assert(
	/^\p{sc=Shavian}+$/u.test(matchSymbols),
	"`\\p{sc=Shavian}` matches all proper symbols"
);
assert(
	/^\p{sc=Shaw}+$/u.test(matchSymbols),
	"`\\p{sc=Shaw}` matches all proper symbols"
);

const nonMatchSymbols = buildString({
	loneCodePoints: [],
	ranges: [
		[0x000000, 0x01044F],
		[0x010480, 0x10FFFF]
	]
});
assert(
	/^\P{Script=Shavian}+$/u.test(nonMatchSymbols),
	"`\\P{Script=Shavian}` matches all proper symbols"
);
assert(
	/^\P{Script=Shaw}+$/u.test(nonMatchSymbols),
	"`\\P{Script=Shaw}` matches all proper symbols"
);
assert(
	/^\P{sc=Shavian}+$/u.test(nonMatchSymbols),
	"`\\P{sc=Shavian}` matches all proper symbols"
);
assert(
	/^\P{sc=Shaw}+$/u.test(nonMatchSymbols),
	"`\\P{sc=Shaw}` matches all proper symbols"
);