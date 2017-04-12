// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Javanese`
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
		[0x00A980, 0x00A9CD],
		[0x00A9CF, 0x00A9D9],
		[0x00A9DE, 0x00A9DF]
	]
});
assert(
	/^\p{Script_Extensions=Javanese}+$/u.test(matchSymbols),
	"`\\p{Script_Extensions=Javanese}` matches all proper symbols"
);
assert(
	/^\p{Script_Extensions=Java}+$/u.test(matchSymbols),
	"`\\p{Script_Extensions=Java}` matches all proper symbols"
);
assert(
	/^\p{scx=Javanese}+$/u.test(matchSymbols),
	"`\\p{scx=Javanese}` matches all proper symbols"
);
assert(
	/^\p{scx=Java}+$/u.test(matchSymbols),
	"`\\p{scx=Java}` matches all proper symbols"
);

const nonMatchSymbols = buildString({
	loneCodePoints: [
		0x00A9CE
	],
	ranges: [
		[0x000000, 0x00A97F],
		[0x00A9DA, 0x00A9DD],
		[0x00A9E0, 0x10FFFF]
	]
});
assert(
	/^\P{Script_Extensions=Javanese}+$/u.test(nonMatchSymbols),
	"`\\P{Script_Extensions=Javanese}` matches all proper symbols"
);
assert(
	/^\P{Script_Extensions=Java}+$/u.test(nonMatchSymbols),
	"`\\P{Script_Extensions=Java}` matches all proper symbols"
);
assert(
	/^\P{scx=Javanese}+$/u.test(nonMatchSymbols),
	"`\\P{scx=Javanese}` matches all proper symbols"
);
assert(
	/^\P{scx=Java}+$/u.test(nonMatchSymbols),
	"`\\P{scx=Java}` matches all proper symbols"
);