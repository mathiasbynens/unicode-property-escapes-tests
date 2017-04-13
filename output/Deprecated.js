// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Deprecated`
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
		0x000149,
		0x000673,
		0x000F77,
		0x000F79,
		0x0E0001
	],
	ranges: [
		[0x0017A3, 0x0017A4],
		[0x00206A, 0x00206F],
		[0x002329, 0x00232A]
	]
});
assert(
	/^\p{Deprecated}+$/u.test(matchSymbols),
	"`\\p{Deprecated}` matches all proper symbols"
);
assert(
	/^\p{Dep}+$/u.test(matchSymbols),
	"`\\p{Dep}` matches all proper symbols"
);

const nonMatchSymbols = buildString({
	loneCodePoints: [
		0x000F78
	],
	ranges: [
		[0x00DC00, 0x00DFFF],
		[0x000000, 0x000148],
		[0x00014A, 0x000672],
		[0x000674, 0x000F76],
		[0x000F7A, 0x0017A2],
		[0x0017A5, 0x002069],
		[0x002070, 0x002328],
		[0x00232B, 0x00DBFF],
		[0x00E000, 0x0E0000],
		[0x0E0002, 0x10FFFF]
	]
});
assert(
	/^\P{Deprecated}+$/u.test(nonMatchSymbols),
	"`\\P{Deprecated}` matches all proper symbols"
);
assert(
	/^\P{Dep}+$/u.test(nonMatchSymbols),
	"`\\P{Dep}` matches all proper symbols"
);
