/*
    This file is part of web3.js.
    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.
    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.
    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
/**
 * @file puffs-tests.ts
 * @author Josh Stevens <joshstevens19@hotmail.co.uk>
 * @author Prince Sinha <sinhaprince013@gmail.com>
 * @date 2018
 */

import {Log, Transaction, TransactionReceipt, RLPEncodedTransaction} from 'web3-core';
import {Puffs, BlockHeader, Syncing, Block, GetProof} from 'web3-puffs';

const puffs = new Puffs('http://localhost:11363');

// $ExpectType new (jsonInterface: AbiItem | AbiItem[], address?: string | undefined, options?: ContractOptions | undefined) => Contract
puffs.Contract;

// $ExpectType new (iban: string) => Iban
puffs.Iban;

// $ExpectType Personal
puffs.personal;

// $ExpectType Accounts
puffs.accounts;

// $ExpectType Ens
puffs.ens;

// $ExpectType AbiCoder
puffs.abi;

// $ExpectType Network
puffs.net;

puffs.clearSubscriptions();

// $ExpectType Subscription<Log>
puffs.subscribe('logs');

// $ExpectType Subscription<Log>
puffs.subscribe('logs', {});
// $ExpectType Subscription<Log>
puffs.subscribe('logs', {}, (error: Error, log: Log) => {});

// $ExpectType Subscription<Syncing>
puffs.subscribe('syncing');
// $ExpectType Subscription<Syncing>
puffs.subscribe('syncing', null, (error: Error, result: Syncing) => {});

// $ExpectType Subscription<BlockHeader>
puffs.subscribe('newBlockHeaders');
// $ExpectType Subscription<BlockHeader>
puffs.subscribe('newBlockHeaders', null, (error: Error, blockHeader: BlockHeader) => {});

// $ExpectType Subscription<string>
puffs.subscribe('pendingTransactions');
// $ExpectType Subscription<string>
puffs.subscribe('pendingTransactions', null, (error: Error, transactionHash: string) => {});

// $ExpectType Providers
Puffs.providers;

// $ExpectType any
puffs.givenProvider;

// $ExpectType BatchRequest
new puffs.BatchRequest();

// $ExpectType string | null
puffs.defaultAccount;

// $ExpectType string | number
puffs.defaultBlock;

// $ExpectType HttpProvider | IpcProvider | WebsocketProvider | Web3PuffscoinProvider | CustomProvider
puffs.currentProvider;

// $ExpectType Promise<string>
puffs.getProtocolVersion();
// $ExpectType Promise<string>
puffs.getProtocolVersion((error: Error, protocolVersion: string) => {});

// $ExpectType Promise<boolean | Syncing>
puffs.isSyncing();
// $ExpectType Promise<boolean | Syncing>
puffs.isSyncing((error: Error, syncing: Syncing) => {});

// $ExpectType Promise<string>
puffs.getCoinbase();
// $ExpectType Promise<string>
puffs.getCoinbase((error: Error, coinbaseAddress: string) => {});

// $ExpectType Promise<boolean>
puffs.isMining();
// $ExpectType Promise<boolean>
puffs.isMining((error: Error, mining: boolean) => {});

// $ExpectType Promise<number>
puffs.getHashrate();
// $ExpectType Promise<number>
puffs.getHashrate((error: Error, hashes: number) => {});

// $ExpectType Promise<string>
puffs.getGasPrice();
// $ExpectType Promise<string>
puffs.getGasPrice((error: Error, gasPrice: string) => {});

// $ExpectType Promise<string[]>
puffs.getAccounts();
// $ExpectType Promise<string[]>
puffs.getAccounts((error: Error, accounts: string[]) => {});

// $ExpectType Promise<number>
puffs.getBlockNumber();
// $ExpectType Promise<number>
puffs.getBlockNumber((error: Error, blockNumber: number) => {});

