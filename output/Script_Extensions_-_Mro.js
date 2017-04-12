// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Mro`
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
		[0x016A40, 0x016A5E],
		[0x016A60, 0x016A69],
		[0x016A6E, 0x016A6F]
	]
});
assert(
	/^\p{Script_Extensions=Mro}+$/u.test(matchSymbols),
	"`\\p{Script_Extensions=Mro}` matches all proper symbols"
);
assert(
	/^\p{Script_Extensions=Mroo}+$/u.test(matchSymbols),
	"`\\p{Script_Extensions=Mroo}` matches all proper symbols"
);
assert(
	/^\p{scx=Mro}+$/u.test(matchSymbols),
	"`\\p{scx=Mro}` matches all proper symbols"
);
assert(
	/^\p{scx=Mroo}+$/u.test(matchSymbols),
	"`\\p{scx=Mroo}` matches all proper symbols"
);

const nonMatchSymbols = buildString({
	loneCodePoints: [
		0x016A5F
	],
	ranges: [
		[0x000000, 0x016A3F],
		[0x016A6A, 0x016A6D],
		[0x016A70, 0x10FFFF]
	]
});
assert(
	/^\P{Script_Extensions=Mro}+$/u.test(nonMatchSymbols),
	"`\\P{Script_Extensions=Mro}` matches all proper symbols"
);
assert(
	/^\P{Script_Extensions=Mroo}+$/u.test(nonMatchSymbols),
	"`\\P{Script_Extensions=Mroo}` matches all proper symbols"
);
assert(
	/^\P{scx=Mro}+$/u.test(nonMatchSymbols),
	"`\\P{scx=Mro}` matches all proper symbols"
);
assert(
	/^\P{scx=Mroo}+$/u.test(nonMatchSymbols),
	"`\\P{scx=Mroo}` matches all proper symbols"
);