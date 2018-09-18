'use strict';

const net = require('net');

net.createServer(socket => {
  socket.write('❤');
  console.dir(socket.address());
  socket.on('data', data => {
    console.log('📨: ' + data);
  });
}).listen(2000);
