# Finicky [![License][LicenseIMGURL]][LicenseURL] [![NPM version][NPMIMGURL]][NPMURL] [![Dependency Status][DependencyStatusIMGURL]][DependencyStatusURL] [![Build Status][BuildStatusIMGURL]][BuildStatusURL] [![Coverage Status][CoverageIMGURL]][CoverageURL]

Delete property of an object.

## Install

`npm i finicky --save`

## Hot to use?

```js
const finicky = require('finicky');

finicky('hello.world', {
    hello: {
        world: {
            'could be used in browser as well'
        }
    }
});
// returns
{
    hello: {
    }
}

finicky('work-with-divider', '-', {
    work: {
        with: {
            divider: {
                'could use divider as well'
            }
        }
    }
});
// returns
{
    work: {
        with: {
        }
    }
}
```

## Environments

In old `node.js` environments that not fully supports `es2015`, `finicky` could be used with:

```js
var finicky = require('finicky/legacy');
```

## Related

- [jessy](https://github.com/coderaiser/jessy "jessy") - get value by object property.
- [nessy](https://github.com/coderaiser/nessy "nessy") - set value in nested object.
- [all-object-keys](https://github.com/coderaiser/all-object-keys "all-object-keys") - get all keys of object.

## License

MIT

[NPMIMGURL]:                https://img.shields.io/npm/v/finicky.svg?style=flat
[BuildStatusIMGURL]:        https://img.shields.io/travis/coderaiser/finicky/master.svg?style=flat
[DependencyStatusIMGURL]:   https://img.shields.io/david/coderaiser/finicky.svg?style=flat
[LicenseIMGURL]:            https://img.shields.io/badge/license-MIT-317BF9.svg?style=flat
[NPMURL]:                   https://npmjs.org/package/finicky "npm"
[BuildStatusURL]:           https://travis-ci.org/coderaiser/finicky  "Build Status"
[DependencyStatusURL]:      https://david-dm.org/coderaiser/finicky "Dependency Status"
[LicenseURL]:               https://tldrlegal.com/license/mit-license "MIT License"

[CoverageURL]:              https://coveralls.io/github/coderaiser/finicky?branch=master
[CoverageIMGURL]:           https://coveralls.io/repos/coderaiser/finicky/badge.svg?branch=master&service=github

