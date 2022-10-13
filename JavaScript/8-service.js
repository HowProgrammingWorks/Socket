'use strict';

const dns = require('node:dns');

dns.lookupService('192.30.253.113', 443, (err, host, service) => {
  if (err) throw err;
  console.log({ host, service });
});
