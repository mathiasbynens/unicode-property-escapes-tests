// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Non-existent properties must not be supported in Unicode property escapes.
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
---*/

assert.throws(SyntaxError, () => /\p{UnknownBinaryProperty}/u);
assert.throws(SyntaxError, () => /\P{UnknownBinaryProperty}/u);

assert.throws(SyntaxError, () => /\p{Line_Breakz=Alphabetic}/u);
assert.throws(SyntaxError, () => /\P{Line_Breakz=Alphabetic}/u);
