![](https://github.com/NatPDeveloper/eos-ez-chat/blob/master/public/EOS-EZ-Chat.png?raw=true)

An eosio authenticated chat room.

Link: https://eos-ez-chat.herokuapp.com/

### How to Play: ###

Using the [Scatter Wallet](https://get-scatter.com/) and a [Jungle 2.0 account](https://monitor.jungletestnet.io/#account), you can login and send messages in a live chatroom.
  Watch as your message goes from pending to confirmed to irrversible.

### Technologies: ###

1. Socket IO's [chat example](https://github.com/socketio/socket.io/tree/master/examples/chat)
2. EOSIO Smart Contract on the [Jungle Testnet 2.0](https://monitor.jungletestnet.io/#home)
3. [Dfuse's Websocket](https://www.dfuse.io/en) for tracking transaction status and getting data
4. NodeJS

### Steps to host locally (requires Node and [EOS](https://developers.eos.io/eosio-cpp/v1.0.0/docs)): ###

* Install [NodeJS](https://nodejs.org/en/download/), [EOS (Full Guide)](https://developers.eos.io/eosio-home/docs), [Scatter Wallet](https://get-scatter.com/)

1. Get a free dfuse API key: https://www.dfuse.io/en
2. `git clone --recursive https://github.com/NatPDeveloper/eos-ez-chat`
3. `cd eos-ez-chat/`
4. `npm install`
5. touch .env
6. `API_TOKEN=YOUR_API_TOKEN`
7. `cd eoschat`
8. `eosio-cpp -o eoschat.wasm eoschat.cpp --abigen`
9. `cd ..`
10. `cleos create key --to-console`
11. Enter public key in both fields and select a username here: https://monitor.jungletestnet.io/#account
12. `cleos -u http://jungle2.cryptolions.io:80 set contract [YOU_ACCOUNT_NAME] eoschat`
13. In Scatter, click on the settings wheel at the top right.
14. Click on "Networks" button from the list of options on the left
15. Click the "+" to the right of the networks dropdwown to add a new network
16. `https` | `jungle2.cryptolions.io` | `443` | Chain_ID: `e70aaab8997e1dfce58fbfac80cbbb8fecec7b99cf982a9444273cbc64c41473`
17. Now add your private key by accessing the Vault in the top right ([YouTube Tutorial](https://www.youtube.com/watch?time_continue=114&v=aDKWCcfaglU))
18. `node index.js`
