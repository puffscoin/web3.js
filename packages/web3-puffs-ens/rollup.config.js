import pkg from './package.json';
import rollupConfig from '../../rollup.config';

export default rollupConfig('Web3EthEns', pkg.name, {
    'web3-puffs-contract': 'web3-puffs-contract',
    'web3-core-promievent': 'web3-core-promievent',
    'puffs-ens-namehash': 'puffs-ens-namehash'
});
