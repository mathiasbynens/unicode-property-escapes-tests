// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Caucasian_Albanian`
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
		0x01056F
	],
	ranges: [
		[0x010530, 0x010563]
	]
});
assert(
	/^\p{Script_Extensions=Caucasian_Albanian}+$/u.test(matchSymbols),
	"`\\p{Script_Extensions=Caucasian_Albanian}` matches all proper symbols"
);
assert(
	/^\p{Script_Extensions=Aghb}+$/u.test(matchSymbols),
	"`\\p{Script_Extensions=Aghb}` matches all proper symbols"
);
assert(
	/^\p{scx=Caucasian_Albanian}+$/u.test(matchSymbols),
	"`\\p{scx=Caucasian_Albanian}` matches all proper symbols"
);
assert(
	/^\p{scx=Aghb}+$/u.test(matchSymbols),
	"`\\p{scx=Aghb}` matches all proper symbols"
);

const nonMatchSymbols = buildString({
	loneCodePoints: [],
	ranges: [
		[0x000000, 0x01052F],
		[0x010564, 0x01056E],
		[0x010570, 0x10FFFF]
	]
});
assert(
	/^\P{Script_Extensions=Caucasian_Albanian}+$/u.test(nonMatchSymbols),
	"`\\P{Script_Extensions=Caucasian_Albanian}` matches all proper symbols"
);
assert(
	/^\P{Script_Extensions=Aghb}+$/u.test(nonMatchSymbols),
	"`\\P{Script_Extensions=Aghb}` matches all proper symbols"
);
assert(
	/^\P{scx=Caucasian_Albanian}+$/u.test(nonMatchSymbols),
	"`\\P{scx=Caucasian_Albanian}` matches all proper symbols"
);
assert(
	/^\P{scx=Aghb}+$/u.test(nonMatchSymbols),
	"`\\P{scx=Aghb}` matches all proper symbols"
);