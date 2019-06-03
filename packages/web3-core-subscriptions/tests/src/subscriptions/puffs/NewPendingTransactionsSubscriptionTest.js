import NewPendingTransactionsSubscription from '../../../../src/subscriptions/puffs/NewPendingTransactionsSubscription';

/**
 * NewPendingTransactionsSubscription test
 */
describe('NewPendingTransactionsSubscriptionTest', () => {
    let newPendingTransactionsSubscription;

    beforeEach(() => {
        newPendingTransactionsSubscription = new NewPendingTransactionsSubscription({}, {}, {});
    });

    it('constructor check', () => {
        expect(newPendingTransactionsSubscription.method).toEqual('newPendingTransactions');

        expect(newPendingTransactionsSubscription.type).toEqual('puffs_subscribe');

        expect(newPendingTransactionsSubscription.options).toEqual(null);

        expect(newPendingTransactionsSubscription.utils).toEqual({});

        expect(newPendingTransactionsSubscription.moduleInstance).toEqual({});
    });
});
