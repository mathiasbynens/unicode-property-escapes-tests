// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Multani`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v9.0.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
---*/

const buildString = ({ loneCodePoints, ranges }) => {
	const CHUNK_SIZE = 10000;
	let result = String.fromCodePoint(...loneCodePoints);
	for (const [start, end] of ranges) {
		const codePoints = [];
		for (let length = 0, codePoint = start; codePoint <= end; codePoint++) {
			codePoints[length++] = codePoint;
			if (length === CHUNK_SIZE) {
				result += String.fromCodePoint(...codePoints);
				codePoints.length = length = 0;
			}
		}
		result += String.fromCodePoint(...codePoints);
	}
	return result;
};

const matchSymbols = buildString({
	loneCodePoints: [
		0x011288
	],
	ranges: [
		[0x000A66, 0x000A6F],
		[0x011280, 0x011286],
		[0x01128A, 0x01128D],
		[0x01128F, 0x01129D],
		[0x01129F, 0x0112A9]
	]
});
assert(
	/^\p{Script_Extensions=Multani}+$/u.test(matchSymbols),
	"`\\p{Script_Extensions=Multani}` matches all proper symbols"
);
assert(
	/^\p{Script_Extensions=Mult}+$/u.test(matchSymbols),
	"`\\p{Script_Extensions=Mult}` matches all proper symbols"
);
assert(
	/^\p{scx=Multani}+$/u.test(matchSymbols),
	"`\\p{scx=Multani}` matches all proper symbols"
);
assert(
	/^\p{scx=Mult}+$/u.test(matchSymbols),
	"`\\p{scx=Mult}` matches all proper symbols"
);

const nonMatchSymbols = buildString({
	loneCodePoints: [
		0x011287,
		0x011289,
		0x01128E,
		0x01129E
	],
	ranges: [
		[0x00DC00, 0x00DFFF],
		[0x000000, 0x000A65],
		[0x000A70, 0x00DBFF],
		[0x00E000, 0x01127F],
		[0x0112AA, 0x10FFFF]
	]
});
assert(
	/^\P{Script_Extensions=Multani}+$/u.test(nonMatchSymbols),
	"`\\P{Script_Extensions=Multani}` matches all proper symbols"
);
assert(
	/^\P{Script_Extensions=Mult}+$/u.test(nonMatchSymbols),
	"`\\P{Script_Extensions=Mult}` matches all proper symbols"
);
assert(
	/^\P{scx=Multani}+$/u.test(nonMatchSymbols),
	"`\\P{scx=Multani}` matches all proper symbols"
);
assert(
	/^\P{scx=Mult}+$/u.test(nonMatchSymbols),
	"`\\P{scx=Mult}` matches all proper symbols"
);