// $ExpectType Promise<string>
puffs.getBalance('0x407d73d8a49eeb85d32cf465507dd71d507100c1');
// $ExpectType Promise<string>
puffs.getBalance('0x407d73d8a49eeb85d32cf465507dd71d507100c1', '1000');
// $ExpectType Promise<string>
puffs.getBalance('0x407d73d8a49eeb85d32cf465507dd71d507100c1', '1000', (error: Error, balance: string) => {});
// $ExpectType Promise<string>
puffs.getBalance('0x407d73d8a49eeb85d32cf465507dd71d507100c1', 1000);
// $ExpectType Promise<string>
puffs.getBalance('0x407d73d8a49eeb85d32cf465507dd71d507100c1', 1000, (error: Error, balance: string) => {});

// $ExpectType Promise<string>
puffs.getStorageAt('0x407d73d8a49eeb85d32cf465507dd71d507100c1', 2);
// $ExpectType Promise<string>
puffs.getStorageAt('0x407d73d8a49eeb85d32cf465507dd71d507100c1', 2, '1000');
// $ExpectType Promise<string>
puffs.getStorageAt('0x407d73d8a49eeb85d32cf465507dd71d507100c1', 2, '1000', (error: Error, balance: string) => {});
// $ExpectType Promise<string>
puffs.getStorageAt('0x407d73d8a49eeb85d32cf465507dd71d507100c1', 2, 1000);
// $ExpectType Promise<string>
puffs.getStorageAt('0x407d73d8a49eeb85d32cf465507dd71d507100c1', 2, 1000, (error: Error, balance: string) => {});

// $ExpectType Promise<string>
puffs.getCode('0x407d73d8a49eeb85d32cf465507dd71d507100c1');
// $ExpectType Promise<string>
puffs.getCode('0x407d73d8a49eeb85d32cf465507dd71d507100c1', '1000');
// $ExpectType Promise<string>
puffs.getCode('0x407d73d8a49eeb85d32cf465507dd71d507100c1', '1000', (error: Error, balance: string) => {});
// $ExpectType Promise<string>
puffs.getCode('0x407d73d8a49eeb85d32cf465507dd71d507100c1', 1000);
// $ExpectType Promise<string>
puffs.getCode('0x407d73d8a49eeb85d32cf465507dd71d507100c1', 1000, (error: Error, balance: string) => {});

// $ExpectType Promise<Block>
puffs.getBlock('0x407d73d8a49eeb85d32cf465507dd71d507100c1');
// $ExpectType Promise<Block>
puffs.getBlock(345);
// $ExpectType Promise<Block>
puffs.getBlock('0x407d73d8a49eeb85d32cf465507dd71d507100c1', true);
// $ExpectType Promise<Block>
puffs.getBlock('0x407d73d8a49eeb85d32cf465507dd71d507100c1', false);
// $ExpectType Promise<Block>
puffs.getBlock(345);
// $ExpectType Promise<Block>
puffs.getBlock(345, true);
// $ExpectType Promise<Block>
puffs.getBlock(345, false);
// $ExpectType Promise<Block>
puffs.getBlock('0x407d73d8a49eeb85d32cf465507dd71d507100c1', (error: Error, block: Block) => {});
// $ExpectType Promise<Block>
puffs.getBlock(345, (error: Error, block: Block) => {});
// $ExpectType Promise<Block>
puffs.getBlock(345, true, (error: Error, block: Block) => {});
// $ExpectType Promise<Block>
puffs.getBlock(345, false, (error: Error, block: Block) => {});
// $ExpectType Promise<Block>
puffs.getBlock('0x407d73d8a49eeb85d32cf465507dd71d507100c1', true, (error: Error, block: Block) => {});
// $ExpectType Promise<Block>
puffs.getBlock('0x407d73d8a49eeb85d32cf465507dd71d507100c1', false, (error: Error, block: Block) => {});

