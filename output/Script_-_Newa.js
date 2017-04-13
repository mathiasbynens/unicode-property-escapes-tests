// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Newa`
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
		0x01145B,
		0x01145D
	],
	ranges: [
		[0x011400, 0x011459]
	]
});
assert(
	/^\p{Script=Newa}+$/u.test(matchSymbols),
	"`\\p{Script=Newa}` matches all proper symbols"
);
assert(
	/^\p{Script=Newa}+$/u.test(matchSymbols),
	"`\\p{Script=Newa}` matches all proper symbols"
);
assert(
	/^\p{sc=Newa}+$/u.test(matchSymbols),
	"`\\p{sc=Newa}` matches all proper symbols"
);
assert(
	/^\p{sc=Newa}+$/u.test(matchSymbols),
	"`\\p{sc=Newa}` matches all proper symbols"
);

const nonMatchSymbols = buildString({
	loneCodePoints: [
		0x01145A,
		0x01145C
	],
	ranges: [
		[0x00DC00, 0x00DFFF],
		[0x000000, 0x00DBFF],
		[0x00E000, 0x0113FF],
		[0x01145E, 0x10FFFF]
	]
});
assert(
	/^\P{Script=Newa}+$/u.test(nonMatchSymbols),
	"`\\P{Script=Newa}` matches all proper symbols"
);
assert(
	/^\P{Script=Newa}+$/u.test(nonMatchSymbols),
	"`\\P{Script=Newa}` matches all proper symbols"
);
assert(
	/^\P{sc=Newa}+$/u.test(nonMatchSymbols),
	"`\\P{sc=Newa}` matches all proper symbols"
);
assert(
	/^\P{sc=Newa}+$/u.test(nonMatchSymbols),
	"`\\P{sc=Newa}` matches all proper symbols"
);
