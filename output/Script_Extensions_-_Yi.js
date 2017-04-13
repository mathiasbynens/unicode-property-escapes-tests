// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Yi`
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
		0x0030FB
	],
	ranges: [
		[0x003001, 0x003002],
		[0x003008, 0x003011],
		[0x003014, 0x00301B],
		[0x00A000, 0x00A48C],
		[0x00A490, 0x00A4C6],
		[0x00FF61, 0x00FF65]
	]
});
assert(
	/^\p{Script_Extensions=Yi}+$/u.test(matchSymbols),
	"`\\p{Script_Extensions=Yi}` matches all proper symbols"
);
assert(
	/^\p{Script_Extensions=Yiii}+$/u.test(matchSymbols),
	"`\\p{Script_Extensions=Yiii}` matches all proper symbols"
);
assert(
	/^\p{scx=Yi}+$/u.test(matchSymbols),
	"`\\p{scx=Yi}` matches all proper symbols"
);
assert(
	/^\p{scx=Yiii}+$/u.test(matchSymbols),
	"`\\p{scx=Yiii}` matches all proper symbols"
);

const nonMatchSymbols = buildString({
	loneCodePoints: [],
	ranges: [
		[0x00DC00, 0x00DFFF],
		[0x000000, 0x003000],
		[0x003003, 0x003007],
		[0x003012, 0x003013],
		[0x00301C, 0x0030FA],
		[0x0030FC, 0x009FFF],
		[0x00A48D, 0x00A48F],
		[0x00A4C7, 0x00DBFF],
		[0x00E000, 0x00FF60],
		[0x00FF66, 0x10FFFF]
	]
});
assert(
	/^\P{Script_Extensions=Yi}+$/u.test(nonMatchSymbols),
	"`\\P{Script_Extensions=Yi}` matches all proper symbols"
);
assert(
	/^\P{Script_Extensions=Yiii}+$/u.test(nonMatchSymbols),
	"`\\P{Script_Extensions=Yiii}` matches all proper symbols"
);
assert(
	/^\P{scx=Yi}+$/u.test(nonMatchSymbols),
	"`\\P{scx=Yi}` matches all proper symbols"
);
assert(
	/^\P{scx=Yiii}+$/u.test(nonMatchSymbols),
	"`\\P{scx=Yiii}` matches all proper symbols"
);
