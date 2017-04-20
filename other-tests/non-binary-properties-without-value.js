// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Non-binary properties without a value must throw in Unicode property escapes.
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
---*/

assert.throws(SyntaxError, () => /\p{General_Category}/u);
assert.throws(SyntaxError, () => /\P{General_Category}/u);
assert.throws(SyntaxError, () => /\p{General_Category=}/u);
assert.throws(SyntaxError, () => /\P{General_Category=}/u);
assert.throws(SyntaxError, () => /\p{Script}/u);
assert.throws(SyntaxError, () => /\P{Script}/u);
assert.throws(SyntaxError, () => /\p{Script=}/u);
assert.throws(SyntaxError, () => /\P{Script=}/u);
assert.throws(SyntaxError, () => /\p{Script_Extensions}/u);
assert.throws(SyntaxError, () => /\P{Script_Extensions}/u);
assert.throws(SyntaxError, () => /\p{Script_Extensions=}/u);
assert.throws(SyntaxError, () => /\P{Script_Extensions=}/u);
