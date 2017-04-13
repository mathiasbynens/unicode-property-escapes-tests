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
