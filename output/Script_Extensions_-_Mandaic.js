// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Mandaic`
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
		0x000640,
		0x00085E
	],
	ranges: [
		[0x000840, 0x00085B]
	]
});
assert(
	/^\p{Script_Extensions=Mandaic}+$/u.test(matchSymbols),
	"`\\p{Script_Extensions=Mandaic}` matches all proper symbols"
);
assert(
	/^\p{Script_Extensions=Mand}+$/u.test(matchSymbols),
	"`\\p{Script_Extensions=Mand}` matches all proper symbols"
);
assert(
	/^\p{scx=Mandaic}+$/u.test(matchSymbols),
	"`\\p{scx=Mandaic}` matches all proper symbols"
);
assert(
	/^\p{scx=Mand}+$/u.test(matchSymbols),
	"`\\p{scx=Mand}` matches all proper symbols"
);

const nonMatchSymbols = buildString({
	loneCodePoints: [],
	ranges: [
		[0x000000, 0x00063F],
		[0x000641, 0x00083F],
		[0x00085C, 0x00085D],
		[0x00085F, 0x10FFFF]
	]
});
assert(
	/^\P{Script_Extensions=Mandaic}+$/u.test(nonMatchSymbols),
	"`\\P{Script_Extensions=Mandaic}` matches all proper symbols"
);
assert(
	/^\P{Script_Extensions=Mand}+$/u.test(nonMatchSymbols),
	"`\\P{Script_Extensions=Mand}` matches all proper symbols"
);
assert(
	/^\P{scx=Mandaic}+$/u.test(nonMatchSymbols),
	"`\\P{scx=Mandaic}` matches all proper symbols"
);
assert(
	/^\P{scx=Mand}+$/u.test(nonMatchSymbols),
	"`\\P{scx=Mand}` matches all proper symbols"
);