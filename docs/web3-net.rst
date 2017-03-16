.. _shh:

========
web3.*.net
========


The ``web3-net`` package allows you to interact with the Ethereum nodes network properties.


.. code-block:: javascript

    var Net = require('web3-net');

    // "Personal.providers.givenProvider" will be set if in an Ethereum supported browser.
    var net = new Net(Net.givenProvider || new Net.providers.WebsocketProvider('ws://some.local-or-remote.node:8546'));


    // or using the web3 umbrella package

    var Web3 = require('web3');
    var web3 = new Web3(Web3.givenProvider || new Web3.providers.WebsocketProvider('ws://some.local-or-remote.node:8546'));

    // -> web3.eth.net
    // -> web3.bzz.net
    // -> web3.shh.net


------------------------------------------------------------------------------


.. include:: include_package-core.rst



------------------------------------------------------------------------------


.. include:: include_package-net.rst


------------------------------------------------------------------------------