// $ExpectType Promise<number>
puffs.getBlockTransactionCount(
    '0x407d73d8a49eeb85d32cf465507dd71d507100c1',
    (error: Error, numberOfTransactions: number) => {}
);
// $ExpectType Promise<number>
puffs.getBlockTransactionCount(345);
// $ExpectType Promise<number>
puffs.getBlockTransactionCount(
    '0x407d73d8a49eeb85d32cf465507dd71d507100c1',
    (error: Error, numberOfTransactions: number) => {}
);
// $ExpectType Promise<number>
puffs.getBlockTransactionCount(345);

// $ExpectType Promise<Block>
puffs.getUncle('0x407d73d8a49eeb85d32cf465507dd71d507100c1', 4);
// $ExpectType Promise<Block>
puffs.getUncle(345, 4);
// $ExpectType Promise<Block>
puffs.getUncle('0x407d73d8a49eeb85d32cf465507dd71d507100c1', 4, true);
// $ExpectType Promise<Block>
puffs.getUncle('0x407d73d8a49eeb85d32cf465507dd71d507100c1', 4, false);
// $ExpectType Promise<Block>
puffs.getUncle('0x407d73d8a49eeb85d32cf465507dd71d507100c1', 4, (error: Error, uncle: {}) => {});
// $ExpectType Promise<Block>
puffs.getUncle(345, 4, (error: Error, uncle: {}) => {});
// $ExpectType Promise<Block>
puffs.getUncle(345, 4, true);
// $ExpectType Promise<Block>
puffs.getUncle(345, 4, false);
// $ExpectType Promise<Block>
puffs.getUncle('0x407d73d8a49eeb85d32cf465507dd71d507100c1', 4, true, (error: Error, uncle: {}) => {});
// $ExpectType Promise<Block>
puffs.getUncle('0x407d73d8a49eeb85d32cf465507dd71d507100c1', 4, false, (error: Error, uncle: {}) => {});
// $ExpectType Promise<Block>
puffs.getUncle(345, 4, true, (error: Error, uncle: {}) => {});
// $ExpectType Promise<Block>
puffs.getUncle(345, 4, false, (error: Error, uncle: {}) => {});

// $ExpectType Promise<Transaction>
puffs.getTransaction('0x407d73d8a49eeb85d32cf465507dd71d507100c1');
// $ExpectType Promise<Transaction>
puffs.getTransaction('0x407d73d8a49eeb85d32cf465507dd71d507100c1', (error: Error, transaction: Transaction) => {});

// $ExpectType Promise<Transaction>
puffs.getTransactionFromBlock('0x407d73d8a49eeb85d32cf465507dd71d507100c1', 2);
// $ExpectType Promise<Transaction>
puffs.getTransactionFromBlock(345, 2);
// $ExpectType Promise<Transaction>
puffs.getTransactionFromBlock(
    '0x407d73d8a49eeb85d32cf465507dd71d507100c1',
    2,
    (error: Error, transaction: Transaction) => {}
);
// $ExpectType Promise<Transaction>
puffs.getTransactionFromBlock(345, 2, (error: Error, transaction: Transaction) => {});

// $ExpectType Promise<TransactionReceipt>
puffs.getTransactionReceipt('0x407d73d8a49eeb85d32cf465507dd71d507100c1');
// $ExpectType Promise<TransactionReceipt>
puffs.getTransactionReceipt(
    '0x407d73d8a49eeb85d32cf465507dd71d507100c1',
    (error: Error, transactionReceipt: TransactionReceipt) => {}
);

