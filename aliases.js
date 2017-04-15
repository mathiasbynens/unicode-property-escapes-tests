const aliasesToProperties = require('unicode-property-aliases-ecmascript');
const propertiesToAliases = new Map();
for (const [property, alias] of aliasesToProperties) {
	propertiesToAliases.set(alias, property);
}

const aliasesToValuesPerProperty = require('unicode-property-value-aliases-ecmascript');
const valuesToAliasesPerProperty = new Map();
for (const [property, aliasesToValues] of aliasesToValuesPerProperty) {
	const valuesToAliases = new Map();
	for (const [alias, value] of aliasesToValues) {
		if (valuesToAliases.has(value)) {
			valuesToAliases.get(value).push(alias);
		} else {
			valuesToAliases.set(value, [alias]);
		}
	}
	valuesToAliasesPerProperty.set(property, valuesToAliases);
}

module.exports = {
	propertiesToAliases,
	valuesToAliasesPerProperty
};
