import pkg from './package.json';
import rollupConfig from '../../rollup.config';

export default rollupConfig('Web3', pkg.name, {
    'web3-core': 'web3-core',
    'web3-providers': 'web3-providers',
    'web3-utils': 'web3-utils',
    'web3-puffs': 'web3-puffs',
    'web3-puffs-personal': 'web3-puffs-personal',
    'web3-shh': 'web3-shh',
    'web3-net': 'web3-net'
});
