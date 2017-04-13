const assert = require('assert');

// `build-string.js` doesn’t export anything, so let’s `eval` it.
eval(require('fs').readFileSync('./harness/buildString.js', 'utf8'));

const symbols = buildString({
	loneCodePoints: [],
	ranges: [
		[0x00DC00, 0x00DFFF],
		[0x000080, 0x00DBFF],
		[0x00E000, 0x10FFFF]
	]
});

assert.equal([...symbols].length, 1113984);
