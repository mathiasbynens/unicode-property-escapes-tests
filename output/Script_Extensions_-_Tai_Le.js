// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Tai_Le`
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
		[0x001040, 0x001049],
		[0x001950, 0x00196D],
		[0x001970, 0x001974]
	]
});
assert(
	/^\p{Script_Extensions=Tai_Le}+$/u.test(matchSymbols),
	"`\\p{Script_Extensions=Tai_Le}` matches all proper symbols"
);
assert(
	/^\p{Script_Extensions=Tale}+$/u.test(matchSymbols),
	"`\\p{Script_Extensions=Tale}` matches all proper symbols"
);
assert(
	/^\p{scx=Tai_Le}+$/u.test(matchSymbols),
	"`\\p{scx=Tai_Le}` matches all proper symbols"
);
assert(
	/^\p{scx=Tale}+$/u.test(matchSymbols),
	"`\\p{scx=Tale}` matches all proper symbols"
);

const nonMatchSymbols = buildString({
	loneCodePoints: [],
	ranges: [
		[0x000000, 0x00103F],
		[0x00104A, 0x00194F],
		[0x00196E, 0x00196F],
		[0x001975, 0x10FFFF]
	]
});
assert(
	/^\P{Script_Extensions=Tai_Le}+$/u.test(nonMatchSymbols),
	"`\\P{Script_Extensions=Tai_Le}` matches all proper symbols"
);
assert(
	/^\P{Script_Extensions=Tale}+$/u.test(nonMatchSymbols),
	"`\\P{Script_Extensions=Tale}` matches all proper symbols"
);
assert(
	/^\P{scx=Tai_Le}+$/u.test(nonMatchSymbols),
	"`\\P{scx=Tai_Le}` matches all proper symbols"
);
assert(
	/^\P{scx=Tale}+$/u.test(nonMatchSymbols),
	"`\\P{scx=Tale}` matches all proper symbols"
);