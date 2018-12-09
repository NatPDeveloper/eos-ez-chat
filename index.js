const WebSocket = require("ws")
require('dotenv').config()
const { createEoswsSocket,
    EoswsClient,
    InboundMessageType
    } = require("@dfuse/eosws-js")

// Setup basic express server
var express = require('express');
var app = express();
var path = require('path');
var server = require('http').createServer(app);
var io = require('../..')(server);
var port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log('Server listening at port %d', port);
});

// Routing
app.use(express.static(path.join(__dirname, 'public')));

// dfuse websocket

const endpoint = "jungle.eos.dfuse.io"
const token = process.env.API_TOKEN
const client = new EoswsClient(
  createEoswsSocket(
    () =>
      new WebSocket(`wss://${endpoint}/v1/stream?token=${token}`, { origin: "https://example.com" })
  )
)



  client
    .connect()
    .then(() => {
      client
        // .getActionTraces({ account: "eosezchatnat", action_name: "sendmsg" })
        .getTransactionLifecycle(
          "166a6e925fbf41bb0debeb2a8a1c3bc8e5cd03acd157565f8d7b1af12086f584"
        )
        .onMessage((message) => {
          if (message.type === InboundMessageType.ACTION_TRACE) {
            const { user, msg } = message.data.trace.act.data
            console.log("getTransactionLifecycle")
          }
          if (message.type === InboundMessageType.TRANSACTION_LIFECYCLE){
            console.log(message.data.lifecycle.transaction_status);
            console.log(message.data.lifecycle.execution_irreversible);
          }
        })
    })
    .catch((error) => {
      console.log("Unable to connect to dfuse endpoint.", error)
  })

// Chatroom

var numUsers = 0;

io.on('connection', (socket) => {
  var addedUser = false;

  client
  .connect()
  .then(() => {
    client
      .getActionTraces({ account: "eosezchatnat", action_name: "sendmsg" })
      // .getTransactionLifecycle(
      //   "166a6e925fbf41bb0debeb2a8a1c3bc8e5cd03acd157565f8d7b1af12086f584"
      // )
      .onMessage((message) => {
        if (message.type === InboundMessageType.ACTION_TRACE) {
          const { user, msg } = message.data.trace.act.data
          console.log(user, msg)
          socket.broadcast.emit('new message', {
            username: user,
            message: msg
          });
          
        }
        if (message.type === InboundMessageType.TRANSACTION_LIFECYCLE){
          console.log(message.data.lifecycle.transaction_status);
          console.log(message.data.lifecycle.execution_irreversible);
        }
      })
  })
  .catch((error) => {
    console.log("Unable to connect to dfuse endpoint.", error)
  })

  // when the client emits 'new message', this listens and executes
  socket.on('new message', (data) => {
    // we tell the client to execute 'new message'
    console.log('new message socket call on index.js')
    socket.broadcast.emit('new message', {
      username: socket.username,
      message: data
    });
  });

  // when the client emits 'add user', this listens and executes
  socket.on('add user', (username) => {
    if (addedUser) return;

    // we store the username in the socket session for this client
    socket.username = username;
    ++numUsers;
    addedUser = true;
    socket.emit('login', {
      numUsers: numUsers
    });
    // echo globally (all clients) that a person has connected
    socket.broadcast.emit('user joined', {
      username: socket.username,
      numUsers: numUsers
    });
  });

  // when the client emits 'typing', we broadcast it to others
  socket.on('typing', () => {
    socket.broadcast.emit('typing', {
      username: socket.username
    });
  });

  // when the client emits 'stop typing', we broadcast it to others
  socket.on('stop typing', () => {
    socket.broadcast.emit('stop typing', {
      username: socket.username
    });
  });

  // when the user disconnects.. perform this
  socket.on('disconnect', () => {
    if (addedUser) {
      --numUsers;

      // echo globally that this client has left
      socket.broadcast.emit('user left', {
        username: socket.username,
        numUsers: numUsers
      });
    }
  });
});
