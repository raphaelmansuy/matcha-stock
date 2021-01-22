# matcha-stock

A command to get stock information. Created with ❤️ by [Elitizon](https://www.elitizon.com).

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/matcha-stock.svg)](https://npmjs.org/package/matcha-stock)
[![Downloads/week](https://img.shields.io/npm/dw/matcha-stock.svg)](https://npmjs.org/package/matcha-stock)
[![License](https://img.shields.io/npm/l/matcha-stock.svg)](https://github.com/raphaelmansuy/matcha-stock/blob/master/package.json)
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fraphaelmansuy%2Fmatcha-stock.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2Fraphaelmansuy%2Fmatcha-stock?ref=badge_shield)

<!-- toc -->

- [matcha-stock](#matcha-stock)
- [Usage](#usage)
- [Example](#example)
<!-- tocstop -->

# Usage

```sh-session
$ npm install -g matcha-stock
$ matcha-stock -h

A simple command to retrieve stock information from Yahoo Finance.

USAGE
  $ matcha-stock

OPTIONS
  -h, --help         show CLI help
  -s, --symbol=MSFT  (required) stock symbol to retrieve
  -v, --version      show CLI version

DESCRIPTION
  A simple command to retrieve stock information from Yahoo Finance.

    Created with ❤️ by Elitizon (https://www.elitizon.com)

```

# Example

```bash
$  npx matcha-stock -s=MSFT
┌───────────────────────────────────┬─────────────────────────┐
│              (index)              │         Values          │
├───────────────────────────────────┼─────────────────────────┤
│             language              │         'en-US'         │
│              region               │          'US'           │
│             quoteType             │        'EQUITY'         │
│          quoteSourceName          │     'Delayed Quote'     │
│            triggerable            │          true           │
│             currency              │          'USD'          │
│    firstTradeDateMilliseconds     │      511108200000       │
│             priceHint             │            2            │
│            marketState            │       'POSTPOST'        │
│      postMarketChangePercent      │       0.31417143        │

```


## License
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fraphaelmansuy%2Fmatcha-stock.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2Fraphaelmansuy%2Fmatcha-stock?ref=badge_large)