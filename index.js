const connect = require('connect');
const hello = require('./hello');
const setup = require('./setup');


connect()
.use(setup(':method :url'))
.use(hello)
.use((req, res) =>{
   foo();
   res.setHeader('Content-Type','text/plain');
   res.end('End of the game');
})
.listen(3000);