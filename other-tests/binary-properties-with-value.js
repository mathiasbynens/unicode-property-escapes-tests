// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Binary properties with an explicit value must throw in Unicode property
  escapes (even if the value is valid).
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
---*/

assert.throws(SyntaxError, () => /\p{ASCII=Yes}/u);
assert.throws(SyntaxError, () => /\p{ASCII=Y}/u);
assert.throws(SyntaxError, () => /\p{ASCII=T}/u);

assert.throws(SyntaxError, () => /\P{ASCII=No}/u);
assert.throws(SyntaxError, () => /\P{ASCII=N}/u);
assert.throws(SyntaxError, () => /\P{ASCII=F}/u);

assert.throws(SyntaxError, () => /\p{ASCII=Invalid}/u);
