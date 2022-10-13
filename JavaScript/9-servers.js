'use strict';

const dns = require('node:dns');

const servers = dns.getServers();
console.log({ servers });
