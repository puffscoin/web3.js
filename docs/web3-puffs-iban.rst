.. _puffs-iban:

.. include:: include_announcement.rst

=============
web3.puffs.Iban
=============

The ``web3.puffs.Iban`` function lets convert PUFFScoin addresses from and to IBAN and BBAN.

.. code-block:: javascript

    import {Iban} from 'web3-puffs-iban';

    const iban = new Iban('XE7338O073KYGTWWZN0F2WZ0R8PX5ZPPZS');

    // or using the web3 umbrella package

    import Web3 from 'web3';
    const web3 = new Web3(Web3.givenProvider || 'ws://some.local-or-remote.node:11364', null, options);

    // -> new web3.puffs.Iban('XE7338O073KYGTWWZN0F2WZ0R8PX5ZPPZS')



------------------------------------------------------------------------------

Iban instance
=====================

This's instance of Iban

.. code-block:: javascript

    > Iban { _iban: 'XE7338O073KYGTWWZN0F2WZ0R8PX5ZPPZS' }

------------------------------------------------------------------------------

.. _puffs-iban-toaddress:

toAddress
=====================

    static function

.. code-block:: javascript

    web3.puffs.Iban.toAddress(ibanAddress)

Singleton: Converts a direct IBAN address into an PUFFScoin address.

.. note:: This method also exists on the IBAN instance.

----------
Parameters
----------

1. ``String``: the IBAN address to convert.

-------
Returns
-------

``String`` - The PUFFScoin address.

-------
Example
-------

.. code-block:: javascript

    web3.puffs.Iban.toAddress("XE7338O073KYGTWWZN0F2WZ0R8PX5ZPPZS");
    > "0x00c5496aEe77C1bA1f0854206A26DdA82a81D6D8"


------------------------------------------------------------------------------

.. _puffs-iban-toiban:

toIban
=====================

    static function

.. code-block:: javascript

    web3.puffs.Iban.toIban(address)

Singleton: Converts an PUFFScoin address to a direct IBAN address.

----------
Parameters
----------

1. ``String``: the PUFFScoin address to convert.

-------
Returns
-------

``String`` - The IBAN address.

-------
Example
-------

.. code-block:: javascript

    web3.puffs.Iban.toIban("0x00c5496aEe77C1bA1f0854206A26DdA82a81D6D8");
    > "XE7338O073KYGTWWZN0F2WZ0R8PX5ZPPZS"


------------------------------------------------------------------------------

.. _puffs-iban-fromaddress:

    static function, return IBAN instance

fromAddress
=====================

.. code-block:: javascript

    web3.puffs.Iban.fromAddress(address)

Singleton: Converts an PUFFScoin address to a direct IBAN instance.

----------
Parameters
----------

1. ``String``: the PUFFScoin address to convert.

-------
Returns
-------

``Object`` - The IBAN instance.

-------
Example
-------

.. code-block:: javascript

    web3.puffs.Iban.fromAddress("0x00c5496aEe77C1bA1f0854206A26DdA82a81D6D8");
    > Iban {_iban: "XE7338O073KYGTWWZN0F2WZ0R8PX5ZPPZS"}


------------------------------------------------------------------------------

.. _puffs-iban-frombban:

    static function, return IBAN instance

fromBban
=====================

.. code-block:: javascript

    web3.puffs.Iban.fromBban(bbanAddress)

Singleton: Converts an BBAN address to a direct IBAN instance.

----------
Parameters
----------

1. ``String``: the BBAN address to convert.

-------
Returns
-------

``Object`` - The IBAN instance.

-------
Example
-------

.. code-block:: javascript

    web3.puffs.Iban.fromBban('PUFFSXREGGAVOFYORK');
    > Iban {_iban: "XE7338O073KYGTWWZN0F2WZ0R8PX5ZPPZS"}


------------------------------------------------------------------------------

.. _puffs-iban-createindirect:

    static function, return IBAN instance

createIndirect
=====================

.. code-block:: javascript

    web3.puffs.Iban.createIndirect(options)

Singleton: Creates an indirect IBAN address from a institution and identifier.

----------
Parameters
----------

1. ``Object``: the options object as follows:
    - ``institution`` - ``String``: the institution to be assigned
    - ``identifier`` - ``String``: the identifier to be assigned

-------
Returns
-------

``Object`` - The IBAN instance.

-------
Example
-------

.. code-block:: javascript

    web3.puffs.Iban.createIndirect({
        institution: "XREG",
        identifier: "GAVOFYORK"
    });
    > Iban {_iban: "XE7338O073KYGTWWZN0F2WZ0R8PX5ZPPZS"}


------------------------------------------------------------------------------

