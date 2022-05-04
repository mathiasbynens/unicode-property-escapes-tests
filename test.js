const assert = require('assert');

// The script doesn’t export anything, so let’s `eval` it.
eval(require('fs').readFileSync('./harness/regExpUtils.js', 'utf8'));

const symbols = buildString({
	loneCodePoints: [],
	ranges: [
		[0x00DC00, 0x00DFFF],
		[0x000080, 0x00DBFF],
		[0x00E000, 0x10FFFF]
	]
});

assert.equal([...symbols].length, 1_113_984);

assert.throws(
	() => {
		testPropertyEscapes(/^b+$/, 'abc', '.');
	},
	/U\+000061/
);
