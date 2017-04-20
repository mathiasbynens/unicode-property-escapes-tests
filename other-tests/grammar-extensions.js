// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes must not support non-standard grammar extensions.
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
---*/

/\p{General_Category=Letter}/u;
/\P{General_Category=Letter}/u;
assert.throws(SyntaxError, () => /\p{^General_Category=Letter}/u);
assert.throws(SyntaxError, () => /\p{General_Category:Letter}/u);
assert.throws(SyntaxError, () => /\P{General_Category:Letter}/u);
/\p{Letter}/u;
/\P{Letter}/u;
assert.throws(SyntaxError, () => /\p{=Letter}/u);
assert.throws(SyntaxError, () => /\P{=Letter}/u);
assert.throws(SyntaxError, () => /\p{=}/u);
assert.throws(SyntaxError, () => /\P{=}/u);
/\p{L}/u;
/\P{L}/u;
assert.throws(SyntaxError, () => /\pL/u);
assert.throws(SyntaxError, () => /\PL/u);

// Note: `Adlam` is a valid property value for both `Script` and `Block`.
/\p{Script=Adlam}/u;
/\P{Script=Adlam}/u;
assert.throws(SyntaxError, () => /\p{IsScript=Adlam}/u);
assert.throws(SyntaxError, () => /\P{IsScript=Adlam}/u);
assert.throws(SyntaxError, () => /\p{isScript=Adlam}/u);
assert.throws(SyntaxError, () => /\P{isScript=Adlam}/u);
assert.throws(SyntaxError, () => /\p{InScript=Adlam}/u);
assert.throws(SyntaxError, () => /\P{InScript=Adlam}/u);
assert.throws(SyntaxError, () => /\p{inScript=Adlam}/u);
assert.throws(SyntaxError, () => /\P{inScript=Adlam}/u);
assert.throws(SyntaxError, () => /\p{InAdlam}/u);
assert.throws(SyntaxError, () => /\P{InAdlam}/u);

assert.throws(SyntaxError, () => /\p{/u);
assert.throws(SyntaxError, () => /\P{/u);
assert.throws(SyntaxError, () => /\p}/u);
assert.throws(SyntaxError, () => /\P}/u);
assert.throws(SyntaxError, () => /\p/u);
assert.throws(SyntaxError, () => /\P/u);