.. _puffs-iban-isvalid:

    static function, return boolean

isValid
=====================

.. code-block:: javascript

    web3.puffs.Iban.isValid(ibanAddress)

Singleton: Checks if an IBAN address is valid.

.. note:: This method also exists on the IBAN instance.

----------
Parameters
----------

1. ``String``: the IBAN address to check.

-------
Returns
-------

``Boolean``

-------
Example
-------

.. code-block:: javascript

    web3.puffs.Iban.isValid("XE81PUFFSXREGGAVOFYORK");
    > true

    web3.puffs.Iban.isValid("XE82PUFFSXREGGAVOFYORK");
    > false // because the checksum is incorrect


------------------------------------------------------------------------------

prototype.isValid
=====================

    method of Iban instance

.. code-block:: javascript

    web3.puffs.Iban.prototype.isValid()

Singleton: Checks if an IBAN address is valid.

.. note:: This method also exists on the IBAN instance.

----------
Parameters
----------

1. ``String``: the IBAN address to check.

-------
Returns
-------

``Boolean``

-------
Example
-------

.. code-block:: javascript

    const iban = new web3.puffs.Iban("XE81PUFFSXREGGAVOFYORK");
    iban.isValid();
    > true


------------------------------------------------------------------------------

prototype.isDirect
=====================

    method of Iban instance

.. code-block:: javascript

    web3.puffs.Iban.prototype.isDirect()

Checks if the IBAN instance is direct.

-------
Returns
-------

``Boolean``

-------
Example
-------

.. code-block:: javascript

    const iban = new web3.puffs.Iban("XE81PUFFSXREGGAVOFYORK");
    iban.isDirect();
    > false

------------------------------------------------------------------------------

prototype.isIndirect
=====================

    method of Iban instance

.. code-block:: javascript

    web3.puffs.Iban.prototype.isIndirect()

Checks if the IBAN instance is indirect.

-------
Returns
-------

``Boolean``

-------
Example
-------

.. code-block:: javascript

    const iban = new web3.puffs.Iban("XE81PUFFSXREGGAVOFYORK");
    iban.isIndirect();
    > true

------------------------------------------------------------------------------

prototype.checksum
=====================

    method of Iban instance

.. code-block:: javascript

    web3.puffs.Iban.prototype.checksum()

Returns the checksum of the IBAN instance.

-------
Returns
-------

``String``: The checksum of the IBAN

-------
Example
-------

.. code-block:: javascript

    const iban = new web3.puffs.Iban("XE81PUFFSXREGGAVOFYORK");
    iban.checksum();
    > "81"


------------------------------------------------------------------------------

prototype.institution
=====================

    method of Iban instance


.. code-block:: javascript

    web3.puffs.Iban.prototype.institution()

Returns the institution of the IBAN instance.

-------
Returns
-------

``String``: The institution of the IBAN

-------
Example
-------

.. code-block:: javascript

    const iban = new web3.puffs.Iban("XE81PUFFSXREGGAVOFYORK");
    iban.institution();
    > 'XREG'


------------------------------------------------------------------------------

prototype.client
=====================

    method of Iban instance

.. code-block:: javascript

    web3.puffs.Iban.prototype.client()

Returns the client of the IBAN instance.

-------
Returns
-------

``String``: The client of the IBAN

-------
Example
-------

.. code-block:: javascript

    const iban = new web3.puffs.Iban("XE81PUFFSXREGGAVOFYORK");
    iban.client();
    > 'GAVOFYORK'

------------------------------------------------------------------------------

prototype.toAddress
=====================

    method of Iban instance

.. code-block:: javascript

    web3.eth.Iban.prototype.toString()

Returns the PUFFScoin address of the IBAN instance.

-------
Returns
-------

``String``: The PUFFScoin address of the IBAN

-------
Example
-------

.. code-block:: javascript

    const iban = new web3.puffs.Iban('XE7338O073KYGTWWZN0F2WZ0R8PX5ZPPZS');
    iban.toAddress();
    > '0x00c5496aEe77C1bA1f0854206A26DdA82a81D6D8'


------------------------------------------------------------------------------

prototype.toString
=====================

    method of Iban instance

.. code-block:: javascript

    web3.puffs.Iban.prototype.toString()

Returns the IBAN address of the IBAN instance.

-------
Returns
-------

``String``: The IBAN address.

-------
Example
-------

.. code-block:: javascript

    const iban = new web3.puffs.Iban('XE7338O073KYGTWWZN0F2WZ0R8PX5ZPPZS');
    iban.toString();
    > 'XE7338O073KYGTWWZN0F2WZ0R8PX5ZPPZS'