// $ExpectType Promise<number>
puffs.getTransactionCount('0x407d73d8a49eeb85d32cf465507dd71d507100c1');
// $ExpectType Promise<number>
puffs.getTransactionCount('0x407d73d8a49eeb85d32cf465507dd71d507100c1', 1000);
// $ExpectType Promise<number>
puffs.getTransactionCount('0x407d73d8a49eeb85d32cf465507dd71d507100c1', '1000');
// $ExpectType Promise<number>
puffs.getTransactionCount('0x407d73d8a49eeb85d32cf465507dd71d507100c1', (error: Error, count: number) => {});
// $ExpectType Promise<number>
puffs.getTransactionCount('0x407d73d8a49eeb85d32cf465507dd71d507100c1', (error: Error, count: number) => {});
// $ExpectType Promise<number>
puffs.getTransactionCount('0x407d73d8a49eeb85d32cf465507dd71d507100c1', 1000, (error: Error, count: number) => {});
// $ExpectType Promise<number>
puffs.getTransactionCount('0x407d73d8a49eeb85d32cf465507dd71d507100c1', '1000', (error: Error, count: number) => {});

const code = '603d80600c6000396000f3007c0';

// $ExpectType PromiEvent<TransactionReceipt>
puffs.sendTransaction({
    from: '0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe',
    data: 'code'
});
// $ExpectType PromiEvent<TransactionReceipt>
puffs.sendTransaction(
    {
        from: '0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe',
        data: 'code'
    },
    (error: Error, hash: string) => {}
);

// $ExpectType PromiEvent<TransactionReceipt>
puffs.sendSignedTransaction('0xf889808609184e72a0008227109');
// $ExpectType PromiEvent<TransactionReceipt>
puffs.sendSignedTransaction('0xf889808609184e72a0008227109', (error: Error, hash: string) => {});

// $ExpectType Promise<string>
puffs.sign('Hello world', '0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe');
// $ExpectType Promise<string>
puffs.sign('Hello world', 3);
// $ExpectType Promise<string>
puffs.sign('Hello world', '0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe', (error: Error, signature: string) => {});
// $ExpectType Promise<string>
puffs.sign('Hello world', 3, (error: Error, signature: string) => {});

// $ExpectType Promise<RLPEncodedTransaction>
puffs.signTransaction({
    from: '0xEB014f8c8B418Db6b45774c326A0E64C78914dC0',
    gasPrice: '20000000000',
    gas: '21000',
    to: '0x3535353535353535353535353535353535353535',
    value: '1000000000000000000',
    data: ''
});
// $ExpectType Promise<RLPEncodedTransaction>
puffs.signTransaction(
    {
        from: '0xEB014f8c8B418Db6b45774c326A0E64C78914dC0',
        gasPrice: '20000000000',
        gas: '21000',
        to: '0x3535353535353535353535353535353535353535',
        value: '1000000000000000000',
        data: ''
    },
    '0xEB014f8c8B418Db6b45774c326A0E64C78914dC0'
);
// $ExpectType Promise<RLPEncodedTransaction>
puffs.signTransaction(
    {
        from: '0xEB014f8c8B418Db6b45774c326A0E64C78914dC0',
        gasPrice: '20000000000',
        gas: '21000',
        to: '0x3535353535353535353535353535353535353535',
        value: '1000000000000000000',
        data: ''
    },
    (error: Error, signedTransaction: RLPEncodedTransaction) => {}
);
// $ExpectType Promise<RLPEncodedTransaction>
puffs.signTransaction(
    {
        from: '0xEB014f8c8B418Db6b45774c326A0E64C78914dC0',
        gasPrice: '20000000000',
        gas: '21000',
        to: '0x3535353535353535353535353535353535353535',
        value: '1000000000000000000',
        data: ''
    },
    '0xEB014f8c8B418Db6b45774c326A0E64C78914dC0',
    (error: Error, signedTransaction: RLPEncodedTransaction) => {}
);

