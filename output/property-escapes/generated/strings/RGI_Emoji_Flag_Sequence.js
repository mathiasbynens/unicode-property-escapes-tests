// Copyright 2022 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `RGI_Emoji_Flag_Sequence` (property of strings)
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v15.0.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes, regexp-v-flag]
includes: [regExpUtils.js]
---*/

testPropertyOfStrings({
  regExp: /^\p{RGI_Emoji_Flag_Sequence}+$/v,
  expression: "\\p{RGI_Emoji_Flag_Sequence}",
  matchStrings: [
    "\u{1F1E6}\u{1F1E8}",
    "\u{1F1E6}\u{1F1E9}",
    "\u{1F1E6}\u{1F1EA}",
    "\u{1F1E6}\u{1F1EB}",
    "\u{1F1E6}\u{1F1EC}",
    "\u{1F1E6}\u{1F1EE}",
    "\u{1F1E6}\u{1F1F1}",
    "\u{1F1E6}\u{1F1F2}",
    "\u{1F1E6}\u{1F1F4}",
    "\u{1F1E6}\u{1F1F6}",
    "\u{1F1E6}\u{1F1F7}",
    "\u{1F1E6}\u{1F1F8}",
    "\u{1F1E6}\u{1F1F9}",
    "\u{1F1E6}\u{1F1FA}",
    "\u{1F1E6}\u{1F1FC}",
    "\u{1F1E6}\u{1F1FD}",
    "\u{1F1E6}\u{1F1FF}",
    "\u{1F1E7}\u{1F1E6}",
    "\u{1F1E7}\u{1F1E7}",
    "\u{1F1E7}\u{1F1E9}",
    "\u{1F1E7}\u{1F1EA}",
    "\u{1F1E7}\u{1F1EB}",
    "\u{1F1E7}\u{1F1EC}",
    "\u{1F1E7}\u{1F1ED}",
    "\u{1F1E7}\u{1F1EE}",
    "\u{1F1E7}\u{1F1EF}",
    "\u{1F1E7}\u{1F1F1}",
    "\u{1F1E7}\u{1F1F2}",
    "\u{1F1E7}\u{1F1F3}",
    "\u{1F1E7}\u{1F1F4}",
    "\u{1F1E7}\u{1F1F6}",
    "\u{1F1E7}\u{1F1F7}",
    "\u{1F1E7}\u{1F1F8}",
    "\u{1F1E7}\u{1F1F9}",
    "\u{1F1E7}\u{1F1FB}",
    "\u{1F1E7}\u{1F1FC}",
    "\u{1F1E7}\u{1F1FE}",
    "\u{1F1E7}\u{1F1FF}",
    "\u{1F1E8}\u{1F1E6}",
    "\u{1F1E8}\u{1F1E8}",
    "\u{1F1E8}\u{1F1E9}",
    "\u{1F1E8}\u{1F1EB}",
    "\u{1F1E8}\u{1F1EC}",
    "\u{1F1E8}\u{1F1ED}",
    "\u{1F1E8}\u{1F1EE}",
    "\u{1F1E8}\u{1F1F0}",
    "\u{1F1E8}\u{1F1F1}",
    "\u{1F1E8}\u{1F1F2}",
    "\u{1F1E8}\u{1F1F3}",
    "\u{1F1E8}\u{1F1F4}",
    "\u{1F1E8}\u{1F1F5}",
    "\u{1F1E8}\u{1F1F7}",
    "\u{1F1E8}\u{1F1FA}",
    "\u{1F1E8}\u{1F1FB}",
    "\u{1F1E8}\u{1F1FC}",
    "\u{1F1E8}\u{1F1FD}",
    "\u{1F1E8}\u{1F1FE}",
    "\u{1F1E8}\u{1F1FF}",
    "\u{1F1E9}\u{1F1EA}",
    "\u{1F1E9}\u{1F1EC}",
    "\u{1F1E9}\u{1F1EF}",
    "\u{1F1E9}\u{1F1F0}",
    "\u{1F1E9}\u{1F1F2}",
    "\u{1F1E9}\u{1F1F4}",
    "\u{1F1E9}\u{1F1FF}",
    "\u{1F1EA}\u{1F1E6}",
    "\u{1F1EA}\u{1F1E8}",
    "\u{1F1EA}\u{1F1EA}",
    "\u{1F1EA}\u{1F1EC}",
    "\u{1F1EA}\u{1F1ED}",
    "\u{1F1EA}\u{1F1F7}",
    "\u{1F1EA}\u{1F1F8}",
    "\u{1F1EA}\u{1F1F9}",
    "\u{1F1EA}\u{1F1FA}",
    "\u{1F1EB}\u{1F1EE}",
    "\u{1F1EB}\u{1F1EF}",
    "\u{1F1EB}\u{1F1F0}",
    "\u{1F1EB}\u{1F1F2}",
    "\u{1F1EB}\u{1F1F4}",
    "\u{1F1EB}\u{1F1F7}",
    "\u{1F1EC}\u{1F1E6}",
    "\u{1F1EC}\u{1F1E7}",
    "\u{1F1EC}\u{1F1E9}",
    "\u{1F1EC}\u{1F1EA}",
    "\u{1F1EC}\u{1F1EB}",
    "\u{1F1EC}\u{1F1EC}",
    "\u{1F1EC}\u{1F1ED}",
    "\u{1F1EC}\u{1F1EE}",
    "\u{1F1EC}\u{1F1F1}",
    "\u{1F1EC}\u{1F1F2}",
    "\u{1F1EC}\u{1F1F3}",
    "\u{1F1EC}\u{1F1F5}",
    "\u{1F1EC}\u{1F1F6}",
    "\u{1F1EC}\u{1F1F7}",
    "\u{1F1EC}\u{1F1F8}",
    "\u{1F1EC}\u{1F1F9}",
    "\u{1F1EC}\u{1F1FA}",
    "\u{1F1EC}\u{1F1FC}",
    "\u{1F1EC}\u{1F1FE}",
    "\u{1F1ED}\u{1F1F0}",
    "\u{1F1ED}\u{1F1F2}",
    "\u{1F1ED}\u{1F1F3}",
    "\u{1F1ED}\u{1F1F7}",
    "\u{1F1ED}\u{1F1F9}",
    "\u{1F1ED}\u{1F1FA}",
    "\u{1F1EE}\u{1F1E8}",
    "\u{1F1EE}\u{1F1E9}",
    "\u{1F1EE}\u{1F1EA}",
    "\u{1F1EE}\u{1F1F1}",
    "\u{1F1EE}\u{1F1F2}",
    "\u{1F1EE}\u{1F1F3}",
    "\u{1F1EE}\u{1F1F4}",
    "\u{1F1EE}\u{1F1F6}",
    "\u{1F1EE}\u{1F1F7}",
    "\u{1F1EE}\u{1F1F8}",
    "\u{1F1EE}\u{1F1F9}",
    "\u{1F1EF}\u{1F1EA}",
    "\u{1F1EF}\u{1F1F2}",
    "\u{1F1EF}\u{1F1F4}",
    "\u{1F1EF}\u{1F1F5}",
    "\u{1F1F0}\u{1F1EA}",
    "\u{1F1F0}\u{1F1EC}",
    "\u{1F1F0}\u{1F1ED}",
    "\u{1F1F0}\u{1F1EE}",
    "\u{1F1F0}\u{1F1F2}",
    "\u{1F1F0}\u{1F1F3}",
    "\u{1F1F0}\u{1F1F5}",
    "\u{1F1F0}\u{1F1F7}",
    "\u{1F1F0}\u{1F1FC}",
    "\u{1F1F0}\u{1F1FE}",
    "\u{1F1F0}\u{1F1FF}",
    "\u{1F1F1}\u{1F1E6}",
    "\u{1F1F1}\u{1F1E7}",
    "\u{1F1F1}\u{1F1E8}",
    "\u{1F1F1}\u{1F1EE}",
    "\u{1F1F1}\u{1F1F0}",
    "\u{1F1F1}\u{1F1F7}",
    "\u{1F1F1}\u{1F1F8}",
    "\u{1F1F1}\u{1F1F9}",
    "\u{1F1F1}\u{1F1FA}",
    "\u{1F1F1}\u{1F1FB}",
    "\u{1F1F1}\u{1F1FE}",
    "\u{1F1F2}\u{1F1E6}",
    "\u{1F1F2}\u{1F1E8}",
    "\u{1F1F2}\u{1F1E9}",
    "\u{1F1F2}\u{1F1EA}",
    "\u{1F1F2}\u{1F1EB}",
    "\u{1F1F2}\u{1F1EC}",
    "\u{1F1F2}\u{1F1ED}",
    "\u{1F1F2}\u{1F1F0}",
    "\u{1F1F2}\u{1F1F1}",
    "\u{1F1F2}\u{1F1F2}",
    "\u{1F1F2}\u{1F1F3}",
    "\u{1F1F2}\u{1F1F4}",
    "\u{1F1F2}\u{1F1F5}",
    "\u{1F1F2}\u{1F1F6}",
    "\u{1F1F2}\u{1F1F7}",
    "\u{1F1F2}\u{1F1F8}",
    "\u{1F1F2}\u{1F1F9}",
    "\u{1F1F2}\u{1F1FA}",
    "\u{1F1F2}\u{1F1FB}",
    "\u{1F1F2}\u{1F1FC}",
    "\u{1F1F2}\u{1F1FD}",
    "\u{1F1F2}\u{1F1FE}",
    "\u{1F1F2}\u{1F1FF}",
    "\u{1F1F3}\u{1F1E6}",
    "\u{1F1F3}\u{1F1E8}",
    "\u{1F1F3}\u{1F1EA}",
    "\u{1F1F3}\u{1F1EB}",
    "\u{1F1F3}\u{1F1EC}",
    "\u{1F1F3}\u{1F1EE}",
    "\u{1F1F3}\u{1F1F1}",
    "\u{1F1F3}\u{1F1F4}",
    "\u{1F1F3}\u{1F1F5}",
    "\u{1F1F3}\u{1F1F7}",
    "\u{1F1F3}\u{1F1FA}",
    "\u{1F1F3}\u{1F1FF}",
    "\u{1F1F4}\u{1F1F2}",
    "\u{1F1F5}\u{1F1E6}",
    "\u{1F1F5}\u{1F1EA}",
    "\u{1F1F5}\u{1F1EB}",
    "\u{1F1F5}\u{1F1EC}",
    "\u{1F1F5}\u{1F1ED}",
    "\u{1F1F5}\u{1F1F0}",
    "\u{1F1F5}\u{1F1F1}",
    "\u{1F1F5}\u{1F1F2}",
    "\u{1F1F5}\u{1F1F3}",
    "\u{1F1F5}\u{1F1F7}",
    "\u{1F1F5}\u{1F1F8}",
    "\u{1F1F5}\u{1F1F9}",
    "\u{1F1F5}\u{1F1FC}",
    "\u{1F1F5}\u{1F1FE}",
    "\u{1F1F6}\u{1F1E6}",
    "\u{1F1F7}\u{1F1EA}",
    "\u{1F1F7}\u{1F1F4}",
    "\u{1F1F7}\u{1F1F8}",
    "\u{1F1F7}\u{1F1FA}",
    "\u{1F1F7}\u{1F1FC}",
    "\u{1F1F8}\u{1F1E6}",
    "\u{1F1F8}\u{1F1E7}",
    "\u{1F1F8}\u{1F1E8}",
    "\u{1F1F8}\u{1F1E9}",
    "\u{1F1F8}\u{1F1EA}",
    "\u{1F1F8}\u{1F1EC}",
    "\u{1F1F8}\u{1F1ED}",
    "\u{1F1F8}\u{1F1EE}",
    "\u{1F1F8}\u{1F1EF}",
    "\u{1F1F8}\u{1F1F0}",
    "\u{1F1F8}\u{1F1F1}",
    "\u{1F1F8}\u{1F1F2}",
    "\u{1F1F8}\u{1F1F3}",
    "\u{1F1F8}\u{1F1F4}",
    "\u{1F1F8}\u{1F1F7}",
    "\u{1F1F8}\u{1F1F8}",
    "\u{1F1F8}\u{1F1F9}",
    "\u{1F1F8}\u{1F1FB}",
    "\u{1F1F8}\u{1F1FD}",
    "\u{1F1F8}\u{1F1FE}",
    "\u{1F1F8}\u{1F1FF}",
    "\u{1F1F9}\u{1F1E6}",
    "\u{1F1F9}\u{1F1E8}",
    "\u{1F1F9}\u{1F1E9}",
    "\u{1F1F9}\u{1F1EB}",
    "\u{1F1F9}\u{1F1EC}",
    "\u{1F1F9}\u{1F1ED}",
    "\u{1F1F9}\u{1F1EF}",
    "\u{1F1F9}\u{1F1F0}",
    "\u{1F1F9}\u{1F1F1}",
    "\u{1F1F9}\u{1F1F2}",
    "\u{1F1F9}\u{1F1F3}",
    "\u{1F1F9}\u{1F1F4}",
    "\u{1F1F9}\u{1F1F7}",
    "\u{1F1F9}\u{1F1F9}",
    "\u{1F1F9}\u{1F1FB}",
    "\u{1F1F9}\u{1F1FC}",
    "\u{1F1F9}\u{1F1FF}",
    "\u{1F1FA}\u{1F1E6}",
    "\u{1F1FA}\u{1F1EC}",
    "\u{1F1FA}\u{1F1F2}",
    "\u{1F1FA}\u{1F1F3}",
    "\u{1F1FA}\u{1F1F8}",
    "\u{1F1FA}\u{1F1FE}",
    "\u{1F1FA}\u{1F1FF}",
    "\u{1F1FB}\u{1F1E6}",
    "\u{1F1FB}\u{1F1E8}",
    "\u{1F1FB}\u{1F1EA}",
    "\u{1F1FB}\u{1F1EC}",
    "\u{1F1FB}\u{1F1EE}",
    "\u{1F1FB}\u{1F1F3}",
    "\u{1F1FB}\u{1F1FA}",
    "\u{1F1FC}\u{1F1EB}",
    "\u{1F1FC}\u{1F1F8}",
    "\u{1F1FD}\u{1F1F0}",
    "\u{1F1FE}\u{1F1EA}",
    "\u{1F1FE}\u{1F1F9}",
    "\u{1F1FF}\u{1F1E6}",
    "\u{1F1FF}\u{1F1F2}",
    "\u{1F1FF}\u{1F1FC}"
  ],
  nonMatchStrings: [
    "\u{1F1E8}",
    "\u{1F1E6}",
    "\u{1F1E9}",
    "\u{1F1E6}",
    "\u{1F1EA}",
    "\u{1F1E6}",
    "\u{1F1EB}",
    "\u{1F1E6}",
    "\u{1F1EC}",
    "\u{1F1E6}"
  ],
});
