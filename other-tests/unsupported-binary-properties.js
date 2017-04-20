// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Some binary properties used to be part of the Unicode property escapes
  proposal but were later removed. They must not be supported.
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
---*/

assert.throws(SyntaxError, () => /\p{Composition_Exclusion}/u);
assert.throws(SyntaxError, () => /\P{Composition_Exclusion}/u);
assert.throws(SyntaxError, () => /\p{Expands_On_NFC}/u);
assert.throws(SyntaxError, () => /\P{Expands_On_NFC}/u);
assert.throws(SyntaxError, () => /\p{Expands_On_NFD}/u);
assert.throws(SyntaxError, () => /\P{Expands_On_NFD}/u);
assert.throws(SyntaxError, () => /\p{Expands_On_NFKC}/u);
assert.throws(SyntaxError, () => /\P{Expands_On_NFKC}/u);
assert.throws(SyntaxError, () => /\p{Expands_On_NFKD}/u);
assert.throws(SyntaxError, () => /\P{Expands_On_NFKD}/u);
assert.throws(SyntaxError, () => /\p{FC_NFKC_Closure}/u);
assert.throws(SyntaxError, () => /\P{FC_NFKC_Closure}/u);
assert.throws(SyntaxError, () => /\p{Full_Composition_Exclusion}/u);
assert.throws(SyntaxError, () => /\P{Full_Composition_Exclusion}/u);
assert.throws(SyntaxError, () => /\p{Grapheme_Link}/u);
assert.throws(SyntaxError, () => /\P{Grapheme_Link}/u);
assert.throws(SyntaxError, () => /\p{Hyphen}/u);
assert.throws(SyntaxError, () => /\P{Hyphen}/u);
assert.throws(SyntaxError, () => /\p{Other_Alphabetic}/u);
assert.throws(SyntaxError, () => /\P{Other_Alphabetic}/u);
assert.throws(SyntaxError, () => /\p{Other_Default_Ignorable_Code_Point}/u);
assert.throws(SyntaxError, () => /\P{Other_Default_Ignorable_Code_Point}/u);
assert.throws(SyntaxError, () => /\p{Other_Grapheme_Extend}/u);
assert.throws(SyntaxError, () => /\P{Other_Grapheme_Extend}/u);
assert.throws(SyntaxError, () => /\p{Other_ID_Continue}/u);
assert.throws(SyntaxError, () => /\P{Other_ID_Continue}/u);
assert.throws(SyntaxError, () => /\p{Other_ID_Start}/u);
assert.throws(SyntaxError, () => /\P{Other_ID_Start}/u);
assert.throws(SyntaxError, () => /\p{Other_Lowercase}/u);
assert.throws(SyntaxError, () => /\P{Other_Lowercase}/u);
assert.throws(SyntaxError, () => /\p{Other_Math}/u);
assert.throws(SyntaxError, () => /\P{Other_Math}/u);
assert.throws(SyntaxError, () => /\p{Other_Uppercase}/u);
assert.throws(SyntaxError, () => /\P{Other_Uppercase}/u);
assert.throws(SyntaxError, () => /\p{Prepended_Concatenation_Mark}/u);
assert.throws(SyntaxError, () => /\P{Prepended_Concatenation_Mark}/u);
