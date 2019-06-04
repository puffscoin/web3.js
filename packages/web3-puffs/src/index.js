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
 * @file index.js
 * @author Samuel Furter <samuel@ethereum.org>
 * @date 2018
 */

import {formatters} from 'web3-core-helpers';
import {Accounts} from 'web3-puffs-accounts';
import {Ens} from 'web3-puffs-ens';
import {ContractModuleFactory} from 'web3-puffs-contract';
import {Personal} from 'web3-puffs-personal';
import {AbiCoder} from 'web3-puffs-abi';
import {Iban} from 'web3-puffs-iban';
import {Network} from 'web3-net';
import * as Utils from 'web3-utils';
import PuffsTransactionSigner from './signers/TransactionSigner';
import MethodFactory from './factories/MethodFactory';
import SubscriptionsFactory from './factories/SubscriptionsFactory';
import {ProviderResolver} from 'web3-providers';
import PuffsModule from './Puffs.js';

/**
 * Creates the TransactionSigner class
 *
 * @returns {TransactionSigner}
 * @constructor
 */
export function TransactionSigner() {
    return new PuffsTransactionSigner(Utils, formatters);
}

/**
 * Creates the Puffs object
 *
 * @method Puffs
 *
 * @param {AbstractSocketProvider|HttpProvider|CustomProvider|String} provider
 * @param {Net} net
 * @param {Object} options
 *
 * @returns {Eth}
 * @constructor
 */
export function Puffs(provider, net = null, options = {}) {
    if (!options.transactionSigner || options.transactionSigner.type === 'TransactionSigner') {
        options.transactionSigner = new TransactionSigner();
    }

    const resolvedProvider = new ProviderResolver().resolve(provider, net);
    const accounts = new Accounts(resolvedProvider, null, options);
    const abiCoder = new AbiCoder();

    return new PuffsModule(
        resolvedProvider,
        new MethodFactory(Utils, formatters),
        new Network(resolvedProvider, null, options),
        accounts,
        new Personal(resolvedProvider, null, accounts, options),
        Iban,
        abiCoder,
        new Ens(resolvedProvider, null, accounts, options),
        Utils,
        formatters,
        new SubscriptionsFactory(Utils, formatters),
        new ContractModuleFactory(Utils, formatters, abiCoder, accounts),
        options,
        net
    );
}
