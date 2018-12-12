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

1. Get a free dfuse API key: https://www.dfuse.io/en
2. `git clone --recursive https://github.com/NatPDeveloper/eos-ez-chat`
3. `cd eos-ez-chat/`
4. `npm install`
5. touch .env
6. `API_TOKEN=YOUR_API_TOKEN`
7. node index.js

### Issues: ###
1. Way of using websocket within a websocket needs some further exploration.
2. Client side needs to render status change of messages or no status.
