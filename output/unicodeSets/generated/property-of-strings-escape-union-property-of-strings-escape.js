// Copyright 2024 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Extended character classes enabled by the RegExp `v` flag support
  properties of strings, string literals, and set operations
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v15.1.0
esid: sec-patterns
features: [regexp-unicode-property-escapes, regexp-v-flag]
includes: [regExpUtils.js]
---*/

testExtendedCharacterClass({
  regExp: /^[\p{Emoji_Keycap_Sequence}\p{Emoji_Keycap_Sequence}]+$/v,
  expression: "[\p{Emoji_Keycap_Sequence}\p{Emoji_Keycap_Sequence}]",
  matchStrings: [
    "#\uFE0F\u20E3",
    "*\uFE0F\u20E3",
    "0\uFE0F\u20E3",
    "1\uFE0F\u20E3",
    "2\uFE0F\u20E3",
    "3\uFE0F\u20E3",
    "4\uFE0F\u20E3",
    "5\uFE0F\u20E3",
    "6\uFE0F\u20E3",
    "7\uFE0F\u20E3",
    "8\uFE0F\u20E3",
    "9\uFE0F\u20E3"
  ],
  nonMatchStrings: [
    "7",
    "C",
    "\u2603",
    "\u{1D306}",
    "\u{1F1E7}\u{1F1EA}"
  ],
});
