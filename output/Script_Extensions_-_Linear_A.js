// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Linear_A`
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
		[0x010107, 0x010133],
		[0x010600, 0x010736],
		[0x010740, 0x010755],
		[0x010760, 0x010767]
	]
});
assert(
	/^\p{Script_Extensions=Linear_A}+$/u.test(matchSymbols),
	"`\\p{Script_Extensions=Linear_A}` matches all proper symbols"
);
assert(
	/^\p{Script_Extensions=Lina}+$/u.test(matchSymbols),
	"`\\p{Script_Extensions=Lina}` matches all proper symbols"
);
assert(
	/^\p{scx=Linear_A}+$/u.test(matchSymbols),
	"`\\p{scx=Linear_A}` matches all proper symbols"
);
assert(
	/^\p{scx=Lina}+$/u.test(matchSymbols),
	"`\\p{scx=Lina}` matches all proper symbols"
);

const nonMatchSymbols = buildString({
	loneCodePoints: [],
	ranges: [
		[0x000000, 0x010106],
		[0x010134, 0x0105FF],
		[0x010737, 0x01073F],
		[0x010756, 0x01075F],
		[0x010768, 0x10FFFF]
	]
});
assert(
	/^\P{Script_Extensions=Linear_A}+$/u.test(nonMatchSymbols),
	"`\\P{Script_Extensions=Linear_A}` matches all proper symbols"
);
assert(
	/^\P{Script_Extensions=Lina}+$/u.test(nonMatchSymbols),
	"`\\P{Script_Extensions=Lina}` matches all proper symbols"
);
assert(
	/^\P{scx=Linear_A}+$/u.test(nonMatchSymbols),
	"`\\P{scx=Linear_A}` matches all proper symbols"
);
assert(
	/^\P{scx=Lina}+$/u.test(nonMatchSymbols),
	"`\\P{scx=Lina}` matches all proper symbols"
);