// $ExpectType Promise<string>
puffs.call({
    to: '0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe', // contract address
    data: '0xc6888fa10000000000000000000000000000000000000000000000000000000000000003'
});
// $ExpectType Promise<string>
puffs.call(
    {
        to: '0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe', // contract address
        data: '0xc6888fa10000000000000000000000000000000000000000000000000000000000000003'
    },
    100
);
// $ExpectType Promise<string>
puffs.call(
    {
        to: '0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe', // contract address
        data: '0xc6888fa10000000000000000000000000000000000000000000000000000000000000003'
    },
    '100'
);
// $ExpectType Promise<string>
puffs.call(
    {
        to: '0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe', // contract address
        data: '0xc6888fa10000000000000000000000000000000000000000000000000000000000000003'
    },
    (error: Error, data: string) => {}
);
// $ExpectType Promise<string>
puffs.call(
    {
        to: '0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe', // contract address
        data: '0xc6888fa10000000000000000000000000000000000000000000000000000000000000003'
    },
    '100',
    (error: Error, data: string) => {}
);
// $ExpectType Promise<string>
puffs.call(
    {
        to: '0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe', // contract address
        data: '0xc6888fa10000000000000000000000000000000000000000000000000000000000000003'
    },
    100,
    (error: Error, data: string) => {}
);

// $ExpectType Promise<string>
puffs.call(
    {
        to: '0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe', // contract address
        data: '0xc6888fa10000000000000000000000000000000000000000000000000000000000000003'
    },
    100,
    (error: Error, data: string) => {}
);

// $ExpectType Promise<number>
puffs.estimateGas({
    to: '0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe',
    data: '0xc6888fa10000000000000000000000000000000000000000000000000000000000000003'
});
// $ExpectType Promise<number>
puffs.estimateGas(
    {
        to: '0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe',
        data: '0xc6888fa10000000000000000000000000000000000000000000000000000000000000003'
    },
    (error: Error, gas: number) => {}
);

// $ExpectType Promise<Log[]>
puffs.getPastLogs({
    address: '0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe',
    topics: ['0x033456732123ffff2342342dd12342434324234234fd234fd23fd4f23d4234']
});
// $ExpectType Promise<Log[]>
puffs.getPastLogs(
    {
        address: '0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe',
        topics: ['0x033456732123ffff2342342dd12342434324234234fd234fd23fd4f23d4234']
    },
    (error: Error, logs: Log[]) => {}
);

// $ExpectType Promise<string[]>
puffs.getWork();
// $ExpectType Promise<string[]>
puffs.getWork((error: Error, result: string[]) => {});

// $ExpectType Promise<boolean>
puffs.submitWork([
    '0x0000000000000001',
    '0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef',
    '0xD1FE5700000000000000000000000000D1FE5700000000000000000000000000'
]);

// $ExpectType Promise<boolean>
puffs.submitWork(
    [
        '0x0000000000000001',
        '0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef',
        '0xD1FE5700000000000000000000000000D1FE5700000000000000000000000000'
    ],
    (error: Error, result: boolean) => {}
);

// $ExpectType Promise<[]>
puffs.pendingTransactions();

// $ExpectType Promise<[]>
puffs.pendingTransactions((error: Error, result: []) => {});

// $ExpectType Promise<GetProof>
puffs.getProof(
    "0x1234567890123456789012345678901234567890",
    ["0x0000000000000000000000000000000000000000000000000000000000000000","0x0000000000000000000000000000000000000000000000000000000000000001"],
    "latest"
);

// $ExpectType Promise<GetProof>
puffs.getProof(
    "0x1234567890123456789012345678901234567890",
    ["0x0000000000000000000000000000000000000000000000000000000000000000","0x0000000000000000000000000000000000000000000000000000000000000001"],
    "latest",
    (error: Error, result: GetProof) => {}
);

// $ExpectType Promise<GetProof>
puffs.getProof(
    "0x1234567890123456789012345678901234567890",
    ["0x0000000000000000000000000000000000000000000000000000000000000000","0x0000000000000000000000000000000000000000000000000000000000000001"],
    10
);

// $ExpectType Promise<GetProof>
puffs.getProof(
    "0x1234567890123456789012345678901234567890",
    ["0x0000000000000000000000000000000000000000000000000000000000000000","0x0000000000000000000000000000000000000000000000000000000000000001"],
    10,
    (error: Error, result: GetProof) => {}
);
