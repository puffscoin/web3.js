import {
    CallMethod,
    ChainIdMethod,
    EstimateGasMethod,
    PuffsSendTransactionMethod,
    GetBalanceMethod,
    GetBlockNumberMethod,
    GetCodeMethod,
    GetCoinbaseMethod,
    GetGasPriceMethod,
    GetHashrateMethod,
    GetNodeInfoMethod,
    GetPastLogsMethod,
    GetProtocolVersionMethod,
    GetStorageAtMethod,
    GetTransactionCountMethod,
    GetTransactionMethod,
    GetPendingTransactionsMethod,
    GetTransactionReceiptMethod,
    GetWorkMethod,
    IsMiningMethod,
    IsSyncingMethod,
    RequestAccountsMethod,
    SendRawTransactionMethod,
    SubmitWorkMethod,
    VersionMethod,
    GetProofMethod
} from 'web3-core-method';
import * as Utils from 'web3-utils';
import {formatters} from 'web3-core-helpers';
import MethodFactory from '../../../src/factories/MethodFactory';
import GetBlockMethod from '../../../src/methods/GetBlockMethod';
import GetUncleMethod from '../../../src/methods/GetUncleMethod';
import GetBlockTransactionCountMethod from '../../../src/methods/GetBlockTransactionCountMethod';
import GetBlockUncleCountMethod from '../../../src/methods/GetBlockUncleCountMethod';
import GetTransactionFromBlockMethod from '../../../src/methods/GetTransactionFromBlockMethod';
import PuffsSignTransactionMethod from '../../../src/methods/PuffsSignTransactionMethod';
import PuffsSignMethod from '../../../src/methods/PuffsSignMethod';
import PuffsGetAccountsMethod from '../../../src/methods/PuffsGetAccountsMethod';

jest.mock('web3-utils');
jest.mock('web3-core-helpers');

/**
 * MethodFactory test
 */
describe('MethodFactoryTest', () => {
    let methodFactory;

    beforeEach(() => {
        methodFactory = new MethodFactory(Utils, formatters);
    });

    it('constructor check', () => {
        expect(methodFactory.utils).toEqual(Utils);

        expect(methodFactory.formatters).toEqual(formatters);
    });

    it('JSON-RPC methods check', () => {
        expect(methodFactory.methods).toEqual({
            getNodeInfo: GetNodeInfoMethod,
            getProtocolVersion: GetProtocolVersionMethod,
            getCoinbase: GetCoinbaseMethod,
            isMining: IsMiningMethod,
            getHashrate: GetHashrateMethod,
            isSyncing: IsSyncingMethod,
            getGasPrice: GetGasPriceMethod,
            getAccounts: PuffsGetAccountsMethod,
            getBlockNumber: GetBlockNumberMethod,
            getBalance: GetBalanceMethod,
            getStorageAt: GetStorageAtMethod,
            getCode: GetCodeMethod,
            getBlock: GetBlockMethod,
            getUncle: GetUncleMethod,
            getBlockTransactionCount: GetBlockTransactionCountMethod,
            getBlockUncleCount: GetBlockUncleCountMethod,
            getTransaction: GetTransactionMethod,
            getPendingTransactions: GetPendingTransactionsMethod,
            getTransactionFromBlock: GetTransactionFromBlockMethod,
            getTransactionReceipt: GetTransactionReceiptMethod,
            getTransactionCount: GetTransactionCountMethod,
            sendSignedTransaction: SendRawTransactionMethod,
            signTransaction: PuffsSignTransactionMethod,
            sendTransaction: PuffsSendTransactionMethod,
            sign: PuffsSignMethod,
            call: CallMethod,
            estimateGas: EstimateGasMethod,
            submitWork: SubmitWorkMethod,
            getWork: GetWorkMethod,
            getPastLogs: GetPastLogsMethod,
            requestAccounts: RequestAccountsMethod,
            getChainId: ChainIdMethod,
            getId: VersionMethod,
            getProof: GetProofMethod
        });
    });
});
