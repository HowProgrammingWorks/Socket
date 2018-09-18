'use strict';

const dgram = require('dgram');

const message = Buffer.from('Hello');
const client = dgram.createSocket('udp4');

client.send(message, 3000, 'localhost', err => {
  if (err) {
    client.close();
    throw err;
  }
});
