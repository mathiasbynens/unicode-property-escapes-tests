// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Phags_Pa`
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
		0x001805
	],
	ranges: [
		[0x001802, 0x001803],
		[0x00A840, 0x00A877]
	]
});
assert(
	/^\p{Script_Extensions=Phags_Pa}+$/u.test(matchSymbols),
	"`\\p{Script_Extensions=Phags_Pa}` matches all proper symbols"
);
assert(
	/^\p{Script_Extensions=Phag}+$/u.test(matchSymbols),
	"`\\p{Script_Extensions=Phag}` matches all proper symbols"
);
assert(
	/^\p{scx=Phags_Pa}+$/u.test(matchSymbols),
	"`\\p{scx=Phags_Pa}` matches all proper symbols"
);
assert(
	/^\p{scx=Phag}+$/u.test(matchSymbols),
	"`\\p{scx=Phag}` matches all proper symbols"
);

const nonMatchSymbols = buildString({
	loneCodePoints: [
		0x001804
	],
	ranges: [
		[0x00DC00, 0x00DFFF],
		[0x000000, 0x001801],
		[0x001806, 0x00A83F],
		[0x00A878, 0x00DBFF],
		[0x00E000, 0x10FFFF]
	]
});
assert(
	/^\P{Script_Extensions=Phags_Pa}+$/u.test(nonMatchSymbols),
	"`\\P{Script_Extensions=Phags_Pa}` matches all proper symbols"
);
assert(
	/^\P{Script_Extensions=Phag}+$/u.test(nonMatchSymbols),
	"`\\P{Script_Extensions=Phag}` matches all proper symbols"
);
assert(
	/^\P{scx=Phags_Pa}+$/u.test(nonMatchSymbols),
	"`\\P{scx=Phags_Pa}` matches all proper symbols"
);
assert(
	/^\P{scx=Phag}+$/u.test(nonMatchSymbols),
	"`\\P{scx=Phag}` matches all proper symbols"
);
