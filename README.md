# tslint-config-airbnb-base

[![Downloads per Month](https://img.shields.io/npm/dm/tslint-config-airbnb-base.svg)](https://www.npmjs.com/package/tslint-config-airbnb-base)
[![NPM Version](https://img.shields.io/npm/v/tslint-config-airbnb-base.svg)](https://www.npmjs.com/package/tslint-config-airbnb-base)
[![License](https://img.shields.io/npm/l/tslint-config-airbnb-base.svg)](LICENSE)

This package provides Airbnb's base TSLint (without React plugins) as an
extensible shared config.

## Purpose

This package is aimed to have all the rules supplied by the original
[eslint-config-airbnb-base](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base),
unlike [tslint-config-airbnb](https://github.com/progre/tslint-config-airbnb)
where it just contains what is in the [Airbnb JavaScript Style
Guide](https://github.com/airbnb/javascript). However, many rules are not
implemented in TSLint yet, thus this package requires updating when more rules
are created (see [Contributing](#contributing)).

## Installation

```sh
npm i -D tslint-config-airbnb-base
```

## Usage

Add to your `tslint.json`:

```json
{
  "extends": "tslint-config-airbnb-base"
}
```

## Contributing

The aim of this config is to be as closed to the original
[eslint-config-airbnb-base](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base)
as possible, so if any of the rules are out of sync with this package, feel free
to submit a pull request.

Rules that are currently not supported are commented with `NO-SUPPORT` so they
can easily be found by

```sh
grep NO-SUPPORT rules/*
```

When a rule becomes supported, simply remove `NO-SUPPORT` after adding the rule.
Feel free to add any rules packages. Currently the following are used (be sure
to check them for updates):

- [tslint-eslint-rules](https://www.npmjs.com/package/tslint-eslint-rules)
- [tslint-consistent-codestyle](https://www.npmjs.com/package/tslint-consistent-codestyle)

Rules are that not applicable in TypeScript are commented with `NOT-APPLICABLE`,
so similarly you can run

```sh
grep NOT-APPLICABLE rules/*
```

These will probably never be changed and are kept just to remind ourselves
what's not needed anymore.

## License

[MIT license](http://opensource.org/licenses/MIT.php)
