.. include:: include_announcement.rst

===============
Getting Started
===============

The web3.js library is a collection of modules which contain specific functionality for the PUFFScoin ecosystem.

- The ``web3-puffs`` library is for the PUFFScoin blockchain and smart contracts
- The ``web3-shh`` library is for the whisper protocol to communicate p2p and broadcast
- The ``web3-utils`` library contains useful helper functions for dApp developers.


.. _adding-web3:

Adding web3.js
==============

.. index:: npm

First you need to get web3.js into your project. This can be done using the following methods:

- npm: ``npm install web3``

After that you need to create a web3 instance and set a provider.
A PUFFScoin compatible browser will have a ``window.puffscoin`` or ``web3.currentProvider`` available.
For  web3.js, check ``Web3.givenProvider``. If this property is ``null`` you should connect to your own local or remote node.

.. code-block:: javascript

    // in node.js use: const Web3 = require('web3');

    // use the given Provider, e.g in the browser with Metamask, or instantiate a new websocket provider
    const web3 = new Web3(Web3.givenProvider || 'ws://localhost:11364', null, {});

    // or
    const web3 = new Web3(Web3.givenProvider || new Web3.providers.WebsocketProvider('ws://localhost:11364'), null, {});

    // Using the IPC provider in node.js
    const net = require('net');

    const web3 = new Web3('/Users/myuser/Library/Puffscoin/gpuffs.ipc', net, {}); // mac os path
    // or
    const web3 = new Web3(new Web3.providers.IpcProvider('/Users/myuser/Library/Puffscoin/gpuffs.ipc', net, {})); // mac os path
    // on windows the path is: '\\\\.\\pipe\\gpuffs.ipc'
    // on linux the path is: '/users/myuser/.puffscoin/gpuffs.ipc'


That's it! now you can use the ``web3`` object.
