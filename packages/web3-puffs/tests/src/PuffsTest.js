import * as Utils from 'web3-utils';
import {formatters} from 'web3-core-helpers';
import {AbstractSubscription, LogSubscription} from 'web3-core-subscriptions';
import {AbiCoder} from 'web3-puffs-abi';
import {Accounts} from 'web3-puffs-accounts';
import {Ens} from 'web3-puffs-ens';
import {Iban} from 'web3-puffs-iban';
import {Personal} from 'web3-puffs-personal';
import {Network} from 'web3-net';
import {ContractModuleFactory} from 'web3-puffs-contract';
import MethodFactory from '../../src/factories/MethodFactory';
import TransactionSigner from '../../src/signers/TransactionSigner';
import SubscriptionsFactory from '../../src/factories/SubscriptionsFactory';
import Puffs from '../../src/Puffs';

// Mocks
jest.mock('web3-core');
jest.mock('web3-core-subscriptions');
jest.mock('web3-puffs-abi');
jest.mock('web3-puffs-accounts');
jest.mock('web3-puffs-ens');
jest.mock('web3-puffs-iban');
jest.mock('web3-puffs-personal');
jest.mock('web3-net');
jest.mock('web3-puffs-contract');
jest.mock('web3-utils');
jest.mock('web3-core-helpers');
jest.mock('../../src/factories/MethodFactory');
jest.mock('../../src/signers/TransactionSigner');
jest.mock('../../src/factories/SubscriptionsFactory');

/**
 * Puffs test
 */
