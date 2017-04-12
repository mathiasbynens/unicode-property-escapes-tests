const {
	propertiesToAliases,
	valuesToAliasesPerProperty
} = require('./aliases.js');

const mix = (properties, values) => {
	const expressions = [];
	for (const property of properties) {
		for (const value of values) {
			expressions.push(`${ property }=${ value }`);
		}
	}
	return expressions;
};

const generateExpressions = (property, value) => {
	if (property == 'Binary_Property') {
		const result = [value];
		const alias = propertiesToAliases.get(value);
		if (alias && alias != value) {
			result.push(alias);
		}
		return result;
	}
	const propertyAlias = propertiesToAliases.get(property);
	const valueAliases = valuesToAliasesPerProperty.get(property).get(value);
	const properties = [property, propertyAlias];
	const values = [value, ...valueAliases];
	const result = mix(properties, values);
	if (property == 'General_Category') {
		result.push(...values);
	}
	return result;
};

module.exports = generateExpressions;
