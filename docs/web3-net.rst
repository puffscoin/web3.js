.. _net:

.. include:: include_announcement.rst

==========
web3.*.net
==========


The ``web3-net`` package allows you to interact with the PUFFScoin nodes network properties.


.. code-block:: javascript

    import Web3 from 'web3';
    import {Net} from 'web3-net';

    // "Personal.providers.givenProvider" will be set if in a PUFFScoin supported browser.
    const net = new Net(Web3.givenProvider || 'ws://some.local-or-remote.node:11364', null, options);


    // or using the web3 umbrella package
    const web3 = new Web3(Web3.givenProvider || 'ws://some.local-or-remote.node:11364', null, options);

    // -> web3.puffs.net
    // -> web3.shh.net



------------------------------------------------------------------------------


.. include:: include_package-net.rst


------------------------------------------------------------------------------
