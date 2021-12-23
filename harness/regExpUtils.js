function buildString({ loneCodePoints, ranges }) {
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
}

function printCodePoint(codePoint) {
  const hex = codePoint
    .toString(16)
    .toUpperCase()
    .padStart(6, "0");
  return `U+${hex}`;
}

function printStringCodePoints(string) {
  const buf = [];
  for (const symbol of string) {
    const formatted = printCodePoint(symbol.codePointAt(0));
    buf.push(formatted);
  }
  return buf.join(' ');
}

function testPropertyEscapes(regExp, string, expression) {
  if (!regExp.test(string)) {
    for (const symbol of string) {
      printCodePoint(symbol.codePointAt(0));
      assert(
        regExp.test(symbol),
        `\`${ expression }\` should match U+${ hex } (\`${ symbol }\`)`
      );
    }
  }
}

function testPropertyOfStrings({ regExp, expression, matchStrings, nonMatchStrings }) {
  const allStrings = matchStrings.join('');
  if (!regex.test(allStrings)) {
    for (const string of matchStrings) {
      assert(
        regex.test(string),
        `\`${ expression }\` should match ${ string } (U+${ printStringCodePoints(string) })`
      );
    }
  }

  const allNonMatchStrings = nonMatchStrings.join('');
  if (regex.test(allNonMatchStrings)) {
    for (const string of nonMatchStrings) {
      assert(
        !regex.test(string),
        `\`${ expression }\` should not match ${ string } (U+${ printStringCodePoints(string) })`
      );
    }
  }
}
