// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Hanunoo`
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
		[0x001720, 0x001736]
	]
});
assert(
	/^\p{Script_Extensions=Hanunoo}+$/u.test(matchSymbols),
	"`\\p{Script_Extensions=Hanunoo}` matches all proper symbols"
);
assert(
	/^\p{Script_Extensions=Hano}+$/u.test(matchSymbols),
	"`\\p{Script_Extensions=Hano}` matches all proper symbols"
);
assert(
	/^\p{scx=Hanunoo}+$/u.test(matchSymbols),
	"`\\p{scx=Hanunoo}` matches all proper symbols"
);
assert(
	/^\p{scx=Hano}+$/u.test(matchSymbols),
	"`\\p{scx=Hano}` matches all proper symbols"
);

const nonMatchSymbols = buildString({
	loneCodePoints: [],
	ranges: [
		[0x000000, 0x00171F],
		[0x001737, 0x10FFFF]
	]
});
assert(
	/^\P{Script_Extensions=Hanunoo}+$/u.test(nonMatchSymbols),
	"`\\P{Script_Extensions=Hanunoo}` matches all proper symbols"
);
assert(
	/^\P{Script_Extensions=Hano}+$/u.test(nonMatchSymbols),
	"`\\P{Script_Extensions=Hano}` matches all proper symbols"
);
assert(
	/^\P{scx=Hanunoo}+$/u.test(nonMatchSymbols),
	"`\\P{scx=Hanunoo}` matches all proper symbols"
);
assert(
	/^\P{scx=Hano}+$/u.test(nonMatchSymbols),
	"`\\P{scx=Hano}` matches all proper symbols"
);