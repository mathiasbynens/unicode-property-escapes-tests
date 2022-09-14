const UNICODE_VERSION = require(
	'regenerate-unicode-properties/unicode-version.js'
);

const operators = [
	// Difference/subtraction.
	'--',
	// Intersection.
	'&&',
	// Union.
	'',
];

const parts = [
	// A property escape of a character property.
	{
		description: 'character-property-escape',
		expression: String.raw`\p{ASCII_Hex_Digit}`,
		strings: new Set(require(`@unicode/unicode-${UNICODE_VERSION}/Binary_Property/ASCII_Hex_Digit/symbols.js`)),
	},
	// A property escape of a property of strings.
	{
		description: 'property-of-strings-escape',
		expression: String.raw`\p{Emoji_Keycap_Sequence}`,
		strings: new Set(require(`@unicode/unicode-${UNICODE_VERSION}/Sequence_Property/Emoji_Keycap_Sequence/index.js`)),
	},
	// A (nested) character class.
	{
		description: 'character-class',
		expression: String.raw`[0-9]`,
		strings: new Set(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']),
	},
	// A string literal.
	{
		description: 'string-literal',
		expression: String.raw`\q{0|2|4|9\uFE0F\u20E3}`,
		strings: new Set(['0', '2', '4', '9\uFE0F\u20E3']),
	},
	// A lone character.
	{
		description: 'character',
		expression: '_',
		strings: new Set(['_']),
	},
	// A character class escape character.
	{
		description: 'character-class-escape',
		expression: String.raw`\d`,
		strings: new Set(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']),
	},
];

const DEFAULT_NON_MATCH_STRINGS = [
	'\u2603',             // snowman
	'\u{1D306}',          // astral character
	'\u{1F1E7}\u{1F1EA}', // string consisting of multiple astral characters
	'6\uFE0F\u20E3',      // Emoji_Keycap_Sequence
	'7',                  // ASCII_Hex_Digit + [0-9]
	'9\uFE0F\u20E3',      // Emoji_Keycap_Sequence used in string literal
	'C',                  // ASCII_Hex_Digit
];

const populateNonMatchStrings = ({ matchStrings, nonMatchStrings = [] }) => {
	const matchSet = new Set(matchStrings);
	const nonMatchSet = new Set(nonMatchStrings);
	for (const string of DEFAULT_NON_MATCH_STRINGS) {
		if (matchSet.has(string)) continue;
		nonMatchSet.add(string);
	}
	nonMatchStrings = [...nonMatchSet].sort();
	return { matchStrings, nonMatchStrings };
};

const resolveStrings = (operator, stringsA, stringsB) => {
	const matchStrings = [];
	const nonMatchStrings = [];
	switch (operator) {
		case '--': { // Difference/subtraction.
			for (const string of stringsA) {
				if (stringsB.has(string)) {
					nonMatchStrings.push(string);
				} else {
					matchStrings.push(string);
				}
			}
			break;
		}
		case '&&': { // Intersection.
			for (const string of stringsA) {
				if (stringsB.has(string)) {
					matchStrings.push(string);
				} else {
					nonMatchStrings.push(string);
				}
			}
			break;
		}
		case '': { // Union.
      const deduped = new Set([...stringsA, ...stringsB]);
			matchStrings.push(...deduped);
			matchStrings.sort();
			break;
		}
		default: {
			throw new Error(`Unknown operator ${operator}`);
		}
	}
	const result = populateNonMatchStrings({ matchStrings, nonMatchStrings });
	return result;
};

const describeOperator = (operator) => {
	const descriptions = new Map([
		['--', 'difference'],
		['&&', 'intersection'],
		['', 'union'],
	]);
	const description = descriptions.get(operator);
	return description;
};

const mix = (operators, parts) => {
	const results = [];
	for (const operator of operators) {
		for (const partA of parts) {
			for (const partB of parts) {
				const expression = `${partA.expression}${operator}${partB.expression}`;
				const { matchStrings, nonMatchStrings } = resolveStrings(operator, partA.strings, partB.strings);
				const description = `${partA.description}-${describeOperator(operator)}-${partB.description}`;
				results.push({ description, expression, matchStrings, nonMatchStrings });
			}
		}
	}
	return results;
};

const generateExtendedCharacterClassExpressions = () => {
	const results = mix(operators, parts);
	return results;
};

module.exports = generateExtendedCharacterClassExpressions;
