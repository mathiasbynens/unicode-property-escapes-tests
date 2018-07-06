// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes must be supported in character classes.
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
---*/

/[\p{Hex}]/u;

// https://tc39.github.io/ecma262/#sec-patterns-static-semantics-early-errors
//
// NonemptyClassRangesNoDash :: ClassAtomNoDash - ClassAtom ClassRanges
//
// It is a Syntax Error if IsCharacterClass of ClassAtomNoDash is true or IsCharacterClass of ClassAtom is true.
assert.throws.early(SyntaxError, "/[\p{Hex}-\uFFFF]/u");
assert.throws.early(SyntaxError, "/[\uFFFF-\p{Hex}]/u");

// https://tc39.github.io/ecma262/#sec-patterns-static-semantics-early-errors
//
// NonemptyClassRanges :: ClassAtom - ClassAtom ClassRanges
//
// It is a Syntax Error if IsCharacterClass of the first ClassAtom is true or IsCharacterClass of the second ClassAtom is true.
assert.throws.early(SyntaxError, "/[\p{Hex}--]/u");
assert.throws.early(SyntaxError, "/[--\p{Hex}]/u");

assert.throws.early(SyntaxError, "/[\\p{}]/u");
assert.throws.early(SyntaxError, "/[\\p{invalid}]/u");
assert.throws.early(SyntaxError, "/[\\p{]/u");
assert.throws.early(SyntaxError, "/[\\p{]}/u");
assert.throws.early(SyntaxError, "/[\\p}]/u");
assert(
  /[\p{Hex}\P{Hex}]/u.test('\u{1D306}'),
  'multiple property escapes in a single character class should be supported'
);
