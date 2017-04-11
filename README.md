# Tests for RegExp Unicode property escapes

This repository hosts a script that generates tests for [Unicode property escapes in ECMAScript regular expressions](https://github.com/tc39/proposal-regexp-unicode-property-escapes).

[The plan](https://github.com/tc39/test262/issues/950) is to update the script every time the Unicode Standard is updated (i.e. yearly) and to upstream its output to [Test262](https://github.com/tc39/test262).

## Generating the tests

Clone the repository, and then run:

```sh
npm install
npm run build
```

The `output` directory holds the generated test files, ready to be upstreamed to test262’s `test/built-ins/RegExp/property-escapes/` directory.

## Author

| [![twitter/mathias](https://gravatar.com/avatar/24e08a9ea84deb17ae121074d0f17125?s=70)](https://twitter.com/mathias "Follow @mathias on Twitter") |
|---|
| [Mathias Bynens](https://mathiasbynens.be/) |

## License

The code in this repository is available under the [MIT](https://mths.be/mit) license. (The generated tests have their own license.)
