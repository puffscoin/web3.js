# web3-puffs-accounts

This is a sub module of [web3.js][repo]

This is the accounts module to be used in the `web3-puffs` module.
Please read the [documentation][docs] for more.

## Installation

### Node.js

```bash
npm install web3-puffs-accounts
```

## Usage

```js
import {Accounts} from 'web3-puffs-accounts';

const accounts = new Accounts(
    'http://127.0.0.1:11364',
    null,
    options
);
```

## Types 

All the typescript typings are placed in the types folder. 

[docs]: http://web3js.readthedocs.io/en/1.0/
[repo]: https://github.com/puffscoin/web3.js
