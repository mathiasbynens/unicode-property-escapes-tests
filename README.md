# Tests for RegExp Unicode property escapes

This repository hosts a script that generates tests for [Unicode property escapes in ECMAScript regular expressions](https://github.com/tc39/proposal-regexp-unicode-property-escapes).

[The plan](https://github.com/tc39/test262/issues/950) is to update the script every time the Unicode Standard is updated (i.e. yearly) and to upstream its output to [Test262](https://github.com/tc39/test262).

## Generating the tests

Clone the repository, and then run:

```sh
npm install
npm run build
```

The `output` directory holds the generated test files, ready to be upstreamed to [Test262’s `test/built-ins/RegExp/property-escapes/` directory](https://github.com/tc39/test262/tree/main/test/built-ins/RegExp/property-escapes).

To run the tests in V8 using [`test262-harness`](https://github.com/bterlson/test262-harness):

```sh
test262-harness --test262Dir="$HOME/projects/test262" --hostPath="$HOME/.jsvu/v8" --hostType=d8 --hostArgs='--harmony-regexp-property' $(find output -name '*.js') --threads=4
```

This assumes you have [the Test262 repository](https://github.com/tc39/test262) checked out at `~/projects/test262`, and a native V8/`d8` build at [`~/.jsvu/v8`](https://github.com/GoogleChromeLabs/jsvu).

## Author

| [![twitter/mathias](https://gravatar.com/avatar/24e08a9ea84deb17ae121074d0f17125?s=70)](https://twitter.com/mathias "Follow @mathias on Twitter") |
|---|
| [Mathias Bynens](https://mathiasbynens.be/) |

## License

The code in this repository is available under the [MIT](https://mths.be/mit) license. (The generated tests have their own license.)
