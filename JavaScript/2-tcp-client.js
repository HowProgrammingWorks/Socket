'use strict';

const net = require('net');

const socket = new net.Socket();

socket.on('data', data => {
  console.log('📨:', data);
});

socket.connect({
  port: 2000,
  host: '127.0.0.1',
}, () => {
  socket.write('💋');
});

socket.unref();
