'use strict';

const net = require('net');

net.createServer((socket) => {
  socket.write('❤');
  socket.on('data', (data) => {
    console.log('📨: ' + data);
  });
}).listen(2000);
