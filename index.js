const connect = require('connect');
const hello = require('./hello');
const setup = require('./setup');


connect().use(setup(':method :url')).use(hello).listen(3000);