
.. _net-getid:

getId
=====================

.. code-block:: javascript

    web3.puffs.net.getId([callback])
    web3.shh.net.getId([callback])

Gets the current network ID.

----------
Parameters
----------

none

-------
Returns
-------

``Promise`` returns ``Number``: The network ID.

-------
Example
-------

.. code-block:: javascript

    web3.puffs.net.getId().then(console.log);
    > 420

------------------------------------------------------------------------------

isListening
=====================

.. code-block:: javascript

    web3.puffs.net.isListening([callback])
    web3.shh.net.isListening([callback])

Checks if the node is listening for peers.

----------
Parameters
----------

none

-------
Returns
-------

``Promise`` returns ``Boolean``

-------
Example
-------

.. code-block:: javascript

    web3.puffs.isListening().then(console.log);
    > true

------------------------------------------------------------------------------

getPeerCount
=====================

.. code-block:: javascript

    web3.puffs.net.getPeerCount([callback])
    web3.shh.net.getPeerCount([callback])

Get the number of peers connected to.

----------
Parameters
----------

none

-------
Returns
-------

``Promise`` returns ``Number``

-------
Example
-------

.. code-block:: javascript

    web3.puffs.getPeerCount().then(console.log);
    > 25
