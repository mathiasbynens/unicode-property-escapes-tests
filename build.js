const fs = require('fs');
const jsesc = require('jsesc');

const UNICODE_VERSION = require(
	'regenerate-unicode-properties/unicode-version.js'
);

const _template = require('lodash.template');
const TEST_TEMPLATE = fs.readFileSync('templates/test.template', 'utf8');
const template = _template(TEST_TEMPLATE);

const escape = (value) => {
	return jsesc(value, {
		'compact': false,
		'numbers': 'hexadecimal',
		'quotes': 'double',
		'wrap': true,
	});
};

const regenerate = require('regenerate');
const UNICODE_SET = regenerate().addRange(0x0, 0x10FFFF);

const codePointToString = (codePoint) => {
	return '0x' + ('00000' + codePoint.toString(16).toUpperCase()).slice(-6);
};

regenerate.prototype.toTestData = function() {
	const data = this.data;
	// Iterate over the data per `(start, end)` pair.
	let index = 0;
	const length = data.length;
	const loneCodePoints = [];
	const ranges = [];
	while (index < length) {
		let start = data[index];
		let end = data[index + 1] - 1; // Note: the `- 1` makes `end` inclusive.
		if (start == end) {
			loneCodePoints.push(codePointToString(start));
		} else {
			ranges.push(`[${ codePointToString(start) }, ${ codePointToString(end) }]`);
		}
		index += 2;
	}
	const loneCodePointsOutput = loneCodePoints.length ?
		`[\n\t\t${ loneCodePoints.join(',\n\t\t') }\n\t]` :
		`[]`;
	const rangesOutput = ranges.length ?
		`[\n\t\t${ ranges.join(',\n\t\t') }\n\t]` :
		`[]`;
	return `{\n\tloneCodePoints: ${ loneCodePointsOutput },\n\tranges: ${ rangesOutput }\n}`;
};

const generateExpressions = require('./generate-expressions.js');

const handleExpression = (property, value, symbols) => {
	const expressions = generateExpressions(property, value);
	const mainExpression = expressions[0];
	console.log(`Handling \`\\p{${ mainExpression }}\`…`);
	const outputFile = mainExpression.replace('=', '_-_');
	const matchSymbols = symbols.toTestData();
	const nonMatchSymbols = mainExpression == 'Any' ?
			'' :
			UNICODE_SET.clone().remove(symbols).toTestData();
	const output = template({
		'mainExpression': mainExpression,
		'expressions': expressions,
		'matchSymbols': matchSymbols,
		'nonMatchSymbols': nonMatchSymbols,
		'unicodeVersion': UNICODE_VERSION,
	}).replace(/\n{3,}/g, '\n\n').trim() + '\n';
	fs.writeFileSync(`output/${ outputFile }.js`, output);
};

const properties = require('regenerate-unicode-properties');
for (const [property, values] of properties) {
	for (const value of values) {
		const expression = `${ property }=${ value }`;
		const set = require(
			`regenerate-unicode-properties/${ property }/${ value }.js`
		);
		handleExpression(property, value, set);
	}
}
