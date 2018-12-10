### EOS EZ Chat ###

Project goal: build an eosio authenticated chat room

Technologies:

1. Socket IO's chat example
2. EOSIO Smart Contract on Jungle
3. Dfuse's Websocket for tracking transaction status and getting data
4. NodeJS

Steps:

1. Connect to dfuse's websocket - **DONE**
2. Create chat smart contract - **DONE**
3. Emit message to chat room upon web socket detecting new transaction - **DONE**
4. Integrate Scatter to send transaction on sending message - **DONE**
5. Handle logging in with Scatter - **DONE**
6. Add Logout button
7. Setup dfuse websocket to handle tracking message's transaction status
8. Render changes: pending, executed, irreversible
9. Add NavBar with link to source code and About Page
10. Add comments
