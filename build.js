const fs = require('fs');

const jsesc = require('jsesc');

const UNICODE_VERSION = require(
	'regenerate-unicode-properties/unicode-version.js'
);

const stringify = (value) => {
	return jsesc(value, {
		compact: false,
		quotes: 'double',
		wrap: true,
		es6: true,
		indent: '  ',
		indentLevel: 1,
	});
};

const template = require('lodash.template');
const templateOptions = {
	interpolate: /<%=([\s\S]+?)%>/g,
};
const createCharacterPropertyTest = template(
	fs.readFileSync('templates/character-property.template', 'utf8'),
	templateOptions
);
const createPropertyOfStringsTest = template(
	fs.readFileSync('templates/property-of-strings.template', 'utf8'),
	templateOptions
);
const createPropertyOfStringsNegativePTest = template(
	fs.readFileSync('templates/property-of-strings-negative-P.template', 'utf8'),
	templateOptions
);
const createPropertyOfStringsNegativeCharacterClassTest = template(
	fs.readFileSync('templates/property-of-strings-negative-CharacterClass.template', 'utf8'),
	templateOptions
);
const createPropertyOfStringsNegativeUTest = template(
	fs.readFileSync('templates/property-of-strings-negative-u.template', 'utf8'),
	templateOptions
);

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
	const output = createCharacterPropertyTest({
		mainExpression: mainExpression,
		expressions: expressions,
		matchSymbols: matchSymbols,
		nonMatchSymbols: nonMatchSymbols,
		unicodeVersion: UNICODE_VERSION,
	}).replace(/\n{3,}/g, '\n\n').trim() + '\n';
	fs.writeFileSync(`output/generated/${ outputFile }.js`, output);
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

const createNonMatchingStrings = (matchingStrings) => {
	const set = new Set(matchingStrings);
	// 1. Find the longest `DESIRED_MAX_NUMBER_OF_STRINGS` strings.
	const DESIRED_MAX_NUMBER_OF_STRINGS = 5;
	const longestMatchingStrings = [...matchingStrings] // Avoid mutating.
		.sort((a, b) => [...b].length - [...a].length)
		//.filter(string => [...string].length > 1)
		.slice(0, DESIRED_MAX_NUMBER_OF_STRINGS);
	// 2. Generate possibly non-matching strings by removing code points
	//		from the start, end, and code point index 1.
	const nonMatchingStrings = [];
	const addCandidate = (candidate) => {
		// Verify the non-matching candidates are not in `matchingStrings`.
		if (!set.has(candidate)) {
			nonMatchingStrings.push(candidate);
		}
	};
	for (const string of longestMatchingStrings) {
		const symbols = [...string];
		addCandidate(symbols.slice(1).join(''));
		addCandidate(symbols.slice(0, -1).join(''));
		if (symbols.length > 2) {
			addCandidate(symbols[0] + symbols.slice(2).join(''));
		}
	}
	return nonMatchingStrings;
};

const handlePropertyOfStrings = (property, strings) => {
	console.log(`Handling \`\\p{${ property }}\`…`);
	const outputFile = property;
	const matchStrings = strings;
	const nonMatchStrings = createNonMatchingStrings(matchStrings);

	{
		const output = createPropertyOfStringsTest({
			property: property,
			matchStrings: matchStrings,
			nonMatchStrings: nonMatchStrings,
			unicodeVersion: UNICODE_VERSION,
			stringify: stringify,
		}).trim() + '\n';
		fs.writeFileSync(`output/generated/strings/${ outputFile }.js`, output);
	}

	{
		const output = createPropertyOfStringsNegativePTest({
			property: property,
			unicodeVersion: UNICODE_VERSION,
		}).trim() + '\n';
		fs.writeFileSync(`output/generated/strings/${ outputFile }-negative-P.js`, output);
	}

	{
		const output = createPropertyOfStringsNegativeCharacterClassTest({
			property: property,
			unicodeVersion: UNICODE_VERSION,
		}).trim() + '\n';
		fs.writeFileSync(`output/generated/strings/${ outputFile }-negative-CharacterClass.js`, output);
	}

	{
		const output = createPropertyOfStringsNegativeUTest({
			property: property,
			unicodeVersion: UNICODE_VERSION,
		}).trim() + '\n';
		fs.writeFileSync(`output/generated/strings/${ outputFile }-negative-u.js`, output);
	}
};

const propertiesOfStrings = require('@unicode/unicode-14.0.0').Sequence_Property;
for (const property of propertiesOfStrings) {
	const strings = require(`@unicode/unicode-14.0.0/Sequence_Property/${property}/index.js`);
	handlePropertyOfStrings(property, strings);
}
