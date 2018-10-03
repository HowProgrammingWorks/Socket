'use strict';

const dns = require('dns');

const servers = dns.getServers();
console.log({ servers });
