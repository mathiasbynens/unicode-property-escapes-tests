// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Brahmi`
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
		0x01107F
	],
	ranges: [
		[0x011000, 0x01104D],
		[0x011052, 0x01106F]
	]
});
assert(
	/^\p{Script=Brahmi}+$/u.test(matchSymbols),
	"`\\p{Script=Brahmi}` matches all proper symbols"
);
assert(
	/^\p{Script=Brah}+$/u.test(matchSymbols),
	"`\\p{Script=Brah}` matches all proper symbols"
);
assert(
	/^\p{sc=Brahmi}+$/u.test(matchSymbols),
	"`\\p{sc=Brahmi}` matches all proper symbols"
);
assert(
	/^\p{sc=Brah}+$/u.test(matchSymbols),
	"`\\p{sc=Brah}` matches all proper symbols"
);

const nonMatchSymbols = buildString({
	loneCodePoints: [],
	ranges: [
		[0x000000, 0x010FFF],
		[0x01104E, 0x011051],
		[0x011070, 0x01107E],
		[0x011080, 0x10FFFF]
	]
});
assert(
	/^\P{Script=Brahmi}+$/u.test(nonMatchSymbols),
	"`\\P{Script=Brahmi}` matches all proper symbols"
);
assert(
	/^\P{Script=Brah}+$/u.test(nonMatchSymbols),
	"`\\P{Script=Brah}` matches all proper symbols"
);
assert(
	/^\P{sc=Brahmi}+$/u.test(nonMatchSymbols),
	"`\\P{sc=Brahmi}` matches all proper symbols"
);
assert(
	/^\P{sc=Brah}+$/u.test(nonMatchSymbols),
	"`\\P{sc=Brah}` matches all proper symbols"
);