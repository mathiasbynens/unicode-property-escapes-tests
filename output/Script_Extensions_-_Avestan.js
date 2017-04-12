// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Avestan`
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
		[0x010B00, 0x010B35],
		[0x010B39, 0x010B3F]
	]
});
assert(
	/^\p{Script_Extensions=Avestan}+$/u.test(matchSymbols),
	"`\\p{Script_Extensions=Avestan}` matches all proper symbols"
);
assert(
	/^\p{Script_Extensions=Avst}+$/u.test(matchSymbols),
	"`\\p{Script_Extensions=Avst}` matches all proper symbols"
);
assert(
	/^\p{scx=Avestan}+$/u.test(matchSymbols),
	"`\\p{scx=Avestan}` matches all proper symbols"
);
assert(
	/^\p{scx=Avst}+$/u.test(matchSymbols),
	"`\\p{scx=Avst}` matches all proper symbols"
);

const nonMatchSymbols = buildString({
	loneCodePoints: [],
	ranges: [
		[0x000000, 0x010AFF],
		[0x010B36, 0x010B38],
		[0x010B40, 0x10FFFF]
	]
});
assert(
	/^\P{Script_Extensions=Avestan}+$/u.test(nonMatchSymbols),
	"`\\P{Script_Extensions=Avestan}` matches all proper symbols"
);
assert(
	/^\P{Script_Extensions=Avst}+$/u.test(nonMatchSymbols),
	"`\\P{Script_Extensions=Avst}` matches all proper symbols"
);
assert(
	/^\P{scx=Avestan}+$/u.test(nonMatchSymbols),
	"`\\P{scx=Avestan}` matches all proper symbols"
);
assert(
	/^\P{scx=Avst}+$/u.test(nonMatchSymbols),
	"`\\P{scx=Avst}` matches all proper symbols"
);