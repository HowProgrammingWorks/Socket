'use strict';

const net = require('net');

net.createServer(socket => {
  console.dir(socket.address());
  socket.setNoDelay(true);
  socket.write('💗');
  socket.on('data', data => {
    console.log('📨:', data);
  });
}).listen(2000);
