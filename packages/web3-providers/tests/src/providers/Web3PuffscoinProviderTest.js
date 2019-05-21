import Web3PuffscoinProvider from '../../../src/providers/Web3PuffscoinProvider';
import JsonRpcResponseValidator from '../../../src/validators/JsonRpcResponseValidator';
import AbstractMethod from '../../__mocks__/AbstractMethod';
import AbstractWeb3Module from '../../__mocks__/AbstractWeb3Module';
import AbstractSocketProvider from '../../../lib/providers/AbstractSocketProvider';

/**
 * Web3PuffscoinProvider test
 */
describe('Web3PuffscoinProviderTest', () => {
    let puffscoinProvider, socketMock;

    beforeEach(() => {
        socketMock = {
            on: jest.fn()
        };

        puffscoinProvider = new Web3PuffscoinProvider(socketMock);
    });

    it('constructor check', () => {
        expect(puffscoinProvider.timeout).toEqual(null);

        expect(puffscoinProvider.connection).toEqual(socketMock);

        expect(puffscoinProvider).toBeInstanceOf(AbstractSocketProvider);

        expect(puffscoinProvider.host).toEqual('Web3PuffscoinProvider');
    });

    it('calls registerEventListeners and the expected listeners will be registered', () => {
        puffscoinProvider.registerEventListeners();

        expect(socketMock.on.mock.calls[0][0]).toEqual('notification');
        expect(socketMock.on.mock.calls[0][1]).toBeInstanceOf(Function);

        expect(socketMock.on.mock.calls[1][0]).toEqual('connect');
        expect(socketMock.on.mock.calls[1][1]).toBeInstanceOf(Function);

        expect(socketMock.on.mock.calls[2][0]).toEqual('connect');
        expect(socketMock.on.mock.calls[2][1]).toBeInstanceOf(Function);

        expect(socketMock.on.mock.calls[3][0]).toEqual('close');
        expect(socketMock.on.mock.calls[3][1]).toBeInstanceOf(Function);

        expect(socketMock.on.mock.calls[4][0]).toEqual('networkChanged');
        expect(socketMock.on.mock.calls[4][1]).toBeInstanceOf(Function);

        expect(socketMock.on.mock.calls[5][0]).toEqual('accountsChanged');
        expect(socketMock.on.mock.calls[5][1]).toBeInstanceOf(Function);
    });

    it('calls removeAllListeners with the "socket_networkChanged" event', (done) => {
        socketMock.removeListener = jest.fn((event, listener) => {
            expect(event).toEqual('networkChanged');

            expect(listener).toEqual(puffscoinProvider.onNetworkChanged);

            done();
        });

        puffscoinProvider.removeAllListeners('socket_networkChanged');
    });

    it('calls removeAllListeners with the "socket_accountsChanged" event', (done) => {
        socketMock.removeListener = jest.fn((event, listener) => {
            expect(event).toEqual('accountsChanged');

            expect(listener).toEqual(puffscoinProvider.onAccountsChanged);

            done();
        });

        puffscoinProvider.removeAllListeners('socket_accountsChanged');
    });

    it('calls removeAllListeners with the "socket_message" event', (done) => {
        socketMock.removeListener = jest.fn((event, listener) => {
            expect(event).toEqual('notification');

            expect(listener).toEqual(puffscoinProvider.onMessage);

            done();
        });

        puffscoinProvider.removeAllListeners('socket_message');
    });

    it('calls removeAllListeners with the "socket_ready" event', (done) => {
        socketMock.removeListener = jest.fn((event, listener) => {
            expect(event).toEqual('connect');

            expect(listener).toEqual(puffscoinProvider.onReady);

            done();
        });

        puffscoinProvider.removeAllListeners('socket_ready');
    });

    it('calls removeAllListeners with the "socket_close" event', (done) => {
        socketMock.removeListener = jest.fn((event, listener) => {
            expect(event).toEqual('close');

            expect(listener).toEqual(puffscoinProvider.onClose);

            done();
        });

        puffscoinProvider.removeAllListeners('socket_close');
    });

    it('calls removeAllListeners with the "socket_error" event', (done) => {
        socketMock.removeListener = jest.fn((event, listener) => {
            expect(event).toEqual('close');

            expect(listener).toEqual(puffscoinProvider.onError);

            done();
        });

        puffscoinProvider.removeAllListeners('socket_error');
    });

    it('calls removeAllListeners with the "socket_connect" event', (done) => {
        socketMock.removeListener = jest.fn((event, listener) => {
            expect(event).toEqual('connect');

            expect(listener).toEqual(puffscoinProvider.onConnect);

            done();
        });

        puffscoinProvider.removeAllListeners('socket_connect');
    });

    it('calls removeAllSocketListeners', () => {
        socketMock.removeAllListeners = jest.fn();

        puffscoinProvider.removeAllSocketListeners();

        expect(socketMock.removeAllListeners).toHaveBeenCalled();
    });

    it('calls onNetworkChanged and emits the "networkChanged" event', (done) => {
        puffscoinProvider.on('networkChanged', (networkId) => {
            expect(networkId).toEqual('ID');

            done();
        });

        puffscoinProvider.onNetworkChanged('ID');
    });

    it('calls onAccountsChanged and emits the "accountsChanged" event', (done) => {
        puffscoinProvider.on('accountsChanged', (accounts) => {
            expect(accounts).toEqual([]);

            done();
        });

        puffscoinProvider.onAccountsChanged([]);
    });

    it('calls onMessage and emits the correct event', (done) => {
        puffscoinProvider.subscriptions['0x0'] = true;

        puffscoinProvider.on('0x0', (accounts) => {
            expect(accounts).toEqual({subscription: '0x0'});

            done();
        });

        puffscoinProvider.onMessage({subscription: '0x0'});
    });

    it('calls send and returns a resolved promise with the response', async () => {
        JsonRpcResponseValidator.validate = jest.fn(() => {
            return true;
        });

        socketMock.send = jest.fn((method, parameters) => {
            expect(method).toEqual('method');

            expect(parameters).toEqual([]);

            return Promise.resolve(true);
        });

        const response = await puffscoinProvider.send('method', []);

        expect(response).toEqual(true);

        expect(JsonRpcResponseValidator.validate).toHaveBeenCalled();
    });

    it('calls send and returns a rejected promise because of a invalid response', async () => {
        JsonRpcResponseValidator.validate = jest.fn(() => {
            return new Error('invalid');
        });

        socketMock.send = jest.fn((method, parameters) => {
            expect(method).toEqual('method');

            expect(parameters).toEqual([]);

            return Promise.resolve(false);
        });

        await expect(puffscoinProvider.send('method', [])).rejects.toThrow('invalid');

        expect(JsonRpcResponseValidator.validate).toHaveBeenCalled();
    });

    it('calls sendBatch and returns a resolved promise with the response', async () => {
        const abstractMethodMock = new AbstractMethod();

        const moduleInstanceMock = new AbstractWeb3Module();

        abstractMethodMock.rpcMethod = 'RPC_METHOD';
        abstractMethodMock.parameters = [];

        abstractMethodMock.beforeExecution = jest.fn((moduleInstance) => {
            expect(moduleInstance).toEqual(moduleInstanceMock);
        });

        socketMock.send = jest.fn((method, parameters) => {
            expect(method).toEqual('RPC_METHOD');

            expect(parameters).toEqual([]);

            return Promise.resolve(true);
        });

        const response = await puffscoinProvider.sendBatch([abstractMethodMock], moduleInstanceMock);

        expect(response).toEqual([true]);

        expect(abstractMethodMock.beforeExecution).toHaveBeenCalled();
    });
});
