// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Samaritan`
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
		[0x000800, 0x00082D],
		[0x000830, 0x00083E]
	]
});
assert(
	/^\p{Script=Samaritan}+$/u.test(matchSymbols),
	"`\\p{Script=Samaritan}` matches all proper symbols"
);
assert(
	/^\p{Script=Samr}+$/u.test(matchSymbols),
	"`\\p{Script=Samr}` matches all proper symbols"
);
assert(
	/^\p{sc=Samaritan}+$/u.test(matchSymbols),
	"`\\p{sc=Samaritan}` matches all proper symbols"
);
assert(
	/^\p{sc=Samr}+$/u.test(matchSymbols),
	"`\\p{sc=Samr}` matches all proper symbols"
);

const nonMatchSymbols = buildString({
	loneCodePoints: [],
	ranges: [
		[0x000000, 0x0007FF],
		[0x00082E, 0x00082F],
		[0x00083F, 0x10FFFF]
	]
});
assert(
	/^\P{Script=Samaritan}+$/u.test(nonMatchSymbols),
	"`\\P{Script=Samaritan}` matches all proper symbols"
);
assert(
	/^\P{Script=Samr}+$/u.test(nonMatchSymbols),
	"`\\P{Script=Samr}` matches all proper symbols"
);
assert(
	/^\P{sc=Samaritan}+$/u.test(nonMatchSymbols),
	"`\\P{sc=Samaritan}` matches all proper symbols"
);
assert(
	/^\P{sc=Samr}+$/u.test(nonMatchSymbols),
	"`\\P{sc=Samr}` matches all proper symbols"
);