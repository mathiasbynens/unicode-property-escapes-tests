// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Bamum`
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
		[0x00A6A0, 0x00A6F7],
		[0x016800, 0x016A38]
	]
});
assert(
	/^\p{Script_Extensions=Bamum}+$/u.test(matchSymbols),
	"`\\p{Script_Extensions=Bamum}` matches all proper symbols"
);
assert(
	/^\p{Script_Extensions=Bamu}+$/u.test(matchSymbols),
	"`\\p{Script_Extensions=Bamu}` matches all proper symbols"
);
assert(
	/^\p{scx=Bamum}+$/u.test(matchSymbols),
	"`\\p{scx=Bamum}` matches all proper symbols"
);
assert(
	/^\p{scx=Bamu}+$/u.test(matchSymbols),
	"`\\p{scx=Bamu}` matches all proper symbols"
);

const nonMatchSymbols = buildString({
	loneCodePoints: [],
	ranges: [
		[0x000000, 0x00A69F],
		[0x00A6F8, 0x0167FF],
		[0x016A39, 0x10FFFF]
	]
});
assert(
	/^\P{Script_Extensions=Bamum}+$/u.test(nonMatchSymbols),
	"`\\P{Script_Extensions=Bamum}` matches all proper symbols"
);
assert(
	/^\P{Script_Extensions=Bamu}+$/u.test(nonMatchSymbols),
	"`\\P{Script_Extensions=Bamu}` matches all proper symbols"
);
assert(
	/^\P{scx=Bamum}+$/u.test(nonMatchSymbols),
	"`\\P{scx=Bamum}` matches all proper symbols"
);
assert(
	/^\P{scx=Bamu}+$/u.test(nonMatchSymbols),
	"`\\P{scx=Bamu}` matches all proper symbols"
);