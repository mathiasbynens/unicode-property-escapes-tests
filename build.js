// The maximum number of code points in the string used for the `\p{…}` test.
const MAX_MATCH_LENGTH = 0x10FFFF;
// The maximum number of code points in the string used for the `\P{…}` test.
const MAX_NON_MATCH_LENGTH = 256;
// Higher values result in more accurate, but larger (and slower) tests.
// Lower values result in less accurate, but smaller (and faster) tests.

const fs = require('fs');
const jsesc = require('jsesc');

const _template = require('lodash.template');
const TEST_TEMPLATE = fs.readFileSync('templates/test.template', 'utf8');
const template = _template(TEST_TEMPLATE);

const escape = (value) => {
	return jsesc(value, {
		'quotes': 'double',
		'wrap': true,
	});
};

const findInverse = (symbols) => {
	let length = 0;
	let nonMatchSymbols = '';
	for (let codePoint = 0x0000; codePoint <= 0x10FFFF; codePoint++) {
		const symbol = String.fromCodePoint(codePoint);
		if (symbols.includes(symbol)) {
			continue;
		}
		nonMatchSymbols += symbol;
		if (++length == MAX_NON_MATCH_LENGTH) {
			break;
		}
	}
	return nonMatchSymbols;
};

const generateExpressions = require('./generate-expressions.js');

const handleExpression = (property, value, symbols) => {
	const expressions = generateExpressions(property, value);
	const mainExpression = expressions[0];
	const outputFile = mainExpression.replace('=', '_-_');
	console.log(`Handling \`\\p{${ mainExpression }}\`…`);
	const nonMatchSymbols = mainExpression == 'Any' ? '' : findInverse(symbols);
	symbols = symbols.join('');
	const output = template({
		'mainExpression': mainExpression,
		'expressions': expressions,
		'matchSymbols': escape(symbols.slice(0, MAX_MATCH_LENGTH)),
		'nonMatchSymbols': escape(nonMatchSymbols),
		'unicodeVersion': unicodeVersion,
	}).replace(/\n{3,}/g, '\n\n').trim() + '\n';
	fs.writeFileSync(`output/${ outputFile }.js`, output);
};

const package = require('./package.json');
const dependencies = Object.keys(package.devDependencies);
const unicodePackage = dependencies.find((name) =>/^unicode-\d/.test(name));
const unicodeVersion = unicodePackage.replace(/^unicode-/g, '');

const properties = require('regenerate-unicode-properties');
for (const [property, values] of properties) {
	for (const value of values) {
		const expression = `${ property }=${ value }`;
		const symbols = (() => {
			try {
				return require(`${ unicodePackage }/${ property }/${ value }/symbols.js`);
			} catch (exception) {
				return require(`unicode-tr51/${ value }.js`);
			}
		})();
		handleExpression(property, value, symbols);
	}
}
