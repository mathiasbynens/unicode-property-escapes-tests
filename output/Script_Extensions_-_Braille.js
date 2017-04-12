// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Braille`
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
		[0x002800, 0x0028FF]
	]
});
assert(
	/^\p{Script_Extensions=Braille}+$/u.test(matchSymbols),
	"`\\p{Script_Extensions=Braille}` matches all proper symbols"
);
assert(
	/^\p{Script_Extensions=Brai}+$/u.test(matchSymbols),
	"`\\p{Script_Extensions=Brai}` matches all proper symbols"
);
assert(
	/^\p{scx=Braille}+$/u.test(matchSymbols),
	"`\\p{scx=Braille}` matches all proper symbols"
);
assert(
	/^\p{scx=Brai}+$/u.test(matchSymbols),
	"`\\p{scx=Brai}` matches all proper symbols"
);

const nonMatchSymbols = buildString({
	loneCodePoints: [],
	ranges: [
		[0x000000, 0x0027FF],
		[0x002900, 0x10FFFF]
	]
});
assert(
	/^\P{Script_Extensions=Braille}+$/u.test(nonMatchSymbols),
	"`\\P{Script_Extensions=Braille}` matches all proper symbols"
);
assert(
	/^\P{Script_Extensions=Brai}+$/u.test(nonMatchSymbols),
	"`\\P{Script_Extensions=Brai}` matches all proper symbols"
);
assert(
	/^\P{scx=Braille}+$/u.test(nonMatchSymbols),
	"`\\P{scx=Braille}` matches all proper symbols"
);
assert(
	/^\P{scx=Brai}+$/u.test(nonMatchSymbols),
	"`\\P{scx=Brai}` matches all proper symbols"
);