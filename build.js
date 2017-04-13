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

const regenerate = require('./regenerate.js');
const UNICODE_SET = regenerate().addRange(0x0, 0x10FFFF);

const generateExpressions = require('./generate-expressions.js');

const handleExpression = (property, value, symbols) => {
	const expressions = generateExpressions(property, value);
	const mainExpression = expressions[0];
	console.log(`Handling \`\\p{${ mainExpression }}\`…`);
	const outputFile = mainExpression.replace('=', '_-_');
	const matchSymbols = symbols.toTestCode();
	const nonMatchSymbols = mainExpression == 'Any' ?
			'' :
			UNICODE_SET.clone().remove(symbols).toTestCode();
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
