// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Hebrew`
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
		0x00FB3E
	],
	ranges: [
		[0x000591, 0x0005C7],
		[0x0005D0, 0x0005EA],
		[0x0005F0, 0x0005F4],
		[0x00FB1D, 0x00FB36],
		[0x00FB38, 0x00FB3C],
		[0x00FB40, 0x00FB41],
		[0x00FB43, 0x00FB44],
		[0x00FB46, 0x00FB4F]
	]
});
assert(
	/^\p{Script_Extensions=Hebrew}+$/u.test(matchSymbols),
	"`\\p{Script_Extensions=Hebrew}` matches all proper symbols"
);
assert(
	/^\p{Script_Extensions=Hebr}+$/u.test(matchSymbols),
	"`\\p{Script_Extensions=Hebr}` matches all proper symbols"
);
assert(
	/^\p{scx=Hebrew}+$/u.test(matchSymbols),
	"`\\p{scx=Hebrew}` matches all proper symbols"
);
assert(
	/^\p{scx=Hebr}+$/u.test(matchSymbols),
	"`\\p{scx=Hebr}` matches all proper symbols"
);

const nonMatchSymbols = buildString({
	loneCodePoints: [
		0x00FB37,
		0x00FB3D,
		0x00FB3F,
		0x00FB42,
		0x00FB45
	],
	ranges: [
		[0x000000, 0x000590],
		[0x0005C8, 0x0005CF],
		[0x0005EB, 0x0005EF],
		[0x0005F5, 0x00FB1C],
		[0x00FB50, 0x10FFFF]
	]
});
assert(
	/^\P{Script_Extensions=Hebrew}+$/u.test(nonMatchSymbols),
	"`\\P{Script_Extensions=Hebrew}` matches all proper symbols"
);
assert(
	/^\P{Script_Extensions=Hebr}+$/u.test(nonMatchSymbols),
	"`\\P{Script_Extensions=Hebr}` matches all proper symbols"
);
assert(
	/^\P{scx=Hebrew}+$/u.test(nonMatchSymbols),
	"`\\P{scx=Hebrew}` matches all proper symbols"
);
assert(
	/^\P{scx=Hebr}+$/u.test(nonMatchSymbols),
	"`\\P{scx=Hebr}` matches all proper symbols"
);