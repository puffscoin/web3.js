import MistPuffscoinProvider from '../../../src/providers/MistPuffscoinProvider';

/**
 * MistPuffscoinProvider test
 */
describe('MistPuffscoinProviderTest', () => {
    let mistPuffscoinProvider, puffscoinProvider;

    beforeEach(() => {
        puffscoinProvider = {on: jest.fn(), isConnected: jest.fn()};
        mistPuffscoinProvider = new MistPuffscoinProvider(puffscoinProvider);
    });

    it('constructor check', () => {
        expect(mistPuffscoinProvider.connection).toEqual(puffscoinProvider);

        expect(mistPuffscoinProvider.host).toEqual('mist');

        expect(mistPuffscoinProvider.timeout).toEqual(null);
    });

    it('calls registerEventListeners and the expected listeners will be registered', () => {
        mistPuffscoinProvider.registerEventListeners();

        expect(puffscoinProvider.on.mock.calls[0][0]).toEqual('data');
        expect(puffscoinProvider.on.mock.calls[0][1]).toBeInstanceOf(Function);

        expect(puffscoinProvider.on.mock.calls[1][0]).toEqual('error');
        expect(puffscoinProvider.on.mock.calls[1][1]).toBeInstanceOf(Function);

        expect(puffscoinProvider.on.mock.calls[2][0]).toEqual('connect');
        expect(puffscoinProvider.on.mock.calls[2][1]).toBeInstanceOf(Function);

        expect(puffscoinProvider.on.mock.calls[3][0]).toEqual('connect');
        expect(puffscoinProvider.on.mock.calls[3][1]).toBeInstanceOf(Function);

        expect(puffscoinProvider.on.mock.calls[4][0]).toEqual('end');
        expect(puffscoinProvider.on.mock.calls[4][1]).toBeInstanceOf(Function);
    });
    it('calls disconnect and returns true', () => {
        expect(mistPuffscoinProvider.disconnect()).toEqual(true);
    });

    it('calls connected and returns true', () => {
        puffscoinProvider.isConnected.mockReturnValueOnce(true);

        expect(mistPuffscoinProvider.connected).toEqual(true);

        expect(puffscoinProvider.isConnected).toHaveBeenCalled();
    });

    it('calls removeAllListeners and executes the expected methods', () => {
        puffscoinProvider.removeListener = jest.fn();

        mistPuffscoinProvider.removeAllListeners('socket_message');
        mistPuffscoinProvider.removeAllListeners('socket_error');
        mistPuffscoinProvider.removeAllListeners('socket_connect');
        mistPuffscoinProvider.removeAllListeners('socket_ready');
        mistPuffscoinProvider.removeAllListeners('socket_close');

        expect(puffscoinProvider.removeListener).toHaveBeenNthCalledWith(1, 'data', mistPuffscoinProvider.onMessage);
        expect(puffscoinProvider.removeListener).toHaveBeenNthCalledWith(2, 'error', mistPuffscoinProvider.onError);
        expect(puffscoinProvider.removeListener).toHaveBeenNthCalledWith(3, 'connect', mistPuffscoinProvider.onConnect);
        expect(puffscoinProvider.removeListener).toHaveBeenNthCalledWith(4, 'connect', mistPuffscoinProvider.onConnect);
        expect(puffscoinProvider.removeListener).toHaveBeenNthCalledWith(5, 'end', mistPuffscoinProvider.onClose);
    });

    it('calls sendPayload and returns with an resolved promise', async () => {
        puffscoinProvider.send = jest.fn((payload, callback) => {
            expect(callback).toBeInstanceOf(Function);

            expect(payload).toEqual({id: 0});

            callback(false, true);
        });

        const response = await mistPuffscoinProvider.sendPayload({id: 0});

        expect(response).toEqual(true);

        expect(puffscoinProvider.send).toHaveBeenCalled();
    });

    it('calls sendPayload and returns with an rejected promise', async () => {
        puffscoinProvider.send = jest.fn((payload, callback) => {
            expect(callback).toBeInstanceOf(Function);

            expect(payload).toEqual({id: 0});

            callback(true, false);
        });

        await expect(mistPuffscoinProvider.sendPayload({id: 0})).rejects.toEqual(true);

        expect(puffscoinProvider.send).toHaveBeenCalled();
    });
});
