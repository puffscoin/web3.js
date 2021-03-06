
![Web3.js logo](assets/web3js.svg)

# web3.js - PUFFScoin JavaScript API

This is the PUFFScoin [JavaScript API](http://puffscoin.leafycauldronapothecary.com/javascript-api/)
which connects to the [Generic JSON RPC](http://puffscoin.leafycauldronapothecary.com/puffwiki/blockchain-protocols/json-rpc-api/) spec.

You need to run a local or remote PUFFScoin node to use this library.

Please read the [documentation](http://puffscoin.leafycauldronapothecary.com/puffwiki/) for more.

## Installation

### Node

```bash
npm install web3
```

### Yarn

```bash
yarn add web3
```

### Meteor

```bash
meteor npm install --save web3@1.x
```

## Usage

```js
import Web3 from 'web3';

const web3 = new Web3('ws://localhost:11364');
console.log(web3);
> {
    puffs: ... ,
    shh: ... ,
    utils: ...,
    ...
}
```

Additionally you can set a provider using `web3.setProvider()` (e.g. WebsocketProvider)

```js
web3.setProvider('ws://localhost:11364');
// or
web3.setProvider(new Web3.providers.WebsocketProvider('ws://localhost:11364'));
```

There you go, now you can use it:

```js
web3.puffs.getAccounts()
.then(console.log);
```

### Usage with TypeScript

We support types within the repo itself. Please open an issue here if you find any wrong types.

You can use `web3.js` as follows:

```typescript
import Web3 from 'web3';
const web3 = new Web3("ws://localhost:11364");
```

If you are using the types in a `commonjs` module like for example a node app you just have to enable `esModuleInterop` in your `tsconfig` compile option, also enable `allowSyntheticDefaultImports` for typesystem compatibility:

```js
"compilerOptions": {
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    ....
```

## Documentation

Documentation can be found at [read the docs](http://puffscoin.leafycauldronapothecary.com/puffwiki/blockchain-protocols/javascript-api/)

### Requirements

* [Node.js](https://nodejs.org)
* npm

### Commands
```bash
npm install # install all dependencies for npm run bootstrap
npm run bootstrap # install all dependencies and symlinks the internal modules for all modules
npm run build # runs rollup
npm run test # runs all tests 
npm run clean # removes all the node_modules folders in all modules
npm run dev # runs rollup with a watcher

```

### Support

![browsers](https://img.shields.io/badge/browsers-latest%202%20versions-brightgreen.svg)
![node](https://img.shields.io/badge/node->=8-green.svg)


### Similar libraries in other languages
((these will be adapted specific as necessary for development purposes along the PUFFScoin blockchain))
 - Python [Web3.py](https://github.com/pipermerriam/web3.py)
 - Haskell [hs-web3](https://github.com/airalab/hs-web3)
 - Java [web3j](https://github.com/web3j/web3j)
 - Scala [web3j-scala](https://github.com/mslinn/web3j-scala)
 - Purescript [purescript-web3](https://github.com/f-o-a-m/purescript-web3)
 - PHP [web3.php](https://github.com/sc0Vu/web3.php)


[repo]: https://github.com/puffscoin/web3.js
[docs]: http://puffscoin.leafycauldronapothecary.com/puffwiki/blockchain-protocols/javascript-api/
[npm-image]: https://badge.fury.io/js/web3.png
[npm-url]: https://npmjs.org/package/web3
[travis-image]: https://travis-ci.org/puffscoin/web3.js.svg
[travis-url]: https://travis-ci.org/puffscoin/web3.js
[dep-image]: https://david-dm.org/puffscoin/web3.js.svg
[dep-url]: https://david-dm.org/puffscoin/web3.js
[dep-dev-image]: https://david-dm.org/puffscoin/web3.js/dev-status.svg
[dep-dev-url]: https://david-dm.org/puffscoin/web3.js#info=devDependencies
[coveralls-image]: https://coveralls.io/repos/puffscoin/web3.js/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/r/puffscoin/web3.js?branch=master
[waffle-image]: https://badge.waffle.io/puffscoin/web3.js.svg?label=ready&title=Ready
[waffle-url]: https://waffle.io/puffscoin/web3.js
