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
 * @file GetBlockTransactionCountMethod.js
 * @author Samuel Furter <samuel@ethereum.org>
 * @date 2018
 */

import {AbstractGetBlockTransactionCountMethod} from 'web3-core-method';

export default class GetBlockTransactionCountMethod extends AbstractGetBlockTransactionCountMethod {
    /**
     * @param {Utils} utils
     * @param {Object} formatters
     * @param {AbstractWeb3Module} moduleInstance
     *
     * @constructor
     */
    constructor(utils, formatters, moduleInstance) {
        super('puffs_getBlockTransactionCountByNumber', utils, formatters, moduleInstance);
    }

    /**
     * TODO: Refactor public API and create two methods out of it: puffs.getBlockTransactionCountByHash(...)
     *
     * This method will be executed before the RPC request.
     *
     * @method beforeExecution
     *
     * @param {AbstractWeb3Module} moduleInstance
     */
    beforeExecution(moduleInstance) {
        if (this.isHash(this.parameters[0])) {
            this.rpcMethod = 'puffs_getBlockTransactionCountByHash';
        }

        super.beforeExecution(moduleInstance);
    }
}
