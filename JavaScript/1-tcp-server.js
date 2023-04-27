'use strict';

const net = require('node:net');

const onData = (data) => {
  console.log('📨:', data);
};

const options = { noDelay: true };

const server = net.createServer((socket) => {
  console.dir(socket.address());
  socket.write('💗');
  socket.on('data', onData);
  socket.on('error', (err) => {
    console.log('Socket error', err);
  });
});

server.listen(2000, options);

server.on('error', (err) => {
  console.log('Server error', err);
});
