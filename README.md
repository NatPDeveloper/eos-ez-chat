### EOS EZ Chat ###

An eosio authenticated chat room.

### How to Play: ###

Using the [Scatter Wallet](https://get-scatter.com/) and a [Jungle 2.0 account](https://monitor.jungletestnet.io/#account), you can login and send messages in a live chatroom.
  Watch as your message goes from pending to confirmed to irrversible.

Technologies:

1. Socket IO's [chat example](https://github.com/socketio/socket.io/tree/master/examples/chat)
2. EOSIO Smart Contract on Jungle
3. [Dfuse's Websocket](https://www.dfuse.io/en) for tracking transaction status and getting data
4. NodeJS

Steps:

1. Connect to dfuse's websocket - **DONE**
2. Create chat smart contract - **DONE**
3. Emit message to chat room upon web socket detecting new transaction - **DONE**
4. Integrate Scatter to send transaction on sending message - **DONE**
5. Handle logging in with Scatter - **DONE**
6. Add Logout button - **DONE**
7. Setup dfuse websocket to handle tracking message's transaction status - **DONE**
8. Render changes: pending, executed, irreversible - **DONE**
9. Add NavBar with link to source code and About Page - **DONE**
10. Host project