describe('PuffsTest', () => {
    let puffs,
        providerMock,
        methodFactoryMock,
        contractModuleFactoryMock,
        networkMock,
        accountsMock,
        personalMock,
        abiCoderMock,
        ensMock,
        subscriptionsFactoryMock,
        transactionSignerMock;

    beforeEach(() => {
        providerMock = {send: jest.fn(), clearSubscriptions: jest.fn()};

        new MethodFactory();
        methodFactoryMock = MethodFactory.mock.instances[0];

        new ContractModuleFactory();
        contractModuleFactoryMock = ContractModuleFactory.mock.instances[0];

        new Network();
        networkMock = Network.mock.instances[0];

        new Accounts();
        accountsMock = Accounts.mock.instances[0];

        new Personal();
        personalMock = Personal.mock.instances[0];

        new AbiCoder();
        abiCoderMock = AbiCoder.mock.instances[0];

        new Ens();
        ensMock = Ens.mock.instances[0];

        new SubscriptionsFactory();
        subscriptionsFactoryMock = SubscriptionsFactory.mock.instances[0];

        new TransactionSigner();
        transactionSignerMock = TransactionSigner.mock.instances[0];

        puffs = new Puffs(
            providerMock,
            methodFactoryMock,
            networkMock,
            accountsMock,
            personalMock,
            Iban,
            abiCoderMock,
            ensMock,
            Utils,
            formatters,
            subscriptionsFactoryMock,
            contractModuleFactoryMock,
            {transactionSigner: transactionSignerMock},
            {}
        );
    });

    it('constructor check', () => {
        expect(puffs.contractModuleFactory).toEqual(contractModuleFactoryMock);

        expect(puffs.net).toEqual(networkMock);

        expect(puffs.accounts).toEqual(accountsMock);

        expect(puffs.personal).toEqual(personalMock);

        expect(puffs.Iban).toEqual(Iban);

        expect(puffs.abi).toEqual(abiCoderMock);

        expect(puffs.ens).toEqual(ensMock);

        expect(puffs.utils).toEqual(Utils);

        expect(puffs.formatters).toEqual(formatters);

        expect(puffs.initiatedContracts).toEqual([]);

        expect(puffs.Contract).toBeInstanceOf(Function);
    });

    it('sets the defaultGasPrice property', () => {
        puffs.initiatedContracts = [{defaultGasPrice: 20}];

        puffs.defaultGasPrice = 10;

        expect(puffs.initiatedContracts[0].defaultGasPrice).toEqual(10);

        expect(puffs.defaultGasPrice).toEqual(10);

        expect(networkMock.defaultGasPrice).toEqual(10);

        expect(personalMock.defaultGasPrice).toEqual(10);
    });

    it('sets the defaultGas property', () => {
        puffs.initiatedContracts = [{defaultGas: 20}];
        puffs.defaultGas = 10;

        expect(puffs.initiatedContracts[0].defaultGas).toEqual(10);

        expect(puffs.defaultGas).toEqual(10);

        expect(networkMock.defaultGas).toEqual(10);

        expect(personalMock.defaultGas).toEqual(10);
    });

    it('sets the transactionBlockTimeout property', () => {
        puffs.initiatedContracts = [{transactionBlockTimeout: 20}];
        puffs.transactionBlockTimeout = 10;

        expect(puffs.initiatedContracts[0].transactionBlockTimeout).toEqual(10);

        expect(puffs.transactionBlockTimeout).toEqual(10);

        expect(networkMock.transactionBlockTimeout).toEqual(10);

        expect(personalMock.transactionBlockTimeout).toEqual(10);
    });

    it('sets the transactionConfirmationBlocks property', () => {
        puffs.initiatedContracts = [{transactionConfirmationBlocks: 20}];
        puffs.transactionConfirmationBlocks = 10;

        expect(puffs.initiatedContracts[0].transactionConfirmationBlocks).toEqual(10);

        expect(puffs.transactionConfirmationBlocks).toEqual(10);

        expect(networkMock.transactionConfirmationBlocks).toEqual(10);

        expect(personalMock.transactionConfirmationBlocks).toEqual(10);
    });

    it('sets the transactionPollingTimeout property', () => {
        puffs.initiatedContracts = [{transactionPollingTimeout: 20}];
        puffs.transactionPollingTimeout = 10;

        expect(puffs.initiatedContracts[0].transactionPollingTimeout).toEqual(10);

        expect(puffs.transactionPollingTimeout).toEqual(10);

        expect(networkMock.transactionPollingTimeout).toEqual(10);

        expect(personalMock.transactionPollingTimeout).toEqual(10);
    });

    it('sets the defaultAccount property', () => {
        puffs.initiatedContracts = [{defaultAccount: '0x0'}];

        Utils.toChecksumAddress.mockReturnValueOnce('0x1');

        puffs.defaultAccount = '0x1';

        expect(puffs.initiatedContracts[0].defaultAccount).toEqual('0x1');

        expect(puffs.defaultAccount).toEqual('0x1');

        expect(networkMock.defaultAccount).toEqual('0x1');

        expect(personalMock.defaultAccount).toEqual('0x1');

        expect(Utils.toChecksumAddress).toHaveBeenCalledWith('0x1');
    });

    it('sets the defaultBlock property', () => {
        puffs.initiatedContracts = [{defaultBlock: 20}];
        puffs.defaultBlock = 10;

        expect(puffs.initiatedContracts[0].defaultBlock).toEqual(10);

        expect(puffs.defaultBlock).toEqual(10);

        expect(networkMock.defaultBlock).toEqual(10);

        expect(personalMock.defaultBlock).toEqual(10);
    });

    it('calls subscribe wih "logs" as type', () => {
        subscriptionsFactoryMock.createLogSubscription = jest.fn();

        new LogSubscription();
        const logSubscriptionMock = LogSubscription.mock.instances[0];

        logSubscriptionMock.subscribe.mockReturnValueOnce(logSubscriptionMock);

        subscriptionsFactoryMock.getSubscription.mockReturnValueOnce(logSubscriptionMock);

        const callback = () => {};

        expect(puffs.subscribe('logs', {}, callback)).toBeInstanceOf(LogSubscription);

        expect(subscriptionsFactoryMock.getSubscription).toHaveBeenCalledWith(puffs, 'logs', {});

        expect(logSubscriptionMock.subscribe).toHaveBeenCalledWith(callback);
    });

    it('calls subscribe wih "newBlockHeaders" as type', () => {
        subscriptionsFactoryMock.createNewHeadsSubscription = jest.fn();

        new AbstractSubscription();
        const abstractSubscriptionMock = AbstractSubscription.mock.instances[0];

        abstractSubscriptionMock.subscribe.mockReturnValueOnce(abstractSubscriptionMock);

        subscriptionsFactoryMock.getSubscription.mockReturnValueOnce(abstractSubscriptionMock);

        const callback = () => {};

        expect(puffs.subscribe('newBlockHeaders', {}, callback)).toBeInstanceOf(AbstractSubscription);

        expect(subscriptionsFactoryMock.getSubscription).toHaveBeenCalledWith(puffs, 'newBlockHeaders', {});

        expect(abstractSubscriptionMock.subscribe).toHaveBeenCalledWith(callback);
    });

    it('calls subscribe wih "pendingTransactions" as type', () => {
        subscriptionsFactoryMock.createNewPendingTransactionsSubscription = jest.fn();

        new AbstractSubscription();
        const abstractSubscriptionMock = AbstractSubscription.mock.instances[0];

        abstractSubscriptionMock.subscribe.mockReturnValueOnce(abstractSubscriptionMock);

        subscriptionsFactoryMock.getSubscription.mockReturnValueOnce(abstractSubscriptionMock);

        const callback = () => {};

        expect(puffs.subscribe('pendingTransactions', {}, callback)).toBeInstanceOf(AbstractSubscription);

        expect(subscriptionsFactoryMock.getSubscription).toHaveBeenCalledWith(puffs, 'pendingTransactions', {});

        expect(abstractSubscriptionMock.subscribe).toHaveBeenCalledWith(callback);
    });

    it('calls subscribe wih "syncing" as type', () => {
        subscriptionsFactoryMock.createSyncingSubscription = jest.fn();

        new AbstractSubscription();
        const abstractSubscriptionMock = AbstractSubscription.mock.instances[0];

        abstractSubscriptionMock.subscribe.mockReturnValueOnce(abstractSubscriptionMock);

        subscriptionsFactoryMock.getSubscription.mockReturnValueOnce(abstractSubscriptionMock);

        const callback = () => {};

        expect(puffs.subscribe('syncing', {}, callback)).toBeInstanceOf(AbstractSubscription);

        expect(subscriptionsFactoryMock.getSubscription).toHaveBeenCalledWith(puffs, 'syncing', {});

        expect(abstractSubscriptionMock.subscribe).toHaveBeenCalledWith(callback);
    });

    it('calls the Contract factory method with options from the constructor', () => {
        contractModuleFactoryMock.createContract.mockReturnValueOnce({});

        puffs.currentProvider = providerMock;
        expect(new puffs.Contract([], '0x0', {data: '', from: '0x0', gas: '0x0', gasPrice: '0x0'})).toEqual({});

        expect(puffs.initiatedContracts).toHaveLength(1);

        expect(contractModuleFactoryMock.createContract).toHaveBeenCalledWith(providerMock, puffs.accounts, [], '0x0', {
            defaultAccount: '0x0',
            defaultBlock: puffs.defaultBlock,
            defaultGas: '0x0',
            defaultGasPrice: '0x0',
            transactionBlockTimeout: puffs.transactionBlockTimeout,
            transactionConfirmationBlocks: puffs.transactionConfirmationBlocks,
            transactionPollingTimeout: puffs.transactionPollingTimeout,
            transactionSigner: puffs.transactionSigner,
            data: ''
        });
    });

    it('calls the Contract factory method without options from the constructor', () => {
        contractModuleFactoryMock.createContract.mockReturnValueOnce({});

        puffs.currentProvider = providerMock;
        expect(new puffs.Contract([], '0x0', {})).toEqual({});

        expect(puffs.initiatedContracts).toHaveLength(1);

        expect(contractModuleFactoryMock.createContract).toHaveBeenCalledWith(providerMock, puffs.accounts, [], '0x0', {
            defaultAccount: puffs.defaultAccount,
            defaultBlock: puffs.defaultBlock,
            defaultGas: puffs.defaultGas,
            defaultGasPrice: puffs.defaultGasPrice,
            transactionBlockTimeout: puffs.transactionBlockTimeout,
            transactionConfirmationBlocks: puffs.transactionConfirmationBlocks,
            transactionPollingTimeout: puffs.transactionPollingTimeout,
            transactionSigner: puffs.transactionSigner,
            data: undefined
        });
    });
});
