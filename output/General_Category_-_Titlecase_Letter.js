// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `General_Category=Titlecase_Letter`
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
		0x0001C5,
		0x0001C8,
		0x0001CB,
		0x0001F2,
		0x001FBC,
		0x001FCC,
		0x001FFC
	],
	ranges: [
		[0x001F88, 0x001F8F],
		[0x001F98, 0x001F9F],
		[0x001FA8, 0x001FAF]
	]
});
assert(
	/^\p{General_Category=Titlecase_Letter}+$/u.test(matchSymbols),
	"`\\p{General_Category=Titlecase_Letter}` matches all proper symbols"
);
assert(
	/^\p{General_Category=Lt}+$/u.test(matchSymbols),
	"`\\p{General_Category=Lt}` matches all proper symbols"
);
assert(
	/^\p{gc=Titlecase_Letter}+$/u.test(matchSymbols),
	"`\\p{gc=Titlecase_Letter}` matches all proper symbols"
);
assert(
	/^\p{gc=Lt}+$/u.test(matchSymbols),
	"`\\p{gc=Lt}` matches all proper symbols"
);
assert(
	/^\p{Titlecase_Letter}+$/u.test(matchSymbols),
	"`\\p{Titlecase_Letter}` matches all proper symbols"
);
assert(
	/^\p{Lt}+$/u.test(matchSymbols),
	"`\\p{Lt}` matches all proper symbols"
);

const nonMatchSymbols = buildString({
	loneCodePoints: [],
	ranges: [
		[0x00DC00, 0x00DFFF],
		[0x000000, 0x0001C4],
		[0x0001C6, 0x0001C7],
		[0x0001C9, 0x0001CA],
		[0x0001CC, 0x0001F1],
		[0x0001F3, 0x001F87],
		[0x001F90, 0x001F97],
		[0x001FA0, 0x001FA7],
		[0x001FB0, 0x001FBB],
		[0x001FBD, 0x001FCB],
		[0x001FCD, 0x001FFB],
		[0x001FFD, 0x00DBFF],
		[0x00E000, 0x10FFFF]
	]
});
assert(
	/^\P{General_Category=Titlecase_Letter}+$/u.test(nonMatchSymbols),
	"`\\P{General_Category=Titlecase_Letter}` matches all proper symbols"
);
assert(
	/^\P{General_Category=Lt}+$/u.test(nonMatchSymbols),
	"`\\P{General_Category=Lt}` matches all proper symbols"
);
assert(
	/^\P{gc=Titlecase_Letter}+$/u.test(nonMatchSymbols),
	"`\\P{gc=Titlecase_Letter}` matches all proper symbols"
);
assert(
	/^\P{gc=Lt}+$/u.test(nonMatchSymbols),
	"`\\P{gc=Lt}` matches all proper symbols"
);
assert(
	/^\P{Titlecase_Letter}+$/u.test(nonMatchSymbols),
	"`\\P{Titlecase_Letter}` matches all proper symbols"
);
assert(
	/^\P{Lt}+$/u.test(nonMatchSymbols),
	"`\\P{Lt}` matches all proper symbols"
);
